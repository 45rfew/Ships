model =
  name: 'Icarus'
  level: 4
  model: 3
  size: 1.4
  scale: 2
  specs:
    shield:
      capacity: [230,260]
      reload: [7,10]
    generator:
      capacity: [160,220]
      reload: [65,80]
    ship:
      mass: 320
      speed: [105,125]
      rotation: [110,130]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-61.5,-61,-56,-60,-61,-59,-55,-20,-20,-5,40,40,40]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,3,7,8,10,10,11,11,11,11,11,0]
      height: [0,1,3,7,8,10,10,9,9,8,8,8,0]
      texture: [13,4,13,4,3,1,10,11,2,3,2,3,4]
      propeller: true
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -25
        z: 19.3
      position:
        x: [0,0,0,0,0,0]
        y: [-25,-10,4,7.5,15]
        z: [0,-1.7,-1.7,-1.5,-2]
      width: [3,6,6,5,4]
      height: [0.1,10,10,8,1]
      texture: [9,9,7,3,4]
    motor:
      section_segments: 8
      offset:
        x: 6
        y: -20
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [5,10,15,60,52]
        z: [0,0,0,-2.5,-2.5]
      width: [0,10,10,10,0]
      height: [0,5,5,7,0]
      texture: [63,63,10,4]
      laser:
        damage: [20,33]
        rate: 2
        type: 1
        speed: [160,200]
        number: 1
        recoil: 100
        error: 0      
    propulsors:
      section_segments: 8
      offset:
        x: 10
        y: -12
        z: 7.5
      position:
        x: [0,0,0]
        y: [15,55,52]
        z: [0,0,0]
      width: [4,4,0]
      height: [5,5,0]
      propeller: true
      texture: [12,17]
    propulsors2:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: 10
      position:
        x: [0,0,0]
        y: [15,55,50]
        z: [0,0,0]
      width: [6,6,0]
      height: [7,7,0]
      propeller: false
      texture: [12,17]
    cannons:
      section_segments: 12
      offset:
        x: 40
        y: 18
        z: 3
      position:
        x: [0,0,0,0]
        y: [-35,-30,20,25]
        z: [0,0,0,0]
      width: [1,2.5,2.5,1]
      height: [1,4,4,1]
      texture: 6
      angle: 1
      laser:
        damage: [4,7]
        rate: 6
        type: 2
        speed: [120,150]
        number: 1
        error: 4
    wing_holders:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [15,15,20,25,25]
        z: [0,0,-5,-10,-10,0]
      width: [0,10,10,10,0]
      height: [0,12.5,12.5,12.5,0]
      vertical: true
      texture: [4]
  wings:
    main:
      length: [40,10,15]
      width: [70,50,40,25]
      angle: [-10,20,0]
      position: [0,8,16,28]
      doubleside: true
      offset:
        x: 0
        y: 5
        z: 10
      bump:
        position: -40
        size: 5
      texture: [8,63,4]
    top:
      doubleside: true
      offset:
        x: 0
        y: 25
        z: 25
      length: [12.5,25,7.5]
      width: [35,30,25,10]
      angle: [7.5,-25,10]
      position: [-7.5,-6.5,0,5]
      texture: [4,8,63]
      bump:
        position: 35
        size: 10
t = -5        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
