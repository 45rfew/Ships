model =
  name: 'Yeetus-Speedster'
  level: 6
  model: 6
  size: 1.5
  scale: 2.8
  Designer: 'Duc Minh'
  specs:
    shield:
      capacity: [210,300]
      reload: [7,10]
    generator:
      capacity: [100,160]
      reload: [45,60]
    ship:
      mass: 190
      speed: [90,116]
      rotation: [70,90]
      acceleration: [80,120]
  bodies:
    a:
      section_segments: [40,90,135,225,270,320]
      offset:
        x: 0
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,0,5,40,42,35,45,47,70,74,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,5,15,11,11,7,10,10,7,0]
      height: [0,.5,3,10,8,5,8,8,8,6,0]
      texture: [17,3,8,13,17,17,63,4,17,17]
      propeller: 1
      laser:
        damage: [60,100]
        rate: 1
        type: 1
        speed: [175,230]
        recoil: 50
        number: 1
        error: 0      
    b:
      section_segments: 6
      offset:
        x: 0
        y: 8-30
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,5,25,29,35]
        z: [0,0,0,0.5,0,0,0,0,0,0,0,0]
      width: [0,3,7.5,7.5,0]
      height: [0,4,9,8,0]
      texture: [7,9,4]
      propeller: false
    c:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 52-30
        z: -2.7
      position:
        x: [0,0,-11,-15,0,0,0,0,0,0,0,0]
        y: [0,0,12,20]
        z: [0,0,3,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,4]
      height: [0,1,1,1]
      texture: [17,17,16]
      propeller: false
      angle: 90
    d:
      section_segments: 8
      offset:
        x: 20.01
        y: 40-30
        z: -1
      position:
        x: [-.2,0,-.3,-.3,0,0,0,0,0,0,0,0,0,0]
        y: [5,15,10,9.5,15,16,34,35,40,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,4.5,5,7,7,7,7,5,0]
      height: [0,2,4.5,5,7,7,7,7,5,0]
      texture: [16,13,17,4,17,18,17,13,17]
      propeller: 1
      angle: 0
    d2:
      section_segments: 8
      offset:
        x: 20
        y: 40-30
        z: -1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,15,10,15,16,34,35,40,35]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,5,7,7,7,7,5,0]
      height: [0,2,5,7,7,7,7,5,0]
      texture: [17,13,4,17,11,17,13,17]
      propeller: 0
      angle: 0      
    e:
      section_segments: [45,135,225,315]
      offset:
        x: 20
        y: 51-30
        z: 5.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,5,24,27,27]
        z: [-1.2,-1.2,0,0,-1.5,-1.5,0,0,0,0,0,0]
      width: [0,.3,2,2,1,0]
      height: [0,.3,2,2,1.5,0]
      texture: [1,2,3,2]
      propeller: 0
      angle: 0
    e2:
      section_segments: [45,135,225,315]
      offset:
        x: 20
        y: 51-30
        z: -7.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-4,-4,5,24,27,27]
        z: [1.5,1.5,0,0,1.5,1.5,0,0,0,0,0,0]
      width: [0,.1,2,2,1,0]
      height: [0,.1,2,2,1.5,0]
      texture: [1,2,3,2]
      propeller: 0
      angle: 0
    f:
      section_segments: 6
      offset:
        x: 26
        y: 51-30
        z: -1
      position:
        x: [-1.8,-1.8,0,0,-1.2,-1.2,0,0,0,0,0,0]
        y: [-4,-4,5,24,27,27]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,.1,2,2,1.5,0]
      height: [0,.1,2,2,1,0]
      texture: [2,2,3,2]
      propeller: 0
      angle: 0
    f2:
      section_segments: 6
      offset:
        x: 14
        y: 51-30
        z: -1
      position:
        x: [1.8,1.8,0,0,1.2,1.2,0,0,0,0,0,0]
        y: [-4,-4,5,24,27,27]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,.1,2,2,1.5,0]
      height: [0,.1,2,2,1,0]
      texture: [2,2,3,2]
      propeller: 0
      angle: 0      
    g:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 46-30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,4.4,5,19,19.4,23,23]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6,8,8,8,8,6,0]
      height: [0,10,10,10,10,10,10,0]
      texture: [3,3,17,18,17,3]
      propeller: 0
      angle: 0
    h:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 5
        z: -35
      position:
        x: [0,0,6,6,0,0,0,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,10,10,0,0,0,0,0,0,0,0]
      width: [0,0.5,0.5,0]
      height: [0,5,3,0]
      texture: [17]
      propeller: 0
      vertical: true
    i:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 5
        z: -35
      position:
        x: [0,0,6,6,0,0,0,0,0,0,0,0]
        y: [0,0,8,8]
        z: [0,0,10,10,0,0,0,0,0,0,0,0]
      width: [0,0.9,0.9,0]
      height: [0,4,2,0]
      texture: [18]
      propeller: 0
      vertical: true
    j:
      section_segments: 6
      offset:
        x: 7
        y: 24
        z: 12
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-10,0,8,10,10]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,2,2,1,0]
      height: [0,1,2,2,1,0]
      texture: [17,3,10,63]
      propeller: 0
      angle: -10
      laser:
        damage: [8,12]
        rate: 2
        type: 1
        speed: [100,130]
        number: 1
        angle: -10
        error: 0      
    k:
      section_segments: [40,90,135,225,270,320]
      offset:
        x: 0
        y: 22
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,1,15,16,16]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,11,11,11,11,0]
      height: [0,7,7,7,7,0]
      texture: [4,17,10.92,17,4]
      propeller: 0
      angle: 0
    l:
      section_segments: [40,90,135,225,270,320]
      offset:
        x: 0
        y: -22
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,30,31.7,31.7]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,6.5,15.5,15.5,0]
      height: [0,3,9,9,0]
      texture: [4,4,63]
      propeller: 0
      angle: 0
    l2:
      section_segments: 8
      offset:
        x: 6
        y: 10
        z: 1
      position:
        x: [-5.1,-5.1,0.7,0]
        y: [2,2,31.8,31.8]
        z: [4,4,0,0]
      width: [0,.5,.5,0]
      height: [0,.5,.2,0]
      texture: [17]
      propeller: 0
      angle: 180      
    l3:
      section_segments: 8
      offset:
        x: 6
        y: 10
        z: 1
      position:
        x: [-5.3,-8.3,0.7,0]
        y: [2,2,31.8,31.8]
        z: [0,0,0,0]
      width: [0,.5,.5,0]
      height: [0,.5,.2,0]
      texture: [17]
      propeller: 0
      angle: 180      

