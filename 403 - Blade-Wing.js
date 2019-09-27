a = 0.9
s = 1.9
q = 2
w = -2
d = 1.35
t = 43
v = 1.7
f = 15 
k = 7
u = 5
return model =
  name: 'Blade-Wing'
  level: 4
  model: 4
  size: 3
  specs:
    shield:
      capacity: [315,375]
      reload: [7,10]
    generator:
      capacity: [540,720]
      reload: [200,300]
    ship:
      mass: 600
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0-u
        z: 7-k
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-65*a,-60*a,-50*a,-20*a,10*a,31*a,55*a,75*a,60*a]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,8*a+w,10*a+w,20*a+w,20*a+w,20*a+w,20*a+w,12*a+w,0]
      height: [0,2*a+q,4*a+q,12*a+q,12*a+q,12*a+q,12*a+q,8*a+q,0]
      propeller: true
      texture: [4,63,1,3,3,3,4,17]
    cockpit:
      section_segments: [40,90,180,270,320]
      offset:
        x: 0
        y: -43-u-5
        z: 19-k-2-1
      position:
        x: [0,0,0,0,0,0]
        y: [15/s,35/s,60/s,95/s,115/s]
        z: [-3/s,-2/s,-1/s,-1/s,0/s]
      width: [5/s,12/s,14/s,15/s,5/s]
      height: [0,12/s,7/s,7/s,0]
      texture: [8.98,8.98,4]
    left_fin:
      section_segments: 12
      offset:
        x: 0
        y: -4-u
        z: 4-k
      position:
        x: [0,1.5/d,0,0,0,0,0,8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:-110
      texture: [3,3,2,2,2,2,1]
    left_fin1:
      section_segments: 12
      offset:
        x: 0
        y: 3-u
        z: 7-k
      position:
        x: [0,1.5/d,0,0,0,0,0,8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:-100
      texture: [3,3,2,2,2,2,1]    
    left_fin2:
      section_segments: 12
      offset:
        x: 0
        y: 10-u
        z: 10-k
      position:
        x: [0,1.5/d,0,0,0,0,0,8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:-90
      texture: [3,3,2,2,2,2,1]  
    right_fin:
      section_segments: 12
      offset:
        x: 0
        y: -4-u
        z: 4-k
      position:
        x: [0,-1.5/d,0,0,0,0,0,-8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:110
      texture: [3,3,2,2,2,2,1]
    right_fin1:
      section_segments: 12
      offset:
        x: 0
        y: 3-u
        z: 7-k
      position:
        x: [0,-1.5/d,0,0,0,0,0,-8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:100
      texture: [3,3,2,2,2,2,1]    
    right_fin2:
      section_segments: 12
      offset:
        x: 0
        y: 10-u
        z: 10-k
      position:
        x: [0,-1.5/d,0,0,0,0,0,-8/d,0]
        y: [-55/d+t,-50/d+t,-40/d+t,-10/d+t,0/d+t,10/d+t,19/d+t,36/d+t]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8/d,8/d,8/d,8/d,8/d,8/d,0]
      height: [0,2,2,2,2,2,2,0]
      propeller: true
      angle:90
      texture: [3,3,2,2,2,2,1]        
    engines:
      section_segments: 12
      offset:
        x: 0
        y: -7-u
        z: 4-k
      position:
        x: [2/v+f,-3/v+f,-2/v+f,-4/v+f,-2/v+f,12,12]
        y: [5,0,40/v,74/v,98/v,108/v,105/v]
        z: [0,-3/v,-4,0,-1,1,1]
      width: [0,5/v,10/v,9/v,11/v,11/v,0]
      height: [0,5/v,10/v,9/v,11/v,11/v,0]
      texture: [12,3,3,3,4,17]
      propeller: true
      laser:
        damage: [18,45]
        rate: 2
        type: 1
        speed: [150,170]
        recoil: 45
        number: 1
        error: 0      
    engines2:
      section_segments: 12
      offset:
        x: 0
        y: -7-u
        z: 4-k
      position:
        x: [2/v-f,2/v-f,-2/v-f,-4/v-f,-2/v-f,-12,-12]
        y: [5,0,40/v,74/v,98/v,108/v,105/v]
        z: [0,-5/v,-4,1,-1,1,1]
      width: [0,5/v,10/v,9/v,11/v,11/v,0]
      height: [0,5/v,10/v,9/v,11/v,11/v,0]
      texture: [12,3,3,3,4,17]
      propeller: true      
      laser:
        damage: [18,45]
        rate: 2
        type: 1
        speed: [150,170]
        recoil: 45
        number: 1
        error: 0
    cannon:
      section_segments: 12
      offset:
        x: 0
        y: -8
        z: -4
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:70
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0        
    cannon1:
      section_segments: 12
      offset:
        x: 0
        y: -2
        z: -1
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:80
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0          
    cannon2:
      section_segments: 12
      offset:
        x: 0
        y: 6
        z: 2
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:90
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0             
    cannon3:
      section_segments: 12
      offset:
        x: 0
        y: -8
        z: -4
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:-70
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0        
    cannon4:
      section_segments: 12
      offset:
        x: 0
        y: -2
        z: -1
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:-80
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0          
    cannon5:
      section_segments: 12
      offset:
        x: 0
        y: 6
        z: 2
      position:
        x: [0,0,0]
        y: [-15+-48,0+-48,15+-48]
        z: [0,0,0]
      width: [1,3,0]
      height: [1,2,0]
      texture: [17,18]  
      angle:-90
      laser:
        damage: [8,10]
        rate: 4
        type: 1
        speed: [160,170]
        number: 2
        error: 0   
    fin3_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: 11
        z: 3
      position:
        x: [0,0,0,0]
        y: [-20,-20,37.5,37.5]
        z: [0,0,0,0]
      width: [0,0.5,0.5,0]
      height: [0,1,1,0]
      angle:90
      texture: [17]   
    fin2_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: -1.5
        z: 0
      position:
        x: [0,0,0,0]
        y: [-20,-20,38,38]
        z: [0,0,0,0]
      width: [0,0.5,0.5,0]
      height: [0,1,1,0]
      angle:100
      texture: [17]      
    fin1_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: -13.8
        z: -3
      position:
        x: [0,0,0,0]
        y: [-20,-20,38,38]
        z: [0,0,0,0]
      width: [0,0.5,0.5,0]
      height: [0,1,1,0]
      angle:110
      texture: [17]         
  wings:
    rear:
      offset:
        x: 0.01
        y: 25
        z: -5
      length: [15,5,5,5,4,3,10]
      width: [80,55,40,29,20,15,10,0]
      angle: [90,90,90,90,90,90,90]
      position: [-5,5,14,25,29,35,40,60]
      texture: [63]
      bump:
        position: 0
        size: 5        
    sides:
      doubleside: true
      offset:
        x: 3
        y: 26
        z: 4.9
      length: [10,25,10]
      width: [20,30,20,20,35,20]
      angle: [-10,-10,40,-30,-30]
      position: [5,5,20,30]
      texture: [1,2,3]
      bump:
        position: 30
        size: 10
    sides2:
      doubleside: true
      offset:
        x: 3
        y: 27
        z: 4.9
      length: [10,25,10]
      width: [20,30,20,20,35,20]
      angle: [-10,-10,39.9,-30,-30]
      position: [5,5,20,30]
      texture: [18]
      bump:
        position: 30
        size: 10
                
        
