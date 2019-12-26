return model =
  name: "Lancelot"
  level: 4
  model: 5
  size: 1.5
  specs:
    shield:
      capacity: [260,320]
      reload: [7,10]
    generator:
      capacity: [200,260]
      reload: [40,60]
    ship:
      mass: 400
      speed: [100,120]
      rotation: [100,120]
      acceleration: [70,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-155,-124,-123,-75,0,100,80]
        z: [0,0,0,0,0,0,0]
      width: [0,3,6,17,25,20,0]
      height: [0,3,6,17,20,20,0]
      texture: [4,63,63,10,1,12]
      propeller: true
      laser:
        damage: [100,120]
        rate: 1
        type: 1
        speed: [120,150]
        recoil: 200
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 22
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [9]
    propellers:
      section_segments: 8
      offset:
        x: -1
        y: 22
        z: -20
      position:
        x: [60,60,60,60,60,60,60,60]
        y: [80,90,110,130,120,0,0,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [1,1,1,12]
      propeller: true
  wings:
    main:
      doubleside: true
      offset:
        x: 15
        y: 30
        z: 0
      length: [50,30]
      width: [90,60,60]
      angle: [-10,-60]
      position: [0,100,50]
      texture: [1,63]
      bump:
        position: 10
        size: 10
    top:
      doubleside: true
      offset:
        x: 15
        y: 30
        z: 0
      length: [50]
      width: [70,30]
      angle: [45]
      position: [0,50]
      texture: [63]
      bump:
        position: 10
        size: 10
