return model =
  name: "Vulcan"
  level: 6
  model: 7
  size: 1
  zoom: 0.8
  next: [707,708]
  specs:
    shield:
      capacity: [450,500]
      reload: [15,20]
    generator:
      capacity: [400,600]
      reload: [100,150]
    ship:
      mass: 600
      speed: [85,105]
      rotation: [50,70]
      acceleration: [60,80]
  bodies:
    main:
      section_segments: 12
      offset:
        x: 0
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-140,-120,-80,-30,20,80,70]
        z: [0,0,0,0,0,0,0]
      width: [0,20,30,40,35,25,0]
      height: [0,20,20,20,25,40,0]
      propeller: true
      texture: [4,4,4,4,4,4]
      laser:
        damage: [150,200]
        rate: 2
        type: 1
        speed: [160,200]
        number: 1
        angle: 0
        recoil: 800
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: 30
        z: 10
      position:
        x: [0,0,0,0,0,0]
        y: [-21,-20,40,66,120,160]
        z: [-8,-8,-2,-1,0,-50]
      width: [0,20,30.5,30,45,0]
      height: [0,10,30,30,22,0]
      texture: [9,9,9,4,4]
      propeller: false
    cannons:
      section_segments: 12
      offset:
        x: 145
        y: 20
        z: -15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-45,-20,0,100,130,145]
        z: [0,0,0,0,0,20,50]
      width: [0,5,10,10,10,0,0]
      height: [0,5,15,15,10,0,0]
      angle: 0
      laser:
        damage: [20,30]
        rate: 5
        type: 1
        speed: [140,170]
        number: 1
        angle: 0
        error: 0
      propeller: false
      texture: [6,4,10,4,63,63]
    arms:
      section_segments: 12
      offset:
        x: 1
        y: 110
        z: -20
      position:
        x: [0,15,45,50,40,-10,-20,-120]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,10,45,40,35,25,25,0]
      height: [0,0,5,5,5,0,0,0]
      texture: [4,4,4,4,4,4,4]
      angle: 235
    color:
      section_segments: 12
      offset:
        x: -30
        y: 140
        z: -20
      position:
        x: [0,15,45,50,40,-10,-20,-30]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,40,30,25,20,0,0,0]
      height: [0,0,10,10,10,0,0,0]
      texture: [3,3,7,7,7,7,7]
      angle: 230
    color2:
      section_segments: 12
      offset:
        x: -30
        y: 144
        z: -23
      position:
        x: [0,15,45,50,40,-10,-20,-30]
        y: [-30,10,130,210,290,350,355,400]
        z: [10,10,10,5,0,0,0,0]
      width: [0,40,30,25,20,0,0,0]
      height: [0,0,10,10,10,0,0,0]
      texture: [63]
      angle: 230      
    tech:
      section_segments: 12
      angle: 90
      offset:
        x: 0
        y: 120
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-155,-150,-142,-130,-85,85,130,142,150,155]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,30,35,0,0,0,0,35,30,0]
      height: [0,30,35,0,0,0,0,35,30,0]
      texture: [4,7,4,4,4,4,4,7,4]
    deco:
      section_segments: [45,135,225,315]
      angle: 4.5
      offset:
        x: 262
        y: -150
        z: -24
      position:
        x: [0,0,0,0]
        y: [-65,-65,30,30]
        z: [3.5,3.5,0,0]
      width: [0,0.5,2,0]
      height: [0,1,1,0]
      texture: [5,17]      
  wings:
    front1_below:
      offset:
        x: 0
        y: -15
        z: -35
      length: [0,30,0,20,60,60,30]
      width: [150,145,126,346,130,122,35]
      angle: [25,25,45,8,8,8,0]
      position: [160,98,46,180,59,100,91]
      texture: [4,4,4,4,4,4,4]
      doubleside: true
      bump:
        position: 30
        size: 4
    hat:
      length: [100,50]
      width: [90,60,60]
      angle: [-20,200]
      position: [190,65,0]
      doubleside: true
      texture: 4
      bump:
        position: 0
        size: 20
      offset:
        x: 0
        y: -30
        z: 40
    backcover:
      length: [30,60]
      width: [150,50,20]
      angle: [0,20]
      position: [-10,90,40]
      bump:
        position: 30
        size: 5
      texture: [7,4]
      offset:
        x: -10
        y: 150
        z: -30
    stab:
      length: [30,20,0]
      width: [50,10,120]
      angle: [40,20]
      position: [70,75,190]
      texture: 4
      bump:
        position: 0
        size: 20
      offset:
        x: 12
        y: 70
        z: 10
    lights:
      length: [30,20]
      width: [50,10,120]
      angle: [40,20]
      position: [70,75,190]
      texture: 4
      bump:
        position: 0
        size: 20
      offset:
        x: 12
        y: 70
        z: 10    
    lights:
      length: [30,65,44,60,28]
      width: [20,20,20,20,20,20]
      angle: [0,0,-5,-5,-5]
      position: [150,63,26,3,-46,-119]
      doubleside: true
      offset:
        x: 40
        y: 0
        z: -13
      bump:
        position: 0
        size: 0
      texture: [17]        
