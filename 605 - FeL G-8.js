return model =
  name: "FeL G-8"
  level: 6
  model: 5
  size: 2.036
  next: [705,706]
  specs:
    shield:
      capacity: [600,700]
      reload: [10,15]
    generator:
      capacity: [450,500]
      reload: [150,230]
    ship:
      mass: 550
      speed: [120,140]
      rotation: [100,120]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: [30,60,120,150,210,240,300,330,360]
      offset:
        x: 1
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-242,-228,-175,10,60,61]
        z: [0,0,0,0,0]
      width: [1,6,14,19,23,18,10]
      height: [0.1,9,13,18,18,18,10]
      texture: [2,2,2,2]
      propeller: false
      laser:
        damage: [50,75]
        rate: 4
        type: 1
        speed: [230,280]
        number: 1
        angle: 0
        error: 3
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
        x: [-5,17,17,9,17,15,10,0,0]
        y: [0,-8,-8,0,-3,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,5,30,5,0,0,0,0]
      height: [0,1,5,7,5,5,5,5,0]
      angle: -90
      texture: [4,4,4]
    engines:
      section_segments: [40,45,50,130,135,140,220,225,230,270,310,315,320]
      offset:
        x: 20
        y: 44
        z: 0
      position:
        x: [0,-2,0,1,22,22,0]
        y: [-45,-45,20,65,110,104]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,0]
      height: [0,12.5,15,10,10,0]
      texture: [3,3,3,12,15]
      angle: 180
    backengines:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 22
        y: 95
        z: 0
      position:
        x: [0,0,-2,-2,0,0,0,0,0]
        y: [0,0,-40,-45,5,10,10,10]
        z: [0,0,2,2,0,0,0,0,0]
      width: [0,0,0,10,15,7,7,0]
      height: [0,0,0,10,15,13,13,0]
      propeller: false
      texture: [17,3,3,3,3]
      angle: 180
    engines1:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 18
        y: -13
        z: 0
      position:
        x: [0,0,0,2,22,12,0]
        y: [0,0,0,-0.7,16,5]
        z: [0,0,0,0,0,1,0]
      width: [0,0,0,28.1,14,0]
      height: [0,0,0,10.1,10,0]
      texture: [1,1,1,4,4]
      angle: 120
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
        damage: [10,25]
        rate: 8
        type: 2
        speed: [160,180]
        number: 1
        error: 2
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
        damage: [60,90]
        rate: 1
        type: 2
        speed: [260,300]
        number: 1
        error: 0
        angle: 1
    backengines1:
      section_segments: [10,40,45,50,80,130,135,140,170,220,225,230,260,310,315,320,350]
      offset:
        x: 90
        y: 45
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,-40,-45,20,35,35,-10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,0,0,10,12,9,9,0]
      height: [0,0,0,12,13,11,11,0]
      propeller: true
      texture: [3.5,3.3]
      angle: 180
    wingsRail:
      section_segments: [45,135,225,315]
      offset:
        x: 135
        y: 74.5
        z: -13
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-7,-5,12.1,12.1]
        z: [0,0,-1,-1,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 2
    wingsRail2:
      section_segments: [45,135,225,315]
      offset:
        x: 88
        y: 67
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-6,-5,10,11]
        z: [-2,0,0,-1,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [63.8]
      angle: 90
    wingsRail3:
      section_segments: [45,135,225,315]
      offset:
        x: 90
        y: 80
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-6,-5,5,6]
        z: [0,0,0,0,0,0,0,0,0]
      width: [2,5,5,2]
      height: [1,2,2,1]
      texture: [63]
      angle: 90
    wingsRail4:
      section_segments: [45,135,225,315]
      offset:
        x: 88
        y: 35
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-7,-5,9,10]
        z: [-2,0,0,-1,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 0
    wingsRail5:
      section_segments: [45,135,225,315]
      offset:
        x: 93.5
        y: 35
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-7,-5,9,10]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 0
    wingstail:
      section_segments: 6
      offset:
        x: 65.5
        y: 67
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-41,-39,19,20]
        z: [10.5,10.5,0,0,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [3]
      angle: 76.8
    wingstail1:
      section_segments: 8
      offset:
        x: 115
        y: 80
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-17,-15,23,23]
        z: [4,4,-3,-3,0,0,0,0,0]
      width: [1,1.5,1.5,0]
      height: [1,1,1,0]
      texture: [3]
      angle: 75
    wingsRail6:
      section_segments: [45,135,225,315]
      offset:
        x: 59
        y: 107
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,4,5]
        z: [0,0,-1,-1,0,0,0,0,0]
      width: [1,1.6,1.6,0]
      height: [1,1.6,1.6,0]
      texture: [63]
      angle: -1
    wingsRail7:
      section_segments: [45,135,225,315]
      offset:
        x: 29
        y: 107
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-13,-11,13,15]
        z: [0,0,-1,-1,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63.8]
      angle: 82
    wingsRail8:
      section_segments: 16
      offset:
        x: 20.5
        y: 50
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-4,-4,5,6]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,16.6,16.6,0]
      height: [0,6.6,6.6,0]
      texture: [12]
      angle: 91
    wingsRail9:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: 17
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,5,7]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63]
      angle: 87
    wingsRai10:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: 4
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,4,6]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63]
      angle: 87
    wingsRail12:
      section_segments: 6
      offset:
        x: 28.8
        y: 133.2
        z: 51
      position:
        x: [4,4,3,3,0,0,0,0]
        y: [-3,-2,4,4.5]
        z: [-3,-3,-3,-3,0,0,0,0,0]
      width: [0.5,0.7,0.7,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 10
  wings:
    headwings:
      doubleside: true
      offset:
        x: 12
        y: 110
        z: 0
      length: [50]
      width: [40,10,40]
      angle: [-5,20]
      position: [-20,0,0]
      texture: 3.2
      bump:
        position: 40
        size: 12
    topwings:
      doubleside: true
      offset:
        x: 15
        y: 130
        z: 0
      length: [55]
      width: [40,10,40]
      angle: [70,70]
      position: [-30,5,0]
      texture: 3.2
      bump:
        position: 40
        size: 30
    headwings1:
      doubleside: true
      offset:
        x: 20
        y: 18
        z: 0
      length: [55]
      width: [30,10,40]
      angle: [-5,20]
      position: [-35,0,0]
      texture: 3.25
      bump:
        position: 45
        size: 20
    back:
      offset:
        x: 0
        y: 200
        z: 10
      length: [140,1]
      width: [70,22,5]
      angle: [-10,-20]
      position: [-175,-120,-100]
      texture: [3.145,1]
      doubleside: true
      bump:
        position: 35
        size: 5
