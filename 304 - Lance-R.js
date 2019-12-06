return model =
  name: "Lance-R"
  level: 3
  model: 4
  size: 1.5
  specs:
    shield:
      capacity: [220,240]
      reload: [5,8]
    generator:
      capacity: [80,130]
      reload: [30,40]
    ship:
      mass: 300
      speed: [80,100]
      rotation: [80,100]
      acceleration: [65,100]
      dash:
        rate: 2
        burst_speed: [150,200]
        speed: [90,120]
        acceleration: [65,100]
        initial_energy: [15,25]
        energy: [0,0]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-155,-124,-126,-75,0,80,85,100,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,6,17,25,20,19,18,0]
      height: [0,3,6,17,20,20,19,18,0]
      texture: [6,17,63,10,1,4,12,17]
      propeller: true
      laser:
        damage: [35,65]
        rate: 2
        type: 2
        speed: [70,100]
        recoil: 0
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 32
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
        x: -18
        y: -42
        z: -7
      position:
        x: [20,50,58,60,60,60,60,60,60]
        y: [40,70,100,120,125,135,130]
        z: [5,5,3,0,0,0,0,0,0]
      width: [0,5,10,10,9.5,9,0]
      height: [0,5,10,12,11.5,11,0]
      texture: [1,1,1,4,12,17]
      propeller: true
  wings:
    main:
      doubleside: true
      offset:
        x: 10
        y: -35
        z: 0
      length: [50,40]
      width: [90,60,20]
      angle: [-10,-45]
      position: [0,100,50]
      texture: [1,63]
      bump:
        position: 10
        size: 10
    top:
      doubleside: true
      offset:
        x: 58
        y: 67
        z: -10
      length: [40]
      width: [60,20]
      angle: [45]
      position: [0,-50]
      texture: [63]
      bump:
        position: 10
        size: 10
