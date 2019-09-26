return model =
  name: "Teraser"
  level: 4
  model: 1
  size: 1.2
  specs:
    shield:
      capacity: [200,280]
      reload: [10,14]
    generator:
      capacity: [200,300]
      reload: [130,170]
    ship:
      mass: 255
      speed: [100,130]
      rotation: [70,85]
      acceleration: [100,130]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-40,-40,-30,0,30,44,50,47]
        z: [0,0,0,0,0,0,0,0,0]
      width: [15,20,35,40,35,27,25,0]
      height: [20,30,40,35,27,25,25,0]
      texture: [5,3,8,8,3,15]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -32
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-13,-8,0]
        z: [0,0,0]
      width: [0,20,25]
      height: [0,30,35]
      texture: [9]
      propeller: false
    gun2:
      section_segments: 6
      offset:
        x: 0
        y: -55
        z: 163
      position:
        x: [0,0,0]
        y: [0,3,30]
        z: [0,0,0]
      width: [0,3,1]
      height: [0,3,1]
      texture: [6,7]
      laser:
        damage: [23,40]
        rate: 2.5
        type: 1
        speed: [80,100]
        number: 1
        error: 2
    gun3:
      section_segments: 6
      offset:
        x: 0
        y: -55
        z: -163
      position:
        x: [0,0,0]
        y: [0,3,30]
        z: [0,0,0]
      width: [0,3,1]
      height: [0,3,1]
      texture: [6,7]
      laser:
        damage: [23,40]
        rate: 2.5
        type: 1
        speed: [80,100]
        number: 1
        error: 2
    gun:
      section_segments: 6
      offset:
        x: 174
        y: -55
        z: 0
      position:
        x: [0,0,0]
        y: [0,3,30]
        z: [0,0,0]
      width: [0,3,1]
      height: [0,3,1]
      texture: [6,7]
      laser:
        damage: [7,10]
        rate: 6
        type: 1
        speed: [80,100]
        number: 1
        error: 2
    topVent:
      section_segments: 6
      offset:
        x: 35
        y: -25
        z: 10
      position:
        x: [-2,-2,0,0,0,0]
        y: [0,1,4,30,45,40]
        z: [-2,-2,0,0,0,0]
      width: [0,5,8,10,8,0]
      height: [0,5,8,10,8,0]
      texture: [4,10,10,12]
      propeller: true
      laser:
        damage: [13,18]
        rate: 8
        type: 1
        speed: [90,110]
        number: 1
        error: 0
    bottomVent:
      section_segments: 6
      offset:
        x: 35
        y: -25
        z: -10
      position:
        x: [-2,-2,0,0,0,0]
        y: [0,1,4,30,45,40]
        z: [2,2,0,0,0,0]
      width: [0,5,8,10,8,0]
      height: [0,5,8,10,8,0]
      texture: [4,10,10,12]
      propeller: true
      laser:
        damage: [13,18]
        rate: 8
        type: 1
        speed: [90,110]
        number: 1
        error: 0
  wings:
    tWing:
      doubleside: true
      offset:
        x: 0
        y: 0
        z: 35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [1,2,3,4]
      bump:
        position: [-20]
        size: [15]
    tWing2:
      doubleside: true
      offset:
        x: 0
        y: 10
        z: 35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [5]
    tWing3:
      doubleside: true
      offset:
        x: 0
        y: -2
        z: 35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [90,90,90,90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [5]
    hWing:
      doubleside: true
      offset:
        x: 15
        y: 0
        z: 0
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [1,2,3,4]
      bump:
        position: [-20]
        size: [20]
    hWing2:
      doubleside: true
      offset:
        x: 15
        y: 10
        z: -3
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [18]
      bump:
        position: [-20]
        size: [20]
    hWing3:
      doubleside: true
      offset:
        x: 15
        y: -2
        z: -1.4
      length: [120,25,15]
      width: [60,50,40,30]
      angle: [0,0,0]
      position: [0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [20]
    bWing:
      doubleside: true
      offset:
        x: 0
        y: 0
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [1,2,3,4]
      bump:
        position: [-20]
        size: [15]
    bWing2:
      doubleside: true
      offset:
        x: 0
        y: 10
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [5]
    bWing3:
      doubleside: true
      offset:
        x: 0
        y: -2
        z: -35
      length: [1,96,20,12]
      width: [1,60,50,40,30]
      angle: [-90,-90,-90,-90]
      position: [0,0,5,-20,-40]
      texture: [17]
      bump:
        position: [-20]
        size: [5]
