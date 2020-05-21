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
  name: 'Excelsior'
  level: 2
  model: 1
  size: 1.4
  specs:
    shield:
      capacity: [130,160]
      reload: [4,5]
    generator:
      capacity: [60,90]
      reload: [25,35]
    ship:
      mass: 85
      speed: [110,130]
      rotation: [100,120]
      acceleration: [100,125]
  bodies:
    ring: ring(17,80,10,6,5,10,1,.2,0,[4,17,18,18,17,4,4],0)
    ring2: ring(17,70,10,6,5,10,1,.2,0,[4,17,18,18,17,4,4],0)
    ring3: ring(17,60,10,6,5,10,1,.2,0,[4,17,18,18,17,4,4],0) 
    ring5: ring(9,40,20,18,5,5,.6,.2,0,[4,81,63,63,81,4,4],0)
    ring6: ring(9,33.5,20,18,5,5,.6,.2,0,[4,81,63,63,81,4,4],0)
    ring7: ring(9,26.5,20,18,5,5,.6,.2,0,[4,81,63,63,81,4,4],0)
    ring8: ring(9,20,20,18,5,5,.6,.2,0,[4,81,63,63,81,4,4],0)
    reactor: hub(9,17,-99,16,4,7,1,30,[18,17,17,18,18,17])
    reactor2: hub(0,20,-79,16,7,7,1,0,[18,17,17,18,18,17])
    ring4: ring(0,99,17,18,11,12,.7,.2,0,[4,17,[15],[15],17,4,4],0)    
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-61,-60,-55,-15,0,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,8,19,21,19].mult(1.1)
      height: [0,2,6,12,14,16].div(1.1)
      texture: [63,63,63,4]
    main2:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-61,-60,-55,-15,0,50,90,110,114,125,125,115]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,4,8,19,21,21,21,14,12,12,10,0]
      height: [0,2,6,12,14,16,14,12,10,10,9,0]
      propeller: !true
      texture: [1,2,2,3,3,18,8,17,12,16.99]      
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -20
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-15,0,20,30,70,84,88]
        z: [1,-2,-1,0,4,3,3]
      width: [0,8,10,10,10,10,10]
      height: [0,15,17,15,10,10,8]
      propeller: false
      texture: [7,9,9,8,4,4]
    shield:
      section_segments: 6
      offset:
        x: 10
        y: 70
        z: 8
      position:
        x: [0,0,-1,0,0,-1,-1.2,-3,-3]
        y: [-70,-65,-50,-27,-25,25,27,40,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,18,18,18,18,18,10,0]
      height: [0,5,9,9,9,9,9,5,0]
      texture: [3.9,3.9,63,16.9,8,16.9,63,16.9]
    engine:
      section_segments: 6
      offset:
        x: 65
        y: 122
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-79,-70,-70,-78,-77,-67,-65,-2,1,6,10,15,15,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,4,5,11,12,12,10,10,12,12,9,9,8,0]
      height: [0,1,4,5,11,12,12,10,10,12,12,9,9,8,0]
      texture: [13,3,16.9,[15],3,4,16.9,63,16.9,3.9,3.9,12.9,16.9]
      angle: 1
      propeller: !true   
      laser:
        damage: [5,7]
        rate: 4
        type: 1
        speed: [150,180]
        number: 1
        error: 1       
    engine2:
      section_segments: 6
      offset:
        x: 65.5
        y: 122
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-80,-79,-70,-70,-78,-77,-67,-65,-2,1,6,10,15,15,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,4,5,11,12,12,10,10,12,12,9,9,8,0]
      height: [0,1,4,5,11,12,12,10,10,12,12,9,9,8,0]
      texture: [13,3,16.9,[15],3,4,16.9,8,16.9,3.9,3.9,12.9,16.9]        
      angle: 1
  wings: 
    main:
      offset:
        x: 0
        y: 80
        z: 12
      length: [30,40,20]
      width: [40,40,40,20]
      angle: [-10,-10,10]
      position: [-10,-10,10,15]
      doubleside: true
      bump:
        position: 30
        size: 5
      texture: [4,63,3]
    main2:
      offset:
        x: 0
        y: 82
        z: 12
      length: [30,40,20]
      width: [40,40,40,20]
      angle: [-10,-10,10]
      position: [-10,-10,10,15]
      doubleside: true
      bump:
        position: 30
        size: 5
      texture: [[15],18,3]  
    main3:
      offset:
        x: 0
        y: 78
        z: 12
      length: [30,40,20]
      width: [40,40,40,20]
      angle: [-10,-10,10]
      position: [-10,-10,10,15]
      doubleside: true
      bump:
        position: 30
        size: 0
      texture: [17]
    main4:
      offset:
        x: 0
        y: 70
        z: 12
      length: [30,40,0]
      width: [40,40,40,20].div(2)
      angle: [-10,-10,10]
      position: [-10,-10,10,15]
      doubleside: true
      bump:
        position: 30
        size: 6
      texture: [4,18.13,3]  
    main5:
      offset:
        x: 0
        y: 84
        z: 13.5
      length: [30,40,0]
      width: [40,40,40,20].div(10)
      angle: [-10,-10,10]
      position: [-10,-10,10,15]
      doubleside: true
      bump:
        position: 30
        size: 6
      texture: [4,17,3]        
    front:
      offset:
        x: 0
        y: -35
        z: 12
      length: [75].div(2)
      width: [50,10].div(2)
      angle: [-20].div(2)
      position: [15,70].div(2)
      texture: [63]      
      doubleside: true
      bump:
        position: -20
        size: 10  
    front2:
      offset:
        x: 0
        y: -35
        z: 12
      length: [75-1].div(2)
      width: [50,10].div(2)
      angle: [-20].div(2)
      position: [15,70].div(2)
      texture: [18]      
      doubleside: true
      bump:
        position: -20
        size: 10  
    front_lights:
      offset:
        x: 0
        y: -37
        z: 12
      length: [75].div(2)
      width: [50,10].div(2)
      angle: [-20].div(2)
      position: [15,71].div(2)
      texture: [17]      
      doubleside: true
      bump:
        position: -20
        size: 0          
for i in [0...7*2-1]
  model.bodies["strike"+i] = 
    section_segments: 6
    offset:
      x: 64
      y: 2
      z: -55
    position:
      x: [0,0,0,0]
      y: [0,0,10,10]
      z: [0,0,10,10]
    width: [0,.8,.8,0]
    height: [0,.8,.8,0]
    texture: [17]
    angle: i*360/12
    vertical: true
t = -35      
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
