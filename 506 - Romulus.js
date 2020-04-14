return model =
  name: 'Romulus'
  level: 5
  model: 6
  size: 1.6
  specs:
    shield:
      capacity: [300,380]
      reload: [12,15]
    generator:
      capacity: [200,280]
      reload: [80,120]
    ship:
      mass: 410
      speed: [90,105]
      rotation: [50,80]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -20
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-124,-99,-98,-60,8,68,80,64]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.4,4.8,13.6,29.6,24,24,0]
      height: [0,2.4,4.8,13.6,16,16,16,0]
      texture: [4,63,63,10,1,12,17]
      propeller: true
      laser:
        damage: [120,140]
        rate: 2
        type: 1
        speed: [160,180]
        recoil: 180
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 24
        z: 14.4
      position:
        x: [0,0,0,0,0]
        y: [-36,-20,0,12,16]
        z: [0,0,0,0,0]
      width: [0,8,12,8,0]
      height: [0,8,12,8,0]
      texture: [9,9,4]
    cannons:
      section_segments: 10
      offset:
        x: 63.2
        y: 44
        z: -9.6
      position:
        x: [0,0,0,0,0,0,2.4,4]
        y: [-36,-44,-16,0,24,45.6,49.6,52.8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4.8,4.8,4.8,4.8,2.40,0]
      height: [0,3.2,4.8,5.6,5.6,3.2,2.4,0]
      texture: [3,3,10,3]
      laser:
        damage: [6,10]
        rate: 5
        type: 2
        speed: [110,130]
        number: 1
        error: 1
    propellers:
      section_segments: 12
      offset:
        x: 24.8
        y: -40
        z: -11.44
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [53.6,56,80,96,100,108,104]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.40,6.4,6.4,6,5.60,0]
      height: [0,1.6,8,9.6,9.2,8.8,0]
      texture: [4,10,1,11,12,17]
      propeller: true
  wings:
    main:
      doubleside: true
      offset:
        x: 12
        y: 6.4
        z: 0
      length: [72]
      width: [72,48]
      angle: [-10]
      position: [8,80]
      texture: [11]
      bump:
        position: 10
        size: 10
    top:
      doubleside: true
      offset:
        x: 12
        y: 24.8
        z: 4
      length: [64]
      width: [56,24]
      angle: [15]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 10
    winglets:
      doubleside: true
      offset:
        x: 67.2
        y: 46.4
        z: -9.6
      length: [0,16]
      width: [0,120,48]
      angle: [-10,-10]
      position: [-8.8,-8.8,40]
      texture: [4,63]
      bump:
        position: 40
        size: 7 