ar = [1,63,17,3,17,63]      
for i in [1..5]
  model.bodies['a'+i]=
    section_segments: 8
    offset:
      x: 20
      y: 55-32.5 + i * 4
      z: -1
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,1.5,1.5]
      z: [0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,7.5,7.5,0]
    height: [0,7.5,7.5,0]
    texture: [ar[i]]
    propeller: 0
    angle: 0
arr = [1,8,3,8]
for i in [1..3]
  model.bodies['b'+i]=
    section_segments: [45,135,225,315]
    offset:
      x: 1
      y: 44-30 + i * 4
      z: -2.7
    position:
      x: [0,3,-11,-15,0,0,0,0,0,0,0,0]
      y: [0,0,12,20]
      z: [0,0,3,0,0,0,0,0,0,0,0,0]
    width: [0,1,2,1*4/5]
    height: [0,1.5,1.5,1.5]
    texture: [arr[i]]
    propeller: false
    angle: 90
  model.bodies['c'+i]=
    section_segments: 6
    offset:
      x: 7.5-i/2
      y: 50-29+i*3
      z: 12
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,1,1]
      z: [0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,2+(i/3),2+(i/4),0]
    height: [0,2+(i/3),2+(i/3),0]
    texture: [16.9]
    propeller: 0
    angle: -10  
t = -10        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;       
return model;
