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
model =
  name: 'Daedalus'
  level: 3
  model: 3
  size: 1.8
  specs:
    shield:
      capacity: [220,260]
      reload: [5,9]
    generator:
      capacity: [150,170]
      reload: [60,80]
    ship:
      mass: 360
      speed: [100,115]
      rotation: [70,90]
      acceleration: [80,100]
  bodies:
    reactor: hub(0,11,-36.5,16,5,6,1,0,[18,17,17,18,18,17])
    ring: ring(7.5,39,5,6,5,8,1,-.2,0,16.9,0)
    ring2: ring(7.5,32,5,6,5,8,1,-.2,0,16.9,0)
    ring3: ring(38,-8,40,[45,135,225,315],5,5,1,-.2,1,16.9,0)
    ring4: ring(6,-7,3,6,6,8,.4,.3,0,[63,2,17,63,2,17],0)
    ring5: ring(6.3,0,3.6,6,6,8,.4,.3,0,[63,2,17,63,2,17],0)
    ring6: ring(6.7,7,3.9,6,6,8,.4,.3,0,[63,2,17,63,2,17],0)
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-65,-64,-60,-50,10,15,17.5,56,65,75,75,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,6,10,15,15,15,16,18,15,14,0].mult(1.1)
      height: [0,1,4,5.12,14.4,15,15,15,15,10,9,0]
      propeller: true
      texture: [3.9,3.9,2.9,2.9,3.9,17,18,3.9,13,16.9]
    head:
      section_segments: [0,60,120,180]
      offset:
        x: -2
        y: 0
        z: 0
      position:
        x: [.5,.5,0,0,-10,-10]
        y: [-60,-60,-52,-36,-20,-20]
        z: [0,0,0,0,2.5,0]
      width: [0,5.5,9,11,0.1,0]
      height: [0,4,5.5,8,2.5,0]
      texture: [3.9,3.9,3.9,2.9] 
    head_deco:
      section_segments: [0,60,120,180]
      offset:
        x: -2.6
        y: 0
        z: 0
      position:
        x: [.5,.5,0,0,-9.5,-9.5]
        y: [-60,-60,-52,-36,-20,-20]
        z: [0,0,0,0,0.2,0]
      width: [0,5.5,9,11,0.1,0]
      height: [0,1,2,2,2,0]
      texture: [3.9,63]       
    shield:
      section_segments: 6
      offset:
        x: 5
        y: 25
        z: -2
      position:
        x: [0,0,-1,0,0,-1,-1.2,9,9]
        y: [-70,-65,-50,-27,-25,33,35,43,35]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,14,15,15,18,18,2,0]
      height: [0,5,9,9,9,9,9,5,0].div(1.7)
      texture: [3.9,3.9,63,16.9,8,16.9,63,16.9]      
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-4,-2,0,5,30,40,42]
        z: [-4,-4,-4,-3,0,0,0]
      width: [0,2,4,8,10,10,0]
      height: [0,5,7,8,8,6,0]
      propeller: false
      texture: [7,7,9,9,4]      
    outer_arms:
      section_segments: 6
      offset:
        x: 58
        y: -10
        z: -8
      position:
        x: [1.5,4.5,4.5,4.5,8,11,14,16,16,14,12,10,8.5,0]
        y: [-100,-86,-85,-85,-60,-40,-20,-0,20,40,60,80,80,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0.5,2,5,6,8,8,8,8,8,8,7,5,4,0].mult(1.1)
      height: [0.5,2,5,6,6,6,7,9,12,15,15,8,8,0]
      propeller: false
      texture: [16.9,17.9,16.9,3.9,11,2.9,11,16,63,16,[15]]
    outer_arms2:
      section_segments: 6
      offset:
        x: 58.5
        y: -10
        z: -8
      position:
        x: [1.5,4.5,4.5,4.5,8,11,14,16,16,14,12,10,8.5,0]
        y: [-100,-86,-85,-85,-60,-40,-20,-0,20,40,60,80,80,80]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0.5,2,5,6,8,8,8,8,8,8,7,5,4,0].mult(1.1)
      height: [0.5,2,5,6,6,6,7,9,12,15,15,8,8,0]
      propeller: false
      texture: [16.9,17.9,16.9,.9,18,8,18,3.9,16.9,3.9,[15]]      
    outer_arms_deco:
      section_segments: 6
      offset:
        x: 56.5
        y: -10
        z: -8
      position:
        x: [4.5,4.5,8,11,14,16,16,14,14,10,8,0]
        y: [-84.9,-84.9,-60,-40,-20,-0,20,40,60,80,90,90]
        z: [0,0,0,0,0,0,0,0,0,0,-5,0]
      width: [2,6,8,8,8,8,8,8,7,5,4,0].mult(1.1)
      height: [1,1,1,1,1,1,1,1,1,1]
      propeller: false
      texture: [63]       
    propeller:
      section_segments: 6
      offset:
        x: 68
        y: 60
        z: -8
      position:
        x: [3,3,3,0,0,0,0]
        y: [-16,-16,-12,7,15,15,10]
        z: [0,0,0,0,0,0,0]
      width: [0,8,10,10,8,7,0]
      height: [0,15,17,12,10,9,0]
      propeller: true
      texture: [2.9,16.9,3.9,12.9,16.9]  
    inner_arm:
      section_segments: 6
      offset:
        x: 43
        y: -70
        z: -7.5
      position:
        x: [-3,-3,0,0,0,0]
        y: [40,40,60,90,107,110]
        z: [0,0,0,0,0,0]
      width: [0,10,10,12,12,0]
      height: [0,5,5,5,5,0]
      propeller: false
      texture: [[15],18,17,63] 
    inner_arm2:
      section_segments: 6
      offset:
        x: 43.5
        y: -70
        z: -7.5
      position:
        x: [-3,-3,0,0,0,0]
        y: [40,40,60,90,107,110]
        z: [0,0,0,0,0,0]
      width: [0,10,10,12,12,0]
      height: [0,5,5,5,5,0]
      propeller: false
      texture: [[15],11,4,63]  
    inner_arm_jaw:
      section_segments: [0,180,225,315]
      offset:
        x: 40.5
        y: -50
        z: -7.5
      position:
        x: [-3.8,-3,0,0]
        y: [-6,0,20,20]
        z: [0,0,0,0]
      width: [0.1,12,12,0]
      height: [0.1,4,4,0]
      propeller: false
      texture: [16.9,2.9]        
    inner_arm_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 40.5
        y: -70
        z: -7.5
      position:
        x: [0.5,-3,0,0,0,0]
        y: [40,40,60,80,100,100]
        z: [0,0,0,0,0,0]
      width: [5,10,10,12,12,0]
      height: [1,1,1,1,1,0]
      propeller: false
      texture: [63]        
    cannon:
      section_segments: 6
      offset:
        x: 37
        y: -20
        z: -7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-40,-37,-30,-25,0]
        z: [0,0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,2,2.5,3,3,3,3,3,3,3,3,3,0]
      height: [0,2,2.5,3,3,3,3,3,3,3,3,0]
      angle: 7
      texture: [16.9,16.9,63,4,18,17,2,11,4,4]  
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 1.5
        y: -3
        z: 1
      position:
        x: [0,0,0,0,0]
        y: [5,5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,2,2,1,0]
      height: [0,15,15,13,0]
      texture: [63,17,63]
      angle: 35
      vertical: true      
    lights:
      section_segments: 8
      offset:
        x: 10
        y: 31
        z: 4
      position:
        x: [-2,-2,7,7]
        y: [0,0,50,50]
        z: [0,0,-9,-9]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      angle: 90
      texture: [63,17,63]     
    lights2:
      section_segments: 8
      offset:
        x: 10
        y: 36.5
        z: 4
      position:
        x: [-4,-4,7,7]
        y: [0,0,50,50]
        z: [1,1,-9,-9]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      angle: 90
      texture: [63,17,63]           
  wings: 
    main:
      offset:
        x: 0
        y: 40
        z: 6
      length: [70]
      width: [40,35]
      angle: [-10]
      position: [0,-15]
      doubleside: true
      bump:
        position: 30
        size: 5
      texture: [18]
    main_lights:
      offset:
        x: 0
        y: 38
        z: 6
      length: [70]
      width: [40,35]
      angle: [-10]
      position: [0,-15]
      doubleside: true
      bump:
        position: 30
        size: 0
      texture: [17]   
    main2:
      offset:
        x: 0
        y: 40
        z: 6.7
      length: [61]
      width: [20,15]
      angle: [-10]
      position: [0,-13]
      doubleside: true
      bump:
        position: 40
        size: 10
      texture: [63]      
t = 10
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;    
