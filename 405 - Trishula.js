model =
  name: "Trishula"
  level: 4
  model: 5
  size: 1.5
  specs:
    shield:
      capacity: [240,300]
      reload: [6,8]
    generator:
      capacity: [110,170]
      reload: [40,60]
    ship:
      mass: 250
      speed: [65,90]
      rotation: [60,80]
      acceleration: [70,100]
  bodies:
    main:
      section_segments: 6
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-155,-124,-123,-75,-74,-3,0,5,10,50,90,100,100,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,6,17,10,18,25,25,25,25,24,20,18.5,0]
      height: [0,3,6,17,10,13,20,20,20,20,20,16,14.5,0]
      texture: [6,63,63,3,8.2,2,4,63,11,8,13,16.9,16.9]
      propeller: true
      laser:
        damage: [50,80]
        rate: 1
        type: 1
        speed: [120,150]
        recoil: 140
        number: 1
        error: 0
    body_support:
      section_segments: [0,60,120,180]
      offset:
        x: -2.5
        y: -54
        z: 0
      position:
        x: [0,0,0,0]
        y: [-29,-28,38,38]
        z: [0,0,0,0]
      width: [0,15-1,23-1,0]
      height: [0,17-1,18-1,0]
      texture: [16.8,10,16.8]        
    deco:
      section_segments: [0,40,140,180]
      offset:
        x: -7-6.6
        y: 1
        z: 0
      position:
        x: [0,0,0,0]
        y: [-1,-1,39,39]
        z: [0,0,0,0]
      width: [0,13,13,0]
      height: [0,14,14,0]
      texture: [16.8,12,16.8]            
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 12
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-8,-5,20,33,64,68]
        z: [0,0,-4.5,-6,-6,-6]
      width: [0,6,13,13,13,7]
      height: [0,5,10,12,12,8]
      texture: [7,9,9,10.24,3]
    propellers:
      section_segments: 6
      offset:
        x: 8
        y: -8
        z: -20
      position:
        x: [60,60,60,60,60,60]
        y: [86,90,110,130,130,120]
        z: [0,0,0,0,0,0,0]
      width: [0,5,10,10,9,0]
      height: [0,5,10,10,9,0]
      texture: [1,11,18,17]
      propeller: true
    joint:
      section_segments: 6
      offset:
        x: 4.5
        y: 60
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-3,-3,-.5,1.5,1.5,-1.5,-1.5,-3,-3]
        z: [0,0,0,0,0,0,0,0,0]
      width: [14,14,14,14,11,11,14,14,14]
      height: [14,14,14,14,11,11,14,14,14]
      texture: [3,3,63,3]      
    joint2:
      section_segments: 6
      offset:
        x: 4.5
        y: 50+1
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-3,-3,0,1.5,.5,-3,-3]
        z: [0,0,0,0,0,0,0]
      width: [14,14,14,14,11,11,14]
      height: [14,14,14,14,11,11,14]
      texture: [3,3,63,2.9]  
    joint3:
      section_segments: 6
      offset:
        x: 4.5
        y: 70
        z: 8
      position:
        x: [0,0,0,0,0,0]
        y: [-1,1.5,1.5,-2.5,-2.5,-1]
        z: [0,0,0,0,0,0]
      width: [14,14,11,11,14,14]
      height: [14,14,11,11,14,14]
      texture: [3,3,1,63] 
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 9
        y: 2
        z: -60
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,2.5,2.5,1.5,0]
      height: [0,18,18,14,0]
      texture: [63,17,63]
      angle: 35
      vertical: true      
  wings:
    main:
      doubleside: true
      offset:
        x: 15
        y: 30
        z: 0
      length: [60,30]
      width: [80,60,60]
      angle: [-10,-60]
      position: [0,80,50]
      texture: [11,63]
      bump:
        position: 2
        size: 5
    main2:
      doubleside: true
      offset:
        x: 15
        y: 32
        z: 0
      length: [60,30]
      width: [80,60,60]
      angle: [-10,-60]
      position: [0,80,50]
      texture: [18,63]
      bump:
        position: 2
        size: 5  
    main_lights:
      doubleside: true
      offset:
        x: 15
        y: 27
        z: 0
      length: [60,30]
      width: [80,60,60]
      angle: [-10,-60]
      position: [0,80,50]
      texture: [17]
      bump:
        position: 2
        size: 0         
    top:
      doubleside: true
      offset:
        x: 15
        y: 35
        z: 0
      length: [50]
      width: [70,30]
      angle: [40]
      position: [0,50]
      texture: [63]
      bump:
        position: 10
        size: 10
    top2:
      doubleside: true
      offset:
        x: 15
        y: 37
        z: 0
      length: [50-1]
      width: [70,30]
      angle: [40]
      position: [0,50]
      texture: [1]
      bump:
        position: 10
        size: 10  
    top_lights:
      doubleside: true
      offset:
        x: 15
        y: 32
        z: 0
      length: [50]
      width: [70,30]
      angle: [40]
      position: [0,50]
      texture: [17]
      bump:
        position: 10
        size: 0
for i in [0...5]
  model.bodies["spike"+i] = 
    section_segments: 6
    offset:
      x: 0
      y: -160 + i * 6
      z: 0
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [1+i,2+i,2+i,2+i,2+i]
    height: [1+i,2+i,2+i,2+i,1+i]
    texture: [17]       
t = -5       
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;                
