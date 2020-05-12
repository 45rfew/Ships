  
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
model =
  name: 'Icarus'
  level: 4
  model: 3
  size: 1.4
  scale: 2
  specs:
    shield:
      capacity: [230,260]
      reload: [7,10]
    generator:
      capacity: [160,220]
      reload: [65,80]
    ship:
      mass: 320
      speed: [105,125]
      rotation: [110,130]
      acceleration: [70,90]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-61.5,-61,-64.8,-65,-59,-55,-20,-20,-5,40,40,40]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,2.7,3,8,9,11,11,11,11,11,0]
      height: [0,1,1.7,2,6,7,9,9,8,8,8,0]
      texture: [17,17,17,63,63,10,10,1,11,2,18]
    main2:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-61.5,-60,-63,-59,-55,-20,-20,-5,39.5,39.5,39.5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,3,8,9,11,11,11,11,11,0].div(1.5)
      height: [0,2,2,5.5,7,9,9,8,8,8,0].mult(1.2)
      texture: [17,17,63,63,3,4,4,18]      
      propeller: true
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -15
        z: 15.8
      position:
        x: [0,0,0,0,0,0]
        y: [-25,-10,4,7.5,15]
        z: [0.5,-2.7,-2.5,-1.5,-2]
      width: [3,6,6,5,4]
      height: [3,10,10,8,1]
      texture: [9,9,4]
    motor:
      section_segments: 8
      offset:
        x: 6
        y: -20
        z: 10
      position:
        x: [0,0,0,0,0]
        y: [5,10,15,60,52]
        z: [0,0,0,-2.5,-2.5]
      width: [0,10,10,10,0]
      height: [0,5,5,8,0]
      texture: [63,63,18,4]
      laser:
        damage: [20,33]
        rate: 2
        type: 1
        speed: [160,200]
        number: 1
        recoil: 100
        error: 0      
    propulsors:
      section_segments: 8
      offset:
        x: 10
        y: -12
        z: 7.5
      position:
        x: [0,0,0,0]
        y: [15,55,56,52]
        z: [0,0,0,0]
      width: [4,4,3.2,0]
      height: [5,5,4.2,0]
      propeller: true
      texture: [12,17]
    propulsors2:
      section_segments: 8
      offset:
        x: 0
        y: -10
        z: 10
      position:
        x: [0,0,0,0]
        y: [15,55,56,50]
        z: [0,0,0,0]
      width: [6,6,5.2,0]
      height: [7,7,6.2,0]
      propeller: false
      texture: [12,17]
    wing_holders:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0
        z: -10
      position:
        x: [0,0,0,0,0,0]
        y: [15,15,20,25,25]
        z: [0,0,-5,-10,-10,0]
      width: [0,10,10,10,0]
      height: [0,12.5,12.5,12.5,0]
      vertical: true
      texture: [1,17.955,4]
    lights:
      section_segments: 8
      offset:
        x: 0
        y: -5
        z: 14
      position:
        x: [0,0,0,0]
        y: [10,10,50,50]
        z: [0,1.9,-.4,0]
      width: [0,3.7,2.5,0]
      height: [0,5,5,0]
      texture: [17]
      angle: 180
    wings:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 7
        y: -35
        z: 13
      position:
        x: [0,5,0,0]
        y: [0,0,6,6]
        z: [0,0,-5,-5]
      width: [0,5,4,0]
      height: [0,1,1,0]
      texture: [2]
      angle: 90 
    cannons:
      section_segments: 10
      offset:
        x: 16
        y: 40.5
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-90,-91,-89,-88,-65-15,-65-15,-58-15,-70-2,-70-1.5,-72]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,2,2,2.3,2.3,1.5,0]
      height: [0,2,2.5,2,2,2.3,2.3,1.5,0]
      texture: [17,1,17,4,17,8,63,18]
      angle: 1.5
      laser:
        damage: [6,8]
        rate: 6
        type: 2
        speed: [150,180]
        recoil: 20
        number: 1
        error: 1
    wing_cross:  
      section_segments: 10
      offset:
        x: 0
        y: 165-144
        z: 26.6
      position:
        x: [0,0,0,0]
        y: [-15,-15,20,20].div(2.5)
        z: [3.5,3.5,-0.3,0].div(2.2)
      width: [0,6,6,0].div(2.2)
      height: [0,1,1,0]
      texture: [5,17]      
      angle: 180
    wing_cross2:  
      section_segments: 10
      offset:
        x: 0
        y: 145-137
        z: 26.6
      position:
        x: [0,0,0,0]
        y: [-15,-15,1,1].div(2.5)
        z: [-3,-3,-0.1,0].div(2.2)
      width: [0,6,6,0].div(2.2)
      height: [0,1,1,0].div(2.2)
      texture: [5,17]      
      angle: 0  
    wing_cross3:  
      section_segments: 10
      offset:
        x: 0
        y: 150-139
        z: 28
      position:
        x: [0,0,0,0]
        y: [-20,-20,-5,-5].div(2.2)
        z: [0,0,-3,-3].div(2.2)
      width: [0,6,6,0].div(2.2)
      height: [0,1,1,0].div(2.2)
      texture: [5,17]      
      angle: 90        
    wing_cross4:  
      section_segments: 10
      offset:
        x: 0
        y: 150-139
        z: 28
      position:
        x: [0,0,0,0]
        y: [-20,-20,-5,-5].div(2.2)
        z: [0,0,-3,-3].div(2.2)
      width: [0,6,6,0].div(2.2)
      height: [0,1,1,0].div(2.2)
      texture: [5,17]      
      angle: -90 
    reactor:  
      section_segments: 30
      offset:
        x: 0
        y: 32
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-13,-10,-12,-12.5,-10,-10,-12].div(1.4).div(2.2)
        z: [0,0,0,0,0,0,0,0]
      width: [13,13,10,9,6,4.2,4,0].div(2.4)
      height: [13,13,10,9,6,4.2,4,0].div(2.4)      
      texture: [1,3,18,17,18,16,17]
      vertical: true        
  wings:
    main:  
      offset:
        x: 0
        y: 5
        z: 10
      length: [40,10,0,5,0,3,15,30].div(1.2)
      width: [60,35,29,14,14,35,32,5]
      angle: [-10,20,20,0,0,0,0]
      position: [0,15,18,22,24,18+1,20+1,41].div(1.2)
      doubleside: true
      bump:
        position: 30
        size: 10
      texture: [18,63,17,4,17,4]
    main2:  
      offset:
        x: 0
        y: 4
        z: 10
      length: [40,10,0,5,0,3,15-2,30].div(1.2)
      width: [60,35,29,14,14,35,32,5]
      angle: [-10,20,20,0,0,0,0]
      position: [0,15,18,22,24,18+1,20+1,41].div(1.2)
      doubleside: true
      bump:
        position: 30
        size: 10
      texture: [8.06,63,17,18,17,17,63]   
    main_lights:  
      offset:
        x: 0
        y: 3
        z: 10
      length: [40,10,0,5,0,3,15,30].div(1.2)
      width: [60,35,29,14,14,35,32,5]
      angle: [-10,20,20,0,0,0,0]
      position: [0,15,18,22,24,18+1,20+1,41].div(1.2)
      doubleside: true
      bump:
        position: 30
        size: 0
      texture: [17]      
    detail4:
      doubleside: true
      offset:
        x: 23
        y: 23
        z: 5
      length: [0,10,7,7,10,0].div(2)
      width: [0,12,30,60,30,12,0].div(1.5)
      angle: [0,0,0,0,-3,-3].div(2)
      position: [-5,-5,-2,-15,0,9,9].div(2)
      texture: [63,63,17,63,4]
      bump:
        position: 35
        size: 15
    detail41:
      doubleside: true
      offset:
        x: 11
        y: 20
        z: 6.8
      length: [0,10,7,7,10,0].div(1.7)
      width: [0,12,30,60,30,12,0].div(1.25)
      angle: [0,0,0,0,-3,-3].div(2)
      position: [-5,-5,-2,-15,0,9,9].div(2)
      texture: [63,63,63,4,4]
      bump:
        position: 35
        size: 15        
    top:
      doubleside: true
      offset:
        x: 0
        y: 25
        z: 25
      length: [12.5,1,25,0,3,0,5]
      width: [35,35,30,25,10,10,27,20]
      angle: [7.5,-25,-25,-25,-25,-25,10]
      position: [-7.5,-7.5,-6.5,0,2,3,0,5]
      texture: [4,17,4,17,4,4]
      bump:
        position: 35
        size: 10
    top2:
      doubleside: true
      offset:
        x: 0
        y: 24.5
        z: 25
      length: [12.5,1,25,0,3,0,5-.7]
      width: [35,35,30,25,10,10,27,20]
      angle: [7.5,-25,-25,-25,-25,-25,10]
      position: [-7.5,-7.5,-6.5,0,2,3,0,5]
      texture: [4,17,18,17,13,17]
      bump:
        position: 35
        size: 10        
t = -5        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
