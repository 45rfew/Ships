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
a = [45,135,225,315]
b = [40,45,50,130,135,140,220,225,230,310,315,320]
model =
  name: 'Dugares'
  level: 6
  model: 8
  size: 1.8
  specs:
    shield:
      capacity: [400,500]
      reload: [10,12]
    generator:
      capacity: [140,200]
      reload: [50,65]
    ship:
      mass: 450
      speed: [75,85]
      rotation: [32,45]
      acceleration: [60,85]
  bodies:
    main:
      section_segments: [-180,-90,-50,-45,-40,40,45,50,90,180]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-156,-155,-150,-135,-120,-110,60,60-.5]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,3,8,11,13,15,20,0].div(1.4)
      height: [0,2,3,8,12,14,24,0]
      propeller: 0
      texture: [2,4,3,3,3,3,4]
      laser:
        damage: [100,150]
        rate: 1
        type: 1
        speed: [80,100]
        number: 1
        recoil: 300
        error: 0          
    main1:
      section_segments: a
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-156,-155,-150,-135,-120,-110,60,60-.5]
        z: [2.5,1.6,0,0,0,0,0,0,0,0,0]
      width: [0,3,8,11,13,15,20,0].div(1)
      height: [0,2,6,8,12,16,24,0].div(1.6)
      propeller: 0
      texture: [2,3,2,3,3,3,4]      
    main2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-150,-143,-110,-45,0,65,65]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,9,12,17,30-3,30-3,0].mult(1.4)
      height: [0,4,5,11,13,13,13,0].mult(1.2)
      propeller: 0
      texture: [4,3,4,3,4,3].add(-.1) 
    main25:
      section_segments: a
      offset:
        x: 0
        y: 0
        z: -8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-150,-150,-143,-110,-45,0,50,50]
        z: [3,3,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,9,12,17,30-3,30-3,0].mult(1.71)
      height: [0,1,5,10-2,13,13,13,0].mult(1.2)
      propeller: 0
      texture: [4,3,4,3,4,3]       
    main3:
      section_segments: [60,65,70,130-20,135-20,140-20,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: -9
      position:
        x: [16,16,13,-1,0,0,25,25].add(-30)
        y: [-110+7,-107+7,-45,0,0,30,60-1,60-1]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0.1,6,9,12,30-3,30-3,30,0]
      height: [2,5,6,7,7,7,7,0].mult(2)
      propeller: 0
      texture: [3,3,3,3,3,3,4]   
    main35:
      section_segments: [40,45,50,130,135,140,240,245,250,310-20,315-20,320-20]
      offset:
        x: 0
        y: 0
        z: -9
      position:
        x: [-16,-16,-13,1,0,0,-25,-25].add(30)
        y: [-110+7,-107+7,-45,0,0,30,60-1,60-1]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0.1,6,9,12,30-3,30-3,30,0]
      height: [2,5,6,7,7,7,7,0].mult(2)
      propeller: 0
      texture: [3.2,3.2,3.2,3.2,3.2,3.2,4]   
    guns:
      section_segments: 8
      offset:
        x: 47.5
        y: 5
        z: -9
      position:
        x: [0,0,0,0]
        y: [-18,-20,0,0]
        z: [0,0,0,0]
      width: [0,4,5,0]
      height: [0,4,5,0]
      texture: [3]  
    guns_front:
      section_segments: 8
      offset:
        x: 14
        y: -100
        z: -9
      position:
        x: [-3,-3,0,0]
        y: [-35,-32,0,0]
        z: [0,0,0,0]
      width: [0,4,5,0]
      height: [0,4,5,0]
      texture: [4]   
    cannons:
      section_segments: 6
      offset:
        x: 61
        y: -7+5
        z: -16.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-56,-56,-56,-55,-49,-47,-40,-36,-32,0,1,2]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,2.5,3.7,5.3,5.3,3.5,3.5,6,6,6,3,0]
      height: [0,2,2.5,2.5,3.7,5.3,5.3,3.5,3.5,6,6,6,3,0]
      texture: [3,3,4,4,4,4,4,3,4]   
      laser:
        damage: [20,25]
        rate: 1.5
        type: 2
        speed: [140,170]
        number: 1
        error: 2       
    cockpit:
      section_segments: [40,90,180,270,320]
      offset:
        x: 0
        y: -25
        z: 14
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,60,70,85,85-.5]
        z: [0,0.2,-2,-1,-1,3]
      width: [0,7,10,10,10,5]
      height: [0,2,12,14,14,0]
      texture: [7,8.98,4,4,4]
    cockpit_deco:
      section_segments: b
      offset:
        x: 2
        y: 55
        z: 18
      position:
        x: [0,0,0,0]
        y: [0,0,2.5,2.5]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,10,10,0]
      texture: [3]
      angle: 90
    back_plate:
      section_segments: a
      offset:
        x: 3
        y: 63-5
        z: 34.4+3
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,30,50,90,90]
        z: [-5,-5,0,0,-3,-3]
      width: [0,12,12,12,9,0]
      height: [0,1,1,1,1,0]
      texture: [3]
      angle: 0   
    back_plate2:
      section_segments: [0,45,90,90]
      offset:
        x: 0
        y: 63-5
        z: 30+3
      position:
        x: [0,0,0,0,3,3].add(-11.5)
        y: [-7,-7,30,50,100,100]
        z: [-6.2,-6.2,0,0,-3.5,-3.5]
      width: [5,5,5,5,5,0]
      height: [5,5,5,5,5,0]
      texture: [3]
    back_plate3:
      section_segments: [0,45,90,90].add(-90)
      offset:
        x: 0
        y: 63-5
        z: 30+3
      position:
        x: [0,0,0,0,-3,-3].add(11.5)
        y: [-7,-7,30,50,100,100]
        z: [-6.2,-6.2,0,0,-3.5,-3.5]
      width: [5,5,5,5,5,0]
      height: [5,5,5,5,5,0]
      texture: [3] 
    back_plate4:
      section_segments: a
      offset:
        x: 16
        y: 63-5
        z: 19.8+3
      position:
        x: [0,0,0,0,0,-3,-3]
        y: [-7,-7,5,30,50,90,100]
        z: [3.2,3.2,-1.6,0,0,-3.5,6.8]
      width: [0,0.5,0.5,0.5,0.5,1,1]
      height: [0,1,11,15,15,15,0.1]
      texture: [3]  
    back_deco:
      section_segments: 4
      offset:
        x: 0
        y: 62+6
        z: 26
      position:
        x: [0,0,0,0]
        y: [-16,-16,16,16]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,2,2,0]
      texture: [8]    
      angle: 90
    turbine:
      section_segments: [-140,-120,-100,-50,-45,-40,40,45,50,100,120,140,180]
      offset:
        x: 0
        y: 64
        z: 10-2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].add(30)
        y: [20,15,0,5,15,45,52,60,60,60,35,35,35,40,35,35].mult(1.2)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,12,15,15,15,15,13,11.5,11,5,6,5,4,1,0].mult(1.2)
      height: [0,12,12,15,15,15,15,13,11.5,11,5,6,5,4,1,0].mult(1.2)
      texture: [4,3,3,3,4,3,3,17]    
      propeller: true
    turbine2:
      section_segments: [-140,-120,-100,-50,-45,-40,40,45,50,100,120,140,180]
      offset:
        x: 0
        y: 64
        z: 10-2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].add(-30)
        y: [20,15,0,5,15,45,52,60,60,60,35,35,35,40,35,35].mult(1.2)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,12,12,15,15,15,15,13,11.5,11,5,6,5,4,1,0].mult(1.2)
      height: [0,12,12,15,15,15,15,13,11.5,11,5,6,5,4,1,0].mult(1.2)
      texture: [4,3,3,3,4,3,3,17]    
      propeller: true      
    engine:
      section_segments: 12
      offset:
        x: 30
        y: 62
        z: 10-2
      position:
        x: [0,0,0,0,0,0,0]
        y: [-1.5,-1.5,-1,-1,0,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,5.5,6,8,10,10,0]
      height: [0,5.5,6,8,10,10,0]
      texture: [2,4,3,3,4,3,37]  
    turbinedeco:
      section_segments: [45-2,45,45+2,90,270,310,315-2,315,315+2]
      offset:
        x: 0
        y: 104
        z: 21
      position:
        x: [0,0,0,0]
        y: [0,0,22,22]
        z: [0,0,0,0]
      width: [0,30-3,30-3,0]
      height: [0,15,15,0]
      texture: [3]
      angle: 0
    turbinedeco2:
      section_segments: b
      offset:
        x: 45
        y: 90-2
        z: 14
      position:
        x: [0,0,0,0]
        y: [0,0,11,11]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,4,4,0]
      texture: [4]      
    grill:
      section_segments: b
      offset:
        x: 18
        y: 80+2
        z: 27
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,0,0,19,19]
        z: [0,0,0,0,0,0]
      width: [0,3,5,6,6,0]
      height: [0,2.5,5,6,6,0]
      texture: [3,4,3]
      angle: -15 
    stab:
      section_segments: a
      offset:
        x: 10
        y: 140
        z: 33.5
      position:
        x: [-2,-2,-2,-2.5,-2.5,-2.5,-2.5,-2.5]
        y: [-32,-30,2,6,16,20,21.5,21.5]
        z: [1,2,0,1,2,1.5,.5,0]
      width: [1.2,2,2,2,2,2,2,0]
      height: [5,5,5,6,4,4,2.5,0]
      texture: [4]  
    winglet:
      section_segments: a
      offset:
        x: 20
        y: 25
        z: -135
      position:
        x: [0,0,0,0]
        y: [0,0,40,40]
        z: [0,1,-21,-21]
      width: [0,2,2,0]
      height: [0,42,6,0]
      texture: [3]   
      vertical: true
      angle: 65
    winglet_lights:
      section_segments: a
      offset:
        x: 20
        y: 25
        z: -132
      position:
        x: [0,0,0,0]
        y: [0,3,42,42]
        z: [0,-2,-23,-21]
      width: [0,1.5,1.5,0]
      height: [0,42,6,0]
      texture: [17,17,4]   
      vertical: true
      angle: 65      
    winglet1:
      section_segments: a
      offset:
        x: 20
        y: 25
        z: -135
      position:
        x: [0,0,0,0]
        y: [0,5,35,40]
        z: [0,1,-17,-21]
      width: [0,2.1,2.1,0]
      height: [0,26,.1,0]
      texture: [4]   
      vertical: true
      angle: 65      
    winglet2:
      section_segments: a
      offset:
        x: 20
        y: 25
        z: -170
      position:
        x: [0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,15,15,0]
      texture: [3]   
      vertical: true
      angle: 65    
    winglet3:
      section_segments: a
      offset:
        x: 45.5
        y: 36.7
        z: -166
      position:
        x: [0,0,0,0]
        y: [0,0,12,12]
        z: [0,0,6,0]
      width: [0,2,2,0]
      height: [0,12,12,0]
      texture: [3]   
      vertical: true
      angle: 65   
    winglet3_lights:
      section_segments: a
      offset:
        x: 45.5
        y: 36.7
        z: -166
      position:
        x: [0,0,0,0]
        y: [0,0,13.9,13.9]
        z: [0,0,6,6]
      width: [0,1.5,1.5,0]
      height: [0,12,10,0]
      texture: [17,17,4]   
      vertical: true
      angle: 65         
    winglet4:
      section_segments: a
      offset:
        x: 20
        y: 24
        z: -170+1
      position:
        x: [0,0,0,0]
        y: [0,0,30,30]
        z: [0,0,5,0]
      width: [0,.5,.5,0]
      height: [0,12,8,0]
      texture: [4]   
      vertical: true
      angle: 65
    wing:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -100
      position:
        x: [0,0,0,0]
        y: [0,0,60,60]
        z: [0,1-5,-55,-55]
      width: [0,3,3,0]
      height: [0,34,4,0]
      texture: [4]   
      vertical: true
      angle: 130 
    wing1:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -100
      position:
        x: [0,0,0,0]
        y: [0,15,60,60]
        z: [0,10,-50,-55]
      width: [0,3,3,0]
      height: [0,20,4,0]
      texture: [4]   
      vertical: true
      angle: 130       
    wing2:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -85
      position:
        x: [0,0,0,0]
        y: [25,25,59+8,59+8]
        z: [3,3,-58,-58]
      width: [0,4,4,0]
      height: [0,30,25,0]
      texture: [3]   
      vertical: true
      angle: 130  
    wing2_lights:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -85
      position:
        x: [0,0,0,0]
        y: [25,25,59+10,59+10]
        z: [3,8,-59,-60]
      width: [0,3.5,3.5,0]
      height: [0,30,27,0]
      texture: [3,17]   
      vertical: true
      angle: 130        
    wing3:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -60
      position:
        x: [0,0,0,0]
        y: [25,25,55,55]
        z: [6,6,-55,-55]
      width: [0,4,4,0]
      height: [0,30,10,0]
      texture: [3]   
      vertical: true
      angle: 130  
    wing3_lights:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -60
      position:
        x: [0,0,0,0]
        y: [25,25,57.5,57.5]
        z: [10,10,-55,-55]
      width: [0,3.5,3.5,0]
      height: [0,30,10,0]
      texture: [3,17]   
      vertical: true
      angle: 130        
    wing4:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -11
      position:
        x: [0,0,0,0]
        y: [25,25,45,45]
        z: [6,6,-73,-73]
      width: [0,4,4,0]
      height: [0,40,0,0]
      texture: [3]   
      vertical: true
      angle: 130   
    wing4_lights:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -11
      position:
        x: [0,0,0,0]
        y: [25,25,47.5,45]
        z: [6,6,-73,-73]
      width: [0,3.5,3.5,0]
      height: [0,50,0,0]
      texture: [3,17]   
      vertical: true
      angle: 130       
    wing5:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -95
      position:
        x: [0,0,0,0]
        y: [0,0,30,30]
        z: [0,1,20,20]
      width: [0,3,3,0]
      height: [0,20,33,0]
      texture: [4]   
      vertical: true
      angle: 130
    wing5_lights:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -95
      position:
        x: [0,0,0,0]
        y: [0,0,30,30]
        z: [0,1,20,20]
      width: [0,2.5,2.5,0]
      height: [0,23,36,0]
      texture: [4,17,4]   
      vertical: true
      angle: 130      
    wing6:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -7
      position:
        x: [0,0,0,0]
        y: [25,25,32,32]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,50,42,0]
      texture: [3]   
      vertical: true
      angle: 130 
    wing7_lights:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -7
      position:
        x: [0,0,0,0]
        y: [25,25,34,32]
        z: [0,0,0,0]
      width: [0,3.5,3.5,0]
      height: [0,50,40-1,0]
      texture: [3,17]   
      vertical: true
      angle: 130       
    wing7:
      section_segments: a
      offset:
        x: 43
        y: -3
        z: -7
      position:
        x: [0,0,0,0]
        y: [18,18,25,25]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,33,50,0]
      texture: [3]   
      vertical: true
      angle: 130  
    wing_block:
      section_segments: b
      offset:
        x: 60
        y: -18
        z: -15.5
      position:
        x: [0,0,-12,-12]
        y: [0,0,15,15]
        z: [0,0,0,0]
      width: [0,8,8,0]
      height: [0,17,17,0]
      texture: [8]  
      vertical: true
    main_deco:
      section_segments: a
      offset:
        x: 22
        y: 6.5
        z: -57
      position:
        x: [0,0,4,4]
        y: [0,0,5,5]
        z: [0,4,0,0]
      width: [0,5,5,0]
      height: [0,23,17,0].mult(1.5)
      texture: [4]  
      vertical: true      
    connecter:
      section_segments: a
      offset:
        x: 7
        y: 126.5
        z: 18
      position:
        x: [0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,25,25,0]
      texture: [4]  
      vertical: false
    connecter2:
      section_segments: a
      offset:
        x: 0
        y: 126.5
        z: 4
      position:
        x: [0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0]
      width: [0,25,25,0]
      height: [0,5,5,0]
      texture: [4]  
      vertical: false      
    connecter3:
      section_segments: a
      offset:
        x: 0
        y: 30
        z: 10
      position:
        x: [0,0,0,0]
        y: [0,0,100,100]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,15,15,0]
      texture: [4]  
      vertical: false  
    connecter4:
      section_segments: a
      offset:
        x: 7
        y: 106.5-10
        z: 18
      position:
        x: [0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,25,25,0]
      texture: [4]  
      vertical: false
    connecter5:
      section_segments: a
      offset:
        x: 0
        y: 126.5-30
        z: 18
      position:
        x: [0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0]
      width: [0,21,21,0]
      height: [0,25,25,0]
      texture: [4]  
      vertical: false         
  wings: 
    main:
      length: [20,15]
      width: [100-15,60,5]
      angle: [-10,-20]
      position: [40,20,30]
      doubleside: true
      offset:
        x: 0
        y: -88
        z: -4
      bump:
        position: 40
        size: 5
      texture: [3]
    main_lights:
      length: [20,15]
      width: [100-15,60,5]
      angle: [-10,-20]
      position: [40,20,30]
      doubleside: true
      offset:
        x: 0
        y: -90
        z: -4
      bump:
        position: 40
        size: 4
      texture: [17]      
    main2:
      length: [10,0,20]
      width: [16,14,45,7]
      angle: [-30,-30,-30]
      position: [-5,0,15,28]
      doubleside: true
      offset:
        x: 43
        y: 92
        z: 8
      bump:
        position: 0
        size: 5
      texture: [3,3]
    main2_lights:
      length: [10,0,20]
      width: [16,14,45,7]
      angle: [-30,-30,-30]
      position: [-2,1,15,28]
      doubleside: true
      offset:
        x: 43
        y: 90
        z: 8
      bump:
        position: 0
        size: 4
      texture: [17,3,17]      
for i in [0..3]
  model.bodies["ring"+i] = 
    section_segments: [0,45,135,180,225,315].add(30)
    offset:
      x: 0
      y: 5+i*6
      z: -12
    position:
      x: [0,0,0,0].add(55)
      y: [0,0,3,3]
      z: [0,0,0,0]
    width: [0,10,10,0]
    height: [0,13,13,0]
    texture: [3.9]  
    angle: 0
  model.bodies["ring2"+i] = 
    section_segments: [0,45,135,180,225,315].add(-30)
    offset:
      x: 0
      y: 5+i*6
      z: -12
    position:
      x: [0,0,0,0].add(-54)
      y: [0,0,3,3]
      z: [0,0,0,0]
    width: [0,10,10,0]
    height: [0,13,13,0]
    texture: [3.9]  
    angle: 0 
t = -15        
if (1)
  for y,v of model.bodies
    if (v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
  for y,v of model.tori
    v.offset.y = v.offset.y + t    
return model;    
