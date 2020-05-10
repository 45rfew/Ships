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
ring = (x,y,z,s,l,w,t,tcc,v,tx,a) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,13)
      y: [-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25].mult(t+tcc)
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
model =
  name: 'Messiah'
  level: 3
  model: 2
  size: 2
  Designer: 'Duc Minh'
  specs:
    shield:
      capacity: [180,230]
      reload: [6,8]
    generator:
      capacity: [140,220]
      reload: [45,70]
    ship:
      mass: 320
      speed: [125,140]
      rotation: [60,80]
      acceleration: [80,100]  
  bodies:
    disc: ring2(50.5,16,5,16,1,.7,.7,false,[4,17,4,63,4,17],180)     
    disc2: ring2(50.5,61,5,8,.3,.8,1.3,false,[4,17,4,17,4,17],180)     
    disc3: ring2(50.5,45.5,5,8,.3,.75,1.1,false,[4,17,4,17,4,17],180)     
    disc4: ring2(10,-15,11,8,.3,1,1.1,false,[4,17,4,17,4,17],180)     
    disc5: ring2(7,-33,8,8,.4,1,1.1,false,[4,17,4,17,4,17],180)     
    disc6: ring2(10,-15,11,8,.4,1,1.1,false,[4,17,4,17,4,17],180)     
    main:
      section_segments: 10
      offset:
        x: 0
        y: -100
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,-9.5,-10,20,90,110,133,133,180,190,210,210,200]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,4,12,26,19.5,19.5,19.5,22,25,17,15,0]
      height: [0,3,4,12,25,22,25,25,25,25,17,15,0]
      texture: [17,17,2,10,63,3,63,18,63,12,17]
      propeller: 1
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -80
        z: 10.05
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,10,45,70,100,120]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,12,12,7,0]
      height: [0,5,20,18,15,0]
      texture: [4,9,3,4]
    side:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 3
      position:
        x: [0,0,0,0]
        y: [-10,20,70,90]
        z: [0,0,2,2]
      width: [0,25,25,0]
      height: [0,10,10,0]
      texture: [4,17,4]
    cannon:
      section_segments: 8
      offset:
        x: 51
        y: -25
        z: 5
      position:
        x: [-.5,-.5,-.5,-0.5,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [15,5,5,20,45,60,100,110,110,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.3,3,7.5,7,8,8,5,4,0]
      height: [0,2.3,3,7,7,10,15,8,7,0]
      texture: [17,17,12,4,18,10,15,17]
      propeller: 1
      laser:
        damage: [8,14]
        rate: 8
        type: 1
        speed: [175,185]
        recoil: 5
        number: 1
        error: 3      
    cannon2:
      section_segments: 8
      offset:
        x: 50
        y: -25
        z: 5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [20,20,20,45,60,100,110,100]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,7,7,8,8,5,0]
      height: [0,3,7,7,10,15,8,0]
      texture: [63,13,10,11,63,13,17]
    cannon_deco:
      section_segments: [5,135+40,225,315]
      offset:
        x: 45+2
        y: 5
        z: -14
      position:
        x: [0,0,0,0,0]
        y: [-1,1,1,-1,-1].mult(2)
        z: [0,0,0,0,0]
      width: [7,7,5,5,7].mult(1.5)
      height: [17,17,14,14,17]
      texture: [3.9,3.9,3.9,16.9]
      vertical: true
      angle: 180
    cannon_deco2:
      section_segments: [5,135+40,225,315]
      offset:
        x: 57-3
        y: 5
        z: -14
      position:
        x: [0,0,0,0,0]
        y: [-1,1,1,-1,-1].mult(2)
        z: [0,0,0,0,0]
      width: [7,7,5,5,7].mult(1.5)
      height: [17,17,14,14,17]
      texture: [3.9,16.9,3.9]
      vertical: true
      angle: 0   
  wings:
    main:
      doubleside: 1
      offset:
        x: 0
        y: 30
        z: 0
      length: [33,2,10.20,25]
      width: [90,50,50,40,30]
      angle: [10,-25,-25,35]
      position: [0,25,24.5,15,30]
      texture: [8,17,4,63]
      bump:
        position: 40
        size: 10
    main_lights:
      doubleside: 1
      offset:
        x: 0
        y: 28
        z: 0
      length: [33,2,10.20,25]
      width: [90,50,50,40,30]
      angle: [10,-25,-25,35]
      position: [0,25,24.5,15,30]
      texture: [17]
      bump:
        position: 40
        size: 0        
    winglets:
      doubleside: 1
      offset:
        x: 0
        y: 55
        z: 10
      length: [30]
      width: [50,40]
      angle: [50]
      position: [0,40]
      texture: [63]
      bump:
        position: 30
        size: 10
    top:
      doubleside: 1
      offset:
        x: 0
        y: 45
        z: 16
      length: [30,2,20,30]
      width: [50,40,40,38,20]
      angle: [-12,5,5,-50,]
      position: [0,20,19,4.5,20]
      texture: [18,17,4,18]
      bump:
        position: 30
        size: 10
    top_lights:
      doubleside: 1
      offset:
        x: 0
        y: 43
        z: 16
      length: [30,2,20,30]
      width: [50,40,40,38,20]
      angle: [-12,5,5,-50]
      position: [0,20,19,4.5,20]
      texture: [17]
      bump:
        position: 30
        size: 0
    top_deco:
      doubleside: 1
      offset:
        x: 0
        y: 35
        z: 17
      length: [30,2,20,0]
      width: [10,10,10,8,0]
      angle: [-11,5,2.5,-50]
      position: [4,20,19,6,20]
      texture: [63,17,63]
      bump:
        position: 30
        size: 10     
    top_deco2:
      doubleside: 1
      offset:
        x: 0
        y: 50
        z: 18.9
      length: [30,2,20,0]
      width: [10,10,10,8,0]
      angle: [-11,7,-1,-50]
      position: [4,20,19,6,20]
      texture: [63,17,63]
      bump:
        position: 30
        size: 12  
    top_deco_deco:
      doubleside: 1
      offset:
        x: 0
        y: 35
        z: 17.6
      length: [30,2,20,0]
      width: [2,2,2,2,0]
      angle: [-11,5,2.5,-50]
      position: [3,20,19,4.5,20]
      texture: [18]
      bump:
        position: 30
        size: 10             
    top_deco_deco2:
      doubleside: 1
      offset:
        x: 0
        y: 50
        z: 19.6
      length: [30,2,20,0]
      width: [2,2,2,2,0]
      angle: [-11,8,0,-50]
      position: [3,20,19,5,20]
      texture: [18]
      bump:
        position: 30
        size: 12         
t = -10
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;         
