model =
  name: 'Excelsior'
  level: 2
  model: 1
  size: 1.4
  specs:
    shield:
      capacity: [160,180]
      reload: [5,7]
    generator:
      capacity: [100,120]
      reload: [30,40]
    ship:
      mass: 180
      speed: [120,150]
      rotation: [80,100]
      acceleration: [70,80]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-91,-90,-75,-45,0,50,90,110,114,125,110]
        z: [0,0,0,0,0,0,0,3,3,3,3]
      width: [0,4,11,17,21,21,21,14,12,12,0]
      height: [0,2,10,10,14,16,14,12,10,10,0]
      propeller: true
      texture: [1,2,2,3,3,4,3,4,12,17]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -50
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-15,0,20,30,60,100,100]
        z: [0,0,0,0,4,0,0]
      width: [0,8,10,10,10,10,8]
      height: [0,15,17,15,10,10,10]
      propeller: false
      texture: [7,9,9,3,4,4]
    engine:
      section_segments: 12
      offset:
        x: 75
        y: 112
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-85/1.3,-75/1.3,-77/1.3,-67/1.3,-65/1.3,-2/1.3,1,6/1.3,10/1.3,15/1.3,10/1.3]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,9/1.3,15/1.3,15/1.3,13/1.3,15/1.3,16/1.3,16/1.3,12/1.3,12/1.3,0]
      height: [0,9/1.3,15/1.3,15/1.3,13/1.3,15/1.3,16/1.3,16/1.3,12/1.3,12/1.3,0]
      texture: [13,3,2,13,3,63,63,63,13,17]
      propeller: true   
      laser:
        damage: [7,9]
        rate: 8
        type: 1
        speed: [130,170]
        number: 1
        error: 2       
  wings: 
    main:
      length: [30,50,20]
      width: [40,40,40,20]
      angle: [-10,-10,10]
      position: [-10,-10,10,25]
      doubleside: true
      offset:
        x: 0
        y: 80
        z: 15
      bump:
        position: 30
        size: 5
      texture: [4,63,3]
    deco:
      length: [15,15,10]
      width: [30,25,20,15]
      angle: [-10,-10,10]
      position: [0,5,15,25]
      doubleside: true
      offset:
        x: 10
        y: -30
        z: 10
      bump:
        position: 30
        size: 5
      texture: [63,3,4] 
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
