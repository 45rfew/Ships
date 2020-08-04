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
      y: [0,9,8,8,10,7,8].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a        
model =
  name: "Calamity"
  level: 4
  model: 4
  size: 1.4
  specs:
    shield:
      capacity: [175,235]
      reload: [6,8]
    generator:
      capacity: [100,200]
      reload: [40,50]
    ship:
      mass: 200
      speed: [80,100]
      rotation: [60,90]
      acceleration: [90,110]
  bodies:
    ring: ring(0,20,10,12,7,6,1,-.2,0,16.9,0)
    ring2: ring(0,15,10.5,12,9,7,1,-.2,0,16.9,0)    
    ring3: ring(0,10,11,12,12,6,1,-.2,0,16.9,0)  
    reactor: hub(0,20,29,16,5,7.3,1,0,[18,17,17,18,18,17])
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-110.5,-110,-100,-55,0,25,20,20,30,30,28]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.7,9,18,30,10,10,10,10,9,0]
      height: [0,1,1.2,5,20,30,15,15,15,15,14,0]
      texture: [17,17,2,10.235,18,[15],1,1,18,17]
      propeller: true
      angle: 0
      laser:
        damage: [50,100]
        rate: 2
        type: 1
        speed: [110,160]
        number: 1
        angle: 0
        recoil: 690
        error: 0
    shield:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-5,-2.55,0,3].add(10)
        y: [-105,-100,-55,0]
        z: [0,0,0,0]
      width: [0,5,18,28].div(2)
      height: [0,4,16.5,28]
      texture: [17,8.3,4]  
    shield2:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [5,2.55,0,-3].add(-10)
        y: [-105,-100,-55,0]
        z: [0,0,0,0]
      width: [0,5,18,28].div(2)
      height: [0,4,16.5,28]
      texture: [17,8.1,4]     
    shield3:
      section_segments: 8
      offset:
        x: 11.1
        y: 0
        z: 0
      position:
        x: [-3.6,-3.6,-.6,2.6]
        y: [-100,-100,-55,0]
        z: [0,0,0,0]
      width: [0,5,18,28].div(2)
      height: [0,4,16.5,28].div(1.3)
      texture: [3,63,[15]]           
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,0,30,40]
        z: [1,-2,-1,0,0]
      width: [0,7,10,10,0]
      height: [0,10,13,12,0]
      texture: [9,9,4]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 100.6
        y: -40
        z: 36
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-50,-50,-45,-20,0,20,25,20].div(1.5)
        z: [0,0,0,0,0,0,0,0]
      width: [0,2,5,10,10,15,10,0].div(1.5)
      height: [0,2,5,10,10,10,5,0]
      angle: 3
      laser:
        damage: [10,15]
        rate: 8
        type: 2
        speed: [120,140]
        number: 1
        angle: 1
        recoil: 0
        error: 6
      propeller: false
      texture: [16.9,16.9,4,17.9,4,63,17]
    wings_deco:
      section_segments: 8
      offset:
        x: 29
        y: 3
        z: 15
      position:
        x: [-20,-1,0,0]
        y: [-74.6,0,0,0]
        z: [31,-2,0,0]
      width: [2,3,3,2]
      height: [2,3,3,2]
      texture: [63]
      angle: 277
    lights:
      section_segments: 8
      offset:
        x: 0
        y: -35
        z: 13
      position:
        x: [0,0,0,0]
        y: [20,20,60,60]
        z: [0,2.3,-11.2,-10]
      width: [0,5,6,0]
      height: [0,5,5,0]
      texture: [17]
      angle: 180
  wings:
    main:
      offset:
        x: 0
        y: 0
        z: 0
      doubleside: true
      length: [110,40]
      width: [70,30,70]
      texture: [4,63]
      angle: [25,-30]
      position: [-20,-40,-11]
      bump:
        position: 10
        size: 15
    main2:
      offset:
        x: 0
        y: 1
        z: 0
      doubleside: true
      length: [110,40-1]
      width: [70,30,70]
      texture: [18,[15]]
      angle: [25,-30]
      position: [-20,-40,-11]
      bump:
        position: 10
        size: 15 
    main3:
      offset:
        x: 0
        y: 1
        z: 3
      doubleside: true
      length: [104]
      width: [50,14]
      texture: [11]
      angle: [25]
      position: [-26,-41.9]
      bump:
        position: 20
        size: 16         
    main_lights:
      offset:
        x: 0
        y: -2
        z: 0
      doubleside: true
      length: [110,40+2]
      width: [70,30,74]
      texture: [17]
      angle: [25,-30]
      position: [-20,-40,-9]
      bump:
        position: 10
        size: 0 
    main_deco:
      offset:
        x: 0
        y: -4
        z: 4
      doubleside: true
      length: [103.5]
      width: [4,2]
      texture: [17]
      angle: [24.7]
      position: [-38,-41.9]
      bump:
        position: 20
        size: 86 
    main_deco2:
      offset:
        x: 0
        y: 2
        z: 10
      doubleside: true
      length: [101.3]
      width: [4,2]
      texture: [17]
      angle: [22]
      position: [-18,-41.9]
      bump:
        position: 20
        size: 86         
    winglets:
      offset:
        x: 0
        y: -30-1
        z: 0.5
      length: [30,60]
      width: [100-3,30,0]
      angle: [50,-30]
      position: [10,30,80]
      texture: [63]
      bump:
        position: 10
        size: 31
    winglets2:
      offset:
        x: 0
        y: -29-1
        z: 0.5
      length: [30,60]
      width: [100-3,30,0]
      angle: [50,-30]
      position: [10,30,80]
      texture: [13,17]
      bump:
        position: 10
        size: 31
t = 10 
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;          
