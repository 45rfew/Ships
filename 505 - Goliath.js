return model =
  name: "Goliath"
  level: 5
  model: 5
  size: 1.8
  specs:
    shield:
      capacity: [340,380]
      reload: [10,17]
    generator:
      capacity: [240,320]
      reload: [130,160]
    ship:
      mass: 450
      speed: [90,100]
      rotation: [90,120]
      acceleration: [60,80]
  bodies:
    main:
      section_segments: [0,30,60,120,150,210,240,300,330]
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,100,100,95]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,20,20,20,20,20,10,9,0]
      height: [0,5,15,15,15,16,17,18,10,9,0]
      texture: [4,3,3,3,3,3,3,3,13,16.9]
      propeller: true
    claws:
      section_segments: 10
      offset:
        x: 50
        y: -35
        z: 0
      position:
        x: [-33,-25,5,20,25,20,0,-50]
        y: [-105,-100,-70,-40,-10,20,50,90]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,15,19,15,15,15,10]
      height: [0,5,15,16,15,15,13,0]
      texture: [5,4,4,4,4,3,3]
    claws2:
      section_segments: 10
      offset:
        x: 47
        y: -35
        z: 0
      position:
        x: [-27.5,-21,5,20,25,20,0,-50]
        y: [-100,-95,-70,-40,-10,20,50,90]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,15,19,15,15,15,10]
      height: [0,2,2,2,2,2,2,0]
      texture: [63]      
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 16
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,40,55]
        z: [-7,-5,0,0,0]
      width: [0,10,10,10,0]
      height: [0,10,10,12,0]
      texture: [9]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: 40
        z: -30
      position:
        x: [0,0,0,0,0,0]
        y: [-60,-70,-20,0,20,30]
        z: [0,0,0,0,0,20]
      width: [0,5,8,8,7,5]
      height: [0,5,8,8,10,5]
      angle: 0
      laser:
        damage: [150,180]
        rate: 1.5
        type: 1
        speed: [160,180]
        number: 1
        error: 2.5
      propeller: false
      texture: [11,3,3,3]
    sidecannons:
      section_segments: 8
      offset:
        x: 65
        y: -45
        z: -25
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-20,-10,0,20,30]
        z: [2,2,2,2,10,20]
      width: [0,2,4,4,4,2]
      height: [0,2,4,4,4,2]
      angle: 0
      laser:
        damage: [20,25]
        rate: 7
        type: 1
        speed: [160,230]
        number: 1
        error: 10
      propeller: false
      texture: [11,3,3,3]
    trianglethings:
      section_segments: [20,30,40,140,150,160,300,310,320]
      offset:
        x: 0
        y: 0
        z: -25
      position:
        x: [55,55,55,55,55,55,55,55,55,55]
        y: [-15,-15,-15,-15,0,15,15,15,15]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,15,0]
      propeller: false
      texture: [2.9,3,3,4,4,3,3,3]
      vertical: true
    trianglethings2:
      section_segments: [20,30,40,140,150,160,300,310,320]
      offset:
        x: 0
        y: 0
        z: -25
      position:
        x: [55,55,55,55,55,55,55,55,55,55]
        y: [-15,-15,-15,-15,0,15,15,15,15]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,15,0]
      propeller: false
      texture: [2.9,3,3,4,4,3,3,3]
      vertical: true
      angle: 180
    claw_armor:
      section_segments: 20
      angle: 175
      offset:
        x: -67
        y: -60
        z: 0
      position:
        x: [0,-4,-0.7,4.4,3,2.4,0.3,0.3]
        y: [-46,-49,-38.5,0,6,10.5,21,24]
        z: [0,0,0,0,0,0,0,0]
      width: [0,15,18,18,18,17.5,17,0]
      height: [0,15,16.5,17,16.5,16.6,15.6,0]
      texture: [3,3,3,4,4,4,3]
    claw_armor2:
      section_segments: 20
      angle: 175
      offset:
        x: -66
        y: -60
        z: 0
      position:
        x: [0,-4,-0.7,4.4,3,2.4,0.3,0.3]
        y: [-46,-49,-38.5,0,6,10.5,21,24]
        z: [0,0,0,0,0,0,0,0]
      width: [0,15,18,18,18,17.5,17,0]
      height: [0,2,2,2,2,2,2,0]
      texture: [63]      
    claw_amrmor2:
      section_segments: 20
      angle: 170
      offset:
        x: -71.5
        y: -60
        z: 0
      position:
        x: [-22,-10,-1.9,1.5,1,0.8,-2.1,-2.1]
        y: [-75,-48,-37.5,0,10.84,10.74,22,24]
        z: [0,0,0,0,0,0,0,0]
      width: [0,15,15.75,16.5,16.5,15.5,12,0]
      height: [15,15,16.5,18,16.5,15.5,10,0]
      texture: [4]
    disc:
      section_segments: 6
      offset:
        x: 54
        y: 22
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-8,-7.6,-6.46,-3.8,0,3.8,6.46,7.6,8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,1.9,4.56,7.6,9.5,7.6,4.56,1.9,0]
      height: [0,1,1,1,1,1,1,1,0]
      texture: [18]
    disc2:
      section_segments: 6
      offset:
        x: 54
        y: 22
        z: 15.5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-6.46,-5.7,-5,-2.28,0,2.28,5,5.7,6.46]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0.38,3.04,6.08,7.6,6.08,3.04,0.38,0]
      height: [0,1,1,1,1,1,1,1,0]
      texture: [5]
    cannon_lighting:
      section_segments: 15
      offset:
        x: 0
        y: -16
        z: -30
      position:
        x: [0]
        y: [1]
        z: [0]
      width: [6,6]
      height: [5,5]
      propeller: true
      texture: [69]
  wings:
    side_wings:
      doubleside: true
      offset:
        x: 80
        y: -35
        z: 0
      length: [50]
      width: [60,10,40]
      angle: [-5,20]
      position: [-20,0,0]
      texture: 3.3
      bump:
        position: 40
        size: 12
    side_wings2:
      doubleside: true
      offset:
        x: 81
        y: -33
        z: 0
      length: [50]
      width: [60,10,40]
      angle: [-5,20]
      position: [-20,0,0]
      texture: 63
      bump:
        position: 40
        size: 0        
    back_wings:
      doubleside: true
      offset:
        x: 0
        y: 105
        z: 0
      length: [90]
      width: [80,10,40]
      angle: [0,20]
      position: [-35,0,0]
      texture: 3.2
      bump:
        position: 40
        size: 10
    back_wings1:
      doubleside: true
      offset:
        x: 1
        y: 104
        z: 0
      length: [90]
      width: [80,10,40]
      angle: [0,20]
      position: [-35,0,0]
      texture: 63 
      bump:
        position: 40
        size: 0        
    top_side_wings:
      doubleside: true
      offset:
        x: 75
        y: -15
        z: 0
      length: [40]
      width: [30,10,40]
      angle: [70,70]
      position: [-64,0,0]
      texture: 3
      bump:
        position: 170
        size: 40
    back_wings2:
      doubleside: true
      offset:
        x: 30
        y: 106
        z: 0
      length: [60]
      width: [56,10,40]
      angle: [50,0]
      position: [-25,0,0]
      texture: 3.3
      bump:
        position: 40
    back_wings3:
      doubleside: true
      offset:
        x: 31
        y: 105
        z: 0
      length: [60]
      width: [56,10,40]
      angle: [50,0]
      position: [-25,0,0]
      texture: 63
      bump:
        position: 42     
