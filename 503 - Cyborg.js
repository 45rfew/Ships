a = 2
s = 8
d = 8
q = 4
h = 50
t = -20
model = 
  name: "Cyborg"
  level: 5
  model: 3
  size: 1.9
  specs:
    shield:
      capacity: [230,270]
      reload: [15,20]
    generator:
      capacity: [300,400]
      reload: [50,100]
    ship:
      mass: 350
      speed: [130,150]
      rotation: [70,85]
      acceleration: [100,130]
  bodies:
    main:
      section_segments:12
      offset:
        x:0
        y:-25-h
        z:-2
      position:
        x:[0,0,0,0,0,0,0,0,0,0,0,0]
        y:[0,35,60,80,82,150,160,170,150,0,0,0]
        z:[0,0,0,0,0,0,0,0,0,0,0,0]
      width:[0,17,17,21,21,25,21,17,0]
      height:[0,10,12,12,12,12,12,12,0]
      propeller: true
      texture:[3,8,13,17,11,13,13,17]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: 15-h
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-15,0,10,30,50]
        z: [-3,-2,0,0,0,0]
      width: [0,4,10,12,7,0]
      height: [0,5-3,7-3,9-3,5-2,0]
      texture: [9]
    cannon:
      section_segments: 11
      offset:
        x: 73-10
        y: 80-h
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-132+30,-128+30,-122+30,-114+30,-102+30,-97+30,-91+30,-77+30,-71+30,-71+30,105-20-30,112-30-20,116-30-20]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,0,0,10-s,13-s,14-s,15-s,17-s,19-s,17-s,15-s,13-s,0]
      height: [0,0,0,10-d,13-d,14-d,15-d,17-d,19-d,17-d,15-d,13-d,0]
      propeller: false
      angle: 0
      texture: [63,63,63,63,63,63,63,63,4,10,4]  
    thingy:
      section_segments: 6
      offset:
        x: 54
        y: 50
        z: -11
      position:
        x: [0,0,0,0,0,-12]
        y: [-50,-60,-20,0,20,30]
        z: [0,0,0,0,0,-10]
      width: [0,3,3,3,3,2]
      height: [0,3,3,3,3,2]
      angle: 0
      laser:
        damage: [7,10]
        rate: 10
        type: 1
        speed: [160,180]
        number: 1
        error: 1.5
      propeller: false
      texture: [3,3,10,3]  
    thingy2:
      section_segments: 6
      offset:
        x: 54
        y: 50
        z: -11
      position:
        x: [0,0,0,0,0,-12]
        y: [-50,-60,-20,0,20,30]
        z: [0,0,0,0,0,-10]
      width: [0,3,3,3,3,2]
      height: [0,3,3,3,3,2]
      angle: 0
      laser:
        damage: [7,10]
        rate: 10
        type: 1
        speed: [160,180]
        number: 1
        error: 1.5
      propeller: false
      texture: [3,3,10,3]      
    turbine:
      section_segments: 10
      offset:
        x: 47-4
        y: 46-h
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [4*a,10*a,9*a,5*a,5*a,40*a,40*a,35*a,33*a,40*a,38*a]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1*a,5*a-q,5*a-q,6*a-q,6*a-q,5*a-q,5*a-q,3,2,0]
      height: [0,1*a,5*a,5*a,6*a,6*a,5*a,5*a,3,2,0]
      propeller: true
      texture:[4,12,4,2,8,2,4,12,4,17]
  wings:
    main:
      length: [70]
      width: [35*2,12.5*2]
      angle: [0,0]
      position: [0,10*3]
      offset:
        x: 0
        y: 82-h
        z: 0
      texture: [11]
      doubleside: true
      bump:
        position: 30 
        size: 10
    main2:
      length: [30]
      width: [35*2,12.5*2]
      angle: [-70,0]
      position: [0,20*3]
      offset:
        x: 63
        y: 70-h
        z: 0
      texture: [63]
      doubleside: true
      bump:
        position: 60 
        size: 10 
    main3:
      length: [70]
      width: [35*2,12.5*2]
      angle: [0,0]
      position: [0,10*3]
      offset:
        x: 0
        y: 80-h
        z: 0
      texture: [17]
      doubleside: true
      bump:
        position: 30 
        size: 0  
    winglets:
      length: [20]
      width: [20,10,15]
      angle: [-10,10]
      position: [-40,-30,-55]
      bump:
        position: 10
        size: 20
      texture: 63
      offset:
        x: 10
        y: 12
        z: 1   
for i in [0...10]
  model.bodies['cannon_z'+i] =
    section_segments: 20
    offset:
      x: 63
      y: 10*i-10
      z: 0
    position:
      x: [0,0,0,0,0]
      y: [0,0,2,4,1]
      z: [0,0,0,0,0]
    width: [0,9,9,9,0]
    height: [0,9,9,9,0]
    texture: [63,63,17]
if(1)
  for k,v of model.bodies
    v.offset.x=-v.offset.x
    if(v.vertical)
      v.offset.y = -v.offset.y
      if(v.angle!=undefined)
        v.angle = 180-v.angle
      else
        v.angle = 180
    else
      v.offset.z = -v.offset.z
      if(v.angle!=undefined)
        v.angle = -v.angle
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;
