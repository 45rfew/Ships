m = 30
n = 0.3
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
  name: "Raigeki"
  level: 7
  model: 3
  size: 4
  zoom: 0.9
  specs:
    shield:
      capacity: [700,700]
      reload: [13,13]
    generator:
      capacity: [750,750]
      reload: [750,750]
    ship:
      mass: 500
      speed: [85,85]
      rotation: [40,40]
      acceleration: [50,50]
  bodies:
    ring: ring(41,73,0,12,14.2,14.2,1,.2,0,[4,17,18,18,17,4,4],0)
    ring2: ring(41,53.5,0,12,14.2,14.2,1,.2,0,[4,17,18,18,17,4,4],0)
    ring3: ring(9.8,73,10,12,6,6,.8,-.21,0,[4,17,18,18,17,4,4],0)
    ring4: ring(9.8,66,10,12,6,6,.8,-.21,0,[4,17,18,18,17,4,4],0)
    ring5: ring(12.4,73,-9,12,6,6,.8,-.21,0,[4,17,18,18,17,4,4],0)
    ring6: ring(12.4,66,-9,12,6,6,.8,-.21,0,[4,17,18,18,17,4,4],0)
    ring7: ring(42.4,1,-65,[45,135,225,315],12,19.5,.8,.5,1,[4,17,11,11,17,4,4],45)
    ring8: ring(42.4,-1,-65,[45,135,225,315],12,19.5,.8,.5,1,[4,17,11,11,17,4,4],45+90)
    ball: ball(0,1,0,10,10,10,30,113,!true,0)
    ball2: ball(0,1,0,10,10,10,30,17,!true,45)
    ball3: ball(0,1,0,10,10,10,30,17,!true,90)
    ball4: ball(0,1,0,10,10,10,30,17,!true,135)
    ring9: ring(0,-17.5,0,16,2,2,.1,.2,0,17,0)
    ring10: ring(0,-15,0,16,1.5,1.5,.2,.1,0,17,0)
    ring11: ring(0,-12.5,0,16,1,1,.2,.1,0,17,0)
    ring12: ring(16,11.5,0,16,2,2,.2,.1,0,17,60)    
    ring13: ring(16-5,11.5-2.7,0,16,1,1,.2,.1,0,17,60)    
    ring14: ring(16-2.5,11.5-1.35,0,16,1.5,1.5,.2,.1,0,17,60)    
    ring15: ring(21.5,0,0,[40,45,50,130,135,140,220,225,230,310,315,320],10,8,.8,.1,0,[4,17,63,63,17,4],30)    
    ring16: ring(21.5-6.5,-13,0,[40,45,50,130,135,140,220,225,230,310,315,320],10,8,.8,.1,0,[4,17,63,63,17,4],30)    
    ring17: ring(10,22.5,0,[40,45,50,130,135,140,220,225,230,310,315,320],10,8,.8,.1,0,[4,17,63,63,17,4],90)    
    main:
      section_segments: 8
      offset:
        x: 0
        y: -16
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-80,-60,-60,-22,-20,-20,-20,34.5,34.5,36.5,50,51.5,70,68]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,18.5,20,19,20,0,0,0,60,60,40,40,16,15]
      height: [0,8,8.5,10,11,12,0,0,0,12,12,20,20,15,0]
      texture: [3,2,17,8,17,4,17,4,4,4,63,17,18,17]
    side:
      section_segments: [120,240,360].add(32)
      offset:
        x: 0
        y: -36
        z: 0
      position:
        x: [3,3,35,35].add(13)
        y: [0,0,55,55]
        z: [0,0,0,0]
      width: [0,4,11,0]
      height: [0,10-1,10.1-1,0]
      texture: [4]   
    side2:
      section_segments: [120,240,360].add(32+180)
      offset:
        x: 0
        y: -36
        z: 0
      position:
        x: [-3,-3,-35,-36].add(-13)
        y: [0,0,55,55]
        z: [0,0,0,0]
      width: [0,4,13,0]
      height: [0,10-1,9.7-1,0]
      texture: [4]  
    gap:
      section_segments: [45,135,225,315]
      offset:
        x: 12
        y: -36
        z: 0
      position:
        x: [0,0,29.5,30]
        y: [0,0,55,55]
        z: [0,0,0,0]
      width: [0,2.8,1.1,0]
      height: [0,12,12,0]
      texture: [4]        
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -60
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-32.5,-12.5,0,12.5,13.2,25,25,25]
        z: [0,0,0,0,-.2,-.2,-2,-5]
      width: [0,5,7.5,5,6.2,8,7.5,5]
      height: [0,7.5,10,5,5,5,5,5]
      texture: [9,9,9,17,4,63,3]
    core_shield:
      section_segments: [115,120,125,235,240,245,355,360,365]
      offset:
        x: 0
        y: 5
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-5,-5,-5,-4,-4,20,25,30,20,0,-5].div(1.7)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [30,40,44,50,50,50,45,30,25,25,30].div(1.05)
      height: [30,40,44,50,50,50,45,30,25,25,30].div(1)
      texture: [[15.7],16.7,17.7,3.7,63,3.7,[15.7],17.7,112.7,17.7]       
      angle: 180
      vertical: true  
    cannons:
      section_segments: 6
      offset:
        x: 50
        y: 16
        z: -9.5
      position:
        x: [-10,-10,-10,-10,-10,-10,-10,-10,-10,-15,-20,-20,-20,-20,-20]
        y: [-93,-97,-97,-92,-90,-49,-47,-45,-10,0,10,10,10,10,10]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5.5,6,7,6.7,6.7,8,8,12.5,12,7,7,7,7,0,0]
      height: [0,3.5,4,5,3,3,4,5,12.5,15,7,7,7,7,0,0]
      texture: [16.9,16.9,16,12,11,5,17,1,4]
      laser:
        damage: [70,70]
        rate: n
        type: 1
        speed: [120,120]
        recoil: 200
        number: 1
        error: 0
    cannons2:
      section_segments: 6
      offset:
        x: 49.5
        y: 16
        z: -9.5
      position:
        x: [-10,-10,-10,-10,-10,-10,-10,-10,-10,-15,-20,-20,-20,-20,-20]
        y: [-93,-97,-97,-92,-90,-49,-47,-45,-10,0,10,10,10,10,10]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5.5,6,7,6.7,6.7,8,8,12.5,12,7,7,7,7,0,0]
      height: [0,3.5,4,5,3,3,4,5,12.5,15,7,7,7,7,0,0]
      texture: [16.9,16.9,16,12,18,5,17,4,4]        
    cannon_deco:
      section_segments: 8
      offset:
        x: 43.5
        y: -32
        z: -7
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [-.5,-.5,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 189
    cannon_deco2:
      section_segments: 8
      offset:
        x: 36.5
        y: -32
        z: -7
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [-.5,-.5,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: -189
    poker:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [9,20,21,23,24]
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0]
      height: [0,1,2,3,4,0]
      angle: 180
      texture: [18,17,4]      
    poker2:
      section_segments: 12
      offset:
        x: 1
        y: 3
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [8,20,21,23,24]
        z: [0,0,0,0,0]
      width: [0,1,2,3,4,0]
      height: [0,1,2,3,4,0]
      angle: 60
      texture: [18,17,4]            
    main_engine:
      section_segments: 8
      offset:
        x: 0
        y: 605+-290/3.5-300-220+30-16
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,50,90,130,156,160,200,200,150].div(3.5)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,60,60,45,40,40,35,32,0].div(3.5)
      height: [0,45,45,45,40,40,35,32,0].div(3.5)
      texture: [3.9,3.9,3.9,8,17,2.9,17]
      propeller: true
    engine_top:
      section_segments: 8
      offset:
        x: 34/3.5
        y: 655+-290/3.5-300-220-16
        z: 36/3.5
      position:
        x: [-34,-34,-7,0,0,0,0,0,0,0,0,0].div(3.5)
        y: [0,10,50,80,85,90,145,150,180,190,190,150].div(3.5)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,37,30,23,23,23,23,25,20,17,0].div(3.5)
      height: [0,30,30,30,23,23,23,23,25,20,17,0].div(3.5)
      texture: [4,4,4,4,17,18,17,[15],17,17]
      propeller: true
    engine_bottom:
      section_segments: 8
      offset:
        x: 44/3.5
        y: 655+-290/3.5-300-220-16
        z: -30/3.5
      position:
        x: [-34,-34,-7,0,0,0,0,0,0,0,0,0].div(3.5)
        y: [0,10,50,80,85,90,145,150,180,190,190,150].div(3.5)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,37,30,23,23,23,23,25,20,17,0].div(3.5)
      height: [0,30,30,30,23,23,23,23,25,20,17,0].div(3.5)
      texture: [4,4,4,4,17,18,17,[15],17,17]
      propeller: true
    side_engine:
      section_segments: 8
      offset:
        x: 50
        y: -36
        z: 0
      position:
        x: [-25,-9,-9,-9,-9,-9]
        y: [60,80,82,120,122,110]
        z: [0,0,0,0,0,0]
      width: [8,15,15,15,13,0]
      height: [8,15,15,15,13,0]
      texture: [4,17,18,17,17]
      propeller: true
    lights:
      section_segments: [90,180,270,360]
      offset:
        x: 0.01
        y: -135
        z: 0
      position:
        x: [0,18.5,10,0,0]
        y: [-59,-59,-39,10,10]
        z: [0,0,0,0,0]
      width: [0,0.5,0.5,0.4,0]
      height: [0,0.2,0.2,0.2,0]
      texture: [17]   
      angle: 180    
    lights2:
      section_segments: [90,180,270,360]
      offset:
        x: 0.01
        y: -135
        z: 0
      position:
        x: [11,12.9,6.7,0,0]
        y: [-59,-59,-39,10,10]
        z: [0,5.4,5.3,0,0]
      width: [0,0.75,0.75,0.4,0]
      height: [0,1,1,0.2,0]
      texture: [17]   
      angle: 180
    lights3:
      section_segments: [90,180,270,360]
      offset:
        x: 13.59
        y: -56
        z: 7.2
      position:
        x: [0,0,0,0]
        y: [-20,-20,20,20]
        z: [0.5,0.5,0,0]
      width: [0,0.75,0.75,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180
    lights3:
      section_segments: [90,180,270,360]
      offset:
        x: 19
        y: -56
        z: 0
      position:
        x: [0,0,-0.9,0]
        y: [-20,-20,20,20]
        z: [0.5,0.5,0,0]
      width: [0,0.75,0.75,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180      
    lights4:
      section_segments: [90,180,270,360]
      offset:
        x: 4.7
        y: -45
        z: 10
      position:
        x: [0,-1,1.5,0]
        y: [-10,-10,5,5]
        z: [-0.4,-0.4,0,0]
      width: [0,0.75,0.75,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180 
    lights5:
      section_segments: [90,180,270,360]
      offset:
        x: 0
        y: -42
        z: 11.35
      position:
        x: [0,0,0,0]
        y: [-6,-6,5,5]
        z: [0,0,0.4,0.4]
      width: [0,0.75,0.75,0]
      height: [0,0.5,0.5,0]
      texture: [17]   
      angle: 180       
    lights6:
      section_segments: [90,180,270,360]
      offset:
        x: 19.5
        y: -31
        z: 0
      position:
        x: [-40,-40,0,0]
        y: [-50,-50,5,5]
        z: [0,0,0.4,0.4]
      width: [0,0.75,0.75,0]
      height: [0,0.5,0.5,0]
      texture: [17]   
      angle: 180 
    lights7:
      section_segments: 4
      offset:
        x: 13.5
        y: -31
        z: 8
      position:
        x: [-29,-29,0,0]
        y: [-49.5,-49.5,5,5]
        z: [0,0,.3,0.3]
      width: [0,0.75,0.75,0]
      height: [0,0.8,0.5,0]
      texture: [17]   
      angle: 180
    lights8:
      section_segments: [90,180,270,360]
      offset:
        x: 40
        y: 45
        z: 0
      position:
        x: [25,25,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,0.75,0.75,0]
      height: [0,0.8,0.8,0]
      texture: [17]   
      angle: 180     
    lights9:
      section_segments: [90,180,270,360]
      offset:
        x: 28
        y: 45
        z: 14
      position:
        x: [17,17,0,0]
        y: [-10,-10,10,10]
        z: [-3,-3,0,0]
      width: [0,0.75,0.75,0]
      height: [0,0.8,0.8,0]
      texture: [17]   
      angle: 180   
    lights10:
      section_segments: [90,180,270,360]
      offset:
        x: 0
        y: -135
        z: 0
      position:
        x: [0,0,0,0]
        y: [-49,-39,10,10]
        z: [7.7,7.5,0,0]
      width: [0.75,0.75,0.75,0]
      height: [0.8,0.8,0.8,0]
      texture: [17]   
      angle: 180     
    lights11:
      section_segments: 20
      offset:
        x: 40
        y: -19
        z: -5
      position:
        x: [0,0,0,0]
        y: [-39,-39,10,10]
        z: [9.7,9.7,0,0]
      width: [0.75,0.75,0.75,0]
      height: [0.8,0.8,0.8,0]
      texture: [17]   
      angle: 180      
    lights12:
      section_segments: 20
      offset:
        x: 13.5
        y: -65.9
        z: 6.5
      position:
        x: [0,.5,0,0]
        y: [-29,-29,10,10]
        z: [0,.8,.2,0]
      width: [0.75,0.75,0.75,0]
      height: [0.8,0.8,0.8,0]
      texture: [17]   
      angle: 180            
    propeller_main:
      section_segments: 16
      offset:
        x: 0
        y: 90
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [10]
      texture: [0]
      propeller: true
    end_laser:
      section_segments: 4
      offset:
        x: 50
        y: -700
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.0001,0.0001]
        number: 1
for i in [1..11]
  model.bodies["laser"+i] = 
    section_segments: 4
    offset:
      x: 30
      y: i*-50-100
      z: 0
    position:
      x: [0]
      y: [0]
      z: [0]
    width: [1]
    height: [1]
    laser:
      damage: [m,m]
      rate: n
      speed: [0.0001,0.0001]
      number: 1
t = 20 
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;  
###reactor_grid_top:
      section_segments: 6
      offset:
        x: 10
        y: -50
        z: 18
      position:
        x: [0,0,-10,10,0,0,0,0,0,0,0,0]
        y: [30,30,40,60,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1.5,1.5,1.5,1.5,1.5,1.5]
      height: [1,1,1,1,1,1]
      texture: [2.9]
    reactor_grid_top2:
      section_segments: 6
      offset:
        x: 10
        y: -50
        z: 18
      position:
        x: [0,0,10,-10,0,0,0,0,0,0,0]
        y: [30,30,40,60,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.5,1.5,1.5,1.5]
      height: [0,1,1,1,1,1]
      texture: [2.9]
    reactor_grider:
      section_segments: 4
      offset:
        x: 22
        y: -40
        z: 18
      position:
        x: [-12,0,0,-9]
        y: [0,20,56,60]
        z: [-15,0,0,0]
      width: [2,2,2,2]
      height: [1.5,1.5,1.5,1.5]
      texture: [1.9]
    reactor_grider2:
      section_segments: 4
      offset:
        x: 22
        y: 40
        z: 18
      position:
        x: [-15,0,0,0]
        y: [0,20,56,60]
        z: [-15,0,0,0]
      width: [2,2,2,2]
      height: [1.5,1.5,1.5,1.5]
      texture: [1.9]
      angle: 180
    wingsRail:
      section_segments: 4
      offset:
        x: 0
        y: 20
        z: 18
      position:
        x: [1.5,0,0,1.5,0,0,0,0]
        y: [-18,-13,13,18]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,1.5,1.5,0]
      texture: [2]
      angle: 90
    wingsRail2:
      section_segments: 4
      offset:
        x: 0
        y: -20
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-22,-21.7,21.7,22]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1.5,1.5,0]
      texture: [2]
      angle: 90###
