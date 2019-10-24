return model =
  name: "Nirvana"
  level: 7
  model: 5
  size: 2.3
  specs:
    shield:
      capacity: [700,700]
      reload: [60,60]
    generator:
      capacity: [700,700]
      reload: [400,400]
    ship:
      mass: 480
      speed: [140,140]
      rotation: [35,35]
      acceleration: [125,125]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,-40,-40,-20,0]
        z: [0,0,0,0,0,0,0]
      width: [0,0,6.7,12.5,12.5,15,15]
      height: [0,0,6.7,12.5,12.5,15,15]
      texture: [1,1,1,10,1,17,1]
    main1:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 10
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,0,-40,-30,-20,0]
        z: [0,0,0,0,0,0,0]
      width: [0,0,6.7,12.5,12.5,15,15]
      height: [0,0,6.7,5.5,7.5,15,15]
      texture: [1,1,1,10,1,17,1]
      angle: 180
    main2:
      section_segments: 10
      offset:
        x: 0
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-138,-135,-110,-80,0,0,30,40,50,60]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,20,25,20,20,30,30,30,20,0]
      height: [0,4,4,20,22,15,10,15,15,15,10,10]
      texture: [12,5,5,4,4,3,4,4,5]
      propeller: true
    main3:
      section_segments: 10
      offset:
        x: 0
        y: 120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-138,-135,-110,-80,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,21,30,20,20,30,30,30,20,0]
      height: [0,4,4,21,20,10,10,15,15,15,10,10]
      texture: [12,5,5,4,4,3,4,4,5]
      propeller: true
    main4:
      section_segments: 20
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-138,-125,-70,-40,0,0,25,35,45,55]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,20,20,20,20,30,30,30,20,0]
      height: [0,5,10,20,20,10,10,15,15,15,10,10]
      texture: [5,4,13,12.5,5,5,4,4,5]
      propeller: true
      laser:
        damage: [250,250]
        rate: 0.8
        type: 1
        speed: [180,180]
        number: 1
        error: 1
    main5:
      section_segments: 12
      offset:
        x: 0
        y: 92
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [5,5,5,0,5,5,5,5]
        z: [0,0,0,0,0,0,0,0,0]
      width: [2,5,11,14,12,8,7,0]
      height: [2,5,11,14,12,8,7,0]
      texture: [5,63,8,8,3,15]
      propeller: false
    cube:
      section_segments: [40,45,130,135,140,220,225,230,310,315,320]
      offset:
        x: 10
        y: 75
        z: 0
      position:
        x: [0,0,0,0]
        y: [-25,-25,25,25]
        z: [0,0,0,0]
      width: [0,20,20,0]
      height: [0,20,20,0]
      texture: [1,10.185,1]
      angle: 180
      propeller: false
    fire:
      section_segments: 10
      offset:
        x: 85
        y: 85
        z: -18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-20,-7,-7,7,7,9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18,18,18,19,19,19,19,18,18,18]
      height: [15.6,15.6,15.6,16.6,16.6,16.6,16.6,15.6,15.6,15.6]
      texture: [4,4,4,1,1,2]
      propeller: true
    ring:
      section_segments: 9
      offset:
        x: 0
        y: 88
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
        y: 60
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-3,-2,-2,2,2,3,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,12,12,12,12,12,10,10,10]
      height: [10,10,10,12,12,12,12,10,10,10]
      texture: [1,1,1,1,11,1]
      propeller: false
    rocketlauncherguns1:
      section_segments: 6
      offset:
        x: 4
        y: 87
        z: 49
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [20,20]
        rate: 1
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
        y: 85
        z: 35
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [20,20]
        rate: 1
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
        y: 86
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [20,20]
        rate: 1
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
        y: 86
        z: 42
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-10,-37.5,-35,-37.5,-35,0,0,5,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      height: [0,2.5,3.5,3.5,2.5,2.5,4,4,0]
      texture: [16.9,8,12,17.9,1.9,3.9,17.9,3.9]
      laser:
        damage: [20,20]
        rate: 2
        type: 2
        speed: [200,200]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    woosh:
      section_segments: 10
      offset:
        x: 1
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [90,95,100,105,90]
        z: [0,0,0,0,0]
      width: [10,15,18,22,2]
      height: [3,5,7,8,2]
      texture: [11.3]
      propeller: true
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 17
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-30,-20,0,10,20,30]
        z: [0,0,0,0,0,0]
      width: [0,10,15,15,10,0]
      height: [0,10,15,15,10,0]
      texture: 9
      propeller: false
    frontsupport:
      section_segments: 6
      offset:
        x: 5
        y: 60
        z: 0
      position:
        x: [-15,27,29,27,27,25,20,0,0]
        y: [0,-50,-43,-39,-35,-30,-20,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,20,28,30,25,20,20,10,0]
      height: [0,1,15,17,15,15,15,15,0]
      angle: 90
      texture: [3,1,3.9,3.9,2.9,16.9,3]
    longthings:
      section_segments: 12
      offset:
        x: 119
        y: -100
        z: 0
      position:
        x: [-1,-1,0,0,2]
        y: [-30,-23,0,33,100]
        z: [0,0,0,0,0]
      width: [1,2,5,4,5]
      height: [0,5,5,5,5]
      texture: [6,4,4,10]
      angle: 5
      laser:
        damage: [15,15]
        rate: 6
        type: 1
        speed: [240,240]
        number: 1
        error: 3
        recoil: 0
    longerthings:
      section_segments: 12
      offset:
        x: 115
        y: -140
        z: -10
      position:
        x: [0,0,0,0,0]
        y: [-60,-50,0,0,0]
        z: [0,0,3,4,5]
      width: [1,3,0,0,0]
      height: [0,3,3,0,0]
      texture: [17,4,4,4]
      angle: 7
      laser:
        damage: [100,100]
        rate: 1
        type: 1
        speed: [130,130]
        number: 1
        error: 0
        recoil: 0
    morelongthings:
      section_segments: 12
      offset:
        x: 47
        y: -40
        z: 3.63
      position:
        x: [0,0,0,0,0]
        y: [-55,-48,0,33,0]
        z: [0,0,0,0,1]
      width: [1,1,1,1,1]
      height: [0,1,1,1,1]
      texture: [17,2,2,2]
      angle: -2
      laser:
        damage: [60,60]
        rate: 2
        type: 1
        speed: [160,160]
        number: 1
        error: 0
        recoil: 0
    propellers:
      section_segments: 10
      offset:
        x: 90
        y: 60
        z: -20
      position:
        x: [-5,-4,-3,-3,-3,-3,-3,-3,-4,-5]
        y: [-30,-20,-10,0,10,20,30,40,50,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,15,15,10,0]
      height: [0,10,15,15,15,15,15,15,15,0]
      texture: [17,18,10,18,3,2,2,3,17]
      propeller: true
      laser:
        damage: [15,15]
        rate: 3
        type: 1
        speed: [150,150]
        number: 1
    propellers2:
      section_segments: 10
      offset:
        x: 80
        y: 60
        z: -20
      position:
        x: [5,4,3,3,3,3,3,3,4,5]
        y: [-30,-20,-10,0,10,20,30,40,50,60]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,15,15,12,0]
      height: [0,10,15,15,15,15,15,15,15,0]
      texture: [17,18,10,18,3,2,2,3,17]
      propeller: true
      laser:
        damage: [10,10]
        rate: 5
        type: 1
        speed: [200,200]
        number: 1
    rocketlauncherback:
      section_segments: 9
      offset:
        x: 0
        y: -8
        z: 42
      position:
        x: [0,0,0,0]
        y: [93,100,100,90]
        z: [0,0,0,0]
      width: [0,14,0,0]
      height: [0,14,0,0]
      propeller: false
      texture: [1,16,12]
    arms:
      section_segments: 7
      offset:
        x: 131
        y: 30
        z: -10
      position:
        x: [-1,18,20,5,-10,-35]
        y: [1,-70,-220,-30,0,30]
        z: [0,0,0,0,0,0]
      width: [0,5,3,15,15,15]
      height: [0,5,3,20,11,15]
      texture: [4,4,4,4,4]
      angle: 11
    arms2:
      section_segments: 7
      offset:
        x: 140
        y: 5
        z: -10
      position:
        x: [-1,0,20,5]
        y: [1,0,-197,-5]
        z: [0,0,0,0,0,0]
      width: [0,0,0.5,4,3,10]
      height: [0,0,3,3,10,10]
      texture: [63]
      angle: 14
    arms3:
      section_segments: 7
      offset:
        x: 150
        y: 28
        z: -10
      position:
        x: [0,0,-20,0,-15,-65]
        y: [0,-180,-60,-30,0,59]
        z: [0,0,6,0,5,10]
      width: [0,0,0,3,3,3]
      height: [0,0,3,3,3,3]
      texture: [63]
      angle: 11
    arms4:
      section_segments: 7
      offset:
        x: 29
        y: 106
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-71,0,0,0]
        z: [0,0,0,0,0,0,0,0,0]
      width: [2,3,3,2]
      height: [2,3,3,2]
      texture: [63]
      angle: 277
    antennae1:
      section_segments: 6
      offset:
        x: 110
        y: 100
        z: -9
      position:
        x: [-45,-45,-45,-45,-45,-45,-45]
        y: [-120,-100,-35,-30,0]
        z: [0,0,0,0,0,0,0]
      width: [1,3,1,0,0]
      height: [1,3,1,0,0]
      texture: [16.9,4]
      laser:
        damage: [10,10]
        rate: 3
        type: 2
        speed: [160,160]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    antennae2:
      section_segments: 6
      offset:
        x: 110
        y: 105
        z: -6
      position:
        x: [-30,-30,-30,-30,-30,-30,-30,-30]
        y: [-180,-140,-130,-55,-50,0]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,2,2,0,0]
      height: [0,4,2,2,0,0]
      texture: [16.9,4]
      laser:
        damage: [40,40]
        rate: 1
        type: 2
        speed: [140,140]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    antennae3:
      section_segments: 6
      offset:
        x: 70
        y: 105
        z: -4
      position:
        x: [25,25,25,25,25,25,25]
        y: [-150,-120,-35,-30,0]
        z: [0,0,0,0,0,0,0]
      width: [0,3,1,0,0]
      height: [0,3,1,0,0]
      texture: [16.9,4]
      laser:
        damage: [20,20]
        rate: 1.5
        type: 2
        speed: [150,150]
        number: 1
        angle: 0
        error: 0
        recoil: 0
    cube_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -75+130
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [63]    
      angle: 90
    cube_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -74+130
        z: 9.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [1]    
      angle: 90      
    cube_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -65+130
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [63]    
      angle: 90
    cube_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -64+130
        z: 9.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [1]    
      angle: 90        
    cube_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -55+130
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [63]    
      angle: 90
    cube_deco5:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -54+130
        z: 9.9
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [1]    
      angle: 90        
    cube_deco6:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -45+130
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [63]    
      angle: 90  
    cube_deco7:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -44+130
        z: 9.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [1]    
      angle: 90        
    cube_deco8:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -35+130
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [63]    
      angle: 90  
    cube_deco9:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -34+130
        z: 9.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,10,10,10,0]
      texture: [1]    
      angle: 90             
  wings:
    main:
      offset:
        x: 20
        y: 60
        z: 0
      length: [30,35,30,10]
      width: [70,51,60,30,120]
      angle: [-12,181,10,60]
      position: [6,8,1,-45,-100]
      texture: [1,2,3,2,3]
      bump:
        position: -20
        size: 15
    main1:
      offset:
        x: 20
        y: 60
        z: 0
      length: [45,35,30]
      width: [70,51,60,20]
      angle: [-12,8,0]
      position: [6,8,-1,-75]
      texture: [3]
      bump:
        position: -20
        size: 15
    main2:
      offset:
        x: 10
        y: 82
        z: 4.1
      length: [50,40,38.8]
      width: [75,55,65,35]
      angle: [-8.5,5,0]
      position: [-12,-8,-15,-85]
      texture: [4]
      bump:
        position: -20
        size: 15
    top:
      doubleside: true
      offset:
        x: 1
        y: 104
        z: 5
      length: [120]
      width: [7,0]
      angle: [90.5]
      position: [15,75]
      texture: [63]
      bump:
        position: 7
        size: 6
    top1:
      doubleside: true
      offset:
        x: 1
        y: 104
        z: 5
      length: [120]
      width: [7,0]
      angle: [90.5]
      position: [15,75]
      texture: [63]
      bump:
        position: 7
        size: 6
    top2:
      doubleside: true
      offset:
        x: 1
        y: 90
        z: 5
      length: [120]
      width: [15,0]
      angle: [90.5]
      position: [15,90]
      texture: [3]
      bump:
        position: 80
        size: 50
    top3:
      offset:
        x: 0.1
        y: 100
        z: 15
      length: [24,14,14,14,13,12,19]
      width: [12,8.25,7,5.5,4.5,6.5,4.12,0]
      angle: [90,90,90,90,90,90,90]
      position: [11,18,32,38,49,57,67,79.4]
      texture: [4.9,4.9]
      bump:
        position: 0
        size: 0
    side1:
      doubleside: true
      offset:
        x: 1
        y: 104
        z: 5
      length: [120]
      width: [7,0]
      angle: [165.5]
      position: [15,76.5]
      texture: [63]
      bump:
        position: 7
        size: 6
    side2:
      doubleside: true
      offset:
        x: 1
        y: 90
        z: 5
      length: [120]
      width: [15,0]
      angle: [165.5]
      position: [15,90]
      texture: [3]
      bump:
        position: 80
        size: 10
    side3:
      doubleside: true
      offset:
        x: 1
        y: 87
        z: 4
      length: [120]
      width: [15,0]
      angle: [165.5]
      position: [15,93]
      texture: [17]
      bump:
        position: 0
        size: 0        
    rocketlauncherholders:
      doubleside: true
      offset:
        x: -1
        y: 57
        z: 15
      position: [18,18,32,38]
      length: [15,18,11,5]
      width: [9,10,7,3]
      angle: [0,83,125,40]
      texture: [1,1]
      bump:
        position: 0
        size: 30
