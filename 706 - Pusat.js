return model =
  name: "Pusat"
  level: 7
  model: 6
  size: 2
  zoom: 0.85
  specs:
    shield:
      capacity: [380,380]
      reload: [20,20]
    generator:
      capacity: [480,480]
      reload: [200,200]
    ship:
      mass: 360
      speed: [180,180]
      rotation: [85,85]
      acceleration: [130,130]
  bodies:
    main:
      section_segments: [40,45,50,85,90,95,130,135,140,220,225,230,265,270,275,310,315,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-128,-115,-70,-40,0,40,70,80,90,100,85]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,25,25,25,25,35,35,35,30,0,0]
      height: [0,5,8.4,20,20,20,20,20,20,20,15,0,0]
      texture: [12,3,3,4,63,63,4,4,5,5,17]
      propeller:true
      laser:
        damage: [70,70]
        rate: 3
        type: 1
        speed: [300,300]
        number: 1
        error: 0
        recoil: 100
    air:
      section_segments: 40
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,-80,-30,-10,10,30,50,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,0,0,20,27+3,30,25,0]
      height: [0,2,20-5,20-5,20,20,20,0]
      texture: [4,3,2,2,2,3]        
      laser:
        damage: [100,100]
        rate: 1
        type: 1
        speed: [240,240]
        number: 1
        error: 0
        recoil: 80      
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 30
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-30,-20,0,10,20,50,48]
        z: [0,0,0,0,0,-9,0]
      width: [0,10,15,15,5,30,0]
      height: [0,10,15,15,5,10,0]
      texture: [9,9,9,7,4]
      propeller: false
    cannons_main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -100
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,0,30,35,45,47,74,76,97,102,173]
        z: [-17,-17,-17,-10,-10,-10,-11,-10,-10,-10,-10,-10]
      width: [0,5+1.5,5+1.5,7,7,0,0,4+3,4+3,7+3,7+3]
      height: [0,5,5,8,10,0,0,10,10,8,8]
      texture: [17,13,4,8,18,1,18,7,7,7,8]
      propeller: false   
      laser:
        damage: [15,15]
        rate: 10
        type: 2
        speed: [380,380]
        number: 1
        error: 5
        recoil: 20      
    joins:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -54.5
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-5,0,5,10,15,20,25,30,35,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,5,1,5,1,5,1,5,1,0]
      height: [0,1,7,1,7,1,7,1,7,1,0]
      texture: [17,18,17,18,17,18,17,18,17,18]
      propeller: false 
      laser:
        damage: [50,50]
        rate: 5
        type: 2
        speed: [350,350]
        number: 1
        angle: 0
        error: 2
        recoil: 120      
    cannon_joint:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -13.5
        z: 50-1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19]
        z: [0,0,0,0,0,0,-5,-5,-5,-5,0,0,-10,-10,-10,-10,0,0,-15,-15,-15,-15,0,0,-20,-20,-20,-20]
      width: [0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0]
      height: [0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0]
      texture: [17,18,17,18,17,18,17,18,17,18,17,18,1,18,17,18,17,18,17,18,17,18,17,18,17,18,17,18]
      propeller: false 
      vertical:true
    cannon_joint_side:
      section_segments: [80,90,100]
      offset:
        x: -20
        y: -55
        z: -2
      position:
        x: [53,53,53,53]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false         
    cannon_joint_side2:
      section_segments: [-100,-90,-80]
      offset:
        x: -10.52
        y: -55
        z: -2
      position:
        x: [53-15,53-15,53-15,53-15]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false               
    rear_cannon:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30+10
        y: -55+120
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,20]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false
    rear_cannon1:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30+10
        y: -55+120
        z: -3
      position:
        x: [-5,0,0]
        y: [-40,-20,0]
        z: [0,0,0]
      width: [4,4.01,4.01]
      height: [5,5,5]
      texture: [3,18,4]
      propeller: false        
    rear_cannon2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -55+120
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,20]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false     
    rear_propeller:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 34.5
        y: -8+83.5
        z: 1.7
      position:
        x: [0,0,0,0,-4,0]
        y: [-10,-10,0,5,20,10]
        z: [0,0,0,0,0,0]
      width: [0,12,13,13,13,0]
      height: [5,12,12,12,10,0]
      texture: [3,13,4,5,17]
      propeller: true     
    rear_propeller2:
      section_segments: [45,135,225,315]
      offset:
        x: 21
        y: 0
        z: 25
      position:
        x: [-10,-10,-4,-4]
        y: [0,0,94,94]
        z: [-5,-5,-11,-10]
      width: [0,3,1.3,0]
      height: [0,2,0.3,0]
      texture: [17]
      angle:180
  wings:
    main1:
      doubleside: true
      offset:
        x: 10
        y: 60
        z: 5
      length: [30]
      width: [50,30]
      angle: [60]
      position: [0,50]
      texture: [3]
      bump:
        position: 10
        size: 10
    main12:
      doubleside: true
      offset:
        x: 10
        y: 61
        z: 5
      length: [30]
      width: [50,30]
      angle: [60]
      position: [0,50]
      texture: [18]
      bump:
        position: 10
        size: 9   
    main2:
      doubleside: true
      offset:
        x: 10
        y: 70
        z: 10
      length: [30]
      width: [40,20]
      angle: [3]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 10
    main22:
      doubleside: true
      offset:
        x: 10
        y: 75
        z: 10
      length: [30]
      width: [40,20]
      angle: [3]
      position: [0,60]
      texture: [7]
      bump:
        position: 10
        size: 9        
    main3:
      doubleside: true
      offset:
        x: 25
        y: -70
        z: 14
      length: [1,25]
      width: [0,190,76]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,63]
      bump:
        position: 20
        size: 7
    main32:
      doubleside: true
      offset:
        x: 22.8
        y: -70
        z: 14
      length: [1,25]
      width: [0,190,36]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,17]
      bump:
        position: 20
        size: 7
    main33:
      doubleside: true
      offset:
        x: 25
        y: -65
        z: 13
      length: [0,30]
      width: [0,184,76]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,7]
      bump:
        position: 20
        size: 6
