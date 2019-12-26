model =
  name: 'Avalon'
  level: 2
  model: 2
  size: 1.4
  specs:
    shield:
      capacity: [180,200]
      reload: [6,7]
    generator:
      capacity: [80,120]
      reload: [30,40]
    ship:
      mass: 200
      speed: [120,145]
      rotation: [80,100]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-91,-90,-75,-45,0,50,90,94,105,90]
        z: [0,0,0,0,0,0,0,3,3,3]
      width: [0,2,10,17,21,21,15,12,12,0]
      height: [0,2,10,20,30,30,27,20,20,0]
      propeller: true
      texture: [1,2,2,3,3,3,4,12,17]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -37
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,10,30,60]
        z: [0,0,0,0,0]
      width: [0,7,10,10,5]
      height: [0,18,25,18,5]
      propeller: false
      texture: 9
    cannons:
      section_segments: 12
      offset:
        x: 19
        y: 20
        z: 4
      position:
        x: [0,0,0,-2,0,0,0]
        y: [-25,-30,-30,60,60]
        z: [0,0,0,0,0]
      width: [0,6,8,8,0]
      height: [0,4,6,6,0]
      propeller: true
      texture: [13,4,2]
      laser:
        damage: [15,20]
        rate: 3
        type: 1
        speed: [120,180]
        number: 1
        error: 0  
    deco:
      section_segments: 12
      offset:
        x: 76
        y: 57
        z: 30
      position:
        x: [0,0,0,0,0]
        y: [-34,-33,-20,35,45]
        z: [0,0,0,0,0]
      width: [0,2,5,5,1]
      height: [0,2,5,5,1]
      texture: [6]
  wings: 
    main:
      doubleside: true
      offset:
        x: 11
        y: -35
        z: 15
      length: [20,50,25]
      width: [100,80,50,20]
      angle: [20,10,0]
      position: [75,85,100,120]
      texture: [6,3,8]
      bump:
        position: 30
        size: 5
    top:
      doubleside: true
      offset:
        x: 0
        y: -10
        z: 40
      length: [40]
      width: [40,20]
      angle: [90]
      position: [75,95]
      texture: [6]
      bump:
        position: 0
        size: 0
t = -30
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;       
