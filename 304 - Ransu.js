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
  name: "Ransu"
  level: 3
  model: 4
  size: 1.5
  Designer: 'Hallower'
  specs:
    shield:
      capacity: [195,230]
      reload: [5,8]
    generator:
      capacity: [80,110]
      reload: [35,40]
    ship:
      mass: 220
      speed: [80,100]
      rotation: [40,70]
      acceleration: [65,100]
  bodies:
    ring: ring(10,3,-65,18,12,15,.5,.4,1,17,0,0)
    ring2: ring(10-1,-1,-60,18,12,15,.5,.4,1,17,0,0)
    ring3: ring(10-2,-4,-55,18,12,15,.5,.4,1,17,0,0)
    ring4: ring(12,-53,0,8,9,6,.5,.4,0,[4,4,63],0,0)
    ring5: ring(13,-43,0,8,9.5,6,.5,.4,0,[4,4,63],0,0)
    ring6: ring(14,-33,0,8,10,6,.5,.4,0,[4,4,63],0,0)
    ring7: ring(15,-23,0,8,10.8,6,.5,.4,0,[4,4,63],0,0)
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-155,-124,-126,-70,-5,27,77,82,85,100,100,97]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,6,17,25,25,24,21,21,18,16.5,0]
      height: [0,3,6,10,20,20,20,19,19,18,16.5,0]
      texture: [6,16.9,63,10,2,11,3.9,17,12,16.9]
      propeller: true
      laser:
        damage: [35,60]
        rate: 2
        type: 1
        speed: [100,130]
        recoil: 40
        number: 1
        error: 0
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -5
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-16,-15,-2,15,30,45,48]
        z: [-2.3,-2.3,-4,-5,-6,-3,-1]
      width: [0,2,9,13,13,13,0]
      height: [0,1,5,7,10,5,0]
      texture: [7,9,9,9,3.9]
    propellers:
      section_segments: 6
      offset:
        x: -18
        y: -42
        z: -7
      position:
        x: [39,48,55,55,55,55,55,55,55,55,55]
        y: [40,70,95,117,122,125,135,135,125]
        z: [7,5,3,0,0,0,0,0,0,0,0]
      width: [7,9,10,10,9.5,9,8,6.5,0]
      height: [5,8,10,12,11.5,11,10,8.5,0]
      texture: [63,8,18,3.9,16.9,12,16.9]
      propeller: true
    propellers2:
      section_segments: 6
      offset:
        x: -18.5
        y: -42
        z: -7
      position:
        x: [39,48,55,55,55,55,55,55,55,55,55]
        y: [40,70,95,117,122,125,135,135,125]
        z: [7,5,3,0,0,0,0,0,0,0,0]
      width: [7,9,10,10,9.5,9,8,6.5,0]
      height: [5,8,10,12,11.5,11,10,8.5,0]
      texture: [3.9,2.9,11,3.9,16.9,12,16.9]
    bar:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 7
        z: -40
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,20,20,18,0]
      texture: [63,17,63]
      angle: 50
      vertical: true
    reactor:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -56.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,-10,11,22,22,20,20,20]
        z: [0,0,0,-4,-4,-4,-4,-4]
      width: [0,30,30,13,10,10,8,0].div(1.2)
      height: [0,40,40,23-5,18-4,18-3,16-4,0]
      texture: [2.9,2.9,17.6,17.92,3.9,63,16.92]
      vertical: true  
    reactor2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -56.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-10,-10,11,22,22,20,20,20]
        z: [0,0,0,-4,-4,-4,-4,-4]
      width: [0,30,30,13,10,10,8,0].div(1.21)
      height: [0,40,40,23-5,18-4,18-3,16-4,0].mult(1.01)
      texture: [2.9,2.9,10,17.92,3.9,63,16.92]
      vertical: true          
    spike_ring: 
      section_segments: 6
      offset:
        x: 0
        y: -130
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,2,2,0]
        z: [0,0,0,0,0]
      width: [3,5,5,3,3]
      height: [3,5,5,3,3]
      texture: [16.9]       
    spike_ring2: 
      section_segments: 6
      offset:
        x: 0
        y: -135
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,2,2,0]
        z: [0,0,0,0,0]
      width: [3,4,4,3,3]
      height: [3,4,4,3,3]
      texture: [16.9]  
    spike_ring3: 
      section_segments: 6
      offset:
        x: 0
        y: -140
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,2,2,0]
        z: [0,0,0,0,0]
      width: [2,3,3,2,2]
      height: [2,3,3,2,2]
      texture: [16.9] 
    spike_ring4: 
      section_segments: 6
      offset:
        x: 0
        y: -145
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,2,2,0]
        z: [0,0,0,0,0]
      width: [1,2,2,1,1]
      height: [1,2,2,1,1]
      texture: [16.9] 
    lights:
      section_segments: 4
      offset:
        x: 0
        y: -5
        z: 10
      position:
        x: [0,0,0,0]
        y: [0,0,65,65]
        z: [0,8,-2,0]
      width: [0,4,3,0]
      height: [0,3,3,0]
      texture: [17]      
      angle: 180
  wings:
    main:
      doubleside: true
      offset:
        x: 10
        y: -35
        z: 0
      length: [50,40]
      width: [90,60,20]
      angle: [-10,-45]
      position: [0,100,50]
      texture: [11,63]
      bump:
        position: 10
        size: 10
    main2:
      doubleside: true
      offset:
        x: 10
        y: -34
        z: 0
      length: [50,40]
      width: [90,60,20]
      angle: [-10,-45]
      position: [0,100,50]
      texture: [18,63]
      bump:
        position: 10
        size: 10        
    main_lights:
      doubleside: true
      offset:
        x: 10
        y: -40
        z: 0
      length: [50,40]
      width: [90,60,20]
      angle: [-10,-45]
      position: [0,100,50]
      texture: [17]
      bump:
        position: 10
        size: 0        
    top:
      doubleside: true
      offset:
        x: 58.8
        y: 65
        z: -9
      length: [40]
      width: [60,20]
      angle: [35]
      position: [0,-50]
      texture: [63]
      bump:
        position: 10
        size: 10
    top_lights:
      doubleside: true
      offset:
        x: 58.8
        y: 62
        z: -9
      length: [40]
      width: [60,20]
      angle: [35]
      position: [0,-50]
      texture: [17]
      bump:
        position: 10
        size: 0
