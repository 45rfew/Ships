Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
Array::div = (mod) -> @map (val) -> val / mod
Array::step = (step) -> i for i in @ by step
Array::fill = (val, len) -> val for i in (
  if len
  then [0...len]
  else if @length == 1
  then [0...@[0]]
  else @
)
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
return model =
  bodies:
    hub3:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: 90
      position:
        x: [0,0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4]
        z: [0,0,0,0,0,0]
      width: [10,10,8,8,3,0]
      height: [10,10,8,8,3,0]
      texture: [3,17,3,18,17]
      vertical: true
    hub4:
      section_segments: 20
      offset:
        x: 100
        y: 32
        z: 55
      position:
        x: [0,0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,3.5*5/4,5.5*5/4]
        z: [0,0,0,0,0,0]
      width: [10,10,8,8,3,0]
      height: [10,10,8,8,3,0]
      texture: [3,17,3,18,17]
      vertical: true
    hub_joints:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -73
        z: 31.4+2.5
      position:
        x: [0,0,0,0]
        y: [-10,-10,11,11]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,5,5,0]
      texture: [8]      
    hub_joints_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -77
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-8,8,10,10]
        z: [-5,-5,0,0,-5,-5]
      width: [0,2,2,2,2,0]
      height: [0,3,3,3,3,0]
      texture: [1,1,10,1,1]      
      angle: 90      
    hub_joints_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -68
        z: 38
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-8,8,10,10]
        z: [-5,-5,0,0,-5,-5]
      width: [0,2,2,2,2,0]
      height: [0,3,3,3,3,0]
      texture: [1,1,10,1,1]      
      angle: 90      
    diamond:
      section_segments: 4
      offset:
        x: 70
        y: 50
        z: -30
      position:
        x: [0,0,0]
        y: [-7,-7,0]
        z: [0,0,0]
      width: [0,15,0]
      height: [0,15,0]
      texture: [17]
      vertical: true    
    disc1:
      section_segments: 12
      offset:
        x: 0
        y: 50
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15]
      height: [15,15,15,18,18,18,18,18,15,15]
      texture: [4,4,4,4,4,4,17,4]
    disc2:
      section_segments: 16
      offset:
        x: 0
        y: 40
        z: 40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10]
      height: [10,10,10,12,12,12,12,12,10,10]
      texture: [4,4,4,4,17,4,17,4]   
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 10
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-10,15,15,19,19]
        z: [0,0,0,0,0]
      width: [10,10,20,20,20]
      height: [30,30,50,35,0]
      texture: [4,4,18,17] 
      vertical: true
      angle: 50     
    hub1:
      section_segments: 20
      offset:
        x: 70
        y: 40
        z: 30
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6]
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0]
      height: [18,15,13,12,10,0]
      texture: [18,17,17,18,18]     
      vertical: true
    hub2:
      section_segments: 20
      offset:
        x: 70
        y: 20
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [23,30-1,28,28,32-3,31-3]
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0]
      height: [12,10,8,7,5,0]
      texture: [18,18,17,17,18]   
      vertical: true
    propeller:
      section_segments: 16
      offset:
        x: 60
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,14,4,0,-6,0,60,66,48,48,78,72]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,20,20,22.5,25,25,20,20,14,10,0]
      height: [0,5,20,20,22.5,25,25,20,20,14,10,0]
      propeller: true
      texture: [3,12,4,3,4,18,4,18,13,3,13]
    up_lift:
      section_segments: [45,135,225,315]
      offset:
        x: 12
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,40,40]
        z: [0,0,0,0]
      width: [0,25,10,0]
      height: [0,100,80,0]
      angle: 45
      vertical: true
      texture: [4,4,17]
    block:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: -100
      position:
        x: [0,0,0,0,0,0]
        y: [30,30,40,50,50]
        z: [0,0,-10,-20,-20,0]
      width: [0,20,20,20,0]
      height: [0,25,25,25,0]
      propeller: false
      vertical: true
      texture: [2]
    box2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -41.5
        z: 16
      position:
        x: [0,0,0,0,0,0]
        y: [-40,-40,10,12.5,15,15]
        z: [0,0,0,0,0,0]
      width: [0,13,13,13,13,0]
      height: [0,5,5,5,5,0]
      texture: [1,9.96,2,3]       
    box_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -75
        z: 18.8
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    box_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -74
        z: 18.7
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90      

    hubs:  
      section_segments: 30
      offset:
        x: 100
        y: 71
        z: 12.5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-13,-10,-12,-12.5,-10,-10,-12]
        z: [0,0,0,0,0,0,0,0]
      width: [13,13,10,9,6,4.2,4,0]
      height: [13,13,10,9,6,4.2,4,0]
      texture: [1,3,18,17,18,16,17]
      vertical: true
    hubs_support:  
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -12
        z: 60
      position:
        x: [0,0,0,0,0,0]
        y: [-15,-15,-5,10,15,15]
        z: [0,1.2,0,0,-2.8,-2.8]
      width: [0,1.5,1.5,1.5,1.5,0]
      height: [0,3,3,3,3,0]
      texture: [4]      
    hubs_support2:  
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: -12.5
        z: 60
      position:
        x: [0,0,0,0,0,0]
        y: [-15,-15,-10,10,15,15]
        z: [-2.8,-2.8,0,0,-2.8,-2.8]
      width: [0,1.5,1.5,1.5,1.5,0]
      height: [0,3,3,3,3,0]
      texture: [4]       
      angle: 90
    hubs1:
      section_segments: 12
      offset:
        x: 100
        y: 14
        z: -68
      position:
        x: [0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,5.5*5/4]
        z: [0,0,0,0,0]
      width: [2.2*5-0.6,2.2*5-0.6,10-0.6,10-0.6,10-0.6]
      height: [2.2*5-0.6,2.2*5-0.6,10-0.6,10-0.6,0]
      texture: [2,2,2,15]
      vertical: true
    hubs2:
      section_segments: 8
      offset:
        x: 100
        y: 19
        z: -68
      position:
        x: [0,0,0,0]
        y: [-10,-10,0,5]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,10,10,0]
      texture: [11]
      vertical:true
    hubs3:
      section_segments: 12
      offset:
        x: 100
        y: 13
        z: -68
      position:
        x: [0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,5.5*5/4]
        z: [0,0,0,0,0]
      width: [3.2*5,3.2*5,14,14,0]
      height: [3.2*5,3.2*5,14,14,0]
      texture: [3,17,3,18]
      vertical: true   
