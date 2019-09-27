return model =
  name: "Cairngorgon"
  level: 7
  model: 8
  size: 2
  specs:
    shield:
      capacity: [3200,3200]
      reload: [65,65]
    generator:
      capacity: [550,550]
      reload: [200,200]
    ship:
      mass: 1500
      speed: [75,75]
      rotation: [50,50]
      acceleration: [130,130]
  bodies:
    sideEngineBody:
      section_segments: 10
      offset:
        x: 100
        y: -135
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,0,20,30,100,130,190,220,290,300,320,290]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30,40,40,40,0,0,40,40,40,30,0]
      height: [0,30,40,40,40,0,0,40,40,40,30,0]
      texture: [17,3.9,2,10,3.9,3.9,3.9,10,2,4,17]
      propeller: true
      laser:
        damage: [120,120]
        rate: 0.8
        type: 1
        recoil: 180
        speed: [100,100]
        number: 1
        angle: 0
        error: 0
    sideEngineBody1:
      section_segments: 10
      offset:
        x: 0
        y: -215
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [30,0,20,30,100,130,190,220,290,300,320,290]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,45,55,55,55,55,55,55,55,55,41,0]
      height: [0,30,40,40,40,40,40,40,40,40,30,0]
      texture: [17,3.9,2,10,3.9,3.9,3.9,10,2,4,17]
      propeller: true
    sideEngineTop:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -135
        z: 24
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [20,25,100,120,200,220,295,300]
        z: [0,0,0,20,20,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,0]
      texture: [3,3,4,16,4,3]
    sideEngineBottom:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -135
        z: -44
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [20,25,100,120,200,220,295,300]
        z: [0,0,0,-20,-20,0,0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,15,15,15,15,15,15,0]
      texture: [4,4,4,16,4]
    reactor_cubes:
      section_segments: 4
      offset:
        x: 100
        y: -10
        z: -25
      position:
        x: [0,0,0,0,0,20,20,-20,-20]
        y: [-20,20,20,-20,-20,-19.9,20,-19.9,20]
        z: [-20,-20,20,20,-20,0,0,0,0]
      width: [20,20,20,20,20,0,0,0,0]
      height: [0,0,0,0,0,20,20,20,20]
      texture: [177]
      vertical: true
      angle: 45
      propeller: false
    toppropulsorsa:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 12
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    bottompropulsorsa:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 12
        y: 95
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    toppropulsorsb:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    bottompropulsorsb:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: 95
        z: -20
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,20,25,30,40,50,40]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,10,10,15,10,0]
      height: [0,10,15,15,15,10,10,15,10,0]
      texture: [3,4,10,3,3,63,4]
      propeller: true
    cockpit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -135
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-50,-25,0,25,60,190,230]
        z: [0,0,0,0,-10,-10,0]
      width: [0,20,20,20,40,40,0]
      height: [0,10,12,12,20,20,0]
      texture: [9,8.95,8.95,3,8.18,8.18]
    backsupport:
      section_segments: 10
      offset:
        x: 0
        y: -285
        z: 6
      position:
        x: [0,0,0,0]
        y: [360,340,410,420]
        z: [0,0,-1,-10]
      width: [40,50,40,50]
      height: [0,30,30,0]
      texture: [3,4]
    cannons:
      section_segments: 12
      offset:
        x: 40
        y: 35
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-80,-140,-140,-70,-10,0,10,70,80,85]
        z: [-4,-4,-3,-2,0,0,0,0,0,0]
      width: [0,11,12,13,14,18,20,20,18,0]
      height: [0,11,12,13,14,18,20,20,18,0]
      angle: 0
      laser:
        damage: [40,40]
        rate: 1
        recoil: 40
        type: 1
        speed: [120,120]
        number: 1
        angle: 0
        error: 5
      texture: [17,4,4,4,2,4,17,4]
    cannons1:
      section_segments: 12
      offset:
        x: 30
        y: 45
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-80,-140,-140,-70,-10,0,10,50,60,65]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,7,8,12,14,14,14,0]
      height: [0,5,6,7,8,12,14,14,14,0]
      angle: 0
      laser:
        damage: [30,30]
        rate: 1
        recoil: 30
        type: 2
        speed: [130,130]
        number: 1
        angle: 0
        error: 0
      texture: [17,4,4,4,2,4,17,4]
    back:
      section_segments: [40,140,220,320]
      offset:
        x: 0
        y: 135
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-5,-7,-7,-5,5,7,7,5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [65,65,67,70,72,72,70,67,65,65]
      height: [23,23,25,28,30,30,28,25,23,23]
      texture: [4]
      propeller: false
    back2:
      section_segments: [40,140,220,320]
      offset:
        x: 0
        y: 125
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-10,-10,-10,-10,5,5,5,5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [65,65,67,70,72,72,70,67,65,65]
      height: [23,23,25,28,30,30,28,25,23,23]
      texture: [3]
      propeller: false
    back3:
      section_segments: [40,140,220,320]
      offset:
        x: 0
        y: 95
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-20,-20,-20,-20,20,20,20,20,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [65,65,67,70,72,72,70,67,65,65]
      height: [25,25,25,30,32,32,30,27,25,25]
      texture: [3]
      propeller: false
  wings:
    topjoin:
      offset:
        x: 0
        y: -102
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [0]
      position: [0,0,0,50]
      texture: [1]
      bump:
        position: 10
        size: 30
    bottomjoin:
      offset:
        x: 0
        y: -102
        z: 0
      doubleside: true
      length: [100]
      width: [20,20]
      angle: [-25]
      position: [0,0,0,50]
      texture: [1]
      bump:
        position: -10
        size: 30
    topjoin1:
      offset:
        x: 0
        y: 135
        z: 0
      doubleside: true
      length: [100]
      width: [40,40]
      angle: [0]
      position: [-210,0,0,50]
      texture: [11]
      bump:
        position: 10
        size: 30
    bottomjoin1:
      offset:
        x: 0
        y: 98
        z: 0
      doubleside: true
      length: [100]
      width: [60,60]
      angle: [-25]
      position: [-210,0,0,50]
      texture: [11]
      bump:
        position: -10
        size: 30
