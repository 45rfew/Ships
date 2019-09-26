return model =
  name: "Dessaix"
  level: 5
  model: 3
  size: 1.7
  specs:
    shield:
      capacity: [250,360]
      reload: [7,14]
    generator:
      capacity: [500,560]
      reload: [100,150]
    ship:
      mass: 440
      speed: [125,190]
      rotation: [120,160]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -25
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-100,-95,-65,70,120,121]
        z: [0,0,0,0,0]
      width: [0,6,23,30,30,30,25]
      height: [0,9,13,18,22,28,25]
      texture: [1,1,10,1]
      propeller: false
    winged:
      section_segments: [0,45,90,135,180,270]
      offset:
        x: -84
        y: -7
        z: -10
      position:
        x: [0,-5,0,14,22,0]
        y: [-70,-80,40,80,90,100]
        z: [0,0,0,0,-3,0]
      width: [0,4,12,10,0]
      height: [0,2,5,4,0]
      texture: [12,2,63,63]
      angle: -10
    missiles:
      section_segments: 12
      offset:
        x: 83
        y: -10
        z: -5
      position:
        x: [5,3,3,3,4,-5.5]
        y: [-74,-33,0,3,45,58]
        z: [0,0,0,0,0,0]
      width: [0,4,4,4,5,5]
      height: [0,4,4,4,5,5]
      texture: [17,18,18,13]
      angle: 10
    missiles2:
      section_segments: 12
      offset:
        x: -29
        y: 65
        z: -5
      position:
        x: [5,4,-19]
        y: [34,45,65]
        z: [-7,0,0]
      width: [4,5,7]
      height: [4,5,5]
      texture: [18,13,4]
      angle: -95
    c:
      section_segments: 6
      offset:
        x: 75
        y: -35
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 5
      laser:
        damage: [15,25]
        rate: 3.5
        type: 1
        speed: [160,180]
        number: 1
        error: 3
      propeller: false
    hubs1:
      vertical: true
      section_segments: 8
      offset:
        x: 50
        y: -6
        z: -60
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,9]
        z: [0,0,0,0,0,0,0]
      width: [20,18,13,12,10,0]
      height: [20,18,13,12,10,0]
      texture: [11,17,111,18,16]
      angle: 13
    engines1:
      section_segments: 12
      offset:
        x: 25
        y: -25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [35,30,50,80,110,120,125,115]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,8,9,9,9,9,0]
      height: [0,5,8,9,9,9,9,0]
      texture: [18,18,10,11,15,17,18]
      propeller: true
    engines2:
      section_segments: 8
      offset:
        x: 0
        y: -5
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,95,95]
        z: [-2,-2,-2,0,0,0,0,0]
      width: [0,22,23,23,23,26,0]
      height: [0,15,15,15,15,15,0]
      texture: [17]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -40
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-10,10,30,60]
        z: [0,0,0,0,0]
      width: [0,10,15,10,5]
      height: [0,18,25,18,5]
      propeller: false
      texture: 9
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [-40,-50,-20,0,20,50]
        z: [0,0,0,0,0,0]
      width: [0,5,10,10,15,0]
      height: [0,5,15,15,10,0]
      angle: 0
      laser:
        damage: [180,200]
        rate: 1
        type: 1
        speed: [130,160]
        number: 1
        error: 0
      propeller: false
      texture: 3
    balls:
      section_segments: 13
      angle: 0
      offset:
        x: 51
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      height: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      texture: [111]
    balls2:
      section_segments: 13
      angle: 90
      offset:
        x: 51
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      height: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      texture: [17]
    balls3:
      section_segments: 13
      angle: 45
      offset:
        x: 51
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      height: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      texture: [17]
    balls4:
      section_segments: 13
      angle: 135
      offset:
        x: 51
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      height: [0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0]
      texture: [18]
  wings:
    main:
      length: [80,10]
      width: [120,50,40]
      angle: [-10,20]
      position: [30,50,30]
      doubleside: true
      bump:
        position: 30
        size: 10
      texture: [10,63]
      offset:
        x: 0
        y: 10
        z: 0
    main1:
      length: [80,10]
      width: [120,50,40]
      angle: [-10,20]
      position: [18,50,30]
      doubleside: true
      bump:
        position: 30
        size: 5
      texture: [11,63]
      offset:
        x: 0
        y: 6
        z: 0
    winglets:
      length: [40]
      width: [40,20,30]
      angle: [10,-10]
      position: [-100,-10,-5]
      bump:
        position: 0
        size: 20
      texture: 63
      offset:
        x: 0
        y: -3
        z: -5
