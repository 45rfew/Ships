return model =
  name: 'Yggdrasil'
  level: 4
  model: 2
  size: 1.4
  specs:
    shield:
      capacity: [220,240]
      reload: [8,11]
    generator:
      capacity: [150,200]
      reload: [50,60]
    ship:
      mass: 400
      speed: [80,100]
      rotation: [60,80]
      acceleration: [60,80]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-110+20,-105+20,-55+30,-30+30,-5+30,130,130,160,220,220,210]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,25,45,45,38,38,38,70,70,65,0]
      height: [0,10,35,30,23,23,23,30,30,25,0]
      texture: [63,2,2,3,8,3,3,18,4,12]
      laser:
        damage: [69,80]
        rate: 1
        type: 1
        speed: [100,150]
        number: 1
        angle: 0
        recoil: 200
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -30
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-70,-70,-45,0,100,100]
        z: [0,0,0,0,0,20]
      width: [0,8,15,15,15,0]
      height: [0,15,35,20,20,0]
      texture: [9,9,9,4]
    motor:
      section_segments: 8
      offset:
        x: 85
        y: -20
        z: -10
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,10,20,160,160,145]
        z: [0,0,0,0,0,0,0]
      width: [0,10,25,35,35,32,0]
      height: [0,1,12,20,20,17,0]
      texture: [63,63,1,11,3,13]
      laser:
        damage: [40,60]
        rate: 2
        type: 1
        speed: [140,160]
        number: 1
        recoil: 169
        error: 0
    back:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 50
        z: 30
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,20,80,90]
        z: [0,0,0,0,0,3]
      width: [0,10,25,35,35,37]
      height: [0,1,12,20,20,1]
      texture: [4,4,3,8,4]
    back_wire:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 47
        z: -122
      position:
        x: [7,7,0,0,7,7]
        y: [-10,-10,-5,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,3,3,3,3,0]
      texture: [4,4,13,4,4]  
      vertical: true
      angle: 90
    back_wire2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 47
        z: -78
      position:
        x: [7,7,0,0,7,7]
        y: [-10,-10,-5,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,3,3,3,3,0]
      texture: [4,4,13,4,4]  
      vertical: true
      angle: 90   
    back_top:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 100
        z: 42.8
      position:
        x: [0,0,0,0,0,0]
        y: [-20,-20,-8,8,20,20]
        z: [0,0,0,0,0,0]
      width: [0,12,12,12,12,0]
      height: [0,2,2,2,2,0]
      texture: [4,4,5,4,4]
    propulsors:
      section_segments: 8
      offset:
        x: 0
        y: 90
        z: 0
      position:
        x: [0,0,0,0]
        y: [30,105,105,100]
        z: [0,0,0,0]
      width: [25,20,18,0]
      height: [25,20,18,0]
      propeller: true
      texture: [12,3,17]
    propulsors2:
      section_segments: 8
      offset:
        x: 40
        y: 80
        z: 0
      position:
        x: [0,0,0,0]
        y: [40,105,105,100]
        z: [0,0,0,0]
      width: [22,17,15,0]
      height: [22,17,15,0]
      propeller: true
      texture: [12,3,17] 
    propulsors3:
      section_segments: 8
      offset:
        x: 90
        y: 45
        z: -10
      position:
        x: [0,0,0,0]
        y: [40,105,105,100]
        z: [0,0,0,0]
      width: [27,22,20,0]
      height: [17,12,10,0]
      propeller: true
      texture: [12,3,17]  
    lasers:
      section_segments: 8
      angle: 15
      offset:
        x: -2
        y: -48
        z: -3
      position:
        x: [0,0,0]
        y: [-90,-70,-100]
        z: [0,0,0]
      width: [5,5,0]
      height: [5,5,0]
      texture: [6]
    wings:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 45
        y: 72
        z: 32
      position:
        x: [0,0,-7,0,0,-24,-32,-32]
        y: [-45,0,5,40,45,80,85,85]
        z: [0,0,0,-20,-20,-25,-25,-25]
      width: [90,90,80,70,70,40,35,0]
      height: [3,3,3,3,3,3,3,0]
      texture: [2,4,7,63,7,63]      
      angle: 90
    wings2:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: 70
        z: 32.4
      position:
        x: [3.4,3.4,38,16.4,16.2,-16,-32,-32]
        y: [-45,0,5,40,45,80,85,85]
        z: [0,0,0,-20,-20,-25,-25,-25]
      width: [90,90,20,50,50,30,35,0]
      height: [3,3,3,3,3,3,3,0]
      texture: [2,4,3,63,2,63]      
      angle: 90      
    wings_back:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 150.5
        z: 32
      position:
        x: [0,0,0,0]
        y: [-10,-10,0,0]
        z: [0,0,0,0]
      width: [0,64,50,0]
      height: [0,2.7,1,0]
      texture: [2]      
      angle: 0      
      
      
      
