return model =
  name: "Kfir C-7"
  level: 6
  model: 6
  size: 2
  zoom: 0.85
  specs:
    shield:
      capacity: [400,550]
      reload: [10,20]
    generator:
      capacity: [350,400]
      reload: [200,300]
    ship:
      mass: 350
      speed: [140,160]
      rotation: [140,180]
      acceleration: [120,140]
  bodies:
    main:
      section_segments: [30,60,120,150,210,240,300,330,360]
      offset:
        x: 1
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-172,-158,-125,70,120,121]
        z: [0,0,0,0,0]
      width: [1,6,13,18,23,18,10]
      height: [0,9,13,18,18,18,10]
      texture: [0,0,0,0]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -120
        z: 9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,32,45]
        z: [0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [9]
      laser:
        damage: [200,250]
        rate: 1.5
        type: 1
        speed: [200,240]
        number: 1
        angle: 0
        error: 0      
    frontsupport:
      section_segments: 6
      offset:
        x: 1
        y: -66
        z: -7
      position:
        x: [-5,17,17,9,17,15,10,0,0]
        y: [0,-20,-13,-9,-5,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,30,15,10,10,0,0]
      height: [0,1,5,7,5,5,5,5,0]
      angle: 90
      texture: [1,2,2]
    topsupport:
      section_segments: [30,60,90,120,150,210,240,300,330,360]
      offset:
        x: 5
        y: -40
        z: 10
      position:
        x: [17,17,19,9,17,15,10,0,0]
        y: [0,-8,-8,0,-3,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,5,30,5,0,0,0,0]
      height: [0,0,5,7,5,0,0,0,0]
      angle: -90
      texture: [4,4,4]
    wingsRail:
      section_segments: 4
      offset:
        x: 42
        y: 2
        z: 0
      position:
        x: [-2,-3,-3.5,-5.5,0,0,0]
        y: [-65,-55,90,106]
        z: [-3,-3,-35,-36,0,0,0,0,0]
      width: [2,3,3,1]
      height: [1,2,2,1]
      texture: [4]
      angle: 29
    wingsRail1:
      section_segments: 4
      offset:
        x: 38
        y: -55
        z: 20
      position:
        x: [-2,-3,-4,-11,0,0,0]
        y: [-45,-35,30,39]
        z: [-20,-20,-25,-24,0,0,0,0,0]
      width: [1,2,2,1.6]
      height: [1.5,1.5,1.5,1.5]
      texture: [4.8]
      angle: 32.5
    wingsRail2:
      section_segments: 4
      offset:
        x: 38
        y: -25
        z: -2
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-27,0,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,2,2,1.6]
      height: [1,1,1,1]
      texture: [4.8]
      angle: 0
    wingsRail3:
      section_segments: 4
      offset:
        x: 71
        y: 92
        z: -26
      position:
        x: [-2,-2,-3,-4,0,0,0]
        y: [-40,-10,20,50]
        z: [-4,0,0,0,0,0,0,0,0]
      width: [1,2,2,1.6]
      height: [1,1,1,1]
      texture: [4.8]
      angle: 0
    engines:
      section_segments: [0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360]
      offset:
        x: 20
        y: 39
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-45,-45,0,25,50,44]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,0]
      height: [0,12.5,15,10,10,0]
      texture: [1,1,3,4,15]
      angle: 183
    backengines:
      section_segments: [0,30,60,90,120,150,180,210,240,270,300,330,360]
      offset:
        x: 23
        y: 95
        z: 0
      position:
        x: [3,3,3,0,0,0,0,0]
        y: [-25,-32,-30,5,20,20,20]
        z: [2,2,2,0,0,0,0,0]
      width: [0,11,15,15,10,10,0]
      height: [0,8.5,11.5,15,10,10,0]
      propeller: false
      texture: [17,13,1,1,1,1]
      angle: 183
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -115
        z: -14
      position:
        x: [0,0,0,0,0,0]
        y: [-55,-65,-20,0,20,30]
        z: [3,3,2,1,0,20]
      width: [0,0.7,2,2,1.5,0]
      height: [0,0.7,2,2,1.5,0]
      angle: 0
      propeller: false
      texture: [2.8,2.8,2.8,2.8]
      laser:
        damage: [50,60]
        rate: 2
        type: 2
        speed: [360,380]
        number: 25
        error: 0
    propulsor:
      section_segments: [30,60,120,150,210,240,300,330,360]
      offset:
        x: 0
        y: 33
        z: 0
      position:
        x: [0,0,0,0]
        y: [80,95,100,90]
        z: [0,0,0,0]
      width: [5,22,16,0]
      height: [5,18,11,0]
      propeller: true
      texture: [1,15,17]
    propulsor2:
      section_segments: 15
      offset:
        x: 23
        y: 120
        z: 0
      position:
        x: [0,0]
        y: [1,1]
        z: [0,0]
      width: [11,11]
      height: [10,10]
      propeller: true
      texture: [111]
      laser:
        damage: [15,26]
        rate: 6.2
        type: 2
        speed: [360,400]
        number: 3
        error: 0
        angle: 1
  wings:
    front:
      offset:
        x: 0
        y: 145
        z: 0
      length: [95,0]
      width: [50,40,0]
      angle: [-23,40]
      position: [-180,-30,0]
      texture: [6.285,63]
      doubleside: true
      bump:
        position: 60
        size: 10
    back:
      offset:
        x: 0
        y: 250
        z: 10
      length: [100,5]
      width: [150,50,5]
      angle: [-30,-40]
      position: [-200,-130,-100]
      texture: [6.3,63]
      doubleside: true
      bump:
        position: 40
        size: 3
    headwings:
      doubleside: true
      offset:
        x: 0
        y: -60
        z: 0
      length: [50]
      width: [50,10,40]
      angle: [-5,20]
      position: [-20,40,15]
      texture: 6.32
      bump:
        position: 40
        size: 12
    rear:
      offset:
        x: -0.01
        y: 95
        z: 15
      length: [19,9,9,9,8,7,14]
      width: [85,60,45,34,25,20,15,0]
      angle: [90,90,90,90,90,90,90]
      position: [-10,10,19,28,34,40,45,63]
      texture: [63,63]
      bump:
        position: 0
        size: 5
