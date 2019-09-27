return model =
  name: "Lance-sniper"
  level: 5
  model: 6
  size: 1.5
  specs:
    shield:
      capacity: [400,460]
      reload: [20,40]
    generator:
      capacity: [400,600]
      reload: [50,100]
    ship:
      mass: 600
      speed: [90,120]
      rotation: [100,120]
      acceleration: [65,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-155,-124,-123,-75,10,100,80]
        z: [0,0,0,0,0,0,0]
      width: [0,3,6,17,40,30,0]
      height: [0,3,6,17,20,20,0]
      texture: [4,63,63,10,1,12]
      propeller: true
      laser:
        damage: [100,150]
        rate: 10
        type: 2
        speed: [200,300]
        recoil: 200
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 1
        y: 12
        z: 20
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,30,40]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,5,10,12,0]
      texture: [9]
    propellers:
      section_segments: 8
      offset:
        x: -18
        y: -24
        z: -7
      position:
        x: [55.8,50,58,60,60,60,60,60,60]
        y: [40,70,100,120,125,135,130]
        z: [5,5,3,0,0,0,0,0,0]
      width: [0,5,10,10,9.5,9,0]
      height: [0,5,10,12,11.5,11,0]
      texture: [4,1,1,2.5,12,9]
      propeller: true
  wings:
    main:
      doubleside: true
      offset:
        x: 15
        y: 20
        z: 0
      length: [90,30]
      width: [90,60,160]
      angle: [-10,-160]
      position: [10,100,50]
      texture: [1,63]
      bump:
        position: 10
        size: 10
    top:
      doubleside: true
      offset:
        x: 15
        y: 40
        z: 0
      length: [80]
      width: [70,30]
      angle: [10]
      position: [0,70]
      texture: [63]
      bump:
        position: 10
        size: 10
