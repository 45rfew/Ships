return model =
  name: "Netflix"
  level: 7
  model: 7
  size: 1.7
  specs:
    shield:
      capacity: [800,800]
      reload: [45,45]
    generator:
      capacity: [700,700]
      reload: [180,180]
    ship:
      mass: 700
      speed: [140,140]
      rotation: [130,130]
      acceleration: [100,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 90
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-215,-210,-200,-170,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,45,35,40,35,30,25,0]
      height: [0,6,20,20,20,20,20,20,0]
      propeller: true
      texture: [4,63,1,1,1,1,12,17]
    side_main:
      section_segments: 8
      offset:
        x: 0.4
        y: 90
        z: -5.48
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-215,-210,-200,-170,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,45,35,40,35,30,25,0]
      height: [0,6,20,20,20,20,20,20,0]
      propeller: true
      texture: [1,1,1,11,-1,-1,-1,17]
    head:
      section_segments: [0,55,90,150,210,270,305]
      offset:
        x: 0
        y: -220
        z: -5
      position:
        x: [0,0,0,0]
        y: [0,100,120,140]
        z: [0,0,0,0]
      width: [0,50,50,0]
      height: [0,25,25,0]
      propeller: false
      texture: [63]
    bars:
      section_segments: 8
      offset:
        x: 30
        y: 90
        z: 10
      position:
        x: [10,10,5,-2,0,-10,-12,-12,-12,-12,-12]
        y: [-215,-210,-200,-170,-53,10,30,30,30,30]
        z: [-3,-3,-8,0,0,0,-10,-10,-10,-10]
      width: [0,2,7.5,7.5,7.5,8.75,8.75,5,5,0]
      height: [0,1.5,5,5,5,5,5,5,5,0]
      propeller: false
      texture: [4,63,1,1,2,2,13,4]
    under_bars:
      section_segments: 8
      offset:
        x: 30
        y: 90
        z: -20
      position:
        x: [10,10,5,-2,0,0,-12,-12,-12,-12,-12]
        y: [-205,-200,-200,-170,-60,-20,30,30,30,30]
        z: [9,9,9,0,0,10,10,10,10,10]
      width: [0,2,7.5,7.5,7.5,8.75,8.75,5,5,0]
      height: [0,1.5,5,5,5,5,5,5,5,0]
      propeller: false
      texture: [4,63,1,1,2,2,13,4]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -150
        z: 12
      position:
        x: [0,0,0,0,0,0,0]
        y: [-17.85,0,17.85,35.71,44.64]
        z: [-6.25,-4.46,0,0,0]
      width: [0,8.92,13.39,13.39,0]
      height: [0,8.92,13.39,11.71,0]
      texture: [7,9,9,7]
    cannons1:
      section_segments: 12
      offset:
        x: 160
        y: 99
        z: 36
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-105,-65,-70,-57,-55,-3,0,5,10,30,20]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,15,15,13,15,16,16,12,12,0]
      height: [0,12,15,15,13,15,16,16,12,12,0]
      texture: [3,17,2,13,1,63,63,63,13,17]
      propeller: true
      angle: 5
      laser:
        damage: [100,100]
        rate: 3
        type: 1
        speed: [200,200]
        number: 1
        error: 0
    cannons2:
      section_segments: 12
      offset:
        x: 90
        y: 84
        z: -15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-100,-65,-70,-57,-55,-3,0,5,10,25,15]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,12.5,12.5,10.83,12.5,13.3,13.3,10,10,0]
      height: [0,10,12.5,12.5,10.83,12.5,13.3,13.3,10,10,0]
      texture: [3,17,2,13,1,2,2,2,13,17]
      propeller: true
      angle: 3
      laser:
        damage: [25,25]
        rate: 8
        type: 2
        speed: [160,160]
        number: 1
        error: 2
    side_propeller:
      section_segments: 8
      offset:
        x: 30
        y: 110
        z: -5
      position:
        x: [0,0,0,-2,-2,0]
        y: [-50,10,20,36,50,40]
        z: [10,0,0,0,0,0]
      width: [0,6,7.5,7.5,6.5,0]
      height: [0,12,15,15,13,0]
      texture: [3,17,2,13,17,63,63,63,13,17]
      propeller: true
    side_propeller_flame:
      section_segments: 8
      offset:
        x: 20
        y: 160
        z: -5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [15]
      texture: [0]
      propeller: true
    wing_holders:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20
        z: -125
      position:
        x: [0,0,0,0,0,0]
        y: [30,30,40,50,50]
        z: [0,0,-10,-20,-20,0]
      width: [0,20,20,20,0]
      height: [0,25,25,25,0]
      propeller: false
      vertical: true
      texture: [2]
  wings:
    xwing1:
      doubleside: true
      offset:
        x: 0
        y: 70
        z: 0
      length: [100,55]
      width: [70,60,50]
      angle: [15,15]
      position: [0,0,0]
      texture: [1,10]
      bump:
        position: 30
        size: 10
    xwing12:
      doubleside: true
      offset:
        x: 0
        y: 75
        z: -2.3
      length: [100,55]
      width: [70,60,50]
      angle: [15,15]
      position: [0,0,0]
      texture: [17,17]
      bump:
        position: 30
        size: 9        
    xwing2:
      doubleside: true
      offset:
        x: 0
        y: 70
        z: 5
      length: [35,50]
      width: [70,60,50]
      angle: [-15,-10]
      position: [0,-10,-17.5]
      texture: [1,10]
      bump:
        position: 30
        size: 10
    xwing22:
      doubleside: true
      offset:
        x: 0
        y: 75
        z: 5
      length: [35,50]
      width: [70,60,50]
      angle: [-15,-10]
      position: [0,-10,-17.5]
      texture: [1,17]
      bump:
        position: 30
        size: 9        
    xwing3:
      doubleside: true
      offset:
        x: 0
        y: 170
        z: 30
      length: [25,50,35,100]
      width: [70,60,50,20]
      angle: [15,-30,20]
      position: [-15,-13,10,20]
      texture: [3,10,1]
      bump:
        position: 35
        size: 10
    xwing32:
      doubleside: true
      offset:
        x: 0
        y: 173
        z: 30
      length: [25,50,35,100]
      width: [70,60,50,20]
      angle: [15,-30,20]
      position: [-15,-13,10,20]
      texture: [4,18,18]
      bump:
        position: 35
        size: 9
