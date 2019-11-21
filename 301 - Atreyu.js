a = 1.5
model =
  name: "Atreyu"
  level: 3
  model: 1
  size: 1.1
  specs:
    shield:
      capacity: [180,220]
      reload: [5,8]
    generator:
      capacity: [140,180]
      reload: [40,60]
    ship:
      mass: 340
      speed: [120,135]
      rotation: [100,120]
      acceleration: [90,120]
  bodies:
    cockpit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -100
        z: 2
      position:
        x: [0,0,0,0,0,0]
        y: [-45,-30,-5,70,5]
        z: [0,0,0,0,0,0]
      width: [8*a,8*a,8*a,10*a,0]
      height: [0,8*a,10*a,10*a,0]
      texture: [8.955,8.955,4]  
    top:
      section_segments: [0,40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -83
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-22,-22,-10,0,10,25,45,30]
        z: [-1,-1,-1,0,0*a,0*a,0*a]
      width: [0,6.5*a,6.5*a,10*a,10*a,10*a,10*a,0]
      height: [0,4*a,4*a,4*a,4*a,4*a,4*a,0]
      propeller: true
      texture: [7]      
    gun:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,5,10]
        z: [0,0,0,0]
      width: [3,7,8,3]
      height: [3,7,8,3]
      texture: [6,4,5]
    main:
      section_segments: 6
      offset:
        x: 0
        y: -60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-105,-100,-90,-20,10*2.5,20*2.5,38*2.5,40*2.5,43*2.5,45*2.5,55*3,72*2.5,60*2.5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8+5,15,30,31.5,35.5,35,35,35,35,35,30,0]
      height: [0,4,4.9,12,15,15,15,15,15,15,15,15,0]
      propeller: true
      texture: [3,1,10,2,2,3,63,3,63,8,12,17]
    main2:
      section_segments: 6
      offset:
        x: 0
        y: 75.9
        z: 0.6
      position:
        x: [0,0,0,0,0,0]
        y: [-18,-18,-15.5,21.3,24,24]
        z: [0,0,0,0,0,0]
      width: [0,30,30,30,30,0]
      height: [0,15,15,15,15,0]
      texture: [1,1,8,1]      
    propeller:
      section_segments: 12
      offset:
        x: 35
        y: 40
        z: -15
      position:
        x: [-5,-5,0,0,0,0,0,-2,-2]
        y: [-80,-75,-50,-20,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,15,15,0]
      height: [0,10,15,15,15,15,15,15,0]
      propeller: true
      texture: [4,63,10,1,1,1,12,17]   
      laser:
        damage: [15,20]
        rate: 3
        type: 1
        speed: [150,180]
        number: 1
        error: 1      
    cannon:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -60
        z: -5
      position:
        x: [0,0,0,0,0,-10]
        y: [-40,-50,-20,0,20,30]
        z: [0,0,0,0,0,0]
      width: [0,5,8,8,8,0]
      height: [0,5,8,8,8,0]
      angle: 0
      laser:
        damage: [8,10]
        rate: 8
        type: 2
        speed: [140,160]
        number: 1
        error: 2.5
      propeller: false
      texture: [17,7,9.95,7]   
      
  wings: 
    main:
      length: [150,20]
      width: [70,40,30]
      angle: [-20,20]
      position: [0,70,20]
      texture: [3,63]      
      doubleside: true
      offset:
        x: 0
        y: 50
        z: 5
      bump:
        position: 30
        size: 10
    main2:
      length: [150,20]
      width: [70,40,30]
      angle: [-20,20]
      position: [0,70,20]
      texture: [18,4]      
      doubleside: true
      offset:
        x: 0
        y: 60-5
        z: 5
      bump:
        position: 30
        size: 9
    deco: 
      length: [150,20]
      width: [70,40,30]
      angle: [-20,20]
      position: [0,70,20]
      texture: [17]      
      doubleside: true
      offset:
        x: 0
        y: 45
        z: 5
      bump:
        position: 30
        size: 0
    front:
      length: [50,12]
      width: [70,20,45]
      angle: [50,30]
      position: [0,60,90]
      texture: [4,63]      
      doubleside: true
      offset:
        x: 30
        y: 70
        z: -7
      bump:
        position: 40
        size: 10    
    front2:
      length: [50,12]
      width: [70,20,45]
      angle: [50,29.2]
      position: [0,60,90]
      texture: [18,4]      
      doubleside: true
      offset:
        x: 29.9
        y: 80
        z: -7
      bump:
        position: 40
        size: 10    
    main3:
      length: [80]
      width: [50,10]
      angle: [-20]
      position: [0,70]
      texture: [63]      
      doubleside: true
      offset:
        x: 0
        y: -70
        z: 5
      bump:
        position: 30
        size: 10    
t = -20        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;
