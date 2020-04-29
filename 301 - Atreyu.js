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
hub = (x,y,z,s,w,h,v,a,t) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0]
      y: [0,9,7,7,10,7,8].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a 
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [].fill(0,13)
      y: [-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25].mult(t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: vert
    texture: tx
    angle: angle      
a = 1.5
model =
  name: "Atreyu"
  level: 3
  model: 1
  size: 1.1
  specs:
    shield:
      capacity: [180,220]
      reload: [5,8]
    generator:
      capacity: [140,180]
      reload: [40,60]
    ship:
      mass: 340
      speed: [120,135]
      rotation: [100,120]
      acceleration: [90,120]
  bodies:
    ring: ring(25,84,0,6,13,10,.5,1,0,16.9,0)
    ring2: ring(25,61,0,6,13,10,.5,1,0,16.9,0)
    ring3: ring(0,10,3,6,13,26,1.5,.01,0,[17,4,17,4,17,4,17],0)
    ring4: ring(0,50,2,6,13,26,1.5,.01,0,[17,4,17,4,17,4,17],0)
    ring5: ring(0,-62,9,6,9,13.5,.5,.7,0,[63,63,63,3,3],0)
    ring6: ring(0,-62+15,9,6,9,13.5,.5,.7,0,[63,63,63,3,3],0)
    ring7: ring(0,-62+30,9,6,9,13.5,.5,.7,0,[63,63,63,3,3],0)
    ring8: ring(0,-62+45,9,6,9,13.5,.5,.7,0,[63,63,63,3,3],0)
    ring9: ring(0,-62+60,9,6,9,13.5,.5,.7,0,[63,63,63,3,3],0)
    reactors: hub(18,11,-73,[45,135,225,315],5,7,1,32,[18,17,17,18,18,17])
    reactor: hub(0,10,-30,20,9.5,7,1,0,[18,17,17,18,18,17])
    main:
      section_segments: 6
      offset:
        x: 0
        y: -60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-105,-100,-90,-20,10*2.5,20*2.5,38*2.5,40*2.5,43*2.5,45*2.5,55*3,180,180,170]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8+5,15,30,31.5,35.5,35,35,35,35,35,30,28,0]
      height: [0,4,4.9,12,15,15,15,15,15,15,15,13,11,0]
      propeller: true
      texture: [3,1,10,11,4,18,63,18,63,16.9,12.96,16.9]  
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -60
        z: 9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-52,-50,-30,-5,70,5]
        z: [0,.4,-2,-1,0,0,0]
      width: [0,4,12,14,14,0]
      height: [0,2,8,10,10,0]
      texture: [9,9,9,4]  
    toploader:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 7
        z: -73
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,-0,11,11,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,45,45,20,17,17,0]
      height: [0,32,32,32,29,29,0]
      texture: [4,4,[8],63,17,17]
      vertical: true          
    chunk:
      section_segments: 6
      offset:
        x: 0
        y: 75.9
        z: 0.6
      position:
        x: [0,0,0,0,0,0]
        y: [-18,-18,-15.5,21.3,24,24]
        z: [0,0,0,0,0,0]
      width: [0,30,30,30,30,0]
      height: [0,15,15,15,15,0]
      texture: [4,[15],16,[15]]      
    propeller:
      section_segments: 6
      offset:
        x: 32
        y: 40
        z: -12
      position:
        x: [-5,-5,0,0,0,0,0,-3,-3,-3]
        y: [-80,-75,-50,-20,10,30,55,75,75,65]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,15,12,10,0]
      height: [0,10,15,15,15,15,15,13,11,0]
      propeller: true
      texture: [63,63,10,11,4,18,12,16.9]   
      laser:
        damage: [15,20]
        rate: 3
        type: 1
        speed: [150,180]
        number: 1
        error: 1      
    cannon:
      section_segments: 6
      offset:
        x: 26
        y: -60
        z: -7
      position:
        x: [0,0,0,0,0,0,-10]
        y: [-50,-60,-60,-20,0,20,30]
        z: [0,0,0,0,0,0,0]
      width: [0,4,5,8,8,8,0]
      height: [0,4,5,8,8,8,0]
      texture: [16.9,16.9,3,10,18,63]
      laser:
        damage: [8,10]
        rate: 8
        type: 2
        speed: [140,160]
        number: 1
        error: 2.5
    light:
      section_segments: 6
      offset:
        x: 0
        y: -115
        z: 14.5
      position:
        x: [0,0,0,0]
        y: [-50,-50,45,45]
        z: [-4,-4,-12,-12]
      width: [0,5,2.5,0]
      height: [0,5,2,0]
      texture: [3.9,16.9,3.9]
      angle: 180
    bump:
      section_segments: [45,135,225,315]
      offset:
        x: 8
        y: 2
        z: 28
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,53,53,51,0]
      texture: [63,17,63]
      angle: 30
      vertical: true   
    stab:
      section_segments: 6
      offset:
        x: 29.5
        y: 2
        z: -18
      position:
        x: [0,0,0,0,0,0]
        y: [-5,0,3,3,1,1]
        z: [0,0,0,0,0,0]
      width: [0,9,4,1.5,1,0]
      height: [0,30,20,16,16,0]
      texture: [3.9,3.9,16.9,63,0.9]
      vertical: true
      angle: 30      
  wings: 
    front:
      offset:
        x: 0
        y: -95
        z: 0
      length: [75]
      width: [50,10]
      angle: [-20]
      position: [15,70]
      texture: [63]      
      doubleside: true
      bump:
        position: 30
        size: 10 
    front_light:
      offset:
        x: 0
        y: -91.5
        z: 4.5
      length: [76]
      width: [6,3]
      angle: [-23]
      position: [22,68]
      texture: [17]      
      doubleside: true
      bump:
        position: 30
        size: 15  
    front_light2:
      offset:
        x: 0
        y: -96.5
        z: 3.5
      length: [76]
      width: [6,3]
      angle: [-22]
      position: [2,70]
      texture: [17]      
      doubleside: true
      bump:
        position: 30
        size: 15          
    top:
      doubleside: true
      offset:
        x: 0
        y: 90
        z: 0
      length: [0,20,0,5,-2,0]
      width: [40,40,40,80,60,45,0]
      angle: [90,90,90,90,90,90]
      position: [-30,-30,-15,-15,-10,-8,-14]
      texture: [4,4,4,18,63,17]
      bump:
        position: 35
        size: 20
    main:  
      offset:
        x: 0
        y: 42
        z: 0
      length: [150,2.5,20]
      width: [80,50,50,30]
      angle: [-20,20,20]
      position: [0,70,70,50]
      texture: [18,17,63]      
      doubleside: true
      bump:
        position: 30
        size: 5
    main2:  
      offset:
        x: 0
        y: 44
        z: 0
      length: [150,2.5,20]
      width: [80,50,50,30]
      angle: [-20,20,20]
      position: [0,70,70,50]
      texture: [11,17,63]      
      doubleside: true
      bump:
        position: 30
        size: 5
    main3:  
      offset:
        x: 0
        y: 44
        z: 2
      length: [131]
      width: [39,22]
      angle: [-20,20]
      position: [2.5,60.5]
      texture: [63]      
      doubleside: true
      bump:
        position: 20
        size: 10        
    main_lights:  
      offset:
        x: 0
        y: 48
        z: 5.5
      length: [131]
      width: [5,3]
      angle: [-21.3,20]
      position: [2.5,60.5]
      texture: [17]      
      doubleside: true
      bump:
        position: 20
        size: 10 
    main_lights2:  
      offset:
        x: 0
        y: 39
        z: 5
      length: [131]
      width: [5,3]
      angle: [-21,20]
      position: [-2.5,60.5]
      texture: [17]      
      doubleside: true
      bump:
        position: 20
        size: 10         
    main_deco:  
      offset:
        x: 0
        y: 39
        z: 0
      length: [150,2.5,20]
      width: [80,50,50,30]
      angle: [-20,20,20]
      position: [0,70,70,50]
      texture: [17]      
      doubleside: true
      bump:
        position: 30
        size: 0
t = -20        
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;
