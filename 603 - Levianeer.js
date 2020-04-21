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
h = 0
x = 1.8
return model =
  name: 'Levianeer'
  level: 6
  model: 3
  size: 0.9
  specs:
    shield:
      capacity: [400,500]
      reload: [10,14]
    generator:
      capacity: [400,460]
      reload: [130,150]
    ship:
      mass: 520
      speed: [90,110]
      rotation: [60,80]
      acceleration: [80,100]
  bodies:
    reactor: hub(0,62,-130,[40,45,50,130,135,140,220,225,230,310,315,320],10,6,1,0,[18,17,17,18,18,17])
    reactor2: hub(0,62,0,20,10,6,1,0,[18,17,17,18,18,17])
    main:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,-20,-20,115,120,150,155,175,175,160]
        z: [-32,-32,-27,0,0,0,0,0,0,0]
      width: [0,35,35,35,35,35,35,35,35,30,0]
      height: [0,10,20,60,60,60,60,60,60,55,0]
      propeller: true
      texture: [4,3,8.96,4,17,18,17,12,17]
    cockpit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0]
        y: [-135,-130,-100,-20,-20]
        z: [-32,-32,-27,0,0]
      width: [0,30,35,35,0]
      height: [0,10,19,59,0]
      texture: [4,3,7,4]  
    cockpit2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [0,0,0,0,0]
        y: [-135,-130,-100,-20,-20]
        z: [-32,-32,-27,0,0]
      width: [0,29,34,34,0]
      height: [0,10,21,62,0]
      texture: [4,3,8.96,4]       
    side:
      section_segments: 6
      offset:
        x: 64
        y: 40
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,15,15,30,45,50,80,100,105,175,180,190,192]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,36,38,45,45,45,45,45,45,45,45,15,0].div(1.2)
      height: [0,21,23,30,40,40,40,40,40,40,40,10,0]
      texture: [12.9,17,4,4,17,18,4,16.9,18,16.9,3.9]
    side2:
      section_segments: 6
      offset:
        x: 65
        y: 40
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,15,15,30,45,50,80,100,105,175,180,190,192]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,36,38,45,45,45,45,45,45,45,45,15,0].div(1.2)
      height: [0,21,23,30,40,40,40,40,40,40,40,10,0]
      texture: [12.9,17,1,10,17,11,10,16.9,11,16.9,3.9]    
    u_wings:
      section_segments: 6
      offset:
        x: 138
        y: 45
        z: -10
      position:
        x: [-10,-10,-7,0,19,0,0,0,0,0]
        y: [-285,-280,-250,-160,60,140,145,175,175,160]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,25,30,40,60,35,35,35,32,0]
      height: [0,20,20,24,40,40,40,40,37,0]
      propeller: true
      texture: [2.9,1,11,9.995,11,17,12,16.9]
    u_wings2:
      section_segments: 6
      offset:
        x: 139
        y: 45
        z: -10
      position:
        x: [-10,-10,-7,0,19,0,0,0,0,0]
        y: [-285,-280,-250,-160,60,140,145,175,175,160]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,25,30,40,60,35,35,35,32,0]
      height: [0,20,20,24,40,40,40,40,37,0]
      texture: [3,4,18,4,18,17,12,16.9]      
    bar:
      section_segments: 8
      offset:
        x: 0
        y: 120
        z: -5
      position:
        x: [0,0,0,0]
        y: [-130,-130,130,130]
        z: [0,0,0,0]
      width: [0,30,30,0]
      height: [0,15,15,0]
      angle: 90
      texture: [63] 
    lights:
      section_segments: 8
      offset:
        x: 140
        y: -105
        z: 9
      position:
        x: [0,0,0,0]
        y: [-210,-210,130,130]
        z: [0,20,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      angle: 185
      texture: [17]      
    lights2:
      section_segments: 8
      offset:
        x: 146.5
        y: 152
        z: 29
      position:
        x: [0,0,0,0]
        y: [-50,-50,35,35]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      angle: -13.6
      texture: [17]            
    cannon:
      section_segments: 8
      offset:
        x: 104
        y: -170
        z: -10
      position:
        x: [0,0,0,0,0,0,0,3,3]
        y: [-43,-45,-45,-38,-36,-24,-22,145,145].mult(1.8)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,4,5,5,3,3,5,5,0].mult(1.8)
      height: [0,4,5,5,3,3,5,5,0].mult(1.8)
      texture: [17,17,4,4,13,3,17,3]
      laser:
        damage: [120/2,100]
        rate: 1
        type: 1
        speed: [140,180]
        recoil: 300
        number: 1
        error: 0 
    cannon2:
      section_segments: 8
      offset:
        x: 104
        y: -170
        z: -10
      position:
        x: [0,0,0,0,0,0,0,3,3]
        y: [-43,-45,-45,-38,-36,-24,-22,145,145].mult(1.8)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,4,5,5,3,3,5,5,0].mult(1.8)
      height: [0,4,5,5,3,3,5,5,0].mult(1.8)
      texture: [17,17,4,4,13,3,17,3]
      laser:
        damage: [30,40]
        rate: 2
        type: 2
        speed: [170,220]
        recoil: 120
        number: 1
        error: 0         
    side_plates:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 155
        y: -160
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-61,-60,-50,-20,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,15,15,15,15,15,15,15,0]
      height: [0,13,13,13,13,13,13,13,0]
      texture: [63]    
      angle: 2
    side_plates_lights:
      section_segments: [45,135,225,315]
      offset:
        x: 167.5
        y: -145
        z: -10
      position:
        x: [0,0,0,0]
        y: [-61,-61,75,75]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,3,3,0]
      texture: [4,17,63]    
      angle: 182      
    side_plates2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 180
        y: 34
        z: -10
      position:
        x: [-10,0,0,0,0]
        y: [-55,-60,-60,75,60]
        z: [0,0,0,0,0]
      width: [0,30,33,30,0]
      height: [0,15,18,19,0]
      texture: [13,63,63,13]    
      angle: 2  
    side_plates2_lights:
      section_segments: [45,135,225,315]
      offset:
        x: 206
        y: 48
        z: -10
      position:
        x: [0,0,0,0]
        y: [-60,-60,75,75]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,5,5,0]
      texture: [4,17,63]    
      angle: 181       
    hood:
      section_segments: 6
      offset:
        x: 0
        y: 65
        z: 64
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-53,-52,-45,-43,-25,-23,8,10,43,45,50,50]
        z: [-1,-1,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,16,16,16,16,16,16,16,16,12,0]
      height: [0,3,5,5,5,5,5,5,5,5,3,0]
      texture: [63,63,17,18,17,8,17,18,17,63]      
    deco:
      section_segments: [45,135,225,315]
      offset:
        x: 0.1
        y: 57
        z: -57.5
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,14,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,17,17,14,0]
      texture: [63,17,63]
      angle: 30
      vertical: true
    deco2:
      section_segments: 6
      offset:
        x: 0
        y: 65
        z: 65
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [4]
    deco3:
      section_segments: 6
      offset:
        x: 0
        y: 47
        z: 65
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [4]    
    deco4:
      section_segments: 6
      offset:
        x: 0
        y: 56
        z: 65
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [4]  
    deco5:
      section_segments: 6
      offset:
        x: 8
        y: 51.5
        z: 64
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [63] 
    deco6:
      section_segments: 6
      offset:
        x: 8
        y: 60.5
        z: 64
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [63]       
    deco7:
      section_segments: 6
      offset:
        x: 0
        y: 90
        z: 64.1
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,16,16,0]
      height: [0,5,5,0]
      texture: [17]          
  wings: 
    main:
      offset:
        x: 0
        y: 15
        z: -10
      length: [40,14,70]
      width: [70,70,70,60]
      angle: [0,0,0]
      position: [0,0,0,0] 
      doubleside: true
      texture: [2,63,2]
      bump:
        position: 20
        size: 10
    main2:
      offset:
        x: 0
        y: 12
        z: -10.5
      length: [40,14,70]
      width: [70,70,70,60]
      angle: [0,0,0]
      position: [0,0,0,0] 
      doubleside: true
      texture: [17,17,17]
      bump:
        position: 20
        size: 10     
    side_cover:
      doubleside: true
      offset:
        x: -32
        y: 186
        z: 25
      length: [0,-2,-3,-1,-19,0,0].mult(2)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+43,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,4,4,63]
      bump:
        position: 30
        size: -4
    side_cover2:
      doubleside: true
      offset:
        x: -32
        y: 187
        z: 25
      length: [0,-2,-3,-1,-19,0,0].mult(2)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+43,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,11,4,63]
      bump:
        position: 30
        size: -4     
    side_cover3:
      doubleside: true
      offset:
        x: 97.5
        y: 186
        z: 27
      length: [0,0,-3,-1,-19,0,0].mult(2)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+43,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,1,4,63]
      bump:
        position: 30
        size: -4       
    side_cover4:
      doubleside: true
      offset:
        x: 97.5
        y: 187
        z: 27
      length: [0,0,-3,-1,-19,0,0].mult(2)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+43,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,18,4,63]
      bump:
        position: 30
        size: -4  
    top:
      doubleside: true
      offset:
        x: 20
        y: 140
        z: 58.5
      length: [0,0,-3,-1,-19,-7,-10].mult(1)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+93,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,18,4,63]
      bump:
        position: 30
        size: -4         
    top2:
      doubleside: true
      offset:
        x: 20
        y: 141
        z: 58.5
      length: [0,0,-3,-1,-19,-7,-10].mult(1)
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315-20,335-6.8,350+93,0]
      position: [7,7,7,-32,-32,8,18,3]
      texture: [63,63,63,17,11,4,63]
      bump:
        position: 30
        size: -4                 
    main_gem:
      doubleside: true
      offset:
        x: 25
        y: 10
        z: -10
      length: [0,2,5]
      width: [40,100,100,0]
      angle: [0,0,0,0]
      position: [0,0,0,0]
      texture: [4,4,63,4]
      bump:
        position: 20
        size: 12
    deco:
      doubleside: true
      offset:
        x: 12
        y: 60
        z: 60
      length: [0,2,5]
      width: [100,100,100,0]
      angle: [20,20,20,20]
      position: [0,0,0,0]
      texture: [4,4,63,4]
      bump:
        position: -20
        size: 5        
    main_cover:
      doubleside: true
      offset:
        x: 10
        y: 98
        z: 62.5
      length: [15,50,0]
      width: [60,150,60,0]
      angle: [360,270,360]
      position: [47,2,48,47]
      texture: [17,63,17]
      bump:
        position: -30
        size: -0        
