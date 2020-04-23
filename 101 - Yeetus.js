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
return model =
  name: "Yeetus"
  level: 1
  model: 1
  size: 1
  specs:
    shield:
      capacity: [130,160]
      reload: [5,6]
    generator:
      capacity: [80,100]
      reload: [20,30]
    ship:
      mass: 120
      speed: [150,165]
      rotation: [110,130]
      acceleration: [80,100]
  bodies:
    ring: ring(17,65,0,18,23,15,1,.2,0,[4,17,18,18,17,4,4],0)
    ring2: ring(19,55,0,18,25,15,1,.2,0,[4,17,18,18,17,4,4],0)
    reactor: hub(9,31,-37,16,4,5,1,35,[18,17,17,18,18,17])
    ring3: ring(0,37,30,18,10,11,.7,.2,0,[4,17,[15],[15],17,4,4],0)
    front:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-94,-95,-100,-100,45,75,85]
        z: [0,0,0,0,0,0,0]
      width: [0,7,14,15,35,30,20]
      height: [0,1.5,3,4,40,30,8]
      texture: [[15],63,17,2.9,1.9,63]
      laser:
        damage: [30,40]
        rate: 2
        type: 1
        speed: [120,150]
        number: 1
        recoil: 30
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [45,45,45,75,85]
        z: [0,7,0,0,0]
      width: [0,12.3,32.5,27,17]
      height: [0,5.5,42,32,10]
      texture: [3,2,8,63]        
    shield:
      section_segments: 6
      offset:
        x: 24
        y: 27
        z: 0
      position:
        x: [-15,-2,0,-3,-3]
        y: [-110,-30,9,47,45]
        z: [0,0,0,0,0]
      width: [0,7,11,7,0]
      height: [0,10,15,7,0]
      texture: [1,[15],[15],63]
      angle: 0        
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 12
        z: 12.5
      position:
        x: [0,0,0,0,0,0,0]
        y: [-78,-75,-70,-25,0,10,10]
        z: [0,0,0,0,10,13,13]
      width: [1,5,10,15,17,10,0]
      height: [0.01,2,4,21,10,10,0]
      texture: [7,7,9,13,4]
    propulsors:
      section_segments: 10
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0]
        y: [30,105,105,95]
        z: [0,0,0,0]
      width: [15,20,18,0]
      height: [15,15,13,0]
      propeller: true
      texture: [12,16.99]
    joint:
      section_segments: 6
      offset:
        x: 20
        y: 35
        z: 11.5
      position:
        x: [-.5,0,0,0,0,-.5]
        y: [-2,.5,2,2,-2,-2]
        z: [0,0,0,0,0,0]
      width: [12,12,12,10,10,12]
      height: [15,15,15,13,13,15]
      texture: [3.9,63,3.9]    
    joint2:
      section_segments: 6
      offset:
        x: 19
        y: 25
        z: 10
      position:
        x: [-.5,0,0,0,0,-.5]
        y: [-2,.5,2,2,-2,-2]
        z: [0,0,0,0,0,0]
      width: [12,12,12,10,10,12]
      height: [15,15,15,13,13,15]
      texture: [3.9,63,3.9]   
    joint3:
      section_segments: 6
      offset:
        x: 19
        y: 15
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-2,.5,2,2,-2,-2]
        z: [0,0,0,0,0,0]
      width: [10,10,10,8,8,10]
      height: [13,13,13,11,11,13]
      texture: [3.9,63,3.9]          
  wings:
    main:
      doubleside: true
      offset:
        x: 10
        y: 50
        z: -10
      length: [70,20]
      width: [60,10]
      angle: [30,0]
      position: [-20,50]
      texture: [63]
      bump:
        position: 20
        size: 5
    main2:
      doubleside: true
      offset:
        x: 10
        y: 45
        z: -10
      length: [70,20]
      width: [60,10]
      angle: [30,0]
      position: [-20,50]
      texture: [17]
      bump:
        position: 20
        size: 0     
    main3:
      doubleside: true
      offset:
        x: 10
        y: 51
        z: -10.01
      length: [70,20]
      width: [60,10]
      angle: [30,0]
      position: [-20,50]
      texture: [18]
      bump:
        position: 20
        size: 5        
    winglets:
      doubleside: true
      offset:
        x: 8
        y: 30
        z: 10
      length: [40,100,20]
      width: [40,60,20]
      angle: [-30,55,90]
      position: [0,-40,130,0]
      texture: [63]
      bump:
        position: 20
        size: 30
    winglets2:
      doubleside: true
      offset:
        x: 8
        y: 23
        z: 10
      length: [40,100,20]
      width: [40,60,20]
      angle: [-30,55,90]
      position: [0,-40,130,0]
      texture: [17]
      bump:
        position: 20
        size: 0    
    winglets3:
      doubleside: true
      offset:
        x: 7.99
        y: 32
        z: 10
      length: [40,100,20]
      width: [0,60,20]
      angle: [-30,55,90]
      position: [0,-40,130,0]
      texture: [18]
      bump:
        position: 20
        size: 30        
