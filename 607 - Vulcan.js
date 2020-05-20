  
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
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle) ->
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
return model =
  name: "Vulcan"
  level: 6
  model: 7
  size: .9
  zoom: 0.9
  next: [707,708]
  specs:
    shield:
      capacity: [300,450]
      reload: [11,14]
    generator:
      capacity: [160,240]
      reload: [40,60]
    ship:
      mass: 220
      speed: [80,92]
      rotation: [50,70]
      acceleration: [60,85]
  bodies:    
    main:
      section_segments: 6
      offset:
        x: 0
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-140,-138,-120,-80,30,20,80,70]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,20,30,42,35,30,0]
      height: [0,5,20,20,20,25,40,0]
      propeller: true
      texture: [4,4,4,18,4,4]
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 30
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-21,-20,40,66,120,160]
        z: [-8,-8,-2,-1,0,-50]
      width: [0,20,30.5,30,45,0]
      height: [0,10,30,30,22,0]
      texture: [9,9,9,17,4]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 145
        y: 20
        z: -18
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-50,-45,-22,-18,0,4,100,130,145]
        z: [0,0,0,0,0,0,0,20,50]
      width: [0,5,10,10,10,10,10,0,0]
      height: [0,5,15,15,15,15,10,0,0]
      angle: 0
      laser:
        damage: [20,30]
        rate: 5
        type: 1
        speed: [140,180]
        number: 1
      texture: [17,4,17,10,17,4,63,63]
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -10
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-50,-45,-22,-18,0,4,100,130,145]
        z: [0,0,0,0,0,0,0,20,50]
      width: [0,5,10,10,10,10,10,0,0]
      height: [0,5,15,15,15,15,10,0,0]
      angle: 0
      laser:
        damage: [100,140]
        rate: 2
        type: 1
        speed: [130,170]
        number: 1
        angle: 0
        recoil: 700
        error: 0
      texture: [17,4,17,10,17,4,63,63]      
    arms:
      section_segments: 6
      offset:
        x: 1
        y: 110-5
        z: -20
      position:
        x: [0,15,45,50,40,-10,-20,-120]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,10,45,40,35,25,25,0]
      height: [0,0,5,5,6,0,0,0]
      texture: 4
      angle: 235
    color:
      section_segments: 6
      offset:
        x: -30
        y: 140
        z: -20
      position:
        x: [0,15,45,50,40,-10,-20,-30]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,40,30,25,20,0,0,0]
      height: [0,0,10,10,10,0,0,0]
      texture: [3,3,7,7,7,7,7]
      angle: 230
    color2:
      section_segments: 6
      offset:
        x: -30
        y: 147
        z: -23
      position:
        x: [0,15,45,50,40,-10,-20,-30]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,40,30,25,20,0,0,0]
      height: [0,0,10,10,10,0,0,0]
      texture: [63]
      angle: 230    
    tech:
      section_segments: 12
      angle: 90
      offset:
        x: 0
        y: 120
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-155,-150,-142,-130,-85,85,130,142,150,155]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,30,35,0,0,0,0,35,30,0]
      height: [0,30,35,0,0,0,0,35,30,0]
      texture: [4,7,4,4,4,4,4,7,4]
    deco:
      section_segments: [45,135,225,315]
      angle: 4.5
      offset:
        x: 262
        y: -150
        z: -24
      position:
        x: [0,0,0,0]
        y: [-65,-65,30,30]
        z: [3.5,3.5,0,0]
      width: [0,0.5,2,0]
      height: [0,1,1,0]
      texture: [5,17] 
    ring: ring(89,124,-5,20,10,25,.9,.5,0,[18,17,18,17,18],26)
    ring2: ring(44,134,-5,15,10,25,.9,.5,0,[18,17,18,17,18],0)
    reactor: hub(68,-10,-135,20,13,8,1,0,[18,17,17,18,18,17])
    reactor2: hub(110,-7,-114,20,11,8,1,0,[18,17,17,18,18,17])
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 27
        y: -20
        z: -65
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,14,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,47,47,44,0]
      texture: [63,17,63]
      angle: 30
      vertical: true    
    box2:
      section_segments: [45,135,225,315]
      offset:
        x: 165
        y: -13
        z: -60
      position:
        x: [0,0,0,0,0]
        y: [2,2,14,16,16]
        z: [0,0,0,0,0]
      width: [0,7,7,5,0]
      height: [0,47,47,43,0]
      texture: [63,17,63]
      angle: 5
      vertical: true 
    box3:
      section_segments: [45,135,225,315]
      offset:
        x: 180
        y: -14
        z: -50
      position:
        x: [0,0,0,0,0]
        y: [2,2,14,16,16]
        z: [0,0,0,0,0]
      width: [0,7,7,5,0]
      height: [0,47,47,43,0]
      texture: [63,17,63]
      angle: 5
      vertical: true   
    joint:
      section_segments: 6
      offset:
        x: 190
        y: 30
        z: -12
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0.3,4,4,-4,-4]
        z: [0,0,0,0,0,0]
      width: [12,12,12,10,10,12]
      height: [10,10,10,8,8,10]
      texture: [3,63,3.9]      
    joint2:
      section_segments: 6
      offset:
        x: 190
        y: 50
        z: -9
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0.3,4,4,-4,-4]
        z: [0,0,0,0,0,0]
      width: [12,12,12,10,10,12]
      height: [10,10,10,8,8,10]
      texture: [3,63,3.9] 
    joint3:
      section_segments: 6
      offset:
        x: 190
        y: 70
        z: -8.5
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0.3,4,4,-4,-4]
        z: [0,0,0,0,0,0]
      width: [12,12,12,10,10,12]
      height: [10,10,10,8,8,10]
      texture: [3,63,3.9]            
    lights:
      section_segments: 6
      offset:
        x: 0
        y: 81.8
        z: 37
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-160,-160,-142,-102,-53,-12.2,14,14]
        z: [-33.5,-33.5,-18.8,-19,-18.5,-1,0,0,0]
      width: [0,1,2,3,3,3,3,3,0]
      height: [0,2,2,2,2,2,2,2,0]
      texture: [63]
    lights2:
      section_segments: 6
      offset:
        x: 0
        y: 69
        z: 8.5
      position:
        x: [0,0,0,0,0]
        y: [-1,-1.5,0,2,2]
        z: [0,-1,0,0,0]
      width: [0,30,30,30,0]
      height: [0,30,30,30,0]
      texture: [63]     
    lights3:
      section_segments: 6
      offset:
        x: 0
        y: 10
        z: 0
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [0,34,35,0]
      height: [0,20,20,0]
      texture: [16.9]  
    lights4:
      section_segments: 6
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [0,32,33,0]
      height: [0,20,20,0]
      texture: [16.9]  
    lights5:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: -.1
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [0,28,29,0]
      height: [0,20,20,0]
      texture: [16.9]
    lights6:
      section_segments: 6
      offset:
        x: 0
        y: -50
        z: 0
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [0,0,0,0]
      width: [0,23,24,0]
      height: [0,20,20,0]
      texture: [16.9]        
  wings:
    front_below:
      offset:
        x: 0
        y: -15
        z: -35
      length: [0,30,0,20,60,60,30]
      width: [150,145,126,346,130,122,35]
      angle: [25,25,45,8,8,0,0]
      position: [160,98,46,180,59,100,91]
      texture: [4,18,[15],[15],[15],[15],[15]]
      doubleside: true
      bump:
        position: 30
        size: 4
    front_below2:
      offset:
        x: 2
        y: -21
        z: -35.5
      length: [0,30,0,20,60,60,30]
      width: [150,145,126,346,130,122,35]
      angle: [25,25,45,8,8,0,0]
      position: [160,98,46,180,59,100,91]
      texture: 17
      doubleside: true
      bump:
        position: 30
        size: 4
    hat:  
      offset:
        x: 0
        y: -30
        z: 40
      length: [100,50]
      width: [90,60,60]
      angle: [-20,200]
      position: [190,65,0]
      doubleside: true
      texture: [4]
      bump:
        position: 0
        size: 20
    hat2:  
      offset:
        x: 0
        y: -28
        z: 40
      length: [90]
      width: [90,60]
      angle: [-20]
      position: [190,75]
      doubleside: true
      texture: 18
      bump:
        position: 0
        size: 20
    backcover:
      offset:
        x: -10
        y: 150
        z: -30
      length: [30,2,60]
      width: [150,50,50,20]
      angle: [0,0,20]
      position: [-10,90,90,40]
      texture: [7,17,[15]]
      bump:
        position: 30
        size: 5
    backcover2:
      offset:
        x: -10
        y: 148
        z: -30.2
      length: [30,2,60]
      width: [150,50,50,20]
      angle: [0,0,20]
      position: [-10,90,90,40]
      texture: [17]
      bump:
        position: 30
        size: 5
    backcover3:
      offset:
        x: -10
        y: 151
        z: -30
      length: [30,2,60]
      width: [150,50,50,20]
      angle: [0,0,20]
      position: [-10,90,90,40]
      texture: [7,17,18]
      bump:
        position: 30
        size: 4
    stab:  
      offset:
        x: 12
        y: 70
        z: 10
      length: [30,20,0]
      width: [50,10,120]
      angle: [40,20]
      position: [70,75,190]
      texture: [[15]]
      bump:
        position: 0
        size: 20
    stab2:  
      offset:
        x: 12
        y: 70
        z: 6
      length: [30,20,0]
      width: [50,10,120]
      angle: [40,20]
      position: [70,75,190]
      texture: 17
      bump:
        position: 0
        size: 20
    lights:
      length: [30,65,44,60,28]
      width: [20,20,20,20,20,20]
      angle: [0,0,-5,-5,-5]
      position: [150,63,26,3,-46,-119]
      doubleside: true
      offset:
        x: 40
        y: -3
        z: -13
      bump:
        position: 0
        size: 0
      texture: [17]        
