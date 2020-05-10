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
ring = (x,y,z,s,l,w,t,tcc,v,tx,a) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,13)
      y: multiplyArray([-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25], t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: v
    texture: tx
    angle: a   
ring2 = (x,y,z,s,w,l,h,v,t,a) ->
  return k =    
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,14)
      y: [-10.5,-12.5,-7.5,-2,2,7.5,13.5,13.5,13.5,7.5,0,-7.5,-10.5,-13.5].div(2).mult(w)
      z: [].fill(0,14)
    width: [0,21,21,21,21,21,21,21,15,13,12,13,15,17].add(-9).mult(l)
    height: [0,11,11,11,11,11,11,11,6,4,3,4,6,8].mult(h)
    vertical: v
    texture: t
    angle: a   
hub = (x,y,z,s,w,h,v,a,t) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0]
      y: [0,9,7,7,10,6,7].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a            
a = 2
s = 8
d = 8
q = 4
h = 50
t = -20
model = 
  name: "Cyborg"
  level: 5
  model: 4
  size: 1.9
  specs:
    shield:
      capacity: [280,320]
      reload: [12,15]
    generator:
      capacity: [300,400]
      reload: [120,150]
    ship:
      mass: 350
      speed: [95,110]
      rotation: [70,85]
      acceleration: [100,130]
  bodies:
    disc: ring2(4.1,-23.8,-10.7,12,0.2,0.5,0.5,false,[4,4,17,4,17,4],0) 
    disc2: ring2(4.4,-23.8+7,-9.7,20,0.2,0.5,0.5,false,[4,4,17,4,17,4],0) 
    disc3: ring2(4.9,-23.8+14,-8.7,20,0.2,0.5,0.5,false,[4,4,17,4,17,4],0) 
    disc4: ring2(0,-23.8,-11.7,12,0.2,0.5,0.5,false,[4,8,18,4,18,8],0) 
    disc5: ring2(0,-23.8+7,-10.7,20,0.2,0.5,0.5,false,[4,8,18,4,18,8],0) 
    disc6: ring2(0,-23.8+14,-9.7,20,0.2,0.5,0.5,false,[4,8,18,4,18,8],0) 
    disc7: ring(13,-20,-2,16,5,5,0.6,0.1,false,4,0)
    disc8: ring(13,-28,-2,16,5,5,0.6,0.1,false,4,0)
    disc9: ring2(16,63.5,-4,16,0.2,0.5,0.5,false,[4,4,17,17,17,4],180)     
    disc10: ring2(16,57.5,-4,16,0.2,0.5,0.5,false,[4,4,17,17,17,4],180) 
    disc11: ring2(0,63,-10,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1.4,1,false,[4,4,3,63,3,4],180)     
    disc12: ring2(0,63,-10,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1.4,1,false,[4,4,3,63,3,4],180+90)     
    disc13: ring2(0,16,-10,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1,0.9,false,[4,4,3,63,3,4],180)     
    disc14: ring2(0,16,-10,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1,0.9,false,[4,4,3,63,3,4],180+90)     
    hub: hub(0,-13,-63,30,6,5,true,180,[18,17,17,18,18,17]) 
    hub2: hub(0,-16,-63,[45,135,225,315],2,4,true,180,17) 
    hub3: hub(0,-13,-16,30,4.5,4,true,180,[18,17,17,18,18,17])         
    hub4: hub(0,-16,-16,[45,135,225,315],1.6,2.8,true,180,17) 
    main:
      section_segments: 6
      offset:
        x: 0
        y: -25-h
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [1,2,3,35,60,84,86,150,160,170,170,166]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,2,17,17,21,21,23,21,17,16,0]
      height: [0,1,2,10,12,12,12,12,12,12,11,0]
      propeller: true
      texture: [3,3,3,8,18,17,11,18,12.9,16.9]
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 15-h
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-22,-18,-1,10,30,50]
        z: [-3,-2,0,0,0,0]
      width: [0,3,10,10,10,0]
      height: [0,5-3,7-3,9-3,5-2,0]
      texture: [7,9,9,3]
    cockpit2:
      section_segments: 12
      offset:
        x: 4
        y: 15-h
        z: -10
      position:
        x: [0,0,0,0]
        y: [10,10,33,35]
        z: [1,1,-2,0]
      width: [0,3,3,0]
      height: [0,6,6,0]
      texture: [4]
    cannon:
      section_segments: 11
      offset:
        x: 73-10
        y: 80-h
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-132+30,-128+30,-122+30,-114+30,-102+30,-97+30,-91+30,-77+30,-71+30,-71+30,105-20-30,112-30-20,114-30-20]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,0,0,10-s,13-s,14-s,15-s,17-s,19-s,17-s,15-s,13-s,0]
      height: [0,0,0,10-d,13-d,14-d,15-d,17-d,19-d,17-d,15-d,13-d,0]
      propeller: false
      angle: 0
      texture: [63,63,63,63,63,63,63,63,4,10,4]  
    laser:
      section_segments: 6
      offset:
        x: 54
        y: 48
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0,0,-12]
        y: [-50,-60,-60,-22,-20,0,2,20,22,30]
        z: [0,0,0,0,0,0,0,0,0,-10]
      width: [0,2,3,3,3,3,3,3,3,4,2]
      height: [0,2,3,3,3,3,3,3,4,2]
      angle: 0
      laser:
        damage: [7,10]
        rate: 10
        type: 1
        speed: [165,200]
        number: 1
        error: 1.5
      propeller: false
      texture: [16.9,16.9,3,17,10,17,13,17,3]  
    laser2:
      section_segments: 6
      offset:
        x: 54.8
        y: 48
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0,0,-12]
        y: [-50,-60,-60,-22,-20,0,2,20,22,30]
        z: [0,0,0,0,0,0,0,0,0,-10]
      width: [0,2,3,3,3,3,3,3,3,4,2]
      height: [0,2,3,3,3,3,3,3,4,2]
      texture: [16.9,16.9,3,17,11,17,13,17,3]   
      laser:
        damage: [7,10]
        rate: 10
        type: 1
        speed: [165,200]
        number: 1
        error: 1.5   
    laser_deco:
      section_segments: [5,135+30,225,315]
      offset:
        x: 53
        y: -11
        z: -59
      position:
        x: [0,0,0,0,0]
        y: [-1,1,1,-1,-1]
        z: [0,0,0,0,0]
      width: [7,7,5,5,7].div(1.2)
      height: [17,17,14,14,17].div(1.4)
      texture: [3.9,16.9,3.9]
      vertical: true
      angle: 180
    laser_deco2:
      section_segments: [5,135+30,225,315]
      offset:
        x: -56
        y: -11
        z: -59
      position:
        x: [0,0,0,0,0]
        y: [-1,1,1,-1,-1]
        z: [0,0,0,0,0]
      width: [7,7,5,5,7].div(1.2)
      height: [17,17,14,14,17].div(1.4)
      texture: [3.9,16.9,3.9]
      vertical: true
      angle: 180
    turbine:
      section_segments: 10
      offset:
        x: 47-4
        y: 46-h
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [4*a,10*a,9*a,5*a,4.8*a,40*a,40*a,35*a,33*a,40*a,40*a,38*a]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1*a,5*a-q,5*a-q,6*a-q,6*a-q,5*a-q,5*a-q,3,2,1.5,0]
      height: [0,1*a,5*a,5*a,6*a,6*a,5*a,5*a,3,2,1.5,0]
      propeller: true
      texture:[4,12,4,2,8,2,4,13,4,17]
    cockpit_detail:
      section_segments: [45,135,225,315]
      offset:
        x: 6.5
        y: -7
        z: 20
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,5,6,6]
        z: [0,0,0,0,0]
      width: [0,1.5,1.5,1.5,0]
      height: [0,20,20,16,0]
      texture: [63,17,4,63]
      angle: 45+180
      vertical: true  
    hub_joint_detail:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: -10
        z: -38
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,5,6,6]
        z: [0,0,0,0,0]
      width: [0,2,2,1.5,0]
      height: [0,37,37,16,0]
      texture: [63,17,4,63]
      angle: 45+180
      vertical: true        
    hubs_joint:
      section_segments: 4
      offset:
        x: 0
        y: 28
        z: -13
      position:
        x: [0,0,0,0]
        y: [-10,-10,30,30]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,2,2,0]
      texture: [4,18,4]
    top_loader:
      section_segments: 12
      offset:
        x: -0.1
        y: 80
        z: -6
      position:
        x: [0,0,0,0,0,0]
        y: [-11,-11,-8,-5,2,2]
        z: [0,0,0,0,0,0]
      width: [0,12,12,12,12,0]
      height: [0,15,15,10,10,0].div(1)
      texture: [0.9,18,16.9,15,3.9]    
      angle: 90 
  wings:
    main:
      offset:
        x: 0
        y: 82-h
        z: 0      
      length: [70]
      width: [35*2,12.5*2]
      angle: [0,0]
      position: [0,10*3]
      texture: [[15]]
      doubleside: true
      bump:
        position: 30 
        size: 10
    main_top:
      offset:
        x: 0
        y: 82-h+4
        z: 2  
      length: [70]
      width: [40*1.5,12.5*1.5]
      angle: [0,0]
      position: [0,10*3]
      texture: [18]
      doubleside: true
      bump:
        position: 30 
        size: 10        
    main_lights:      
      offset:
        x: 0
        y: 80-h
        z: 0
      length: [70]
      width: [35*2,12.5*2]
      angle: [0,0]
      position: [0,10*3]
      texture: [17]
      doubleside: true
      bump:
        position: 30 
        size: 0 
    sides:
      offset:
        x: 63
        y: 70-h
        z: 0
      length: [30]
      width: [35*2,12.5*2]
      angle: [-55,0]
      position: [0,20*3]
      texture: [63]
      doubleside: true
      bump:
        position: 60 
        size: 10         
    winglets:
      offset:
        x: 10
        y: 12
        z: 1  
      length: [20]
      width: [20,10,15]
      angle: [-10,10]
      position: [-40,-30,-55]
      texture: 63
      bump:
        position: 10
        size: 20
    top:
      doubleside: true
      offset:
        x: 15.5
        y: 60
        z: 8
      length: [0,-7,-3,-1,-9,-3,0]
      width: [0,20,20,60,60,10,8,0].mult(1.5)
      angle: [280,280,315,315,335,390,0]
      position: [7,7,7,-20,-20,15,15,15]
      texture: [63,63,63,17,4,17,63]
      bump:
        position: 30
        size: -3
    top2:
      doubleside: true
      offset:
        x: 15.5
        y: 61
        z: 7.9
      length: [0,-7,-3,-1,-9,-3,0]
      width: [0,20,20,60,60,10,8,0].mult(1.5)
      angle: [280,280,315,315,335,390,0]
      position: [7,7,7,-20,-20,15,15,15]
      texture: [63,63,63,17,1,63,63]
      bump:
        position: 30
        size: -3.1        
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
