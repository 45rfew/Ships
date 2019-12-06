generateBall = (xx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
  xzpos = []
  ypos = []
  width = []
  for i in [0..segments]
    ang = (i/segments)*Math.PI
    width.push(Math.sin(ang)*radius)
    ypos.push(-Math.cos(ang)*length)
    xzpos.push(0)
  return k = 
    section_segments: l_segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: xzpos
      y: ypos
      z: xzpos
    width: width
    height: width
    texture: tx
    vertical: vertical
    angle: angle
multiplyArray = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]*m)
  return k;
model =
  name: 'Daedalus'
  level: 3
  model: 3
  size: 1.8
  specs:
    shield:
      capacity: [220,260]
      reload: [5,9]
    generator:
      capacity: [150,170]
      reload: [60,80]
    ship:
      mass: 360
      speed: [100,115]
      rotation: [70,90]
      acceleration: [80,100]
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-65,-60,-50,10,15,50,65,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: multiplyArray([0,8,10,15,15,16,18,15,0],1.1)
      height: [0,4,5.12,14.4,15,15,15,10,0]
      propeller: true
      texture: [3,3,3,4,18,4,13,17]
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: 9
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-2,-2,0,5,30,38]
        z: [-4,-4,-4,-3,0,0]
      width: [0,1,4,8,10,5]
      height: [0,6,8,8,8,8]
      propeller: false
      texture: [7,7,9,9,9,4]      
    outer_arms:
      section_segments: 10
      offset:
        x: 58
        y: -10
        z: -8
      position:
        x: [1.5,4.5,4.5,8,11,14,16,16,14,12,10,7,0]
        y: [-100,-85,-85,-60,-40,-20,-0,20,40,60,80,90,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,-5,0]
      width: multiplyArray([0.5,2,6,8,8,8,8,8,8,7,5,4,0],1.1)
      height: [0.5,2,6,6,6,7,9,12,15,15,10,10,0]
      propeller: false
      texture: [6,7]
    outer_arms2:
      section_segments: 10
      offset:
        x: 56.5
        y: -10
        z: -8
      position:
        x: [4.5,4.5,8,11,14,16,16,14,12,10,7,0]
        y: [-85,-85,-60,-40,-20,-0,20,40,60,80,90,90]
        z: [0,0,0,0,0,0,0,0,0,0,-5,0]
      width: multiplyArray([2,6,8,8,8,8,8,8,7,5,4,0],1.1)
      height: [1,1,1,1,1,1,1,1,1,1]
      propeller: false
      texture: [63]       
    can1non:
      section_segments: 8
      offset:
        x: 61
        y: -70
        z: -9
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-37,-30,-25,0,25,30,35,40,40]
        z: [0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,0,0,0,0,0]
      height: [0,0,0,0,0,0,0,0,0]
      angle: 0
      texture: [16.9,5,4,11,17,2,11,4,4]  
      laser:
        damage: [40,60]
        rate: 1
        type: 1
        speed: [180,200]
        number: 1              
    cannon2:
      section_segments: 8
      offset:
        x: 63.1
        y: -57.7
        z: -8.99
      position:
        x: [0,0,0,0]
        y: [-12.5,-12.5,12.5,12.5]
        z: [0,2.01,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      angle: 180+10
      texture: [17]       
    propeller:
      section_segments: 10
      offset:
        x: 66.5
        y: 70
        z: -5
      position:
        x: [3,3,3,0,0,0]
        y: [-20,-20,-15,10,15,10]
        z: [0,0,0,0,0,0]
      width: [0,2,8,10,8,0]
      height: [0,5,12,12,10,0]
      propeller: true
      texture: [3,3,4,13]   
    propeller2:
      section_segments: 6
      offset:
        x: 66.5
        y: 95
        z: -5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [5]
      height: [10]
      propeller: true
    inner_arm:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 43
        y: -70
        z: -11
      position:
        x: [0,-3,0.5,-3,0,0,0,0]
        y: [20,20,40,40,60,80,100,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,5,10,10,12,12,0]
      height: [0,5,5,5,5,5,5,0]
      propeller: false
      texture: [7]  
    inner_arm2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 41.5
        y: -70
        z: -11
      position:
        x: [0.5,-3,0,0,0,0]
        y: [40,40,60,80,100,100]
        z: [0,0,0,0,0,0]
      width: [5,10,10,12,12,0]
      height: [1,1,1,1,1,0]
      propeller: false
      texture: [63]        
    cannon3:
      section_segments: 8
      offset:
        x: 38
        y: -20
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-37,-30,-25,0]
        z: [0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,3,3,3,3,3,3,3,3,3,3,0]
      height: [0,3,3,3,3,3,3,3,3,3,0]
      angle: 7
      texture: [16.9,5,4,11,17,2,11,4,4]  
    cann1on3:
      section_segments: 8
      offset:
        x: 38
        y: -20
        z: -12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-37,-30,-25,0]
        z: [0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,0,0,0,0,0,0]
      height: [0,0,0,0,0,0,0]
      angle: 1
      texture: [16.9,5,4,11,17,2,11,4,4]  
      laser:
        damage: [5,7]
        rate: 5
        type: 1
        speed: [120,150]
        number: 1           
    body_support:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 20-3
        z: 8
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    body_support2:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 21-3
        z: 7.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90      
    body_support3:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 30-3
        z: 8
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    body_support4:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 31-3
        z: 7.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90  
    body_support5:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 40-3
        z: 8
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    body_support6:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 41-3
        z: 7.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90  
    body_support7:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 50-3
        z: 8
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    body_support8:
      section_segments: [45,135,225,315]
      offset:
        x: 23
        y: 51-3
        z: 7.99
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90        
    ball: generateBall(16, 23, 1, 6, 5, 10, 10, 17, false, 90)
    ball2: generateBall(15, 33, 1.5, 6, 5, 10, 10, 17, false, 90)
    ball3: generateBall(14, 43, 2, 6, 5, 10, 10, 17, false, 90)
  wings: 
    main:
      length: [70]
      width: [40,35]
      angle: [-10]
      position: [0,-15]
      doubleside: true
      offset:
        x: 0
        y: 40
        z: 5
      bump:
        position: 30
        size: 10
      texture: [7]
    main2:
      length: [70]
      width: [40,35]
      angle: [-10]
      position: [0,-15]
      doubleside: true
      offset:
        x: 0
        y: 35
        z: 5
      bump:
        position: 30
        size: 0
      texture: [4]
t = 10
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;    
