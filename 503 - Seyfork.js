model =
  name: 'Seyfork'
  level: 5
  model: 3
  size: 1.8
  Designer: 'Duc Minh'
  specs:
    shield:
      capacity: [260,330]
      reload: [5,8]
    generator:
      capacity: [150,210]
      reload: [35,45]
    ship:
      mass: 320
      speed: [112,138]
      rotation: [50,80]
      acceleration: [80,100]  
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-6,-18,-18,50,70,50,170,180,190,200,200,190]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6.2,7,26,20,10,10,30,30,22,20,0]
      height: [0,3.2,4,25,20,20,20,30,30,22,20,0]
      texture: [17,17,10,3,17,13,3,4,17,18,17]
      propeller: 1
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -5
        z: 11
      position:
        x: [0,0,0,0,0]
        y: [0,5,40,70,70]
        z: [-4,-3,0,0,0]
      width: [0,5,13,8,0]
      height: [0,5,15,10,0]
      texture: [7,9,4]
      propeller: 0
    cannon:
      section_segments: 8
      offset:
        x: -55
        y: -5
        z: 0
      position:
        x: [7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0]
        y: [10,0,20,40,40,50,50,60,60,70,70,80,90,180,190,190,180]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1.5,7,7,5,5,7,7,5,5,7,7,16,20,13,11,0]
      height: [0,1.5,7,7,5,5,7,7,5,5,7,7,16,20,13,11,0]
      texture: [17,2,3,2,8,3,8,3,3,1,11,1,10,17,18,17]
      propeller: 1
      laser:
        damage: [5,7]
        rate: 2
        type: 1
        speed: [140,160]
        recoil: 20
        number: 15
        angle: 0
        error: 0      
    deco:
      section_segments: [40,50,130,140,220,230,310,320]
      offset:
        x: 15
        y: 45
        z: 10
      position:
        x: [-9,-9,9.7,9.7]
        y: [35,35,105,105]
        z: [8,8,10,10]
      width: [0,6,6,0]
      height: [0,2,2,0]
      texture: [17]
      propeller: 0
    uwings:
      section_segments: [0,45,90,135,180]
      offset:
        x: -55
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-10,20,50,70,80,130,175,175]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,12,15,16.9,18,22,22,0]
      height: [0,5,12,15,16.9,18,20,20,0]
      texture: [17,3,3,3,3,4,18,4]
      propeller: 0
    lights:
      section_segments: 6
      offset:
        x: -75.5
        y: 0
        z: 0
      position:
        x: [16,16,10,10,10,4,0,0,0,0,0,0,0,0,0]
        y: [0,-10,20,20,20,80,130,175,175]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,.5,2,2,2,2,2,2,0]
      height: [0,1,2,2,2,2,2,2,0]
      texture: [63]
      propeller: 0      
    uwings2:
      section_segments: [45,135,225,315]
      offset:
        x: 38
        y: 17
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,0,50,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,0]
      height: [0,5,5,0]
      texture: [17,3]
      propeller: 0
    deco2:
      section_segments: [40,50,130,140,220,230,310,320]
      offset:
        x: 50
        y: 85
        z: 7
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,80,90,90]
        z: [0,0,8,11,0,0]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [17]
      angle: 0
    ring1:
      section_segments: 6
      offset:
        x: 30
        y: 94
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [27,30,30,27,30,30,24,27]
      height: [9,10,10,9,10,10,8,9]
      texture: [4,4,17,17,4,18]
      angle: -20
    ring2:
      section_segments: 6
      offset:
        x: 30
        y: 114
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [27,30,30,27,30,30,24,27]
      height: [9,10,10,9,10,10,8,9]
      texture: [4,4,17,17,4,18]
      angle: -20
    ring3:
      section_segments: 6
      offset:
        x: 30
        y: 134
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [27,30,30,27,30,30,24,27]
      height: [9,10,10,9,10,10,8,9]
      texture: [4,4,17,17,4,18]
      angle: -20
    ring4:
      section_segments: 6
      offset:
        x: 30
        y: 154
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [27,30,30,27,30,30,24,27]
      height: [9,10,10,9,10,10,8,9]
      texture: [4,4,17,17,4,18]
      angle: -20
    ring21:
      section_segments: 6
      offset:
        x: 47
        y: 25
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [9.9,11,11,9.9,11,11,8.8,9.9]
      height: [9,10,10,9,10,10,8,9]
      texture: [17,17,16,16,17]
      angle: 0
    ring22:
      section_segments: 6
      offset:
        x: 47
        y: 40
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [9.9,11,11,9.9,11,11,8.8,9.9]
      height: [9,10,10,9,10,10,8,9]
      texture: [17,17,16,16,17]
      angle: 0
    ring23:
      section_segments: 6
      offset:
        x: 47
        y: 55
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,7,10,10,0]
        z: [0,0,0,0,0,0,0,0]
      width: [9.9,11,11,9.9,11,11,8.8,9.9]
      height: [9,10,10,9,10,10,8,9]
      texture: [17,17,16,16,17]
      angle: 0
    bar:  
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: -4
        z: -80
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,3,0]
      height: [0,30,30,28,0]
      texture: [63,17,63]
      angle: 30
      vertical: true 
    ring32:
      section_segments: 16
      offset:
        x: 67
        y: 145
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2*1.5,5*1.5,7*1.5,10*1.5,10*1.5,0]
        z: [0,0,0,0,0,0,0,0]
      width: [7,10,10,9,10,10,4,7]
      height: [19-3,20-3,20-3,19-3,20-3,20-3,18-3,19-3]
      texture: [4,4,17,17,4,18]
      angle: 0      
  wings:
    wingName:
      doubleside: true
      offset:
        x: 0
        y: 110
        z: 20
      length: [35]
      width: [85,80]
      angle: [-18]
      position: [0,25]
      texture: [8.2]
      bump:
        position: 30
        size: 5
    shields:
      doubleside: true
      offset:
        x: 15
        y: 150
        z: -25+10
      length: [0,15,35,20]
      width: [30,30,55,65,30,30]
      angle: [30,30,90,150]
      position: [10,10,-30,0,10]
      texture: [8,8,8,10.6]
      bump:
        position: 20
        size: 4
    shields2:
      doubleside: true
      offset:
        x: 15
        y: 151
        z: -25+10
      length: [0,15,35,20]
      width: [30,30,55,65,30,30]
      angle: [30,30,90,150]
      position: [10,10,-30,0,10]
      texture: [8,8,8,17.42]
      bump:
        position: 40
        size: 5        
    spoiler: 
      offset:
        x: 0
        y: 120
        z: 25
      length: [20,9]
      width: [150,30,10]
      angle: [5,0]
      position: [0,20,20]
      texture: [17.85]
      doubleside: true
      bump:
        position: 40
        size: 5
    spoiler2: 
      offset:
        x: 0
        y: 121
        z: 25
      length: [20,9]
      width: [150,30,10]
      angle: [5,0]
      position: [0,20,20]
      texture: [17]
      doubleside: true
      bump:
        position: 40
        size: 5
    main:    
      offset:
        x: 0
        y: 120
        z: -19
      length: [20,10,0,5,10]
      width: [150,30,10,90,80,50]
      angle: [5,20,0,0,0]
      position: [0,20,20,20,10,0,0]
      texture: [18,17]
      doubleside: true
      bump:
        position: 40
        size: 5

t = -100+10        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;       
