return model =
  name: "Shadow X-0"
  level: 1
  model: 1
  size: 1
  specs:
    shield:
      capacity: [130,160]
      reload: [5,6]
    generator:
      capacity: [80,100]
      reload: [20,30]
    ship:
      mass: 140
      speed: [150,180]
      rotation: [110,130]
      acceleration: [80,100]
  bodies:
    front:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-100,-100,45,75,85]
        z: [0,0,0,0,0]
      width: [0,17,35,30,20]
      height: [0,2,40,30,8]
      texture: [63,3,2,63]
      laser:
        damage: [30,40]
        rate: 2
        type: 1
        speed: [120,150]
        number: 1
        recoil: 20
    cockpit:
      section_segments: 10
      offset:
        x: 0
        y: 10
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-70,-70,-25,0,10]
        z: [0,0,0,0,9]
      width: [0,10,15,15,10]
      height: [0,0,25,10,0]
      texture: [9,9,9,4]
    propulsors:
      section_segments: 10
      offset:
        x: 0
        y: -10
        z: 0
      position:
        x: [0,0,0]
        y: [30,105,100]
        z: [0,0,0]
      width: [15,20,0]
      height: [10,10,0]
      propeller: true
      texture: [12]
  wings:
    main:
      doubleside: true
      offset:
        x: 10
        y: 50
        z: -10
      length: [70,20]
      width: [60,10]
      angle: [30,0]
      position: [-20,50]
      texture: [63]
      bump:
        position: 20
        size: 5
    main2:
      doubleside: true
      offset:
        x: 10
        y: 45
        z: -10
      length: [70,20]
      width: [60,10]
      angle: [30,0]
      position: [-20,50]
      texture: [17]
      bump:
        position: 20
        size: 0      
    winglets:
      doubleside: true
      offset:
        x: 8
        y: 30
        z: 10
      length: [40,100,20]
      width: [40,60,20]
      angle: [-30,55,90]
      position: [0,-40,130,0]
      texture: [63]
      bump:
        position: 30
        size: 30
    winglets2:
      doubleside: true
      offset:
        x: 8
        y: 23
        z: 10
      length: [40,100,20]
      width: [40,60,20]
      angle: [-30,55,90]
      position: [0,-40,130,0]
      texture: [17]
      bump:
        position: 30
        size: 0    
