a = 2.5
b = 5
model =
  name: "Ulysses"
  level: 6
  model: 4
  size: 2.5
  zoom: 0.95
  next: [703,704]
  specs:
    shield:
      capacity: [350,420]
      reload: [10,15]
    generator:
      capacity: [200,300]
      reload: [180,280]
    ship:
      mass: 420
      speed: [120,130]
      rotation: [100,120]
      acceleration: [80,120]
  bodies:
    main:
      section_segments: [10,15,20,140,160,180,200,220,340,345,350]
      offset:
        x: 0
        y: 0
        z: -1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-72,-70,-40,20,80,135,135]
        z: [0,0,0,4,4,4,4]
      width: [0,3,10,20,20,20,0]
      height: [0,1,7-3,7,7,7,0]
      texture: [2.8,2.8,0.8,2.8,2.8]
      laser:
        damage: [50,75]
        rate: 1.5
        type: 1
        speed: [200,230]
        number: 1
        angle: 0
        error: 0      
    main2:
      section_segments: [90,140,180,220,270,360]
      offset:
        x: 0
        y: 0
        z: -6.5+8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-72,-70,-40,20,80,140,140]
        z: [-3,-3,-5.5,-4,-4,-4,-4]
      width: [0,3/1.6,10/1.6,20/1.6,20/1.6,20/1.6,0]
      height: [0,1,7-3,7,7,7,0]
      texture: [3,3,1,3,3]
    detail1:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 15
        z: 2.37
      position:
        x: [0,-0.3,0,3,0]
        y: [-55,-55,-50,5,0]
        z: [0,0,0.5,6.75,0]
      width: [0,0.5,0.9,0.9,0]
      height: [0,1,1,1,0]
      texture: [63]
    detail2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 27
        z: 2.9
      position:
        x: [0,0,0]
        y: [-30,-7,-7]
        z: [-2.6,0,0]
      width: [0.01,9.7,0]
      height: [10,10,0]
      texture: [4]
    detail3:
      section_segments: 12
      offset:
        x: 7
        y: 9
        z: 3.5
      position:
        x: [0,0,0,-0.2,0]
        y: [-15,-15,-14,5,5]
        z: [0,0,0,0,0]
      width: [0,1.5,1.5,1.5,0]
      height: [0,1.5,1.5,1.5,0]
      texture: [4,63,2]
      laser:
        damage: [15,18]
        rate: 10
        type: 2
        speed: [170,200]
        number: 1
        angle: 0
        error: 3     
    detail4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 32
        z: 4
      position:
        x: [0,0,0,0,0]
        y: [-28,-12,-12,45,45]
        z: [-2.3,-0.4,-0.4,6.4,0.4]
      width: [0.01,7.7,8.7,8.7,0]
      height: [10,10,10,0]
      texture: [3]
    detail5:
      section_segments: 8
      offset:
        x: 0
        y: 15
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [10/a,40/a,80/a,130/a,150/a,150/a,160/a]
        z: [5.3/a,7/a,3,5/a,5/a,5/a,0/a]
      width: [3/a,10/a,12/a,12/a,12/a,12/a,0]
      height: [0,10/a,15/a,15/a,15/a,15/a,0]
      texture: [9,9,3]         
    detail6:
      section_segments: [45,135,225,315]
      offset:
        x: 7
        y: 18
        z: -42.4
      position:
        x: [2,2,6.5,0,0]
        y: [-25,-25,-20,-7,-7]
        z: [0,0,0,0,0]
      width: [0,1,1,1,0]
      height: [0,30,30,30,0]
      texture: [2]
      vertical: true
    detail7:
      section_segments: [45,135,225,315]
      offset:
        x: 7
        y: 18
        z: -20.5
      position:
        x: [2,2,6.5,0,0]
        y: [-25,-25,-20,-7,-7]
        z: [0,0,0,0,0]
      width: [0,1,1,1,0]
      height: [0,1,1,1,0]
      texture: [63]
      vertical: true 
    detail8:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0]
      height: [0,1,1,1,1,0]
      texture: [2,2,2,2,2]
      angle: 90       
    detail9:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: -9
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [2,2,-5,-7,9,9]
      width: [0,50,50,45,15,0]
      height: [0,1,1,1,1,0]
      texture: [2,2,2,2,2]
      angle: 90        
    detail10:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 91
        z: 9
      position:
        x: [26,26,26,18,-13,-13]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [4]
      angle: 90      
    detail11:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 111
        z: 9
      position:
        x: [-22,-22,-22,-24,-13,-13]
        y: [-30,-30,-10,10,58,58]
        z: [0,0,2,12,-8,-8]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [4]
      angle: 90  
    detail12:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 91
        z: -9
      position:
        x: [26,26,26,18,-13,-13]
        y: [-30,-30,-10,10,60,60]
        z: [0,2,-5,-7,9,9]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [4]
      angle: 90      
    detail13:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 111
        z: -9
      position:
        x: [-22,-22,-22,-24,-13,-13]
        y: [-30,-30,-10,10,58,58]
        z: [0,2,-5,-7,8,8]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [4]
      angle: 90  
    detail14:
      section_segments: 12
      offset:
        x: 0
        y: 146.6
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-15,-9,-7,-5,-4,-3,-1,0,1,3,4,10,10,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,13,13,11,11,13,11,11,13,11,11,13,13,11,0]
      height: [0,13,13,11,11,13,11,11,13,11,11,13,13,11,0]
      texture: [4,4,4,7,4,4,7,4,4,7,4,4,17]
      propeller: true
    detail15:
      section_segments: [15,65,115,165,195,245,295,345]
      offset:
        x: 100
        y: 113
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20+3,-20+3,-18+3,18-3,20-3,17,7]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,8,0]
      height: [0,18,18,18,18,16,0]
      texture: [3.9,63,3,63,16.94]
      propeller: true      
    detail16:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: 94.9
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,0,1]
        z: [0,0,0,0]
      width: [7+1,5.5+1,5.5+1,7+1]
      height: [7+1,5.5+1,5.5+1,7+1]
      texture: [2]
    detail17:
      section_segments: 12
      offset:
        x: 100
        y: 89
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-3,-5,3,5,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,3.5,4,4,5,4,0]
      height: [0,3.5,4,4,5,4,0]
      texture: [17,2,2,63]
      angle: 2
      laser:
        damage: [12,14]
        rate: 1.5
        type: 2
        speed: [200,220]
        number: 3
        angle: 1
        error: 2
    detail18:
      section_segments: [30,35,40,130,135,140,220,225,230,320,325,330]
      offset:
        x: 19.5
        y: 115
        z: 15
      position:
        x: [0,0,0,0,0,0]
        y: [-30+5,-30+5,-13+5,18,20,20]
        z: [-5,-5,0,0,0,0]
      width: [0,11,11,11,11,0]
      height: [0,0.1,12,12,12,0]
      texture: [3,3,3,63,17.99]
    detail19:
      section_segments: 12
      offset:
        x: 19.5
        y: 130
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,6,11,13,13,6.5]
        z: [0,0,0,0,0,0,0]
      width: [0,7,7,9,9,8,0]
      height: [0,9,9,11,9,8,0]
      texture: [7,7,3,7,16.99,16.99]
      propeller: true     
    detail20:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 90
        z: 11
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-10,-8,20]
        z: [0,0,0,0,0]
      width: [0,7,8,8,8]
      height: [0,2,3,3,3]
      texture: [5,2,63,2]
    detail21:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 142
        z: 23
      position:
        x: [0,0,0,0,0,0]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,5,6,5,5]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3]  
    detail22:
      section_segments: [45,135,225,315]
      offset:
        x: 25
        y: 142
        z: 15.2
      position:
        x: [0,0,5,6,5,5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3] 
    detail23:
      section_segments: [45,135,225,315]
      offset:
        x: 14
        y: 142
        z: 15.2
      position:
        x: [0,0,-5,-6,-5,-5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3]  
    detail24:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 142
        z: 7
      position:
        x: [0,0,0,0,0,0]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,-5,-6,-5,-5]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3]     
    detail25:
      section_segments: [45,135,225,315]
      offset:
        x: 81
        y: 115
        z: 3.8
      position:
        x: [28,28,0,0]
        y: [-34.2,-34.2,10,10]
        z: [17.2,17.2,-1,-1]
      width: [0,7,10,20,0]
      height: [0,1,1,1,0]
      texture: [4]     
      angle: 90
    detail26:
      section_segments: [45,135,225,315]
      offset:
        x: 57
        y: 115
        z: 13
      position:
        x: [0,4,0,0]
        y: [-10,-10,7,7]
        z: [8,8,1,1]
      width: [0,25,14,0]
      height: [0,1,1,0]
      texture: [3]     
      angle: 90      
    detail27:
      section_segments: [45,135,225,315]
      offset:
        x: 40
        y: 111
        z: 13.1
      position:
        x: [0,8,0,0]
        y: [-10,-10,7,7]
        z: [-0.4,-0.4,8,8]
      width: [0,34,25,0]
      height: [0,1,1,0]
      texture: [1]
      angle: 90        
    detail28:
      section_segments: [45,135,225,315]
      offset:
        x: 6
        y: 75
        z: 15
      position:
        x: [0,0,0,0,0]
        y: [-20,-20,10,11.5,11.5]
        z: [-4,-4,0,0,0]
      width: [0,1,1,1,0]
      height: [0,2,10,10,0]
      texture: [1,1,63]
      angle: 1
           
      
  wings: 
    main:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: 7
      length: [0,20/b]
      width: [0/b,200/b,0/b]
      angle: [90,90]
      position: [-0,-30,-10]
      texture: [63]
      bump:
        position: 35
        size: 20
    main2:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: -7
      length: [0,20/b]
      width: [0/b,200/b,0/b]
      angle: [-90,-90]
      position: [-0,-30,-10]
      texture: [63]
      bump:
        position: 35
        size: 20            
    sides:
      length: [35]
      width: [13,8]
      angle: [130]
      position: [0,30]
      doubleside: true
      offset:
        x: 92
        y: 115
        z: 5
      bump:
        position: 10
        size: 20
      texture: [2]    
    sides2:
      length: [2]
      width: [7.6,7]
      angle: [130]
      position: [0,0]
      doubleside: true
      offset:
        x: 70
        y: 145
        z: 31.7
      bump:
        position: 0
        size: 0
      texture: [63] 
    sides3:
      length: [35]
      width: [13,8]
      angle: [-130]
      position: [0,30]
      doubleside: true
      offset:
        x: 92
        y: 115
        z: 0
      bump:
        position: 10
        size: 20
      texture: [2] 
    sides4:
      length: [2]
      width: [7.8,6.5]
      angle: [-130]
      position: [0,0]
      doubleside: true
      offset:
        x: 70-0.6
        y: 145
        z: -26
      bump:
        position: 0
        size: 0
      texture: [63]       
t = -50        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
      
