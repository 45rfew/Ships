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
multiplyArray = (arr,m) ->
  k = [];
  for i in [0..arr.length-1]
    k.push(arr[i]*m)
  return k;
a = 0.7
b = 35
c = 12
model =
  name: "Lancephorhynchus"
  level: 6
  model: 8
  size: 1.5
  next: [707,708]
  specs:
    shield:
      capacity: [500,550]
      reload: [20,24]
    generator:
      capacity: [440,550]
      reload: [150,250]
    ship:
      mass: 600
      speed: [90,100]
      rotation: [60,90]
      acceleration: [65,100]
  bodies:
    main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-100,-100,-90,80,80]
        z: [0,0,0,14,14]
      width: [0,30,30,30,0]
      height: [0,20,20,20,0]
      texture: [4,2,2]
      laser:
        damage: [200,250]
        rate: 0.8
        type: 1
        speed: [80,110]
        number: 2
        recoil: 600
        error: 0      
    main_deco:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-99.9,-99.9,-90,-60,-40,-10,81,83]
        z: [0,0,-0.6,0,-1,5,14,14]
      width: [0,31.2,31.2,32,32,32,32,0]
      height: [0,19.9,20.7,22.6,26.5,23,21,0]
      texture: [63]
    main_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 16.6
        y: -48
        z: 16.5
      position:
        x: [3.05,3.05,0,0]
        y: [-10,-10,15,15]
        z: [0,0,1.609,0]
      width: [0,0.5,5,0]
      height: [0,2.2,2.7,0]
      texture: [63]      
    main_deco3:
      section_segments: 4
      offset:
        x: 20.4
        y: 0
        z: 19
      position:
        x: [0,0,0,0,0,0,0]
        y: [-90,-90,-60,-40,-10,80,80]
        z: [-5.7,-5.7,-3.1,-1.2,2,8,0,0]
      width: [0,2,2,2,2,2,0]
      height: [0,2,2,2,2,2,0]
      texture: [63]
    main_support:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 16
        z: 24
      position:
        x: [9.5,9.5,9.5,4,4,4,9.5,9.5,9.5]
        y: [-25,-25,-22,-11,0,11,22,25,25]
        z: [-3,-3,-1,-0.5,-0.5,-0.5,-1,-3,-3]
      width: [0,17,17,9,9,9,16,16,0]
      height: [0,3,3,3,3,3,3,3,0]
      texture: [3]
      angle: 90
    main_support2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 24.24
        y: -6
        z: 19.6
      position:
        x: [0,0,0,0]
        y: [-25,-25,25,25]
        z: [0,1,-26,-26]
      width: [0,1,1,0]
      height: [0,11,16,0]
      texture: [3]
      vertical: true               
    main_support3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 30
        z: 25
      position:
        x: [0,0,0,0,0,0,0]
        y: [-25,-25,-22,22,25,25]
        z: [-2.2,-2.2,0,0,-2.2,-2.2]
      width: [0,3,3,3,3,0]
      height: [0,2,2,2,2,0]
      texture: [3]
      angle: 90
    main_support4:
      section_segments:[40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 23.47
        y: -1.46
        z: -8
      position:
        x: [0,0,0,0]
        y: [-20.55,-20.55,23,25]
        z: [0,0,-21.9,-22]
      width: [0,2,2,0]
      height: [0,3.3,2.95,0]
      texture: [3]
      vertical: true 
    cockpit:
      section_segments: [25,135,225,335]
      offset:
        x: 0
        y: 128*a+b
        z: 33*a+c
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: multiplyArray([-50,-50,-32,-32,-20,15,50,73,91,91,110,110],a)
        z: multiplyArray([-10,-10,-5,-5,-5,3,5,5.4,5,7.4,6.4,6.4],a)
      width: multiplyArray([0,20,25,25,35,36,30,23,19,17,14,0],a)
      height: multiplyArray([0,4,4,4,7,20,15,7,5,4,1,0],a)
      texture: [63,7,7,7,7,7,7,7,3.8]
    cockpit2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 128*a+b
        z: 33*a+c-3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: multiplyArray([-63.6,-63.6,-55,-25.6,27,50,73,95,110,110],a)
        z: multiplyArray([-5,-8,-5,-5,-4.9,-1.2,3.5,7,8.3,8.3],a)
      width: multiplyArray([0,35,35,35,36,30,24,18.5,15,0],1)
      height: multiplyArray([0,5,5,5,5,5,5,5,5,0],0.4)
      texture: [63]      
    cockpit_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 108*a+b
        z: 35*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-25,-25,-15,15,25,25],a)
        z: multiplyArray([-13,-13,0,0,-13,-13],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90
    cockpit_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 143*a+b
        z: 54*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-25,-25,-15,15,25,25],a)
        z: multiplyArray([-31.5,-31.5,0,0,-31.5,-31.5],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90
    cockpit_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 178*a+b
        z: 51*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-21,-21,-13,13,21,21],a)
        z: multiplyArray([-23,-23,0,0,-23,-23],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90
    cockpit_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 200*a+b
        z: 44.5*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-16.5,-16.5,-10,10,16.5,16.5],a)
        z: multiplyArray([-12,-12,0,0,-12,-12],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90     
    cockpit_deco5:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 218*a+b
        z: 42.7*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-12.5,-12.5,-8.2,8.23,12.5,12.5],a)
        z: multiplyArray([-7.5,-7.5,0,0,-7.5,-7.5],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90      
    cockpit_deco6:
      section_segments: [45,135,225,315]
      offset:
        x: 13.65*a
        y: 40.4*a+c
        z: -143*a-b
      position:
        x: multiplyArray([8,8,0.05,0.05],a)
        y: multiplyArray([-15,-15,15,15],a)
        z: multiplyArray([-20,-20,0,0],a)
      width: multiplyArray([0,2,2,0],a)
      height: multiplyArray([0,2,2,0],a)
      texture: [3]  
      vertical: true
    cockpit_deco7:
      section_segments: [45,135,225,315]
      offset:
        x: 14*a
        y: 146*a+b
        z: 35*a+c
      position:
        x: multiplyArray([-6,-6,-4.2,0,0.1,-2.1,-5,-7,-7],a)
        y: multiplyArray([-68,-68,-50,-39,-4.5,33,52.75,73,73],a)
        z: multiplyArray([-9.6,-9.6,-4.75,-1,19,16,9.45,7.4,0],a)
      width: multiplyArray([0,1.5,1.5,1.5,1.5,1.5,1.5,1.5,0],a)
      height: multiplyArray([0,2,2,2,2,2,2,2,0],a)
      texture: [3]  
    cockpit_deco8:
      section_segments: [45,135,225,315]
      offset:
        x: 23.5*a
        y: 146*a+b
        z: 30*a+c
      position:
        x: multiplyArray([-15,-7,-1.2,0.6,1,0,-2.9,-7,-12,-12.5,-12.5],a)
        y: multiplyArray([-68,-50,-40,-34,-4.5,8.5,33,52.75,70,73.3,73.3],a)
        z: multiplyArray([-4.5,-4.5,-3.2,-3.3,-3.3,-3.5,0.6,4,7.4,7,7],a)
      width: multiplyArray([1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,0],a)
      height: multiplyArray([2,2,2,2,2,2,2,2,2,2,0],a)
      texture: [3]  
    cockpit_deco9:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 109*a+b
        z: 25.6*a+c
      position:
        x: [0,0,0,0,0,0]
        y: multiplyArray([-20,-20,-11,11,20,20],a)
        z: multiplyArray([-10,-10,0,0,-10,-10],a)
      width: multiplyArray([0,2,2,2,2,0],a)
      height: multiplyArray([0,2,2,2,2,0],a)
      texture: [3]      
      angle: 90
    cockpit_deco10:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 80.8*a+b
        z: 25.15*a+c
      position:
        x: [0,0,0,0]
        y: [-2,-2,0,0]
        z: [0,0,0,0]
      width: [0,9.6,9,0]
      height: [0,2,2,0]
      texture: [3]      
    grills:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 98
      position:
        x: [0,0,0,0]
        y: [-13,-13,13,13]
        z: [0,0,0,0]
      width: [0,31,31,0]
      height: [0,3,3,0]
      texture: [4,13,4]
      vertical: true    
    sides:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 37
        y: -90
        z: -8
      position:
        x: [-14,-14,-10,0,0,0]
        y: [-200-40,-200-40,-195-40,0,130,130]
        z: [0,0,0,0,0,0]
      width: [0,1,7,20,20,0]
      height: [0,1.5,2,12,12,0]
      texture: [3]
      laser:
        damage: [20,25]
        rate: 3
        type: 2
        speed: [140,170]
        number: 1
        error: 2 
    sides_front:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 37
        y: -90
        z: -8
      position:
        x: [-14,-14,-10,-8,-8,-8,-8]
        y: [-240,-240,-235,-198,-196,-192,-192]
        z: [0,0,0,0,0,0,0]
      width: [0,1,7,9,9,9,0]
      height: [0,2,2.2,4,4,4,0]
      texture: [[15],[15],[15],17,2]        
    sides_deco:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 25
        y: -329
        z: -8
      position:
        x: [-9,-9,3,3]
        y: [-190-100,-190-100,0,0]
        z: [0,0,0,0]
      width: [0,18,2,0]
      height: [0,11,1,0]
      texture: [17]
      angle: 180
    sides_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: -265
        z: -8
      position:
        x: [-7,-7,-7,8,12,12]
        y: [-190,-195,-176,-20+40,18+40,18+40]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,2,0]
      height: [0,10,10,2,1,0]
      texture: [4,63,2,17,4]
      angle: 180
    sides_deco3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 31
        y: -90
        z: -8
      position:
        x: [-7,-7,0,0,0]
        y: [-196,-196,0,130,130]
        z: [0,0,0,0,0]
      width: [0,7,20,20,0].div(2)
      height: [0,4,12,12,0].mult(1.1)
      texture: [4]      
    sides2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 34.1
        y: 90
        z: 1
      position:
        x: [0,5,0,0,-18,-18]
        y: [-50,-50,-10,65,110,110]
        z: [0,0,24,24,32.5,32.5]
      width: [0,19,14,14,5,0]
      height: [0,2,2,2,2,0]
      texture: [63]
    sides2_winglets:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: 140
        z: 25
      position:
        x: [0,0,-2,0,0]
        y: [-10,-10,0,4,4]
        z: [0,0,0,-4,-4]
      width: [0,17,17,10,0]
      height: [0,2,2,2,0]
      texture: [63]      
      angle:90
    sides2_winglets_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: 140
        z: 24.4
      position:
        x: [-1,0,0,-1]
        y: [-7,-5,5,7]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [5]      
    sides2_winglets_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 47.5
        y: 134
        z: 26.3
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [-1,-1,-4.4,-4.4]
      width: [0,0.7,0.7,0]
      height: [0,1,1,0]
      texture: [5]     
      angle: 125
    sides2_winglets_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 48
        y: 146
        z: 21.3
      position:
        x: [0,0,0,0]
        y: [-2,-2,2,2]
        z: [1,1,4,4]
      width: [0,0.7,0.7,0]
      height: [0,1,1,0]
      texture: [5]     
      angle: -125      
    sides2_support:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: 88
        z: 26
      position:
        x: [0,0,1.5,0,0,0]
        y: [-8,-8,-5,-4,8,8]
        z: [0,0,0,0,0,0]
      width: [0,4,6,4,4,0]
      height: [0,2,2,2,2,0]
      texture: [2]
      angle:90
    sides2_support2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 35
        y: 100
        z: 26
      position:
        x: [0,0,1.5,0,0,0]
        y: [-8,-8,-5,-4,8,8]
        z: [0,0,0,0,0,0]
      width: [0,4,6,4,4,0]
      height: [0,2,2,2,2,0]
      texture: [2]
      angle:90      
    rear:
      section_segments: [45,135,225,315]
      offset:
        x: 37
        y: -90
        z: -8
      position:
        x: [-14,-14,-11.5,-10,0,0,1.5]
        y: [-30,-30,-27,-10,20,132,133]
        z: [0,0,0,0,0,0,0]
      width: [0,0.01,4,5,23,23,0]
      height: [0,16,16,16,16,16,0]
      texture: [2,2,2,2,2,3]
    rear_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 54
        y: 0
        z: -8
      position:
        x: [0,0,0,0]
        y: [-42,-42,70,70]
        z: [-2,0,0,0]
      width: [0,2,2,0]
      height: [0,3,3,0]
      texture: [5]
      angle: 180
    rear_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 53
        y: 0
        z: -8
      position:
        x: [0,0,0,0]
        y: [-42,-42,70,70]
        z: [-2,0,0,0]
      width: [0,2,2,0]
      height: [0,5,5,0]
      texture: [5,17,5]
      angle: 180
    rear_support:
      section_segments: [45,135,225,315]
      offset:
        x: 45
        y: -90
        z: -8
      position:
        x: [8.7,0,0,0]
        y: [24,40,132,133]
        z: [0,0,0,0]
      width: [0.1,12,12,0]
      height: [16.5,16.5,16.5,0]
      texture: [63,63,2]
    rear_support2:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: -90
        z: -8
      position:
        x: [8.5,0,0,0]
        y: [37,40,132,133]
        z: [0,0,0,0]
      width: [0.1,13,13,0]
      height: [16.5,16.5,16.5,0]
      texture: [63,63,2]
    rear_support3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -18
        y: -35
        z: -8
      position:
        x: [-35,-35,-10,-10]
        y: [37,40,72,72]
        z: [0,0,0,0]
      width: [0.1,16,16,0]
      height: [16.5,16.6,16.6,0]
      texture: [3]
      angle: 90     
    rear_support4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -18
        y: 10
        z: -8
      position:
        x: [-13,-13,11,11]
        y: [37,40,72,72]
        z: [0,0,0,0]
      width: [0.1,3,4,0]
      height: [16.5,16.6,16.6,0]
      texture: [3]
      angle: 90    
    engine:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 147
        z: 25
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-70,-70,8,53,55,57,73,75,81,81,70]
        z: [-7,-7,-5.7,2,4,4,4,4,4,4,4]
      width: [0,30,30,15.4,20,20,20,20,20,19,0]
      height: [0,14,14,15,15,15,15,15,15,14,0]
      texture: [3,3,8,3,17,12,17,4,17]
      propeller: true
    side_engines:
      section_segments: [45,135,225,315]
      offset:
        x: 35
        y: 53
        z: -10
      position:
        x: [0,-2,-3,-3,-5,0,0]
        y: [-11,-11,27.8,90,105,105]
        z: [1,1,20,23,30,33,0]
      width: [0,18,18,18,18,0]
      height: [0,15,20,18,4,0]
      texture: [3]
    side_engines2:
      section_segments: [45,135,225,315]
      offset:
        x: 32
        y: 53
        z: -10
      position:
        x: [0,1,0,0,0,0,0,0]
        y: [-11,-11,17.8,45,90,90,80]
        z: [0,3,6,7,0,0,0,0]
      width: [0,18,18,18,18,16.5,0]
      height: [0,14,15,15,15,13.5,0]
      texture: [3,3,8,3,17] 
    side_engines_propeller:
      section_segments: 4
      offset:
        x: 34
        y: 180
        z: -10
      position:
        x: [0]
        y: [0]
      width: [15]
      height: [10]
      propeller: true         
    pipe:
      section_segments: 10
      offset:
        x: 19
        y: 200
        z: 20
      position:
        x: [0,0,0,0]
        y: [-60,-60,15,15]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4]            
    pipe2:
      section_segments: 10
      offset:
        x: 15.6
        y: 215
        z: 20
      position:
        x: [0,0,0,0]
        y: [-5,-5,5,5]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4]
      angle: 90
    pipe3:
      section_segments: 10
      offset:
        x: 15.6
        y: 200
        z: 20
      position:
        x: [0,0,0,0]
        y: [-5,-5,5,5]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,1,1,0]
      texture: [3]
      angle: 90
    pipe4:
      section_segments: 10
      offset:
        x: 35
        y: 170
        z: 20
      position:
        x: [0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,2.5,2.5,0]
      texture: [4]              
    pipe5:
      section_segments: 10
      offset:
        x: 35
        y: 170
        z: 15.5
      position:
        x: [0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0]
      width: [0,2.5,2.5,0]
      height: [0,2,2,0]
      texture: [3]  
    pipe6:
      section_segments: 10
      offset:
        x: 28
        y: 190
        z: 20
      position:
        x: [0,0,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,2.5,2.5,0]
      texture: [4]    
      angle: 90
    pipe7:
      section_segments: 10
      offset:
        x: 18
        y: 190
        z: 15.5
      position:
        x: [0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0]
      width: [0,2.5,2.5,0]
      height: [0,2,2,0]
      texture: [3]      
      angle: 90
    pipe8:
      section_segments: 10
      offset:
        x: 47
        y: 106
        z: 11
      position:
        x: [0,0,-1,-4,-4]
        y: [-13,-13,8,52,52]
        z: [-2,-2,8,8,8]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      texture: [3]    
    pipe9:
      section_segments: 10
      offset:
        x: 47
        y: 106
        z: 7
      position:
        x: [0,0,-1,-4,-4]
        y: [-13,-13,8,49,50]
        z: [-1,-1,8,8,9.5]
      width: [0,1.5,1.5,1.5,0]
      height: [0,1.5,1.5,1.5,0]
      texture: [2]  
    pipe10:
      section_segments: 10
      offset:
        x: 47
        y: 69
        z: 0
      position:
        x: [0,0,-1,-1,0]
        y: [-30,-30,8,15,15]
        z: [-14,-14,8,8,8]
      width: [0,2,2,2,0]
      height: [0,2,2,2,0]
      texture: [3]
    pipe11:
      section_segments: 10
      offset:
        x: 47
        y: 69
        z: -4
      position:
        x: [0,0,-1,-1,0]
        y: [-30,-30,8,15,15]
        z: [-14,-14,8,8,8]
      width: [0,1.5,1.5,1.5,0]
      height: [0,1.5,1.5,1.5,0]
      texture: [2]  
    pipe12:
      section_segments: 10
      offset:
        x: 50
        y: 85
        z: -8
      position:
        x: [-10,-10,0,0,-10,-10]
        y: [-13,-13,-8,8,13,13]
        z: [0,0,0,0,0,0]
      width: [0,3,2,2,3,0]
      height: [0,2,2,2,2,0]
      texture: [2]        
    pipe_joint:
      section_segments: 30
      offset:
        x: 45
        y: 69
        z: -0.5
      position:
        x: [0,0,0,0,0]
        y: [-3,-3,0,3,3]
        z: [0,0,2,4,4]
      width: [0,4,4,4,0]
      height: [0,5,5,5,0]
      texture: [63] 
    pipe_joint2:
      section_segments: 30
      offset:
        x: 45.5
        y: 50
        z: -11
      position:
        x: [0,0,0,0,0]
        y: [-3,-3,0,3,3]
        z: [0,0,2,4,4]
      width: [0,4,4,4,0]
      height: [0,5,5,5,0]
      texture: [63]       
    pipe_joint3:
      section_segments: 30
      offset:
        x: 44.5
        y: 120
        z: 17
      position:
        x: [0,0,0,0,0]
        y: [-3,-3,0,3,3]
        z: [0,0,0,0,0]
      width: [0,4,4,4,0]
      height: [0,5,5,5,0]
      texture: [63]         
    pipe_joint4:
      section_segments: 30
      offset:
        x: 43
        y: 148
        z: 17
      position:
        x: [0,0,0,0,0]
        y: [-3,-3,0,3,3]
        z: [0,0,0,0,0]
      width: [0,4,4,4,0]
      height: [0,5,5,5,0]
      texture: [63]       
    wing_holders:
      section_segments: [45,135,225,315]
      offset:
        x: 47
        y: 120
        z: -10
      position:
        x: [-2.5,0,0,-2.5]
        y: [-27,-22,17,22]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,2,2,0]
      texture: [4]     
    hubs:
      section_segments: 30
      offset:
        x: 51
        y: 8
        z: -90
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7,-7,-5,-4,-3,-1.5,-1.5]
        z: [0,0,0,0,0,0,0]
      width: [0,13,13,7.5,7.5,6,0]
      height: [0,13,13,7.5,7.5,6,0]
      texture: [2,2,8,63,8,3,7]      
      vertical: true
      angle: 90
    hubs_support2:
      section_segments: [5,175,225,315]
      offset:
        x: 48.2
        y: 100
        z: 4
      position:
        x: [0,0,0,0,-4,-4,-4]
        y: [-16,-12,-12,4,43,46]
        z: [3,0,0,0,0,2]
      width: [2,2,2,2,2,1]
      height: [0.1,2.5,2.5,2.5,2.5,1]
      texture: [63]      
  wings:
    main:
      offset:
        x: 47
        y: 121
        z: -10 
      length: [30,15]
      width: [40,18,10]
      angle: [0,-10]
      position: [-6,1,4]
      doubleside: true
      texture: [3]   
      bump:
        position: -30
        size: 3
for i in [1...5]
  model.bodies["front_spot"+i] = 
    section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
    offset:
      x: 24+i/3
      y: i*10-334
      z: -8
    position:
      x: [0,0,0,0]
      y: [0,0,3,3]
      z: [0,0,0,0]
    width: [0,2,2,0].add(i/1.5)
    height: [0,3,3,0].add(i/3)
    texture: [63]   
t = 40        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t  
return model;
