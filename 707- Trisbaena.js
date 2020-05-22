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
  name: 'Trisbaena'
  level: 7
  model: 7
  size: 1.5
  Designer: 'Duc Minh'
  specs:
    shield:
      capacity: [800,800]
      reload: [14,14]
    generator:
      capacity: [300,300]
      reload: [40,40]
    ship:
      mass: 820
      speed: [60,60]
      rotation: [30,30]
      acceleration: [120,120]
  bodies:
    main:
      section_segments: [22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-330,-330,-350,-350,-310,-310,-300,-300,-270,-266,-230,-230,-200,-200,-180,-180,-150,-150,-130,-130,-100,-100,-80,-80,-50,-50,-30,-30,0,0,40,44,230,230,270,270,370,370,350,350]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0]
      height: [0,50,50,60,60,58,58,61,61,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,55,55,65,65,80,80,70,70,50,50,45,45,0]
      texture: [4,11,18.1,18.1,4,17,4,18.1,4,4,4,18,17,17,17,18,17,17,17,18,17,17,17,18,17,17,17,18,4,18.1,18.1,4,18.1,18.1,4,18.1,17,18,17]
      propeller: true
    front_spike:
      section_segments: [35,55,125,145,215,235,305,325]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-340,-340,-335,-330,-330,-340,-340,-345,-330]
        z: [0,0,0,0,0,0,0,0,0]
      width: [20,40,45,45,20,20,0,0,10]
      height: [20,40,45,45,20,20,0,0,10]
      laser:
        damage: [250,250]
        rate: 1
        type: 1
        speed: [180,180]
        number: 1
        angle: 0
        error: 0
        recoil: 1000
      texture: [17,3,1,2,4,81]
    cockpit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: 50
      position:
        x: [0,0,0,0,0]
        y: [60,65,100,140,165]
        z: [0,0,0,0,20]
      width: [0,35,35,35,0]
      height: [0,30,60,64,0]
      texture: [7,7,7,4]
    cockpit_detail1:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 90
        z: 98
      position:
        x: [0,0,0,0]
        y: [-40,10,50,50]
        z: [-35,-3,0,0]
      width: [3,3,3,0]
      height: [3,3,3,0]
      texture: [4]
    cockpit_detail2:
      section_segments: [90,180,270,360]
      offset:
        x: 23
        y: 90
        z: 97
      position:
        x: [0,0,0,0]
        y: [-40,10,50,50]
        z: [-35,-3,0,0]
      width: [3,3,3,0]
      height: [3,3,3,0]
      texture: [4]  
    cockpit_detail3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 140
        z: 98
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-27,-27,-23,-23,23,23,27,27]
        z: [-11,-11,0,0,0,0,-11,-11]
      width: [0,3,3,3,3,3,3,0]
      height: [0,13,3,3,3,3,13,0]
      texture: [4]  
      angle: 90
    cockpit_detail4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 100
        z: 95
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-27,-27,-23,-23,23,23,27,27]
        z: [-12,-12,0,0,0,0,-12,-12]
      width: [0,3,3,3,3,3,3,0]
      height: [0,15,3,3,3,3,15,0]
      texture: [4]  
      angle: 90      
    cockpit_back1:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -10
        z: 60
      position:
        x: [0,0,0,0,0]
        y: [120,120,180,190,190]
        z: [0,0,0,0,0,0,0]
      width: [0,60,60,60,0]
      height: [0,40,40,30,0]
      texture: [3,[15],[15]]
    cockpit_back2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -10
        z: 40
      position:
        x: [0,0,0,0]
        y: [130,130,195,195]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,70,70,0]
      height: [0,60,60,0]
      texture: [3,17]
    cockpit_back3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -10
        z: 35
      position:
        x: [0,0,0,0]
        y: [140,140,205,205]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,80,80,0]
      height: [0,60,60,0]
      texture: [3,18]
    back_joint1:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 15
        y: 195
        z: 69
      position:
        x: [0,0,0,0,0]
        y: [0,0,30,60,60]
        z: [0,0,0,-10,-10]
      width: [0,10,10,10,0]
      height: [0,10,10,10,0]
      texture: [17,17.95,17,4]  
    back_joint2:
      section_segments: [90,180,270,360]
      offset:
        x: 37
        y: 195
        z: 60
      position:
        x: [0,0,0,-5,-5]
        y: [0,0,30,60,60]
        z: [0,0,0,-5,-5]
      width: [0,10,10,10,0]
      height: [0,10,10,10,0]
      texture: [17,17.95,17,4] 
    back_joint3:
      section_segments: [90,180,270,360]
      offset:
        x: 57
        y: 195
        z: 40
      position:
        x: [0,0,0,-5,-5]
        y: [0,0,30,60,60]
        z: [0,0,0,-5,-5]
      width: [0,10,10,10,0]
      height: [0,10,10,10,0]
      texture: [17,17.95,17,4]       
    wing_shields1:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 0
        y: 95
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,30,50,50,60,60,90,105,125,125]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,100,130,130,120,123,140,140,120,115,0]
      height: [0,30,30,30,25,25,25,25,25,25,0]
      texture: [18,3,4,4,4,4,18.1,4,3]
    wing_shields2:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 0.01
        y: 95
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [1,0,30,50,50,59,59,90,105,125,126]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,100,130,130,120,123,140,140,120,115,0]
      height: [0,30,30,30,25,25,25,25,25,25,0].mult(0.2)
      texture: [63]  
    wing_shields3:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 0.01
        y: 95
        z: -7
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [1,0,30,50,50,59,59,90,105,125,126]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,100,130,130,120,123,140,140,120,115,0]
      height: [0,30,30,30,25,25,25,25,25,25,0].mult(0.2)
      texture: [63]        
    joint1:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 150
        z: 0
      position:
        x: [0,0,0,0]
        y: [-5,10,30,50]
        z: [0,0,0,0]
      width: [0,210,210,0]
      height: [0,15,15,0]
      texture: [3]
    joint2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 150
        z: 5
      position:
        x: [0,0,0,0]
        y: [-5,10,30,50]
        z: [0,0,0,0]
      width: [0,211,211,0]
      height: [0,15,15,0].mult(0.2)
      texture: [63]  
    joint3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 150
        z: -5
      position:
        x: [0,0,0,0]
        y: [-5,10,30,50]
        z: [0,0,0,0]
      width: [0,211,211,0]
      height: [0,15,15,0].mult(0.2)
      texture: [63]        
    disc1:
      section_segments: 12
      offset:
        x: 80
        y: 170
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4].mult(1.6)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      height: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      texture: [4,4,4,4,4,4,17,4]
      angle: -90
    disc2:
      section_segments: 12
      offset:
        x: 90
        y: 170
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4].mult(1.6)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      height: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      texture: [4,4,4,4,4,4,17,4]
      angle: -90 
    disc3:
      section_segments: 12
      offset:
        x: 100
        y: 170
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4].mult(1.6)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      height: [15,15,15,18,18,18,18,18,15,15].mult(1.6)
      texture: [4,4,4,4,4,4,17,4]
      angle: -90 
    disc4:
      section_segments: 12
      offset:
        x: 115
        y: 170
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4].mult(1.6)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15]
      height: [15,15,15,18,18,18,18,18,15,15]
      texture: [16]
      angle: 90    
    disc5:
      section_segments: 12
      offset:
        x: 125
        y: 170
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [4,4,0,0,0,0,0,4,4,4].mult(1.6)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,18,18,18,18,18,15,15]
      height: [15,15,15,18,18,18,18,18,15,15]
      texture: [16]
      angle: 90 
    disc6:
      section_segments: 16
      offset:
        x: 0
        y: 200
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.6)
      texture: [4,4,4,4,4,17,4]
    disc7:
      section_segments: 16
      offset:
        x: 0
        y: 210
        z: 75
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.6)
      texture: [4,4,4,4,4,17,4]  
    disc8:
      section_segments: 16
      offset:
        x: 45
        y: 200
        z: 47
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10].mult(1.7)
      texture: [4,4,4,4,4,17,4]
    disc9:
      section_segments: 16
      offset:
        x: 45
        y: 210
        z: 47
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      height: [10,10,10,12,12,12,12,12,10,10].mult(1.7)
      texture: [4,4,4,4,4,17,4]  
    disc10:
      section_segments: 16
      offset:
        x: 45
        y: 90
        z: 47
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(2)
      height: [10,10,10,12,12,12,12,12,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,4]   
    disc11:
      section_segments: 16
      offset:
        x: 45
        y: 70
        z: 47
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(2)
      height: [10,10,10,12,12,12,12,12,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,4]      
    disc12:
      section_segments: 16
      offset:
        x: 50
        y: 50
        z: -160
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.6)
      height: [10,10,10,12,12,12,12,12,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18] 
      angle: 45
      vertical: true
    disc13:
      section_segments: 24
      offset:
        x: 0
        y: 160
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(4)
      height: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      texture: [4,4,4,4,4,17,4,4]
      angle: 180
    disc14:
      section_segments: 24
      offset:
        x: 0
        y: 160
        z: 80
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,0,0,0,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(4)
      height: [10,10,10,12,12,12,12,12,10,10].mult(1.5)
      texture: [4,4,4,4,4,17,4,4] 
    disc15:
      section_segments: 6
      offset:
        x: 0
        y: -17.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
    disc16:
      section_segments: 6
      offset:
        x: 0
        y: -12.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
      angle: 180
    disc17:
      section_segments: 6
      offset:
        x: 0
        y: -67.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
    disc18:
      section_segments: 6
      offset:
        x: 0
        y: -62.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
      angle: 180
    disc19:
      section_segments: 6
      offset:
        x: 0
        y: -117.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
    disc20:
      section_segments: 6
      offset:
        x: 0
        y: -112.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
      angle: 180  
    disc21:
      section_segments: 6
      offset:
        x: 0
        y: -167.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
    disc22:
      section_segments: 6
      offset:
        x: 0
        y: -162.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
      angle: 180 
    disc23:
      section_segments: 6
      offset:
        x: 0
        y: -217.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
    disc24:
      section_segments: 6
      offset:
        x: 0
        y: -212.5
        z: 57
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,1,1,1,2,5,7,7,7].mult(1.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.8)
      height: [10,10,10,12,12,12,12,12,10,10].mult(0.5)
      texture: [3,3,3,3,3,17,4,4]  
      angle: 180      
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 50
        y: 35
        z: -85
      position:
        x: [0,0,0,0,0]
        y: [-10,15,15,19,19]
        z: [0,0,0,0,0]
      width: [10,10,20,20,20]
      height: [30,30,50,35,0]
      texture: [4,4,18,17] 
      vertical: true
      angle: 50     
    hubs1:
      section_segments: 20
      offset:
        x: 80
        y: 20
        z: -128
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6]
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].mult(1)
      height: [18,15,13,12,10,0]
      texture: [18,17,17,18,18]     
      vertical: true
    hubs2:
      section_segments: 20
      offset:
        x: 80
        y: 15
        z: -204
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6]
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].mult(0.7)
      height: [18,15,13,12,10,0].mult(0.7)
      texture: [18,17,17,18,18]     
      vertical: true 
    hubs3:
      section_segments: 20
      offset:
        x: 0
        y: 45
        z: -310
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6]
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].mult(1.8)
      height: [18,15,13,12,10,0].mult(1.8)
      texture: [18,17,17,18,18]     
      vertical: true   
    hubs4:
      section_segments: 20
      offset:
        x: 50
        y: 55
        z: -160
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6]
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].mult(1)
      height: [18,15,13,12,10,0].mult(1)
      texture: [18,17,17,18,18]     
      vertical: true         
      angle: 70
    hubs5:
      section_segments: 20
      offset:
        x: 35
        y: -15
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [63,70-1,68,68,72-3,71-3].add(-40)
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0].mult(1.3)
      height: [12,10,8,7,5,0].mult(1.3)
      texture: [18,18,17,17,18]   
      angle: 90
    hubs6:
      section_segments: 20
      offset:
        x: 35
        y: -65
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [63,70-1,68,68,72-3,71-3].add(-40)
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0].mult(1.3)
      height: [12,10,8,7,5,0].mult(1.3)
      texture: [18,18,17,17,18]   
      angle: 90
    hubs7:
      section_segments: 20
      offset:
        x: 35
        y: -115
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [63,70-1,68,68,72-3,71-3].add(-40)
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0].mult(1.3)
      height: [12,10,8,7,5,0].mult(1.3)
      texture: [18,18,17,17,18]   
      angle: 90     
    hubs8:
      section_segments: 20
      offset:
        x: 35
        y: -165
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [63,70-1,68,68,72-3,71-3].add(-40)
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0].mult(1.3)
      height: [12,10,8,7,5,0].mult(1.3)
      texture: [18,18,17,17,18]   
      angle: 90    
    hubs9:
      section_segments: 20
      offset:
        x: 35
        y: -215
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [63,70-1,68,68,72-3,71-3].add(-40)
        z: [0,0,0,0,0,0,0]
      width: [12,10,8,7,5,0].mult(1.3)
      height: [12,10,8,7,5,0].mult(1.3)
      texture: [18,18,17,17,18]   
      angle: 90   
    propeller1:
      section_segments: 10
      offset:
        x: 20
        y: 350
        z: 15
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,30,30,30,20]
        z: [0,0,0,0,0,0]
      width: [0,15,15,13,13,0]
      height: [0,15,15,13,13,0]
      propeller: true
      texture: [3,3,16.9]
    propeller2:
      section_segments: 10
      offset:
        x: 20
        y: 350
        z: -15
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,30,30,30,20]
        z: [0,0,0,0,0,0]
      width: [0,15,15,13,13,0]
      height: [0,10,15,13,13,0]
      propeller: true
      texture: [3,3,16.9]
    propeller_joint1:
      section_segments: 4
      offset:
        x: 10
        y: 261
        z: -5
      position:
        x: [0,0,-30,-50,-50]
        y: [0,0,60,70,70]
        z: [0,0,0,-20,-20]
      width: [0,10,10,13,0]
      height: [0,10,10,10,0]
      angle: 90
      texture: [17,18,17,17]
    propeller_joint2:
      section_segments: 4
      offset:
        x: 30
        y: 305
        z: -5
      position:
        x: [0,0,-15,-30,-30]
        y: [0,0,30,40,40]
        z: [0,0,0,-20,-20]
      width: [0,10,10,13,0]
      height: [0,10,10,10,0]
      angle: 90
      texture: [17,18,17,17]
    propeller_joint3:
      section_segments: 4
      offset:
        x: 10
        y: 280
        z: -56
      position:
        x: [0,0,0,-30,-50,-50]
        y: [0,0,20,60,70,70]
        z: [15,15,0,0,20,20]
      width: [0,10,10,10,13,0]
      height: [0,10,10,10,10,0]
      angle: 90
      texture: [4,4,18]
    propeller_joint4:
      section_segments: 4
      offset:
        x: 10
        y: 310
        z: -56
      position:
        x: [0,0,0,-20,-40,-40]
        y: [0,0,20,50,50,50]
        z: [15,15,0,0,20,20]
      width: [0,10,10,10,13,0]
      height: [0,10,10,10,10,0]
      angle: 90
      texture: [4,4,18]      
    propeller_side:
      section_segments: 16
      offset:
        x: 80
        y: 290
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,14,4,0,-6,0,60,66,48,48,48,78,78,72]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,20,20,22.5,25,25,20,20,19,14,10,9,0]
      height: [0,5,20,20,22.5,25,25,20,20,19,14,10,9,0]
      propeller: true
      texture: [3,12,4,3,4,18,4,18,17,17,3,17]
    propeller_side2:
      section_segments: 16
      offset:
        x: 80
        y: 380
        z: -40
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [25]
      height: [25]
      propeller: true      
    top:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -220
        z: 52.9
      position:
        x: [0,0,0,0]
        y: [-20,-20,240,180]
        z: [0,0,0,0]
      width: [0,35,35,0]
      height: [0,10,10,0]
      texture: [4]
    bottom:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -235
        z: -52.9
      position:
        x: [0,0,0,0]
        y: [0,0,240,180]
        z: [0,0,0,0]
      width: [0,35,35,0]
      height: [0,10,10,0]
      texture: [4]
    side:
      section_segments: [45,135,225,315]
      offset:
        x: 52.9
        y: -235
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,240,180]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,35,35,0]
      texture: [4]
    propeller_support1:
      section_segments: [45,135,225,315]
      offset:
        x: 15
        y: 10
        z: -300
      position:
        x: [0,0,0,0]
        y: [0,0,40,40]
        z: [0,0,0,0]
      width: [0,25,10,0]
      height: [0,100,80,0]
      angle: 45
      vertical: true
      texture: [17,4,17]
    propeller_support2:
      section_segments: [45,135,225,315]
      offset:
        x: 15
        y: -10
        z: -300
      position:
        x: [0,0,0,0]
        y: [0,0,40,40]
        z: [0,0,0,0]
      width: [0,25,10,0]
      height: [0,100,80,0]
      angle: 135
      vertical: true
      texture: [17,4,17]
    gun_holder1:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 40
        z: 10
      position:
        x: [0,0,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,20,20,0]
      height: [0,80,90,0]
      texture: [1]
    gun_holder2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 40
        z: 0
      position:
        x: [0,0,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,100,90,0]
      height: [0,20,20,0]
      angle: 180
      texture: [1]
    gun_holder3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 40
        z: -10
      position:
        x: [0,0,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,20,20,0]
      height: [0,80,90,0]
      texture: [1]
    bars_top1:
      section_segments: 6
      offset:
        x: 31
        y: -110
        z: 41
      position:
        x: [0,0,0,0]
        y: [-120,-120,120,120]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      texture: [13]
    bars_top2:
      section_segments: 6
      offset:
        x: 40
        y: -110
        z: 32
      position:
        x: [0,0,0,0]
        y: [-120,-120,120,120]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      texture: [13] 
    bars_bottom1:
      section_segments: 6
      offset:
        x: 31
        y: -110
        z: -41
      position:
        x: [0,0,0,0]
        y: [-120,-120,120,120]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      texture: [13]
    bars_bottom2:
      section_segments: 6
      offset:
        x: 40
        y: -110
        z: -32
      position:
        x: [0,0,0,0]
        y: [-120,-120,120,120]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      texture: [13]    
  wings: main:
    length: [40,2,70,2,40]
    width: [40,88,90,90,88,40]
    angle: [50,90,90,130,130]
    position: [0,0,0,0,0,0]
    doubleside: true
    offset:
      x: 120
      y: 170
      z: -65
    bump:
      position: 0
      size: 15
    texture: [4,17,18,17,4]
