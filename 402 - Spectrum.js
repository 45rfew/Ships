return model =
  name: "Spectrum"
  level: 4
  model: 2
  size: 1.6
  specs:
    shield:
      capacity: [215,285]
      reload: [10,15]
    generator:
      capacity: [300,400]
      reload: [80,100]
    ship:
      mass: 400
      speed: [100,120]
      rotation: [80,100]
      acceleration: [80,100]
  bodies:
    main:
      section_segments:  [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-108,-95,-50,-40,-20,-10,10,70,65]
        z: [-7,-6,0,0,0,0,0,0,0]
      width: [0,15,18,18,18,17,18,17,0]
      height: [0,12,17,15,15,15,15,10,0]
      texture: [2,3,3,3,3,3,3,13]
      propeller: false
    main_support:
      section_segments: [45,135,225,315]
      offset:
        x:0
        y: 30
        z: 30
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-60,-100,-50,-40,-30,-30,10,70,50]
        z: [0,0,0,0,0,0,0,-5,0]
      width: [0,0,21,21,22,22,22,21,0]
      height: [0,0,20,19,17,17,11,1,0]
      texture: [111,3,2,1,2,11,18]
      propeller: false
    main_holder:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 20
        z: -35
      position:
        x: [0,0,0,0]
        y: [-10,10,35,30]
        z: [0,0,0,0]
      width: [0,35,35,0]
      height: [0,40,40,0]
      texture: [11,10,3]
      propeller: false
      vertical: true
      angle: 180
    cockpit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -60
        z: 35
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7.23076923076923,0,11.384615384615383,38.769230769230766,38.46153846153846]
        z: [-5.384615384615384,-3.846153846153846,0,0,0]
      width: [0,7.692307692307692,9.692307692307692,7.692307692307692,0]
      height: [0,7.692307692307692,11.538461538461538,9.23076923076923,0]
      texture: [8.95]
    side_bodies:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 42
        y: -80
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-45,-35,20,25,30,50,60,180,170]
        z: [0,0,0,0,0,0,0,-4,-4,0]
      width: [0,18,20,12,12,12,20,20,0]
      height: [0,10,15,12,12,12,20,15,0]
      texture: [1,1,1,3,3,3,3,12]
      propeller: false
    side_bodies_propeller:
      section_segments: 8
      offset:
        x: 42
        y: 110
        z: -5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [10]
      texture: [1]
      propeller: true      
    side_bodies_support:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 42
        y: -86
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,30,50,70,185,160]
        z: [0,0,0,0,0,0,0,-11,0,0]
      width: [0,0,0,0,0,10,23,22,15,0]
      height: [0,0,0,0,0,10,22.6,2,10,0]
      texture: [2]
      propeller: false
    cockpit2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 42
        y: -135
        z: 7
      position:
        x: [0,0,0,0]
        y: [20,40,65,65]
        z: [-2,0,3,3]
      width: [5,10,5,0]
      height: [2,8,4,0]
      texture: [8.98]
    hubs1:
      vertical: false
      section_segments: 12
      offset:
        x: 56
        y: -95
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,2.857142857142857,1.4285714285714286,1.4285714285714286,2.857142857142857,2.5714285714285716]
        z: [0,0,0,0,0,0,0]
      width: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      height: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      texture: [4,5,5,5,17]
      angle: 90
    hubs2:
      vertical: false
      section_segments: 12
      offset:
        x: 56
        y: -82
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,2.857142857142857,1.4285714285714286,1.4285714285714286,2.857142857142857,2.5714285714285716]
        z: [0,0,0,0,0,0,0]
      width: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      height: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      texture: [4,5,5,5,17]
      angle: 90
    hubs3:
      vertical: false
      section_segments: 12
      offset:
        x: 28
        y: -95
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,2.857142857142857,1.4285714285714286,1.4285714285714286,2.857142857142857,2.5714285714285716]
        z: [0,0,0,0,0,0,0]
      width: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      height: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      texture: [4,5,5,5,17]
      angle: 90*3
    hubs4:
      vertical: false
      section_segments: 12
      offset:
        x: 28
        y: -82
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,2.857142857142857,1.4285714285714286,1.4285714285714286,2.857142857142857,2.5714285714285716]
        z: [0,0,0,0,0,0,0]
      width: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      height: [5.714285714285714,5.142857142857143,3.7142857142857144,3.4285714285714284,2.857142857142857,0]
      texture: [4,5,5,5,17]
      angle: 90*3      
    side_deco:
      section_segments: 8
      offset:
        x: 60
        y: 52
        z: -10
      position:
        x: [0,0,-0.9,10.89]
        y: [-45,-45,68,90]
        z: [0,0,10,10]
      width: [0,2,0,0]
      height: [0,0.2,13,4]
      texture: [17,17,171]
      angle: 180
    side_deco2:
      section_segments: 8
      offset:
        x: 23.9
        y: 52
        z: -10
      position:
        x: [0,0,0.9,-10.89]
        y: [-45,-45,68,90]
        z: [0,0,10,10]
      width: [0,2,0,0]
      height: [0,0.2,13,4]
      texture: [17,16,171]
      angle: 180
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: -40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-60,-120,-120,-70,-10,0,10,50,60,65]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,7,8,12,14,14,14,0]
      height: [0,5,6,7,8,12,14,14,14,0]
      angle: 0
      laser:
        damage: [80,90]
        rate: 1
        type: 1
        speed: [70,150]
        number: 1
        angle: 0
        recoil: 200
        error: 0
      texture: [17,4,13,13,15,13,17,4]
    cannon2:
      section_segments: 8
      offset:
        x: 42
        y: 80
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [-30,-80,-80,-70,-10,0]
        z: [0,0,0,0,0,0]
      width: [0,5,6,7,8,0]
      height: [0,5,6,7,8,0]
      angle: 0
      laser:
        damage: [50,60]
        rate: 1
        type: 2
        speed: [140,160]
        number: 1
        angle: 0
        recoil: 150
        error: 0
      texture: [17,4,13,13,15,13,17,4]
  wings:
    topwings:
      doubleside: true
      offset:
        x: 53
        y: 35
        z: 0
      length: [55]
      width: [40,10,40]
      angle: [55,60]
      position: [-10,40,0]
      texture: 0
      bump:
        position: 40
        size: 20
    side_wings:
      doubleside: true
      offset:
        x: -115
        y: -15
        z: -30
      length: [0,55,0,15]
      width: [0,10,70,30,30]
      angle: [0,40,10,10]
      position: [125,125,70,55,55]
      texture: [8,4,8,18]
      bump:
        position: 50
        size: 2
    side_wings2:
      doubleside: true
      offset:
        x: -115
        y: -5
        z: -30
      length: [0,55,0,0]
      width: [0,10,70,30,0]
      angle: [0,40,10,0]
      position: [125,125,70,55,55]
      texture: [8,18,8,18]
      bump:
        position: 50
        size: 2 
    side_wings3:
      doubleside: true
      offset:
        x: -115
        y: -27
        z: -30
      length: [0,55,0,0]
      width: [0,10,70,30,0]
      angle: [0,40,10,0]
      position: [125,125,70,55,55]
      texture: [8,18,8,18]
      bump:
        position: 50
        size: 0          
    main_wings:
      doubleside: true
      offset:
        x: 0
        y: -10
        z: -9
      length: [0,-10,0,20]
      width: [0,0,0,180,0]
      angle: [0,30,0,30]
      position: [30,30,10,-55,0]
      texture: [113,3,113,4]
      bump:
        position: 35
        size: 15
