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
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle, z) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [].fill(0,13)
      y: [-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25].mult(t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: vert
    texture: tx
    angle: angle
hub = (x,y,z,s,w,h,v,a,t) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0]
      y: [0,9,7,7,10,7,8].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a 
f = -47
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
model =
  name: 'Epiloguer'
  level: 7
  model: 1
  size: 2
  specs:
    shield:
      capacity: [780,780]
      reload: [19,19]
    generator:
      capacity: [950,950]
      reload: [220,220]
    ship:
      mass: 600
      speed: [105,105]
      rotation: [80,80]
      acceleration: [70,70]  
  bodies:
    ball: ball(0,-16,0,15,15,10,30,113,!true,0)
    ball2: ball(0,-16,0,15,15,10,30,17,!true,45)
    ball3: ball(0,-16,0,15,15,10,30,17,!true,90)
    ball4: ball(0,-16,0,15,15,10,30,17,!true,135)
    ring: ring(27,-7,2,6,23,8,1,.3,0,[4,17,63,63,17,4],0)    
    ring2: ring(27,-25,2,6,23,8,1,.3,0,[4,17,63,63,17,4],0)    
    ring3: ring(20-2,-45-.5,2,6,23,8,1,.3,0,[4,17,63,63,17,4],50)    
    ring4: ring(20-2,12.5+.5,2,6,23,8,1,.3,0,[4,17,63,63,17,4],-50)  
    ring5: ring(25,15,-24,16,10,12,.5,.3,1,17,5)  
    ring6: ring(32,-71,0,12,13,7,.5,.3,0,17,0)  
    ring7: ring(32,-81,0,12,13,7,.5,.3,0,17,0)  
    reactor: hub(0,20,-66,20,10,12,1,0,[18,17,17,18,18,17])
    reactor2: hub(12,15,73,20,6,5,1,10,[18,17,17,18,18,17])
    uwu:
      section_segments: 6
      offset:
        x: 0
        y: -78
        z: 11.5
      position:
        x: [0,0,0,0,0,0]
        y: [-3,-3,-2,2,3,3]
        z: [0,0,0,0,0,0]
      width: [0,15,15,15,15,0]
      height: [0,10,10,10,10,0]
      texture: [3.9,16.9,18,3.9,3.9]
    back:
      section_segments: 6
      offset:
        x: 0
        y: -45-f
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [16,26,36,48,60,75,90,90,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [30,38,40-0,40,48-8,50-7,34,32,0]
      height: [15,23,25,28,29,28,20,18,0]
      texture: [13,[15],3.9,63,3.9,18,16.9,16.9,16.9]
      propeller: 0
    back_sides:
      section_segments: 6
      offset:
        x: 0
        y: -45-f
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [16,26,36,48,60,75,90,90,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [30,38,40,40,48-8,50-7,34,34,0].mult(1.01)
      height: [15,23,25,28,29,28,20,18,0].div(1.05)
      texture: [13,[15],3.9,63,2.9,3.9,16.9,16.9,16.9]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -120-f
        z: 2
      angle: 180
      position:
        x: [0,0,0,0,0]
        y: [10,40,66,84,95]
        z: [-8,-3,-7,-7,-10]
      width: [30-17,35-17,30-14,23-17,0]
      height: [20-15,30-15,30-15,23-15,0]
      texture: [7,9,9,4]
      propeller: false    
    core_shield:
      angle: 180
      section_segments: 6
      vertical: true
      offset:
        x: 0
        y: 15
        z: 20-4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-7,-5,-5,-4,0,20,25,30-3,20,0,-7].mult(1.3)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [30,40,42,45,50,50,45,30,25,25,30]
      height: [30,40,42,45,50,50,45,30,25,25,30].mult(1.4)
      texture: [17.95,17,4,[15],4,[15],18,4,112.9,3.9]      
    main:
      section_segments: 8
      offset:
        x: 0
        y: -110
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-11,-6,0,10,20,28,45,25].mult(1.2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,13,14,16,16,16,16,0].mult(2)
      height: [0,15,18,20,20,19,20,0]
      texture: [18,4,8,63,4,[15],17] 
    main2:
      section_segments: 8
      offset:
        x: 0
        y: -155
        z: -5
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-15,-15,20,45,45,45]
        z: [0,0,0,0,8,8,8]
      width: [0,4,5,11.5,13,0].mult(1.8)
      height: [0,1.5,2.5,11.5,5,0]
      texture: [17,17,3,18,12] 
    cannons:
      section_segments: 12
      offset:
        x: 30
        y: -102
        z: 0
      position:
        x: [0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0]
        y: [-80,-34,-35,-36,-37,-34,-32,-12,2,5,20,25,55,60,75,80,78].div(1.55)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4,6,8,5,3,3,3,5,8,8,8,8,8,8,0]
      height: [0,2,4,6,8,5,3,3,5,10,14,15,15,15,15,15,0]
      texture: [17,4,4,4,4,17,18,8,13,18,17,8,17,18,17,18]   
      laser:
        damage: [20,20]
        rate: 1
        recoil: 20
        type: 1
        speed: [216,216]
        number: 20
        error: 5          
    cannon_discs:
      section_segments: 12
      offset:
        x: 30
        y: -140
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-6,-6,-4,-4,0,0,2,2,6,6,8,8,12,12,14,14].div(1.2)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,0,0,4,4,0,0,5,5,0,0,6,6,0].div(1.2)
      height: [0,3,3,0,0,4,4,0,0,5,5,0,0,6,6,0].div(1.2)
      texture: [4,17,4,4,4,17,4,4,4,17,4,4,4,17,4]            
    poker:
      section_segments: 12
      offset:
        x: 2
        y: -22
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [9,20,21,23,24].mult(1)
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0].mult(1.5)
      height: [0,1,2,3,4,0].mult(1.5)
      angle: 180-60
      texture: [18,17,4]  
    poker2:
      section_segments: 12
      offset:
        x: 2
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [9,20,21,23,24].mult(1)
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0].mult(1.5)
      height: [0,1,2,3,4,0].mult(1.5)
      angle: 180-120
      texture: [18,17,4] 
    poker3:
      section_segments: 12
      offset:
        x: 0
        y: -18
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [9,20,21,23,24].mult(1.4)
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0].mult(1.8)
      height: [0,1,2,3,4,0].mult(1.8)
      angle: 180
      texture: [18,17,4]   
    poker4:
      section_segments: 12
      offset:
        x: 0
        y: -14
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [9,20,21,23,24].mult(1.4)
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0].mult(1.8)
      height: [0,1,2,3,4,0].mult(1.8)
      angle: 0
      texture: [18,17,4]
    circle:
      section_segments: 12
      offset:
        x: -12
        y: -42
        z: -45
      position:
        x: [0,0,0,0,0,0,0]
        y: [-68.5,-71,-72.5,-72.5,-67.5,-61.5,-52.5,-47.5]
        z: [0,0,0,0,0,0,0]
      width: [0,2.5,4,4,4,4,7,0]
      height: [0,2.5,4,4,4,4,7,0]
      texture: [17,16,18,18]
      angle: 195    
      vertical: true
    box:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10
        y: 50
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-30,-5,15,25]
        z: [2,0,-4,-5]
      width: [15,20,20,15]
      height: [0,18,18,0]
      texture: [17,17.96,17]
      angle: 90
    box2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -95
        z: 10-.5
      position:
        x: [0,0,0,0,0]
        y: [-25,-15,15,25]
        z: [-5,-4,-4,-5]
      width: [15,15,15,15]
      height: [0,18,18,0]
      texture: [63,17.96,63]
      angle: 90      
    hubs2:
      vertical: true
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -2
        z: 90
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [15,25,23.5,23.5,25,27,25]
        z: [0,0,0,0,0,0,-4,0]
      width: [8,5,3,3,3,.2,0]
      height: [23,20,18,18,18,1,0].add(-5)
      texture: [4,17,17,18,18,18,17]
    hubs:
      vertical: true
      section_segments: [45,135,225,315]
      offset:
        x: 5.5
        y: 1
        z: -54.55
      position:
        x: [0,0,0,0,0,0,0]
        y: [15,25,23.5,23.5,25,28]
        z: [0,0,0,0,0,0,0]
      width: [8,5,3,3,3,0]
      height: [23,20,18,18,18,0]
      texture: [63,17,17,18]
      angle: 25         
    disc1:
      section_segments: 12
      offset:
        x: 20
        y: 43
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10]
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [17]   
    disc2:
      section_segments: 12
      offset:
        x: 20
        y: 60
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10]
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [17]    
    disc3:
      section_segments: 12
      offset:
        x: 20
        y: 52
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10]
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [17]    
    disc4:
      section_segments: 12
      offset:
        x: 5
        y: -88
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [17]    
    disc5:
      section_segments: 12
      offset:
        x: 5
        y: -97
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [17]          
    wire:
      section_segments: 8
      angle: 90
      offset:
        x: 30
        y: 67
        z: 15
      position:
        x: [-10,-10,-10,-2,-2,-2,-2,0,1,0,0]
        y: [-30,-30,-21.5,-10,-8,-1,4,7,10,11.5]
        z: [8,8,7,6,6,3,1,-2,-12,-12,-12]
      width: [4,4,4,4,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4,4,10,0]
      propeller: false
      texture: [13,13,13,13,17,13,17,13,17]
    wire2:
      section_segments: 12
      angle: 0
      offset:
        x: 30
        y: 55
        z: 5
      position:
        x: [5,5,5,3,3,5,6,6,7,7,7]
        y: [-65,-64,-51.5,-40,-28,-18,-8,2,12,11]
        z: [0,0,0,-1,-2,-1,1,1,0,0,0]
      width: [4,4,4,4,4,4,4,4,3,0]
      height: [0,3,3,3,3,3,3,3,3,0]
      propeller: false
      texture: [13,13,17,13,17,13,17,13,17]   
    wire3:
      section_segments: 12
      angle: 0
      offset:
        x: 30
        y: 55
        z: -2
      position:
        x: [5,5,5,3,3,5,6,6,7,7,7]
        y: [-65,-64,-51.5,-40,-28,-18,-8,2,12,11]
        z: [0,0,0,-2,-3,-3,-2,-2,0,0,0]
      width: [4,4,4,4,4,4,4,4,3,0]
      height: [0,3,3,3,3,3,3,3,3,0]
      propeller: false
      texture: [13,17,13,17,13,17,13,17,13] 
    wire4:
      section_segments: 8
      angle: 90
      offset:
        x: 20
        y: -70
        z: 15
      position:
        x: [2,2,5,3,1,-2,-2,0,1,0,0]
        y: [-18,-18,-14,-10,-8,-1,4,7,10,11.5]
        z: [0,0.5,0.5,3,3,3,1,-2,-12,-12,-12]
      width: [4,4,4,4,4,4,4,4,4,0]
      height: [0,4,4,4,4,4,4,4,10,0]
      propeller: false
      texture: [13,13,13,13,17,13,17,13,17]         
    back_propeller:
      section_segments: 6
      offset:
        x: 0
        y: 65-f
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [34]
      height: [18]
      propeller: 1      
  wings:
    main:
      offset:
        x: 37+10-7
        y: -115-f
        z: 9
      length: [0,22,0,22,2,22,16,0,10-3,0,20]
      width: [55,55,55,146,320,333,167,122,35,35,192,10]
      angle: [15,-35,11,11,-28,-28,-8,-8,-28,-28,0]
      position: [52,50,66,54,47,47,79+10,70+10,80+5,88+5,70+0,90+40]
      texture: [4,8,17,18,17,4,3,17,18,17,4]
      doubleside: true
      bump:
        position: 20
        size: 5
    main2:
      offset:
        x: 37+10-7
        y: -113-f
        z: 9
      length: [0,22,0,22,2,22-2,18-2,0,10-3+2,0,20-1.5]
      width: [55,55,55,146,320,333,167,122,35,35,162-2,40]
      angle: [15,-35,11,11,-28,-28,-8,-8,-28,-28,0]
      position: [52,50,66,54,47,47,79+10,70+10,80+5,88+5,70+0,90+10]
      texture: [4,12,17,4,17,63,3,17,4,17,63]
      doubleside: true
      bump:
        position: 20
        size: 5
    main_deco:
      offset:
        x: 37+10-7+60.5
        y: -115-f+19
        z: -9+2
      length: [12,0]
      width: [87,52,35]
      angle: [-7,0]
      position: [60,64,64]
      texture: [63]
      doubleside: true
      bump:
        position: 50
        size: 10-3  
    main_deco2:
      offset:
        x: 62
        y: -135-f
        z: 0
      length: [10,8,0]
      width: [81,87,85,35]
      angle: [20,20,0]
      position: [61,65,45,64]
      texture: [63]
      doubleside: true
      bump:
        position: 50
        size: 10-3          
    main_deco3:
      offset:
        x: 67
        y: -10-f
        z: 0
      length: [15,0]
      width: [30,50]
      angle: [43,43,0]
      position: [16,40,40,50]
      texture: [63]
      doubleside: true
      bump:
        position: -50
        size: 15        
    main_lights:
      offset:
        x: 37+10-7
        y: -118-f
        z: 9
      length: [0,22,0,22,2,22+1.5,18-1.5,0,10-3+2,0-4,20+1]
      width: [55,55,55,146+5,320+5,333+5,167-1,122-3,35-6,35-9,162+35,40+7]
      angle: [15,-35,11,11,-28,-28,-9,-8,-28,-28,0]
      position: [52,50,66,54,47,47,79+10,70+10,80+5,88+5,70+5,90+26]
      texture: [17]
      doubleside: true
      bump:
        position: 20
        size: 0        
t = 25        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t   
return model;        
