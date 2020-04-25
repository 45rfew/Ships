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
model =
  name: 'Avalon'
  level: 2
  model: 2
  size: 1.4
  specs:
    shield:
      capacity: [180,200]
      reload: [6,7]
    generator:
      capacity: [80,120]
      reload: [30,40]
    ship:
      mass: 200
      speed: [120,145]
      rotation: [80,100]
      acceleration: [80,100]
  bodies:
    ring: ring(11,29,-60,[40,45,50,130,135,140,220,225,230,310,315],14,9,.6,.2,1,[4,17,18,18,17,4,4],120)
    reactor: hub(11,31,-70,16,5,5,1,40,[18,17,17,18,18,17])
    reactor2: hub(11,31,-50,16,5,5,1,40,[18,17,17,18,18,17])
    toploader:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 29.5
        z: -59.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-15,-15,-5,11,11,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,30,30,5,2,2,0]
      height: [0,30,30,30,27,27,0]
      texture: [4,4,[15],63,17,17]
      vertical: true    
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-91,-90,-75,-45,-2,0,33,35,85,87,94,105,105,95]
        z: [0,0,0,0,0,0,0,0,0,3,3,3,3,3]
      width: [0,2,10,17,21,21,21,21,19,18.5,12,12,11,0]
      height: [0,2,10,20,30,30,30,30,27,27,20,20,19,0]
      propeller: true
      texture: [1.9,2.9,2.9,8,17,18,17,18,17,4,12,16.9]
    main_colour:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-91,-90,-75,-45,-2,5]
        z: [0,0,-2,-4,-6.9,-6.9,0]
      width: [0,2,10,17,21,21,21,21].mult(1.1)
      height: [0,2,10,20,26.5,26.5].div(2)
      texture: [63]      
    main2:
      section_segments: 6
      offset:
        x: .1
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-91,-90,-75,-45,-2]
        z: [0,0,0,0,0]
      width: [0,2,10,17,21]
      height: [0,2,10,19.8,29.8]
      texture: [1.9,2.9,2.9,2.9]      
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -37
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-15,10,30,60]
        z: [1,-3,-3,4,0]
      width: [0,7,10,10,5]
      height: [0,18,25,18,5]
      propeller: false
      texture: [9,9,4]
    shield:
      section_segments: 6
      offset:
        x: 10
        y: 60
        z: 14
      position:
        x: [0,0,-1,-1,-1,-2,-2.2,-4+3,-4]
        y: [-70,-65,-50,-27,-25,25,27,39,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,18,18,18,18,18,5,0]
      height: [0,5,9,9,9,9,9,5,0]
      texture: [3.9,3.9,63,16.9,8,16.9,63,16.9]    
    cannons:
      section_segments: 6
      offset:
        x: 19
        y: 20
        z: 4
      position:
        x: [0,0,0,0,-2,-2,-2,-2,-2]
        y: [-28,-25,-30,-30,60,60,50]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2,6.5,8,8,7,0]
      height: [0,2,4.5,6,6,5,0]
      propeller: true
      texture: [16.9,12.9,17,10,16.9]
      laser:
        damage: [15,20]
        rate: 3
        type: 1
        speed: [120,180]
        number: 1
        error: 0  
    deco:
      section_segments: 6
      offset:
        x: 76
        y: 57
        z: 23
      position:
        x: [0,0,0,0,0,0]
        y: [-34,-33,-20,35,38,38.5]
        z: [0,0,0,0,0,0]
      width: [0,2,5,5,2,0]
      height: [0,2,5,5,2,0]
      texture: [113,[15],[17],13]
    deco2:
      section_segments: 6
      offset:
        x: 75.5
        y: 57
        z: 23
      position:
        x: [0,0,0,0,0,0]
        y: [-34,-33,-20,35,38,38.5]
        z: [0,0,0,0,0,0]
      width: [0,2,5,5,2,0]
      height: [0,2,5,5,2,0]
      texture: [113,[15],63,13]
    joint:
      section_segments: 6
      offset:
        x: 9
        y: -25
        z: 15
      position:
        x: [0,0,0,0,0]
        y: [0,0,3,3,0]
        z: [0,0,0,0,0]
      width: [3,10,10,10,3]
      height: [3,14,14,14,3]
      texture: [63]       
    joint2:
      section_segments: 6
      offset:
        x: 8
        y: -35
        z: 14
      position:
        x: [0,0,0,0,0]
        y: [0,0,3,3,0]
        z: [0,0,0,0,0]
      width: [3,10,10,10,3]
      height: [3,14,14,14,3]
      texture: [63]       
    joint3:
      section_segments: 6
      offset:
        x: 9.5
        y: -15
        z: 16.8
      position:
        x: [0,0,0,0,0]
        y: [0,0,3,3,0]
        z: [0,0,0,0,0]
      width: [3,10,10,10,3]
      height: [3,14,14,14,3]
      texture: [63]             
  wings: 
    main:
      doubleside: true
      offset:
        x: 11
        y: -35
        z: 8
      length: [20,50,25]
      width: [100,80,50,20]
      angle: [20,10,0]
      position: [75,85,100,120]
      texture: [1,63,[18]]
      bump:
        position: 30
        size: 4
    winglets:
      doubleside: true
      offset:
        x: 80
        y: -35
        z: 25
      length: [30/1.5]
      width: [32,20/1.7]
      angle: [-2]
      position: [103,118]
      texture: [63]
      bump:
        position: 30
        size: 5        
    main2:
      doubleside: true
      offset:
        x: 11
        y: -34
        z: 8
      length: [20,50,0]
      width: [100,80,50,20]
      angle: [20,10,0]
      position: [75,85,100,120]
      texture: [11,18]
      bump:
        position: 30
        size: 4      
    main3:
      doubleside: true
      offset:
        x: 11
        y: -36
        z: 9
      length: [20,50,0]
      width: [130/2,130/2,70/2,20]
      angle: [20,9.7,0]
      position: [85,85,100,120]
      texture: [11,18,8]
      bump:
        position: 20
        size: 4            
    main4:
      doubleside: true
      offset:
        x: 11
        y: -37
        z: 8
      length: [20,50,25]
      width: [100,80,50,20]
      angle: [20,10,0]
      position: [75,85,100,120]
      texture: [17]
      bump:
        position: 30
        size: 0
for i in [0...5]
  model.bodies["cannon_ring"+i] =        
    section_segments: 4
    offset:
      x: 0
      y: 3.5 + i * 6
      z: 29
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,3]
      z: [0,0,0,0,0]
    width: [3,13,13,13,13]
    height: [3,12,12,12,12]
    texture: [17,2,63]          
t = -30
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;       
