a =
  name: "Armityle"
  level: 5
  model: 4
  size: 1.5
  specs:
    shield:
      capacity: [250,360]
      reload: [7,10]
    generator:
      capacity: [270,310]
      reload: [80,95]
    ship:
      mass: 320
      speed: [110,135]
      rotation: [90,120]
      acceleration: [120,140]  
  bodies:
    main:
      section_segments: 8
      offset:
        x: 0
        y: -100
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-21,-20,50,60,65,200,210,220,220,210]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,9,10,35,33,25,25,30,25,24,0]
      height: [0,4,5,13,15,15,15,16,12,11,0]
      texture: [4,17,2,63,63,[15],[15],13,17]
      propeller: 1
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -95
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,1,15,40,50,54,90,110,150,180,180]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,12,18,12,12,11,20,20,10,0]
      height: [0,1,8,13,10,10,12,12,12,10,0]
      texture: [3,9,9,3,3,8]
      propeller: false
    cannon:
      section_segments: 6
      offset:
        x: 54
        y: 15
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [10,0,0,20,30,85,85,89,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,4,8,5,5,5,4,0]
      height: [0,4,5,13,10,10,10,4,0]
      texture: [16.9,16.9,3,4,13,[15]]
      laser:
        damage: [14,18]
        recoil: 20
        rate: 3.5
        type: 2
        speed: [160,180]
        number: 1
        error: 3 
    cannon2:
      section_segments: 6
      offset:
        x: 53.5
        y: 15
        z: 11
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [10,0,0,20,30,85,85,89,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,4,8,5,5,5,4,0]
      height: [0,4,5,13,10,10,10,4,0]
      texture: [16.9,16.9,3,4,18,[15]]      
    propuller:
      section_segments: 6
      offset:
        x: 40
        y: 61
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,10,5,10,18,50,60,60,50]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,3,5,7,9,9,6,5,0]
      height: [0,3,5,7,9,9,6,5,0]
      texture: [[15],4,3,3,2,63,16.9]
      propeller: 1    
    maingun:
      section_segments: 6
      offset:
        x: 0
        y: 8
        z: 39
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-20,-20,30,40,80,89,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,5,10,12,4,0]
      height: [0,2,3,5,10,12,4,0]
      texture: [16.9,16.9,3.9,2.9,1.9,63]
      propeller: 0
      laser:
        damage: [80,100]
        rate: 0.8
        type: 1
        recoil: 35
        speed: [150,190]
        number: 1
        error: 1      
    deco:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0.01
        y: -25
        z: 10
      position:
        x: [0,6,0,0,0,0,0,0,0,0,0,0]
        y: [20,20,40,60,75,85,110,112]
        z: [0,-.8,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,20,30,30,38,38,0]
      height: [0,13,13,13,13,13,13,0]
      texture: [1,1,2,3,4,[15]]
      propeller: 0
    joint:
      section_segments: 6
      offset:
        x: 11
        y: 80-2
        z: 40
      position:
        x: [0,0,0,0,0]
        y: [0,0,2.5,4.5,4.5]
        z: [0,0,0,0,0]
      width: [0,4,4,4,0]
      height: [0,4,4,4,0]
      texture: [63,63,16.8]       
      angle: -15
    joint2:
      section_segments: 6
      offset:
        x: 10.5
        y: 70-2
        z: 40
      position:
        x: [0,0,0,0,0]
        y: [0,0,2.5,4.5,4.5]
        z: [0,0,0,0,0]
      width: [0,4,4,4,0]
      height: [0,4,4,4,0]
      texture: [63,63,16.8]  
      angle: -15
    joint3:
      section_segments: 6
      offset:
        x: 10
        y: 60-2
        z: 40
      position:
        x: [0,0,0,0,0]
        y: [0,0,2.5,4.5,4.5]
        z: [0,0,0,0,0]
      width: [0,4,4,4,0]
      height: [0,4,4,4,0]
      texture: [63,63,16.8] 
      angle: -15
  wings:
    main:
      offset:
        x: 0
        y: 50
        z:  20
      length: [30,2,10,2,10,10]
      width: [140,75,79,83,80,60,30]
      angle: [-15,15,15,-15,-15,0]
      position: [-20,25,25,20,20,30,25]
      texture: [17.8,17,8,17,4,3]
      doubleside: 1
      bump:
        position: 30
        size: 5
    main_2:
      offset:
        x: 0
        y: 52
        z:  20
      length: [30,2,10,2,10,10]
      width: [140,75,79,83,80,60,30]
      angle: [-15,15,15,-15,-15,0]
      position: [-20,25,25,20,20,30,25]
      texture: [10.8,17,3,17,[15],4]
      doubleside: 1
      bump:
        position: 30
        size: 4        
    outer:
      offset:
        x: 22
        y: 75
        z: 10-7
      length: [0,40,5,3,3,10]
      width: [40,40,30,60,158,160,80]
      angle: [0,20,-10,-10,-10,-10]
      position: [0,0,0,0,-49,-50,10]
      texture: [4,63,2,1,17,63]
      doubleside: 1
      bump:
        position: 50
        size: 5
    holds:
      offset:
        x: 0
        y: 50
        z: 0
      length: [45,25]
      width: [40,30,20]
      angle: [35,-10]
      position: [0,35,68]
      texture: [4,63]
      doubleside: 1
      bump:
        position: 0
        size: 5
    top:
      offset:
        x: 0
        y: 60
        z: 39
      length: [45]
      width: [40,30]
      angle: [-10]
      position: [0,40]
      texture: [8]
      doubleside: 1
      bump:
        position: 30
        size: 10
    top2:
      offset:
        x: 0
        y: 62
        z: 39
      length: [45]
      width: [40,30]
      angle: [-10]
      position: [0,40]
      texture: [18]
      doubleside: 1
      bump:
        position: 20
        size: 11               
    top_lights:
      offset:
        x: 0
        y: 58
        z: 39
      length: [45]
      width: [40,30]
      angle: [-10]
      position: [0,40]
      texture: [17]
      doubleside: 1
      bump:
        position: 0
        size: 0        
    bottom:
      offset:
        x: 10
        y: 30
        z: 0
      length: [20,0,30]
      width: [140,90,40,30]
      angle: [-10,0,20]
      position: [0,20,40,40]
      texture: [63,2,17]
      doubleside: 1
      bump:
        position: 0
        size: 10
for i in [0...9]
  a.bodies["strike"+i] = 
    section_segments: 6
    offset:
      x: 9
      y: -35 + i * 6
      z: 9.8
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [5,6,6,5,5]
    height: [4,5,5,4,4]
    texture: [63]
  a.bodies["side_cannon_ring"+i] = 
    section_segments: 6
    offset:
      x: 54
      y: 48 + i * 6
      z: 10
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [3,6,6,3,3]
    height: [3,12,12,3,3]
    texture: [16.9]        
for i in [0...8]
  a.bodies["cannon_ring"+i] = 
    section_segments: 6
    offset:
      x: 0
      y: -5 + i * 6
      z: 39
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,2,0]
      z: [0,0,0,0,0]
    width: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2]
    height: [3+i/2,4+i/2,4+i/2,3+i/2,3+i/2]
    texture: [17]    
t = -15        
if (1)
  for y,v of a.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of a.wings
    v.offset.y = v.offset.y + t      
return a;
