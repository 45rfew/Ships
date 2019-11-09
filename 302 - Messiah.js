a = 1.5
return model =
  name: 'Messiah'
  level: 3
  model: 2
  size: 1.5
  specs:
    shield:
      capacity: [140,220]
      reload: [10,13]
    generator:
      capacity: [140,220]
      reload: [40,60]
    ship:
      mass: 320
      speed: [125,140]
      rotation: [60,80]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-105,-100,-90,-20,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,20,20,20,18,15,0]
      height: [0,4,7,12,15,18,18,15,0]
      propeller: true
      texture: [3,1,10,1,1,1,12,17]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -30
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [-45,-40,-15,70,5]
        z: [0,0,0,0,0,0]
      width: [0,8,8,10,0]
      height: [0,10,15,5,0]
      texture: [9,9,4]
    cannon:
      section_segments: 6
      offset:
        x: 10
        y: 0
        z: 20
      position:
        x: [0,0,0,-1,-4,-4]
        y: [-40,-50,-23,0,5,0]
        z: [0,0,0,0,0,0]
      width: [0,2,3,7,6,0]
      height: [0,3,4,5,4,0]
      angle: 0
      propeller: false
      texture: [7,7,3,7]
      laser:
        damage: [40,50]
        rate: 1
        type: 1
        speed: [140,190]
        number: 1
        recoil:20
        error: 0        
    top:
      section_segments: [0,40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -3
        z: 21
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-10,0,10,25,45,30]
        z: [0,0,0,0,0,0,0]
      width: [0,6.5,6.5,10,10,10,10,0]
      height: [0,4,4,4,4,4,4,0]
      propeller: true
      texture: [7]
    wings_cannon:
      section_segments: 12
      offset:
        x: 73
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-105/a,-65/a,-70/a,-57/a,-55/a,-3/a,0,5/a,10/a,30/a,20/a]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12/a,15/a,15/a,13/a,15/a,16/a,16/a,12/a,12/a,0]
      height: [0,12/a,15/a,15/a,13/a,15/a,16/a,16/a,12/a,12/a,0]
      texture: [3,17,2,13,1,63,63,63,13,17]
      propeller: true
      angle:0
      laser:
        damage: [10,13]
        rate: 2
        type: 2
        speed: [130,170]
        number: 1
        error: 0
    cannon_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 78
        y: 53
        z: 7
      position:
        x: [0,0,1,1]
        y: [-21,-21,15,15]
        z: [0,0,0.7,0.7]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [63]   
    cannon_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 68
        y: 53
        z: 7
      position:
        x: [0,0,-1,-1]
        y: [-21,-21,15,15]
        z: [0,0,0.7,0.7]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [63]     
    cannon_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 77
        y: 53
        z: 6.99
      position:
        x: [-1,-1,0,0]
        y: [-15,-15,21,21]
        z: [0.7,1,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [17]   
      angle: 180
    cannon_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 69
        y: 53
        z: 6.99
      position:
        x: [1,1,0,0]
        y: [-15,-15,21,21]
        z: [0.7,1,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [17]   
      angle: 180        
  wings: 
    main:
      length: [22,28,30]
      width: [70,70,40,20]
      angle: [-10,-10,10]
      position: [-15,-15,0,10]
      doubleside: true
      offset:
        x: 0
        y: 47
        z: 10
      bump:
        position: 35
        size: 10
      texture: [63,1,10]  
    main2:
      length: [22,28,30]
      width: [70,70,40,20]
      angle: [-10,-10,10]
      position: [-15,-15,0,10]
      doubleside: true
      offset:
        x: 0
        y: 44
        z: 10
      bump:
        position: 35
        size: 0
      texture: [17,17]  
    winglets:
      length: [40]
      width: [40,15,30]
      angle: [10,-10]
      position: [-40,0,-55]
      bump:
        position: 20
        size: 10
      texture: 63
      offset:
        x: 0
        y: -25
        z: 5      
