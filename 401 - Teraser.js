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
  name: "Teraser"
  level: 4
  model: 1
  size: 1.2
  specs:
    shield:
      capacity: [160,210]
      reload: [4,5]
    generator:
      capacity: [100,150]
      reload: [55,65]
    ship:
      mass: 200
      speed: [80,105]
      rotation: [40,65]
      acceleration: [100,120]
  bodies:
    ring: ring(28,2,0,[45,135,225,315],17,20,1,.2,0,[4,18,17,17,18,4,4],0)
    ring2: ring(28,-9,1,[45,135,225,315],17,20,1,.2,0,[4,18,17,17,18,4,4],0)
    ring3: ring(18,15,20,16,16,12,1,.2,0,[4,18,17,17,18,4,4],0)
    reactor: hub(12,31,-15,[45,135,225,315],7,7.5,1,25,[18,17,17,18,18,17])
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-40,-40,-30,0,30,44,50,50,40]
        z: [0,0,0,0,0,0,0,0,0]
      width: [15,20,35,40,35,27,25,23,0]
      height: [20,30,40,40,35,25,25,23,0]
      texture: [5,7,8,8,18,17]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -32
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-8,0]
        z: [0,0,0]
      width: [0,20,25]
      height: [0,30,35]
      texture: [9]
      propeller: false
    laser_top:
      section_segments: 6
      offset:
        x: 0
        y: -55
        z: 156
      position:
        x: [0,0,0,0]
        y: [-3,0,35,36]
        z: [0,0,1,1]
      width: [0,3,2,0]
      height: [0,3,2,0]
      texture: [6,7]
      laser:
        damage: [3,4]
        rate: 2.5
        type: 2
        speed: [100,160]
        number: 1
        error: 0
    laser_bottom:
      section_segments: 6
      offset:
        x: 0
        y: -55
        z: -163
      position:
        x: [0,0,1,1]
        y: [-3,0,35,36]
        z: [0,0,0,0]
      width: [0,3,2,0]
      height: [0,3,2,0]
      texture: [6,7]
      laser:
        damage: [3,4]
        rate: 2.5
        type: 2
        speed: [100,160]
        number: 1
        error: 0
    lasers_side:
      section_segments: 6
      offset:
        x: 174
        y: -55
        z: 0
      position:
        x: [0,0,1,1]
        y: [-3,0,35,36]
        z: [0,0,0,0]
      width: [0,3,2,0]
      height: [0,3,2,0]
      texture: [6,7]
      laser:
        damage: [3,4]
        rate: 2.5
        type: 2
        speed: [100,160]
        number: 1
        error: 0
    topVent:
      section_segments: 6
      offset:
        x: 35
        y: -20
        z: 4
      position:
        x: [-2,-2,0,-2,-5,-6,-5,-5]
        y: [0,1,4,30,55,60,60,50]
        z: [-2,-2,0,-4,-6,-6,-6,-6].add(6)
      width: [0,5,8,10,8,8,7,0]
      height: [0,5,8,10,8,8,7,0]
      texture: [4,16,10,11,16.9]
      propeller: true
      laser:
        damage: [13,18]
        rate: 4
        type: 1
        speed: [120,160]
        number: 1
        error: 0
    bottomVent:
      section_segments: 6
      offset:
        x: 35
        y: -20
        z: -10
      position:
        x: [-2,-2,0,-2,-5,-6,-5,-5]
        y: [0,1,4,30,55,60,60,50]
        z: [-2,-2,-2,-4,-6,-6,-6,-6].add(6)
      width: [0,5,8,10,8,8,7,0]
      height: [0,5,8,10,8,8,7,0]
      texture: [4,16,10,11,16.9]
      propeller: true
      laser:
        damage: [13,18]
        rate: 4
        type: 1
        speed: [120,160]
        number: 1
        error: 0
  wings:
    top:
      doubleside: true
      offset:
        x: 0
        y: 1
        z: 30
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [1,11,10,1]
      bump:
        position: [-20]
        size: [15]
    top2:
      doubleside: true
      offset:
        x: 0
        y: 4
        z: 30
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [5]
    top3:
      doubleside: true
      offset:
        x: 0
        y: -.5
        z: 30
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [0]
        size: [5]
    side:
      doubleside: true
      offset:
        x: 15
        y: 0
        z: 0
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [18,8,3,4]
      bump:
        position: [-20]
        size: [20]
    side2:
      doubleside: true
      offset:
        x: 15
        y: 7
        z: 0
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [0]
    side3:
      doubleside: true
      offset:
        x: 15
        y: -1.5
        z: 0
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [0]
    side4:
      doubleside: true
      offset:
        x: 15
        y: -1
        z: 4
      length: [105]
      width: [35,25]
      angle: [0]
      position: [0,5]
      texture: [17]
      bump:
        position: [30]
        size: [25]       
    side5:
      doubleside: true
      offset:
        x: 15
        y: -.5
        z: 0
      length: [120,25,14]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [18,10,2,4]
      bump:
        position: [-20]
        size: [20]           
    bottom:
      doubleside: true
      offset:
        x: 0
        y: 0
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [1,11,10,1]
      bump:
        position: [-20]
        size: [15]
    bottom2:
      doubleside: true
      offset:
        x: 0
        y: 4
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [0]
    bottom3:
      doubleside: true
      offset:
        x: 0
        y: -2
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [0]
        
