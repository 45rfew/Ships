Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
Array::div = (mod) -> @map (val) -> val / mod
Array::step = (step) -> i for i in @ by step
Array::fill = (val, len) -> val for i in (
  if len
  then [0...len]
  else if @length == 1
  then [0...@[0]]
  else @
)
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
ring = (x,y,z,s,l,w,h,a,v,t,j=0) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [3,3,0,0,0,0,0,3,3,3].div(10).mult(l)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].div(10).mult(w)
    height: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].div(10).mult(h)
    texture: t        
    angle: a
    vertical: v
hub = (x,y,z,s,w,h,v,a,t,c,e=0) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0].add(e)
      y: [0,9,7,7,10,7,8].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(c)
    texture: t     
    vertical: v     
    angle: a  
ball = (xx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
  xzpos = []
  ypos = []
  width = []
  for i in [0..segments]
    ang = (i/segments)*Math.PI
    width.push(Math.sin(ang)*radius)
    ypos.push(-Math.cos(ang)*length)
    xzpos.push(0)
  return k = 
    section_segments: l_segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: xzpos
      y: ypos
      z: xzpos
    width: width
    height: width
    texture: tx
    vertical: vertical
    angle: angle   
dish = (xx, yy, zz, angle, seg, tx, stepAmount, step, stepunit, vertical) ->
  rad = []
  ypos = []
  for i in [0..stepAmount-1]
    ypos.push(-(step/stepunit*i)*(step/stepunit*i))
    rad.push(step*i)
  lastypos = ypos[ypos.length-1]
  for i in [stepAmount-1..0]
    ypos.push((ypos[i]-lastypos)*1.1+ypos[i])
    rad.push(rad[i]*1.1)
  return k = 
    section_segments: seg
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: ypos.mult(0)
      y: ypos
      z: ypos.mult(0)
    width: rad
    height: rad
    texture: tx
    angle: angle   
    vertical: vertical
wings = (x,y,z,a,s) ->
  model.bodies["wing_main"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x  
      y: y
      z: z
    position:
      x: [3,3,0,-3,-6.5,-6.5,-6.5,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
      y: [0,0,15,160,165,220-s,220-s,220-s,39,39,40,40,45,45,46,46,51,51,52,52,57,57,58,58,63,63,64,64,69,69,70,70]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,2,6,11,6,6,0,0,0,4,4,0,0,4,4,0,0,4.5,4.5,0,0,4.5,4.5,0,0,5,5,0,0,5,5,5]
    height: [0,3,3,3,3,3,0,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,3.1]
    texture: [4,4,4,4,4,4,4,4,1]
    angle: 180+a
  model.bodies["wing_main2"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [3,3,0,-3,-6.5,-6.5,-6.5].add(1.5)
      y: [0,0,15,160,165,220-s,220-s]
      z: [0,0,0,0,0,0,0]
    width: [0,2,6,11,6,6,0]
    height: [0,3,3,3,3,3,0].div(1.1)
    texture: [4,1,1,1,1,4]
    angle: 180+a
  model.bodies["wing_deco"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,5.5,0,0,0,0,6].add(-1)
      y: [4,4,10,10,80,80,83,83].add(70)
      z: [0,0,0,0,0,0,0,0]
    width: [0,1.5,1.3,1,1,1.7,2,0]
    height: [0,3.1,3.1,3.1,3.1,3.1,3.1,0]
    texture: [1]
    angle: 180+a    
  model.bodies["wing_deco2"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [-3,-3,0,0,0,0,-3].add(7)
      y: [-43,-43,-40,-40,85,85,87,87].add(70)
      z: [0,0,0,0,0,0,0,0]
    width: [0,2.5,2.5,1.5,1.5,2.5,2.5,0]
    height: [0,2.6,2.6,3.1,3.1,2.6,2.6,0]
    texture: [4,4,17]
    angle: 180+a 
  model.bodies["wing_deco3"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(190)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a  
  model.bodies["wing_deco4"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(170)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a   
  model.bodies["wing_deco5"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(150)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a   
  model.bodies["wing_deco6"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(130)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a      
  model.bodies["wing_deco7"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [-5,0,0,0,-10,0,0,0].add(12)
      y: [30,40,145,145,155].add(5)
      z: [0,0,0,0,0,0,0]
    width: [1.5,1.5,1.5,1.5,3.5]
    height: [1.5,1.5,1.5,1.5,1.5]
    texture: [4,17]
    angle: 180+a          
a = [45,135,225,315]
b = [40,45,50,130,135,140,220,225,230,310,315,320]
c = [35,45,55,125,135,145,215,225,235,305,315,325]
d = [30,45,60,120,135,150,210,225,240,300,315,330]
q = 30
p = 10
model =
  name: "Vuaniha"
  level: 7
  model: 2
  size: 1
  specs:
    shield:
      capacity: [460,460]
      reload: [13,13]
    generator:
      capacity: [320,320]
      reload: [70,70]
    ship:
      mass: 460
      speed: [70,70]
      rotation: [50,50]
      acceleration: [130,130] 
  bodies:
    ring: ring(100,-230,0,6,30,30.5,34,0,0,16.9)
    ring2: ring(100,-190,0,6,30,33,34,0,0,16.9)
    reactor: hub(85,27,60,b,10,6,1,-30,[18,17,17,18,18,17],10)
    reactor2: hub(85,27,90,b,10,6,1,-30,[18,17,17,18,18,17],10)
    ring3: ring(101,-95,0,6,30,33,34,0,0,16.9)
    ring4: ring(101,-65,0,6,30,33,34,0,0,16.9)
    reactor3: hub(114,30,-120,b,13,6,1,30,[18,17,17,18,18,17],13)
    ring5: ring(99,106.5,0,6,30,33,34,0,0,3.9)
    ring6: ring(99,146.5,0,6,31,33,34,0,0,3.9)
    ring7: ring(65,20,-131,a,20,1,20,65,1,4)
    reactor4: hub(141,0,-135,12,7,7,1,90,[18,17,17,18,18,17],7)
    reactor5: hub(141,0,-165,12,7,7,1,90,[18,17,17,18,18,17],7)
    reactor6: hub(141,0,-195,12,7,7,1,90,[18,17,17,18,18,17],7)
    ring8: ring(45,380,0,b,40,50,45,-40,0,17.96)
    ring9: ring(37,330,0,b,40,50,44,38,0,17.96)
    reactor7: hub(55,30,-358,[-10,0,10,110,120,130,230,240,250].add(-30),12,12,1,0,[17.7,16.7,16.7,17.7,17.7,16.7],16)
    reactor8: hub(35,25,-305,[-10,0,10,110,120,130,230,240,250].add(37),12,12,1,0,[17.7,16.7,16.7,17.7,17.7,16.7],12)
    reactor9: hub(32,30,-410,[-10,0,10,110-20,120-20,130-20,230-10,240-10,250-10].add(37),10,12,1,0,[17.7,16.7,16.7,17.7,17.7,16.7],14)
    ring10: ring(42.5,382.5,0,b,15,51,46,-40,0,17)
    ring11: ring(38,333,0,b,15,51,45,38,0,17) 
    reactor10: hub(188-p,19,-105,b,11,12,1,-30,[18,17,17,18,18,17],20)
    ring12: ring(201-p,85,0,6,30-2,30-.5,29,0,0,16.9)
    ring13: ring(201-p,115,0,6,30-2,30-.5,29,0,0,16.9)
    ring14: ring(176-p,-5,-130,a,40,10,70,0,1,16.9)
    reactor11: hub(0,40,-225,b.add(30),12,7,1,0,[18,17,17,18,18,17],12,105)
    reactor12: hub(0,40,-225,b.add(-30),12,7,1,0,[18,17,17,18,18,17],12,-105)
    ring15: ring(95,200,0,6,30,36,30,30+180,0,16.9)
    bottom: dish(0,-50,-370,180,6,[1,1,1,1,1,1,1,1,1,1,16.9,[15.9]],10,8,20,1)    
    ball: ball(110-6,290-5+q,0,20,20,10,12,[4,4,4,4,4,4,17,4,17,4],0,25)
    ball2: ball(158,247+q,0,10-1,10,10,16,4,0,25)    
    ball3: ball(207-p,230-2+q,20,10-2,10-2,10,16,4,0,30)    
    ball4: ball(235.5-p,220-1+q,20,10,10,10,16,4,0,30)    
    ball5: ball(235-p,250+q,0,16,16,10,16,[4],0,30)    
    ring16: ring(220-p,245+q,0,10,20,10,17,120,0,16.9)
    ring17: ring(233-p,237+q,0,10,20,10,17,120,0,16.9)
    reactor13: hub(0,25,-455,b.add(-20),12,7,1,0,[18,17,17,18,18,17],15,135)
    reactor14: hub(0,25,-475,b.add(-20),12,10,1,0,[18,17,17,18,18,17],12,130)
    reactor15: hub(0,25,-455,b.add(20),12,7,1,0,[18,17,17,18,18,17],15,-135)
    reactor16: hub(0,25,-475,b.add(20),12,10,1,0,[18,17,17,18,18,17],12,-130)
    ring18: ring(103,245,15,8,25,35,17,120,0,17)
    ring19: ring(118,238,15,8,25,33,17,120,0,17)
    ring20: ring(138,480,0,a,25,33,17,-20,0,17)
    ring21: ring(144,460,0,a,25,33,17,-20,0,17)
    ring22: ring(120,0,-470,a.add(-35),55,13,25,0,1,17)
    ring23: ring(205,183,0,6,50,45,35,90,0,18,10)
    ring24: ring(32,8,-410,14,30,40,30,0,1,17)
    ring25: ring(32,-8,-415,14,30,40,30,0,1,17)
    reactor16: hub(205,19,-184,12,12,12,1,0,[18,17,17,18,18,17],12,20)
    ring26: ring(210,-12,-160,14,30,30,30,0,1,17)
    ring27: ring(213,0,-170,14,20,20,30,0,1,17)
    ring28: ring(213,4,-200,14,20,40,30,0,1,17)
    ring29: ring(150,213,0,14,20,22,35,-68,0,18)
    ring30: ring(170,203,0,14,20,22,34,-68,0,18)
    ring31: ring(190,193,0,14,20,22,34,-68,0,18)
    cannons:
      section_segments: 6
      offset:
        x: 100
        y: 45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-200,-200,-295,-295,-280,-220,-200,-190,-50,-45,-55,30,25,30,120,144,152,176,176]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,23.5,25,35,40,40,40,40,35,0,0,35,40,40,40,40,40,0]
      height: [0,4,28.5,30,40,40,40,40,40,35,0,0,35,40,40,40,40,40,0]
      texture: [16.9,3.9,17,3.9,3.9,3.9,16.9,18,16.9,112.9,1,112.9,16.9,18,3.9,16.9,3.9]
      laser:
        damage: [60,60]
        rate: 3
        type: 1
        speed: [230,230]
        recoil: 160
        number: 1
    side_cannons:
      section_segments: 6
      offset:
        x: 200-p
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [48,53,55,70,65,70,118,174,174]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,30,30,35,40,40,40,0].div(1.1)
      height: [0,20,30,30,35,40,40,40,0].div(1.2)
      texture: [3.9,16.9,16,18,16.9,3.9,18]      
    rear_cannons:
      section_segments: 12
      offset:
        x: 130
        y: 340+q
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [70,59,60,70,65,70,120,160]
        z: [0,0,0,0,0,0,0,0]
      width: [0,26,30,30,35,40,40,0].div(1.3)
      height: [0,26,30,30,35,40,40,0].div(1.3)
      texture: [4,17,16,18,17,4]    
      angle: -155
    blocc:
      section_segments: c
      offset:
        x: 175+20
        y: 330+q+40
        z: 0
      position:
        x: [10,10,5,5,5,0,0,0,0,0,0]
        y: [56,57,62,62,70,70,72,83,90-4+2,120,120].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,19,22,25,40,40,40,40,40,0].div(2)
      height: [0,18,30,33,33,40,40,40,40,40,0].div(1.8)
      texture: [4,4,17,18,4,17,4,17,4]    
      angle: -155
    antenna:
      section_segments: 12
      offset:
        x: 153+4
        y: 260+q+5
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,15,90,92]
        z: [0,0,0,0,0,0]
      width: [0,5,3,3,1.5,0]
      height: [0,5,3,3,1.5,0]
      texture: [4,4,18,17,4]    
      angle: -155-180
    antenna2:
      section_segments: 12
      offset:
        x: 142+5
        y: 260+q+10
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,20,22,70,72]
        z: [0,0,0,0,0,0]
      width: [0,5,3,2,1.5,0]
      height: [0,5,3,2,1.5,0]
      texture: [4,4,4,17,4]    
      angle: -155-180  
    pipe:
      section_segments: 12
      offset:
        x: 155
        y: 244.5+q
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,7,20-2,25,25]
        z: [0,0,0,0,0,0]
      width: [0,5,5,5,5,0]
      height: [0,5,5,5,5,0]
      texture: [4,17,4,17,4,17,4,17,4]    
      angle: -155   
    pipe2:
      section_segments: 6
      offset:
        x: 215+15-p
        y: 210+30+q
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,15,20-2,25,25].mult(2.5)
        z: [0,0,0,0,0,0]
      width: [0,25,25,25,25,0].div(1.5)
      height: [0,25,25,25,25,0]
      texture: [4,4,17,4,4,17,4,17,4]    
      angle: -155      
    pipe3:
      section_segments: 10
      offset:
        x: 210-p
        y: 235+q
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,6,7,10,30-2,30,35,35].mult(1.5)
        z: [0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,9,9,0]
      height: [0,7,7,7,7,9,9,0]
      texture: [4,4,17,4,4,4]    
      angle: -155  
    pipe4:
      section_segments: 10
      offset:
        x: 238-p
        y: 225+q
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,6,7,10,30-2,30,45,45].mult(1.5)
        z: [0,0,0,0,0,0,0,0]
      width: [0,9,9,9,9,11,11,0]
      height: [0,9,9,9,9,11,11,0]
      texture: [4,4,17,4,4,4]    
      angle: -155        
    pipe5:
      section_segments: b
      offset:
        x: 215+15-p
        y: 210+30+q
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,15,20-2,25,25].mult(2.5)
        z: [0,0,0,0,0,0]
      width: [0,17,25,25,25,0].mult(1.2)
      height: [0,25,25,25,25,0].div(2)
      texture: [4,4,17,4,4,17,4,17,4]    
      angle: -155     
    pipe6:
      section_segments: d.add(30)
      offset:
        x: 235-p
        y: 0
        z: -250-q
      position:
        x: [0,0,0,0,0,0,0]
        y: [-3,-3,-2,1,3,5,5]
        z: [0,0,0,0,0,0,0]
      width: [0,10,20,20,15,10,0]
      height: [0,10,20,20,15,10,0]
      texture: [4,18,17,18,4]    
      vertical: true
    shield:
      section_segments: b
      offset:
        x: 40
        y: 230
        z: 0
      position:
        x: [0,0,0,0,4,5,0,0,0]
        y: [-5,-5,5,20,45,55,85,85,85]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,8,14,15,15,13,4,0]
      height: [0,10,20,30,30,30,30,8,0].div(1)
      texture: [4,4,4,4,17,4,4,4,17]
      angle: 20
    shield2:
      section_segments: 12
      offset:
        x: 95
        y: 380
        z: 5
      position:
        x: [-7,-7,-6,-5,0,0,0,0,0]
        y: [-5,-5,5,20,40,50,75,85,85].div(1.2)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,8,14,15,15,13,4,0]
      height: [0,10,20,30,30,30,20,8,0].div(1.2)
      texture: [4,4,4,4,17,4,4,4,17]
      angle: -20
    shield3:
      section_segments: 12
      offset:
        x: 84
        y: 338
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-5,-5,5,20,40,50,75,85,85].div(1.2)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,8,14,15,15,13,4,0]
      height: [0,10,20,30,30,30,20,8,0].div(1.2)
      texture: [4,4,4,4,17,4,4,4,17]
      angle: 0  
    shield4:
      section_segments: 12
      offset:
        x: 81
        y: 300
        z: -9
      position:
        x: [-7,-7,-6,-5,0,0,0,0,0]
        y: [-5,-5,5,20,40,50,75,85,85].div(1.2)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,8,14,15,15,13,4,0]
      height: [0,10,20,30,30,30,20,8,0].div(1.2)
      texture: [4,4,4,4,17,4,4,4,17]
      angle: 0      
    head:
      section_segments: d
      offset:
        x: 0.001
        y: 275
        z: 0
      position:
        x: [0,0,5,0,0,0,0,0,0,0,0,5,0,0]
        y: [-40,-40,-20,-15,-10,-10,-5,0].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,15,15,30,30,50,50,50,50,30,30,15,15,0]
      height: [0,15,15,30,30,50,50,50,50,30,30,15,15,0]
      texture: [4,13,4,17,17.97,4,17,4,17.97,17,4,13,4]
      angle: 90         
    disc:
      section_segments: 14
      offset:
        x: 0
        y: 22
        z: -357
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,20,20,20,25]
        z: [0,0,0,0,0,0]
      width: [0,30,30,28,20,0].mult(1.2)
      height: [0,40,30,28,20,0].mult(1.2)
      texture: [1,13,17,18.03,13]
      vertical: true  
    disc2:
      section_segments: 14
      offset:
        x: 0
        y: 25
        z: -430
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,20,20,20,25]
        z: [0,0,0,0,0,0]
      width: [0,30,30,28,20,0].div(2.6)
      height: [0,30,30,28,20,0].div(2.6)
      texture: [1,13,17,18.03,13]
      vertical: true        
    back:
      section_segments: 6
      offset:
        x: 0
        y: 440
        z: 35
      position:
        x: [2,2,-10,2,2]
        y: [-20,-20,0,20,20]
        z: [-7,-7,0,-7,-7]
      width: [0,11,11,11,0]
      height: [0,10,10,10,0]
      texture: [4,4,4,4]
      angle: 90
    backtop:
      section_segments: a
      offset:
        x: 0
        y: 406
        z: 33
      position:
        x: [0,0,0,-10,0,0,0]
        y: [-15,-15,-10,0,10,15,15]
        z: [0,0,0,5,0,0,0]
      width: [0,50,50,50,50,50,0]
      height: [0,10,10,10,10,10,0]
      texture: [4,17,4,4,17,4]
      angle: 90   
    back_front:
      section_segments: b
      offset:
        x: 0
        y: 35
        z: -330
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-10,0,10,10,12]
        z: [0,0,0,0,0,0,0]
      width: [0,23,23,23,23,18,0]
      height: [0,60,60,60,60,55,0]
      texture: [4,17,4,4,17,4]
      vertical: true         
    main:
      section_segments: b
      offset:
        x: 0.1
        y: 301+60
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,75,85,85]
        z: [0,0,0,0,0]
      width: [0,1,50,40,0]
      height: [0,50,50,40,0]
      texture: [1,4,17,4]
      angle: 30
    main2:
      section_segments: b
      offset:
        x: 0.1
        y: 300+60
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,70,80,80]
        z: [0,0,0,0,0]
      width: [0,1,70,60,0]
      height: [0,50,50,40,0]
      texture: [1,4,17,4]
      angle: 90  
    main3:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: -270-60
      position:
        x: [0,0,0,0,0]
        y: [0,0,60,60,60]
        z: [0,0,0,0,0]
      width: [0,85,85,85,0]
      height: [0,60,60,60,0]
      texture: [4]
      angle: 180
      vertical: true
    hook:
      section_segments: a
      offset:
        x: 42
        y: 220
        z: 0
      position:
        x: [-5,-5,0,0,0,-20,-20]
        y: [-12,-10,-5,30,70,99,99]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,15,25,50,49,47,0]
      texture: [4,17,4,4,18,4]
      angle: 30
    arm:
      section_segments: 6
      offset:
        x: 200
        y: 190
        z: 0
      position:
        x: [-15,-15,0,0,0,0]
        y: [-30,-30,-5,140,140,155]
        z: [0,0,0,0,0,0]
      width: [0,1,30,30,30,30].mult(1.4)
      height: [0,33,40,40,40,30]
      texture: [4,3.9,3.9,18]
      angle: -63 
    arm2:
      section_segments: 12
      offset:
        x: 260
        y: 170
        z: 0
      position:
        x: [1,1,0,0]
        y: [5,5,50,50]
        z: [0,0,0,0]
      width: [0,24,37,0]
      height: [0,20,30,0]
      texture: [4,3.9,3.9,18]
      angle: -70
    arm2_shield:
      section_segments: d
      offset:
        x: 250
        y: 150
        z: 0
      position:
        x: [-50,-50,0,0,0,0,0,0,-85,-85]
        y: [-20,-20,5,5,22,28,45,45,70,70]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,10,7,7,7,7,15,20,0]
      height: [0,20,24,24,28,26,18,15,10,0]
      texture: [4,16,16,17.9,17,17.9,16]
      angle: 20
    arm_deco:
      section_segments: a
      offset:
        x: 120
        y: 210
        z: 10
      position:
        x: [0,0,0,0]
        y: [0,0,96.5,69.5]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,34,34,0]
      texture: [17]
      angle: -63+180  
    arm_deco2:
      section_segments: a
      offset:
        x: 120
        y: 210+35
        z: 10
      position:
        x: [0,0,0,0]
        y: [0,0,96.5,69.5]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,34,34,0]
      texture: [17]
      angle: -63+180        
    box:
      section_segments: b
      offset:
        x: 135
        y: 80
        z: 0
      position:
        x: [0,-8,0,0,0]
        y: [0,0,40,140,140]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,17,19,19,0]
      texture: [5,5,17]      
    box2:
      section_segments: b
      offset:
        x: 90
        y: 200
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,5,45,50,50].mult(1.2)
        z: [0,0,0,0,0,0]
      width: [0,30,40,40,30,0].div(1.3)
      height: [0,53,55,55,53,0]
      texture: [4]
      angle: 30
    deco:
      section_segments: 6
      offset:
        x: 100
        y: 165
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,65,65]
        z: [0,0,0,0]
      width: [0,40,40,0]
      height: [0,40,40,0]
      texture: [16.9]      
      angle: 180.5  
    propeller:
      section_segments: d
      offset:
        x: 0
        y: 420
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,40,60,62,50,45]
        z: [0,0,0,0,0,0,0]
      width: [0,50,50,40,35,35,0]
      height: [0,35,35,30,25,25,0]
      texture: [18,17.9,4,17,16,17]     
      propeller: true
    reactor_deco:
      section_segments: 6
      offset:
        x: 100
        y: 40
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [20]
      propeller: true
    tube:
      section_segments: 6
      offset:
        x: 100
        y: 75
        z: 24
      position:
        x: [0,0,0,0,0,23,23]
        y: [0,0,90,0,0,0,90,90]
        z: [2,2,2,0,0,-11,-11]
      width: [0,6,6,0,0,6,6]
      height: [0,6,6,0,0,6,6]
      texture: [3.9]      
      angle: 180 
    tube2:
      section_segments: 6
      offset:
        x: 100
        y: 75
        z: 24
      position:
        x: [-23,-23,-23,-23,0,-23,-23]
        y: [0,0,90,0,0,0,90,90]
        z: [0,-37,-37,-32,0,-11,-11]
      width: [0,6,6,0,0,6,6]
      height: [0,6,6,0,0,6,6]
      texture: [3.9]      
      angle: 180 
    tube3:
      section_segments: 6
      offset:
        x: 100
        y: 75
        z: 24
      position:
        x: [23,23,23,23,0,0,0]
        y: [0,0,90,0,0,0,90,90]
        z: [0,-37,-37,-32,0,-50,-50]
      width: [0,6,6,0,0,6,6]
      height: [0,6,6,0,0,6,6]
      texture: [3.9]      
      angle: 180  
    wire:
      section_segments: 10
      offset:
        x: 60
        y: 62
        z: 10
      position:
        x: [12,12,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-18,-18,-14,-10,-6,-2,2,6,10,14,18,24,24].mult(6.5)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [4,4,4,4,4,4,4,4,4,4,4,4,0].mult(1.5)
      height: [0,4,4,4,4,4,4,4,4,4,4,4,0].mult(1.8)
      propeller: false
      texture: [13,13,17,13,17,13,17,13,17,13,17] 
    wire2:
      section_segments: 10
      offset:
        x: 60
        y: 62
        z: -10
      position:
        x: [12,12,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-18,-18,-14,-10,-6,-2,2,6,10,14,18,24,24].mult(6.5)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [4,4,4,4,4,4,4,4,4,4,4,4,0].mult(1.5)
      height: [0,4,4,4,4,4,4,4,4,4,4,4,0].mult(1.8)
      propeller: false
      texture: [13,13,17,13,17,13,17,13,17,13,17]       
    rear_propellers:
      section_segments: 10
      offset:
        x: 130
        y: 450
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [30,30,56,60,62,65,65,55]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,30,30,30,27,27,25,0].div(1.1)
      height: [0,30,30,30,27,27,25,0].div(1.1)
      texture: [4,4,18,17,16,17]    
      angle: 0
      propeller: true
    rear_propellers2:
      section_segments: c
      offset:
        x: 153
        y: 425
        z: 0
      position:
        x: [15,15,0,0,0,0,0,0,0]
        y: [-16,-15,0,75,75,84]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,30,30,30,0].mult(1.2)
      height: [0,20,30,30,30,0].mult(1.2)
      texture: [4,4,4,18,4,16,17]    
      angle: -18     
    rear_propellers_joint:
      section_segments: b
      offset:
        x: 80
        y: 425
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,75,75]
        z: [5,5,0,0]
      width: [0,11,11,0]
      height: [0,15,25,0]
      texture: [4]    
      angle: 55  
    rear_propellers_joint2:
      section_segments: b
      offset:
        x: 80
        y: 405
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,75,75]
        z: [5,5,0,0]
      width: [0,11,11,0]
      height: [0,15,25,0]
      texture: [4]    
      angle: 55 
    rear_propellers_deco:
      section_segments: [-10,0,10,70,80,80,255,265,275].add(30)
      offset:
        x: 0
        y: 0
        z: -450
      position:
        x: [0,0,0,0,0,0,0,0].add(137)
        y: [-32,-32,32,32,32,32,32]
        z: [0,0,0,0,0,0,0,0]
      width: [0,30,30,25,20,15,0].div(1.1)
      height: [0,30,30,25,20,15,0].mult(1.1)
      texture: [4,4,17,4,17,4]    
      vertical: true
    rear_propellers_deco2:
      section_segments: [-10,0,10,70,80,80,255,265,275].add(30)
      offset:
        x: 0
        y: 0
        z: -450
      position:
        x: [0,0,0,0,0,0,0].add(137)
        y: [-32,-32,-32,-32,-32,32,32]
        z: [0,0,0,0,0,0,0]
      width: [0,15,20,25,30,30,0].div(1.1)
      height: [0,15,20,25,30,30,0].mult(1.1)
      texture: [4,17,4,17,4]    
      vertical: true  
      angle: 180
    rear_propellers_deco3:
      section_segments: 12
      offset:
        x: 125
        y: 0
        z: -420
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-35,-10,-5,15,20,35,37,40,41]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,8,8,8,8,8,6,3,0]
      height: [0,8,8,8,8,8,8,6,3,0]
      texture: [4,4,17,4,17,4,18,4,18]    
      vertical: true
  wings:
    main:
      offset:
        x: 0
        y: 370
        z: 48
      length: [2,20,2,2]
      width: [50,50,50,50,50].mult(1.3)
      angle: [0,-15,-15,-15]
      position: [-3,0,20,25,20]
      doubleside: true
      bump:
        position: 30
        size: 10
      texture: [4,18,4]  
wings: wings(100,600,0,0,55)
wings2: wings(235,500,-5,40,0)
wings3: wings(310,370,-15,65,0)
wings4: wings(320,205,0,110,0)
t = -170    
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
