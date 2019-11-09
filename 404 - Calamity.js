return model =
  name: "Calamity"
  level: 4
  model: 4
  size: 1.6
  specs:
    shield:
      capacity: [175,235]
      reload: [5,10]
    generator:
      capacity: [300,560]
      reload: [80,100]
    ship:
      mass: 330
      speed: [110,135]
      rotation: [100,125]
      acceleration: [60,70]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-110,-100,-55,0,25,20,20,35,20,30]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,18,30,10,20,30,10,0]
      height: [0,5,20,30,15,10,10,15,0]
      texture: [3,3,4,4,4]
      propeller: true
      angle: 0
      laser:
        damage: [200,210]
        rate: 1.2
        type: 1
        speed: [100,140]
        number: 1
        angle: 0
        recoil: 900
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 13
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-10,0,30,40]
        z: [0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,10,15,12,0]
      texture: [9]
      propeller: false
    cannons:
      section_segments: 6
      offset:
        x: 80
        y: -40
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-45,-20,0,20,25,20]
        z: [0,0,0,0,0,0,0]
      width: [0,5,10,10,15,10,0]
      height: [0,5,10,10,10,5,0]
      angle: 3
      laser:
        damage: [10,15]
        rate: 8
        type: 2
        speed: [120,140]
        number: 1
        angle: 1
        recoil: 0
        error: 6
      propeller: false
      texture: [4,4,10,4,63,17]
    wingsthings:
      section_segments: 8
      offset:
        x: 29
        y: 3
        z: 15
      position:
        x: [-18,-1,0,0,0,0,0,0]
        y: [-75,0,0,0]
        z: [30,0,0,0,0,0,0,0,0]
      width: [2,3,3,2]
      height: [2,3,3,2]
      texture: [63]
      angle: 277
  wings:
    main:
      offset:
        x: 0
        y: 0
        z: 0
      doubleside: true
      length: [110,40]
      width: [70,30,70]
      texture: [4,63]
      angle: [25,-30]
      position: [-20,-40,-11]
      bump:
        position: 0
        size: 20
    winglets:
      length: [30,60]
      width: [100,30,0]
      angle: [50,-30]
      position: [10,30,80]
      texture: [63]
      bump:
        position: 10
        size: 30
      offset:
        x: 0
        y: -30
        z: 0
