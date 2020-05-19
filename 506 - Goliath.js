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
  name: "Goliath"
  level: 5
  model: 6
  size: 1.6
  specs:
    shield:
      capacity: [300,380]
      reload: [6,10]
    generator:
      capacity: [80,120]
      reload: [45,60]
    ship:
      mass: 320
      speed: [60,75]
      rotation: [45,70]
      acceleration: [70,90]
  bodies:
    ball: ball(7,0,-35,9,20,10,[40,45,50,130,135,140,220,225,230,310,315,320],17,1,0)
    ball2: ball(53,14,-22,1,8,10,30,17,1,0)
    main:
      section_segments: 8
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,35,100,100,95]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,20,20,20,20,20,17,14.5,0]
      height: [0,5,15,15,15,15,16,16,15,12.5,0]
      texture: [4,3,3,3,3,4,4,18,16.97]
      propeller: true
    main2:
      section_segments: 8
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,35,90,90]
        z: [0,0,0,0,0,0,0,0,1.5,0,0]
      width: [0,10,20,20,20,20,20,20,17,14.5,0].mult(1.05)
      height: [0,5,15,15,15,15,16,16,20,12.5,0].div(2)
      texture: [63]
      propeller: true      
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 16
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,0,20,40,90,92]
        z: [-7,-5,-4,-4,-6,0]
      width: [0,10,10,10,10,0]
      height: [0,10,10,12,12,0]
      texture: [9,9,9,4]      
    claws:
      section_segments: 6
      offset:
        x: 50
        y: -35
        z: 0
      position:
        x: [-33,-25,5,20,25,20,20,20,0,0,0,-50]
        y: [-105,-100,-70,-40,-10,20,20,20,48,48,48,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,15,19,19,15,0,0,0,0,15,14]
      height: [0,5,15,16,15,15,0,0,0,0,13,0]
      texture: [17,3.9,11,2.9,11,3.9,1,1,1,3.9,18]
    claws2:
      section_segments: 6
      offset:
        x: 51
        y: -35
        z: 0
      position:
        x: [-33,-25,5,20,25,20,20,20,0,0,0,-50]
        y: [-105,-100,-70,-40,-10,20,20,20,48,48,48,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,15,19,19,15,0,0,0,0,15,14]
      height: [0,5,15,16,15,15,0,0,0,0,13,0]
      texture: [63,10,18,8,18,3.9,1,1,1,3.9,18] 
    claw_joint:
      section_segments: [45,135,225,315]
      offset:
        x: 82
        y: 20
        z: 0
      position:
        x: [29,29,4,4]
        y: [0,0,35,35]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,8,8,0]
      texture: [17] 
      angle: 180
    claw_joint2:
      section_segments: [45,135,225,315]
      offset:
        x: 65
        y: 20
        z: 0
      position:
        x: [28,28,4,4]
        y: [0,0,35,35]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,8,8,0]
      texture: [17] 
      angle: 180      
    claws_color:
      section_segments: 6
      offset:
        x: 47
        y: -35
        z: 0
      position:
        x: [-27.5,-21,5,20,25,20,20,20,0,-50]
        y: [-100,-95,-70,-40,-10,20,20,48,48,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,15,19,19,15,0,0,15,12]
      height: [0,2,2,2,2,2,0,0,2,0]
      texture: [63,63,63,63,63,4,4,4,63]     
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: 40
        z: -30
      position:
        x: [0,0,0,0,0,0,0]
        y: [-60,-70,-70,-20,0,20,30]
        z: [0,0,0,0,0,0,20]
      width: [0,4,5,8,8,7,5]
      height: [0,4,5,8,8,10,5]
      texture: [16.9,16.9,10,1,1]
      laser:
        damage: [25,40]
        rate: 2
        type: 1
        speed: [160,180]
        number: 1
        error: 0
    side_cannons:
      section_segments: 6
      offset:
        x: 75
        y: -60
        z: -18
      position:
        x: [0,0,0,0,0,0]
        y: [0,-10,-10,10,20,30]
        z: [0,0,0,0,0,20]
      width: [0,2,3,4,4,3]
      height: [0,2,3,4,4,3]
      texture: [16.9,16.9,10,1,1]      
      laser:
        damage: [7,10]
        rate: 3
        type: 2
        speed: [160,200]
        number: 1
        error: 1
    tri_deco:
      section_segments: [20,30,40,140,150,160,300,310,320]
      offset:
        x: 0
        y: 0
        z: -25
      position:
        x: [55,55,55,55,55,55,55,55,55,55]
        y: [-15,-15,-15,-15,0,15,15,15,15].div(1.1)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,15,0]
      propeller: false
      texture: [2.9,3,3,4,4,3,3,3]
      vertical: true
    tri_deco2:
      section_segments: [20,30,40,140,150,160,300,310,320]
      offset:
        x: 0
        y: 0
        z: -25
      position:
        x: [55,55,55,55,55,55,55,55,55,55]
        y: [-15,-15,-15,-15,0,15,15,15,15].div(1.1)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,15,0]
      propeller: false
      texture: [2.9,3,3,4,4,3,3,3]
      vertical: true
      angle: 180
    disc2:
      section_segments: 18
      offset:
        x: 53
        y: 13
        z: -22
      position:
        x: [0,0,0,0]
        y: [0,0,2,2]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,5,5,0]
      texture: [[15]]
      vertical: true
  wings:
    side:
      doubleside: true
      offset:
        x: 80
        y: -35
        z: 0
      length: [50]
      width: [53,10]
      angle: [-5]
      position: [-20,0]
      texture: [3]
      bump:
        position: 30
        size: 5
    side2:
      doubleside: true
      offset:
        x: 80
        y: -35
        z: 0
      length: [52]
      width: [65-7,12]
      angle: [-5]
      position: [-20,0]
      texture: [17]
      bump:
        position: 30
        size: 0     
    side3:
      doubleside: true
      offset:
        x: 80
        y: -32.2
        z: 1.8
      length: [50]
      width: [59,25].div(2.5)
      angle: [-5]
      position: [-4.5,-3]
      texture: [18]
      bump:
        position: 20
        size: 5             
    back:
      doubleside: true
      offset:
        x: 0
        y: 105
        z: -1
      length: [90]
      width: [80,10]
      angle: [0]
      position: [-35,0]
      texture: [18]
      bump:
        position: 30
        size: 5
    back2:
      doubleside: true
      offset:
        x: 0
        y: 104
        z: -1
      length: [92]
      width: [82,12]
      angle: [0]
      position: [-35,0]
      texture: [17]
      bump:
        position: 40
        size: 0        
    back3:
      doubleside: true
      offset:
        x: 0
        y: 106
        z: -.1
      length: [90].div(1.2)
      width: [80,10].div(1.2)
      angle: [0]
      position: [-35,0].div(1.2)
      texture: [[15.8]]
      bump:
        position: 30
        size: 7  
    back4:
      doubleside: true
      offset:
        x: 0
        y: 106
        z: 1.3
      length: [90].div(1.6)
      width: [80,10].div(1.6)
      angle: [0]
      position: [-35,0].div(1.6)
      texture: [18]
      bump:
        position: 30
        size: 9          
    top:
      doubleside: true
      offset:
        x: 17
        y: 90
        z: 0
      length: [0,-7,-3,-1,-12,-3,0].mult(1.2)
      width: [0,20,20,60,60,40,10,0].mult(1.3)
      angle: [280,280,315-60,315,325,350,0]
      position: [0,0,0,-32,-32,-13,13,13].div(1.6)
      texture: [63,63,63,17,18,17,63]
      bump:
        position: 30
        size: -4
    top2:
      doubleside: true
      offset:
        x: 17
        y: 92
        z: 0
      length: [0,-7,-3,-1,-12,-3,0].mult(1.2)
      width: [0,20,20,60,60,40,10,0].mult(1.3)
      angle: [280,280,315-60,315,325,350,0]
      position: [0,0,0,-32,-32,-13,13,13].div(1.6)
      texture: [63,63,63,17,4,17,63]
      bump:
        position: 30
        size: -4   
for i in [0...12]
  model.bodies["cannon_ring"+i] = 
    section_segments: 6
    offset:
      x: 0
      y: -25 + i * 6
      z: -30
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2].add(2)
    height: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2].add(2)
    texture: [17]   
for i in [0...4]
  model.bodies["body_joint"+i] = 
    section_segments: 6
    offset:
      x: 16+i/2
      y: 53 + i * 15
      z: 1
    position:
      x: [0,0,0,0,0,0]
      y: [0,0,3,3,5,5]
      z: [0,0,0,0,0,0]
    width: [0,6,6,6,6,0]
    height: [0,6,6,6,6,0]
    texture: [16.9,16.9,63]       
t = 0     
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;    
