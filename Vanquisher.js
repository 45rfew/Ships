return model =
  name: "Vanquisher"
  level: 7
  model: 2
  size: 3
  specs:
    shield:
      capacity: [600,600]
      reload: [14,14]
    generator:
      capacity: [250,250]
      reload: [75,75]
    ship:
      mass: 560
      speed: [70,70]
      rotation: [50,50]
      acceleration: [170,170]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 50
        y: 26
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-40,-80,-37,-30,-17,-10,10,17,30,75,64,24]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6.7,6.7,12.5,12.5,15,15,20,30,30,0,0]
      height: [0,6.7,6.7,12.5,12.5,15,15,20,30,30,0,0]
      texture: [12,18,8,10,1,17,1,10,8,15]
      laser:
        damage: [120,120]
        rate: 1
        type: 1
        speed: [150,150]
        recoil: 100
        number: 1
        error: 0
    main1:
      section_segments: 12
      offset:
        x: 0
        y: 62
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [5,5,5,0,5,5,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [2,5,11,14,12,8,7,0]
      height: [2,5,11,14,12,8,7,0]
      texture: [5,63,8,8,3,15]
      propeller: false
    main2:
      section_segments: 6
      offset:
        x: 50
        y: 90
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [4,4,4,0,4,4,4,4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,7,10,8,4,3,0]
      height: [0,1,7,10,8,4,3,0]
      texture: [5,1.1,8,8,3,15]
      propeller: false
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -19
        z: 18
      position:
        x: [0,0,0,0]
        y: [20,40,70]
        z: [-4,0,0]
      width: [5,10,5]
      height: [0,8,0]
      texture: [9]
    disc:
      section_segments: 6
      offset:
        x: 50
        y: -46
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-10,-7,-7,7,7,10,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [5.199999999999999,5.199999999999999,5.199999999999999,9.2,9.2,9.2,9.2,5.199999999999999,5.199999999999999,5.199999999999999]
      height: [6,6,6,10,10,10,10,6,6,6]
      texture: [1,1,1,1,16.9,1]
      propeller: true
    ring:
      section_segments: 9
      offset:
        x: 0
        y: 58
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,14,14,14,14,12,12,12]
      height: [12,12,12,14,14,14,14,12,12,12]
      texture: [1,1,1,1,18,1]
      propeller: false
    ring2:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-2,-2,2,2,3,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,12,12,12,12,12,10,10,10]
      height: [10,10,10,12,12,12,12,10,10,10]
      texture: [1,1,1,1,11,1]
      propeller: false
    ring3:
      section_segments: 6
      offset:
        x: 50
        y: 87
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-6,-4,-4,4,4,4,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [9,9,9,10,10,10,10,9,9,9]
      height: [8,8,8,9,9,9,9,8,8,8]
      texture: [1,1,1,1,18,1]
      propeller: false
    ring4:
      section_segments: 6
      offset:
        x: 50
        y: 57
        z: 41
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-2,-2,2,2,3,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [8,8,8,9,9,9,9,8,8,8]
      height: [8,8,8,9,9,9,9,8,8,8]
      texture: [1,1,1,1,11,1]
      propeller: false
    rocketlauncherguns1:
      section_segments: 6
      offset:
        x: 4
        y: 57
        z: 49
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [10,10]
        rate: 2
        type: 2
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    rocketlauncherguns2:
      section_segments: 6
      offset:
        x: 4
        y: 55
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [10,10]
        rate: 2
        type: 2
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    rocketlauncherguns3:
      section_segments: 6
      offset:
        x: 8
        y: 56
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [10,10]
        rate: 2
        type: 2
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    rocketlauncherguns4:
      section_segments: 6
      offset:
        x: 0
        y: 56
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [10,10]
        rate: 2
        type: 2
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    rocketlauncherback:
      section_segments: 9
      offset:
        x: 0
        y: -38
        z: 42
      position:
        x: [0,0,0,0]
        y: [93,100,100,90]
        z: [0,0,0,0]
      width: [0,14,0,0]
      height: [0,14,0,0]
      propeller: false
      texture: [1,16,12]
    rocketlauncherguns6:
      section_segments: 6
      offset:
        x: 50
        y: 86
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
    rocketlauncherguns5:
      section_segments: 6
      offset:
        x: 54
        y: 85
        z: 38
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      angle: 0
    rocketlauncherguns7:
      section_segments: 6
      offset:
        x: 46
        y: 85
        z: 38
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      angle: 0
    cannon:
      section_segments: 8
      offset:
        x: 50
        y: 27
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-10,10,20,30]
        z: [0,0,0,0,0,0]
      width: [0,8,10,10,8,0]
      height: [0,8,9,9,8,0]
      angle: 0
      texture: [3,1,17,1,3]
    cannon2:
      section_segments: 8
      offset:
        x: 60
        y: 26
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,-10,-10,10,20,30]
        z: [0,0,0,0,0,0]
      width: [0,0,9,9,8,0]
      height: [0,8,10,10,8,0]
      angle: 0
      texture: [3,2,17,1,3]
    cannon9:
      section_segments: 8
      offset:
        x: 40
        y: 26
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,-10,-10,10,20,30]
        z: [0,0,0,0,0,0]
      width: [0,0,9,9,8,0]
      height: [0,8,10,10,8,0]
      angle: 0
      texture: [3,2,17,1,3]
    cannon3:
      section_segments: 8
      offset:
        x: 55
        y: 55
        z: 18
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,10,12,35]
        z: [0,0,0,0,0,0]
      width: [0,0,0,5,7,0]
      height: [0,0,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon10:
      section_segments: 8
      offset:
        x: 45
        y: 55
        z: 18
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,10,12,35]
        z: [0,0,0,0,0,0]
      width: [0,0,0,5,7,0]
      height: [0,0,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon4:
      section_segments: 8
      offset:
        x: 63
        y: 55
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,10,12,40]
        z: [0,0,0,0,0,0]
      width: [0,0,0,5,7,0]
      height: [0,0,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon11:
      section_segments: 8
      offset:
        x: -37
        y: 55
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,10,12,40]
        z: [0,0,0,0,0,0]
      width: [0,0,0,5,7,0]
      height: [0,0,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon6:
      section_segments: 8
      offset:
        x: 37
        y: 36
        z: 3
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,20,20,40]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,3,0]
      height: [0,6,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon12:
      section_segments: 8
      offset:
        x: -62.5
        y: 36
        z: 3
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,20,20,40]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,3,0]
      height: [0,6,0,5,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon7:
      section_segments: 8
      offset:
        x: -60
        y: 36
        z: 9
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,18,20,35]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,2,0]
      height: [0,6,0,0,5,0]
      angle: 180
      texture: [3,3,3,3,3]
    cannon13:
      section_segments: 8
      offset:
        x: -40
        y: 36
        z: 9
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,18,20,35]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,2,0]
      height: [0,6,0,0,5,0]
      angle: 0
      texture: [3,3,3,3,3]
    cannon8:
      section_segments: 8
      offset:
        x: 54
        y: 36
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,18,20,28]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,2,0]
      height: [0,6,0,0,5,0]
      angle: 180
      texture: [3]
    cannon14:
      section_segments: 8
      offset:
        x: -46
        y: 36
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,18,20,28]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,2,0]
      height: [0,6,0,0,5,0]
      angle: 180
      texture: [3]
    cannon15:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [85,85]
        rate: 0.8
        type: 2
        speed: [170,170]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon16:
      section_segments: 6
      offset:
        x: 60
        y: 10
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [25,25]
        rate: 2
        type: 2
        speed: [195,195]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon17:
      section_segments: 6
      offset:
        x: 40
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [25,25]
        rate: 2
        type: 2
        speed: [255,255]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon18:
      section_segments: 6
      offset:
        x: 50
        y: 10
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [25,25]
        rate: 2
        type: 2
        speed: [255,255]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon19:
      section_segments: 6
      offset:
        x: 60
        y: 10
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [50,50]
        rate: 1
        type: 2
        speed: [225,225]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon20:
      section_segments: 6
      offset:
        x: 40
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [50,50]
        rate: 1
        type: 2
        speed: [125,125]
        number: 1
        error: 0
      propeller: false
      texture: 3
    cannon21:
      section_segments: 6
      offset:
        x: 50
        y: 10
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0]
      angle: 0
      laser:
        damage: [50,50]
        rate: 1
        type: 2
        speed: [125,125]
        number: 1
        error: 0
      propeller: false
      texture: 3
    front_propulsor:
      section_segments: 15
      offset:
        x: 50
        y: -42.9
        z: 0
      position:
        x: [0,0]
        y: [1,1]
        z: [0,0]
      width: [6,6]
      height: [5,5]
      propeller: true
      texture: [63,12]
    back_propulsor:
      section_segments: 15
      offset:
        x: 50
        y: 90
        z: 0
      position:
        x: [0,0]
        y: [0,1]
        z: [0,0]
      width: [20,20]
      height: [15,15]
      propeller: true
      texture: [63,12]
    back_propulsor1:
      section_segments: 15
      offset:
        x: 60
        y: 100
        z: 0
      position:
        x: [0,0]
        y: [0,0]
        z: [0,0]
      width: [10,10]
      height: [15,15]
      propeller: true
      texture: [63,12]
    back_propulsor2:
      section_segments: 15
      offset:
        x: 40
        y: 100
        z: 0
      position:
        x: [0,0]
        y: [0,0]
        z: [0,0]
      width: [10,10]
      height: [15,15]
      propeller: true
      texture: [63,12]
    back_propulsor3:
      section_segments: 15
      offset:
        x: 50
        y: 100
        z: 10
      position:
        x: [0,0]
        y: [0,0]
        z: [0,0]
      width: [10,10]
      height: [15,15]
      propeller: true
      texture: [63,12]
    back_propulsor4:
      section_segments: 15
      offset:
        x: 50
        y: 100
        z: -10
      position:
        x: [0,0]
        y: [0,0]
        z: [0,0]
      width: [10,10]
      height: [15,15]
      propeller: true
      texture: [63,12]
    wing_light:
      section_segments: [45,135,225,315]
      offset:
        x: 37
        y: 50
        z: 0
      position:
        x: [0.3,0.3,0,0]
        y: [34,34,100-3,100-3]
        z: [8,8,0,0]
      width: [0,2,2,0]
      height: [0,0.1,0.1,0]
      texture: [17]      
      angle:180
  wings:
    main1:
      doubleside: true
      offset:
        x: 50
        y: -23
        z: 10
      length: [2,8,0,5]
      width: [10,12,10,61,10]
      angle: [70,30,20,28]
      position: [-26,7.5,0,-17.5,2.5]
      texture: [0,8,13,63]
      bump:
        position: 35
        size: 10
    main2:
      doubleside: true
      offset:
        x: -50
        y: -23
        z: 10
      length: [2,8,0,5]
      width: [10,12,10,61,10]
      angle: [70,30,20,28]
      position: [-26,7.5,0,-17.5,2.5]
      texture: [0,8,13,63]
      bump:
        position: 35
        size: 10
    main3:
      doubleside: true
      offset:
        x: -58
        y: -18
        z: -20
      length: [1,8,0,5]
      width: [10,12,10,80,10]
      angle: [0,40,20,28]
      position: [-26,7.5,0,-17.5,2.5]
      texture: [63,63,63,63]
      bump:
        position: 35
        size: 10
    main4:
      doubleside: true
      offset:
        x: 43
        y: -18
        z: -20
      length: [1,8,0,5]
      width: [10,12,10,80,10]
      angle: [0,40,20,28]
      position: [-26,7.5,0,-17.5,2.5]
      texture: [63,63,63,63]
      bump:
        position: 35
        size: 10
    main5:
      doubleside: true
      offset:
        x: 0
        y: -35
        z: 0
      length: [60]
      width: [190,100,40]
      angle: [0,23]
      position: [20,80,85]
      texture: 8.423
      bump:
        position: 30
        size: 10
        size: 10
    main6:
      doubleside: true
      offset:
        x: 0
        y: 10
        z: 0
      length: [60,0,0]
      width: [30,30,0]
      angle: [0,0,0]
      position: [-120,-10,0]
      texture: 1
      bump:
        position: 0
        size: 0
    lights:
      doubleside: true
      offset:
        x: 0
        y: 10
        z: 0
      length: [38.4,0,0]
      width: [10,10,0]
      angle: [0,0,0]
      position: [-120,-53,0]
      texture: 17
      bump:
        position: 0
        size: 1        
    main7:
      doubleside: true
      offset:
        x: 0
        y: 97
        z: 0
      length: [40,0,0]
      width: [40,20,0]
      angle: [0,0,0]
      position: [-30,-10,0]
      texture: 1
      bump:
        position: 0
        size: 0
    lights2:
      doubleside: true
      offset:
        x: 0
        y: 97
        z: 0
      length: [40,0,0]
      width: [33,13,0]
      angle: [0,0,0]
      position: [-30,-10,0]
      texture: 17
      bump:
        position: 0
        size: 1        
    rocketlauncherholders:
      doubleside: true
      offset:
        x: -1
        y: 26
        z: 15
      position: [18,18,32,38]
      length: [15,18,11,5]
      width: [9,10,7,3]
      angle: [0,83,125,40]
      texture: [1,1]
      bump:
        position: 0
        size: 30
    rocketlauncherholders2:
      doubleside: true
      offset:
        x: 45
        y: 54
        z: 15
      position: [18,18,32,38]
      length: [15,18,11,5]
      width: [9,10,7,3]
      angle: [0,83,125,40]
      texture: [1,1]
      bump:
        position: 0
        size: 20
    rocketlauncherholders3:
      doubleside: true
      offset:
        x: -55
        y: 54
        z: 15
      position: [18,18,32,38]
      length: [15,18,11,5]
      width: [9,10,7,3]
      angle: [0,83,125,40]
      texture: [1,1]
      bump:
        position: 0
        size: 20
