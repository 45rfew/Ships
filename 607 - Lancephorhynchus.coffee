return model =
  name: "Lancephorhynchus"
  level: 6
  model: 8
  size: 2
  specs:
    shield:
      capacity: [400,500]
      reload: [30,50]
    generator:
      capacity: [1000,1200]
      reload: [100,300]
    ship:
      mass: 900
      speed: [90,120]
      rotation: [90,120]
      acceleration: [65,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 65
        y: -8
        z: 0
      position:
        x: [-65,-50,-50,-40,-20,-20,-20,-20,-20]
        y: [-161,-124,-126,-75,0,80,75,100,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,6,7,10,20,19,10,0]
      height: [0,3,6,7,10,20,19,18,0]
      texture: [3,17,63,10,1,4,12,17]
      propeller: true
      angle: [0]
    u10:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-161,-124,-126,-75,0,80,85,100,90]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,6,17,25,20,19,18,0]
      height: [0,3,6,17,20,20,19,18,0]
      texture: [3,17,63,10,1,4,12,17]
      propeller: true
      laser:
        damage: [500,1000]
        rate: 0.8
        type: 2
        speed: [70,110]
        recoil: 600
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 18
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
        x: -30
        y: -40
        z: -11
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
        x: -0.5
        y: -1
        z: 0
      length: [50,40]
      width: [240,80,100]
      angle: [-10,-45]
      position: [-50,50,101]
      texture: [1,63]
      bump:
        position: 10
        size: 1
    top:
      doubleside: true
      offset:
        x: 58
        y: 57
        z: -10
      length: [40]
      width: [60,20]
      angle: [45]
      position: [0,-50]
      texture: [63]
      bump:
        position: 10
        size: 10
