model =
  name: "Dessaix"
  level: 5
  model: 4
  size: 6.6
  zoom: 0.9
  specs:
    shield:
      capacity: [250,360]
      reload: [7,10]
    generator:
      capacity: [300,380]
      reload: [100,120]
    ship:
      mass: 400
      speed: [110,135]
      rotation: [90,120]
      acceleration: [120,140]
  bodies:
    wings:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: 0
        z: 0
      position:
        x: [12,19,12,3.8,3,0,0]
        y: [-3,-3,0,9,10,15,15]
        z: [0,0,0,0,0,0,0]
      width: [0,30,20,9,8,4,0]
      height: [0,1.5,1.5,1.5,1.5,1.5,0]
      angle: 90
      texture: [17,3,6,1,2,3]
    wings2:
      section_segments: [45,135,225,315]
      offset:
        x: 0.0000001
        y: 4
        z: 7.5
      position:
        x: [4.5,4.5,4.5,0,0,-0.8,0]
        y: [0,0,1.5,8.5,9,12,12]
        z: [0,0,0,2,2,1,1]
      width: [0,10,10,3.5,3.5,2.5,0]
      height: [0,0.5,0.5,0.5,0.5,0.5,0]
      angle: 90
      texture: [17,3,6,3,2,3]     
    front:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -30.25
        z: 0.01
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-10,-6-3,-5.4-3,-4.6-3,-4-3,1-4,1.3-4,1.6-4,1.9-4,2.2-4,2.5-4,2.8-4,3.1-4,32.45,32.45]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,0]
      height: [0,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,0]
      texture: [2,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6]    
    front2:
      section_segments: [45,135,225,315]
      offset:
        x: 1.001
        y: -38.5
        z: -0.0001
      position:
        x: [0,4,0,0]
        y: [-1,-1,1,1]
        z: [0,0,0,0]
      width: [0,3.2,3,0]
      height: [0,1.5,1.5,0]
      texture: [2,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6]  
      angle: 90
    side_engines:
      section_segments: 12
      offset:
        x: 7.5
        y: -14
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-8.5,-10,-9.7,-6,-3,-2.2,7,7.8,11,16.2,17,16.5]
        z: [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,2.5,2.5,1.5,1.5,3,3,3,2.5,0]
      height: [0,2,2.5,2.5,2.5,1.5,1.5,3,3,3,2.5,0]
      texture: [13,3,6,1,3,13,3,1,3,4,17]
      propeller: true
    cannons:
      section_segments: 12
      offset:
        x: 5.5
        y: -19
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-10,-9,-8.5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,0.6,0.6,0.3,0.3,0]
      height: [0,0.6,0.6,0.3,0.3,0]
      texture: [17,18,5,7,1,3]
      angle: 0
      laser:
        damage: [15,20]
        rate: 3.5
        type: 2
        speed: [130,160]
        number: 1
        error: 3
    cockpit:
      section_segments: [45,125,235,315]
      offset:
        x: 0
        y: -27
        z: 2
      position:
        x: [0,0,0,0,0,0,0]
        y: [-7,-2,5,10,15,25.19,25.19]
        z: [-1,0,0,0,0,-0.8,0]
      width: [1,3,3,3,2,2,0]
      height: [0.1,3,3,3,2,2,0]
      texture: [7,9,9,3,2]
      laser:
        damage: [100,150]
        rate: 0.8
        type: 1
        speed: [130,160]
        number: 1
        error: 1
    cockpit_deco:
      section_segments: [45,125,235,315]
      offset:
        x: 1.97
        y: -31
        z: 4.01
      position:
        x: [-1.45,-1.45,0,0]
        y: [-3,-3,2,2]
        z: [-3,-3,0,0]
      width: [0,0.2,0.2,0]
      height: [0,0.2,0.2,0]
      texture: [1]
    cockpit_deco2:
      section_segments: [45,125,235,315]
      offset:
        x: 0
        y: -31
        z: 4.01
      position:
        x: [0,0,0,0]
        y: [-3,-3,2,2]
        z: [-3,-3,0,0]
      width: [0,0.2,0.2,0]
      height: [0,0.2,0.2,0]
      texture: [1]      
    cockpit_deco3:
      section_segments: [45,125,235,315]
      offset:
        x: 0
        y: -33.9
        z: 1
      position:
        x: [0,0,0,0]
        y: [-0.5,-0.5,0.5,0.5]
        z: [0,0,0,0]
      width: [0,0.2,0.2,0]
      height: [0,0.2,0.2,0]
      texture: [1]
      angle: 90
    support:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 3
        z: 3
      position:
        x: [0,0,0,0,0]
        y: [-4,-4,0,4,4]
        z: [0,0,0,-4,0]
      width: [0,4,3,3,0]
      height: [0,5,5,5,0]
      texture: [1,2,2]
      vertical: true
    lights:
      section_segments: [45,135,225,315]
      offset:
        x: 1.5
        y: 2.6
        z: 7.81
      position:
        x: [0,0,0,0]
        y: [-4,-4,10.15,10.15]
        z: [0,0,0,0]
      width: [0,0.1,0.1,0]
      height: [0,0.1,0.1,0]
      texture: [6,17,6]
      angle: 180
    lights2:
      section_segments: [45,135,225,315]
      offset:
        x: 4.9
        y: 1.8
        z: 1
      position:
        x: [0,0,0,0]
        y: [0,0,28,28]
        z: [0,0,0,0]
      width: [0,0.1,0.1,0]
      height: [0,0.1,0.1,0]
      texture: [17]
      angle: 180
    propeller:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [5]
      height: [1]
      texture: [1]
      propeller: true
t = 15        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;      
