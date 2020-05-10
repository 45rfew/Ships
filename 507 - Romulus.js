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
  name: 'Romulus'
  level: 5
  model: 7
  size: 1.6
  specs:
    shield:
      capacity: [300,380]
      reload: [12,15]
    generator:
      capacity: [200,280]
      reload: [80,120]
    ship:
      mass: 410
      speed: [90,105]
      rotation: [50,80]
      acceleration: [70,90]
  bodies:
    ring: ring(10,-64,0,8,8,6,.5,.4,0,[4,4,63],0,0)
    ring2: ring(11.7,-54,0,8,8.5,6,.5,.4,0,[4,4,63],0,0)
    ring3: ring(13.5,-44,0,8,9,6,.5,.4,0,[4,4,63],0,0)
    ring4: ring(15.8,-34,0,8,9.5,6,.5,.4,0,[4,4,63],0,0)
    ring5: ring(15,-4,9,6,9.5,6,.5,.1,0,[4,4,17,17,4,4,],0,0)
    ring6: ring(15,0.5,9,6,9.5,6,.5,.1,0,[4,4,17,17,4,4,],0,0)
    ring7: ring(10,42,10,8,6,6,.5,.7,0,[4,4,17,17,4,4,],0,0)
    main:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-124,-96,-98,-60,8,65,68,80,80,70]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.4,4.4,12,27,24,24,22,21,0]
      height: [0,2.4,4.4,11,16,16,16,14,13,0]
      texture: [6,17,63,10,2,17,13,17]
      propeller: true
      laser:
        damage: [120,140]
        rate: 2
        type: 1
        speed: [160,180]
        recoil: 180
        number: 1
        error: 0
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 4
        z: 11
      position:
        x: [0,0,0,0,0,0]
        y: [-36,-34,-15,4,12,16]
        z: [0,0,0,0,0,0]
      width: [0,6,12,12,8,0]
      height: [0,6,12,12,8,0]
      texture: [7,9,9,4]
    shield:
      section_segments: [0,60,120,180]
      offset:
        x: -8
        y: -5
        z: 15
      position:
        x: [6,6,0,0,0.5,0.5]
        y: [-30,-30,-6,13,30,30]
        z: [-3.5,-3.5,0,0,-8,-8]
      width: [0,3,10,10,9,0]
      height: [0,4,5,5,4,0]
      texture: [16.9,3.9,18,63,3.9]      
    cannons:
      section_segments: 6
      offset:
        x: 63.2
        y: 44
        z: -9.6
      position:
        x: [0,0,0,0,0,0,0,2.4,4]
        y: [-36,-44,-44,-16,0,24,45.6,49.6,52.8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3.2,4,4.8,4.8,4.8,4.8,2.40,0]
      height: [0,2.4,3.2,4.8,5.6,5.6,3.2,2.4,0]
      texture: [16.9,16.9,4,10,18]
      laser:
        damage: [6,10]
        rate: 5
        type: 2
        speed: [110,130]
        number: 1
        error: 1
    cannons2:
      section_segments: 6
      offset:
        x: 63.3
        y: 44
        z: -9.6
      position:
        x: [0,0,0,0,0,0,0,2.4,4]
        y: [-36,-44,-44,-16,0,24,45.6,49.6,52.8]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3.2,4,4.8,4.8,4.8,4.8,2.40,0]
      height: [0,2.4,3.2,4.8,5.6,5.6,3.2,2.4,0]
      texture: [16.9,16.9,11,10,18]        
    propellers:
      section_segments: 12
      offset:
        x: 24.8
        y: -40
        z: -11.44
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [53.6,56,80,96,100,108,108,98]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2.40,6.4,6.4,6,4.6,3.8,0]
      height: [0,1.6,8,9.6,9.2,7.8,7,0]
      texture: [4,10,1,11,12,17]
      propeller: true
    lights:
      section_segments: 6
      offset:
        x: 0
        y: -15
        z: 10
      position:
        x: [0,0,0,0]
        y: [-10,-10,65,65]
        z: [0,3.6,-1.8,0]
      width: [0,4,3,0]
      height: [0,3,3,0]
      texture: [17]      
      angle: 180 
    reactor:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -26.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,-10,11,22,22,20,20,20]
        z: [0,0,0,-4,-4,-4,-4,-4]
      width: [0,30,30,13,10,10,8,0].div(1.42)
      height: [0,40,40,23-5,18-4,18-3,16-4,0].div(1.8)
      texture: [2.9,2.9,10.6,16.92,3.9,3,16.92]
      vertical: true  
    reactor2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -26.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,-10,11,22,22,20,20,20]
        z: [0,0,0,-4,-4,-4,-4,-4]
      width: [0,30,30,13,10,10,8,0].div(1.43)
      height: [0,40,40,23-5,18-4,18-3,16-4,0].div(1.7)
      texture: [2.9,2.9,18,17.92,3.9,63,16.92]
      vertical: true       
    bar:  
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 7.5
        z: -29
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,10,10,8,0]
      texture: [63,17,63]
      angle: 50
      vertical: true
     
  wings:
    main:
      doubleside: true
      offset:
        x: 12
        y: 6.4
        z: 0
      length: [72]
      width: [72,48]
      angle: [-10]
      position: [8,80]
      texture: [11]
      bump:
        position: 10
        size: 10
    mainw:
      doubleside: true
      offset:
        x: 12
        y: 7.4
        z: 0
      length: [72]
      width: [72,48]
      angle: [-10]
      position: [8,80]
      texture: [18]
      bump:
        position: 0
        size: 11        
    main_lights:
      doubleside: true
      offset:
        x: 12
        y: 3.4
        z: 0
      length: [72]
      width: [72,48]
      angle: [-10]
      position: [8,80]
      texture: [17]
      bump:
        position: 10
        size: 0      
    top:
      doubleside: true
      offset:
        x: 12
        y: 24.8
        z: 4
      length: [64]
      width: [56,24]
      angle: [15]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 10
    top_lights:
      doubleside: true
      offset:
        x: 12
        y: 22
        z: 4
      length: [66]
      width: [56,25]
      angle: [15]
      position: [0,64]
      texture: [17]
      bump:
        position: 10
        size: 0        
    winglets:
      doubleside: true
      offset:
        x: 67.2
        y: 46.4
        z: -9.6
      length: [0,16]
      width: [0,120,48]
      angle: [-10,-10]
      position: [-8.8,-8.8,40]
      texture: [17,63]
      bump:
        position: 40
        size: 7 
    winglets_lights:
      doubleside: true
      offset:
        x: 67.2
        y: 46.4
        z: -9.6
      length: [0,17.5]
      width: [0,121,48]
      angle: [-10,-10]
      position: [-8.8,-8.8,40]
      texture: [4,17]
      bump:
        position: 40
        size: 0     
for i in [2...6] by .5
  model.bodies["cannon_ring"+i] = 
    section_segments: 6
    offset:
      x: 64
      y: 10 + i * 12
      z: -8.5
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2]
    height: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2]
    texture: [17]    
for i in [0...4]
  model.bodies["spike"+i] = 
    section_segments: 6
    offset:
      x: 0
      y: -138 + i * 6
      z: 0
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [1+i/2,2+i/2,2+i/2,1+i/2,1+i/2]
    height: [1+i/2,2+i/2,2+i/2,1+i/2,1+i/2]
    texture: [17]       
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
