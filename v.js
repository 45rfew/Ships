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
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle, z) ->
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
ring2 = (x,y,z,s,w,l,h,v,t,a) ->
  return k =    
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,14)
      y: [-13.5,-10.5,-7.5,-2,2,7.5,10.5,13.5,10.5,7.5,0,-7.5,-10.5,-13.5].mult(w)
      z: [].fill(0,14)
    width: [17,20,21,21,21,21,20,19,15,13,12,13,15,17].mult(l)
    height: [8,10,11,11,11,11,10,9,6,4,3,4,6,8].mult(h)
    vertical: v
    texture: t
    angle: a     
model =
  name: "Nirvana"
  level: 7
  model: 5
  size: 2.3
  specs:
    shield:
      capacity: [700,700]
      reload: [60,60]
    generator:
      capacity: [700,700]
      reload: [400,400]
    ship:
      mass: 480
      speed: [110,110]
      rotation: [35,35]
      acceleration: [85,85]
  bodies:
    ring: ring(90,39-5,0,[45,135,225,315],5,8,5,-3,0,[17,4,17,4,17,4],90)
    ring2: ring2(122.2,-120,-3,6,.4,0.4,.5,0,[4,17,4,17,4,17,4],9)  
    ring3: ring2(119.7,-140,-3,6,.4,0.35,.41,0,[4,17,4,17,4,17,4],10)  
    ring4: ring2(119.2-2.5,-160,-3,6,.4,0.28,.38,0,[4,17,4,17,4,17,4],9)  
    reactor: hub(91,0,-39+5,[45,135,225,315],6,5,1,90,[18,17,17,18,18,17])
    main:
      section_segments: 10
      offset:
        x: 0
        y: 60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-140,-138,-135,-110,-80,0,0,30,40,50,60]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,10,20,25,25,25,30,30,30,20,0]
      height: [0,4,4,20,20,20,20,20,15,15,10,10]
      texture: [12,3,3,4,4,3,4,4,5]
      propeller: true
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -30
        z: 19
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,50,82,105]
        z: [0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [9,9,9,4]      
    arm:
      section_segments: 6
      offset:
        x: 131
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-105,-104,-100,-30,0,30,34,36]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,12,17,17,17,10,0]
      height: [0,5,10,20,21,22,10,0]
      texture: [3.9]
      angle: 5
    arm2:
      section_segments: 6
      offset:
        x: 122
        y: -130
        z: -3
      position:
        x: [-6,-6,0,0]
        y: [-80,-80,30,30]
        z: [0,0,0,0]
      width: [0,2,10,0]
      height: [0,2,5,0]
      texture: [16.9,2.9]
      angle: 5  
    arm3:
      section_segments: 6
      offset:
        x: 122
        y: -130
        z: -3
      position:
        x: [-6,-6.5,-4,0]
        y: [-60,-60,30,30]
        z: [0,0,0,0]
      width: [0,1.5,5,0]
      height: [0,4,8,0]
      texture: [16.9,63]
      angle: 5
    arm4:
      section_segments: 6
      offset:
        x: 110
        y: -179
        z: -3
      position:
        x: [0.5,0.5,0,0]
        y: [-80,-80,30,30]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,4.5,1.5,0]
      texture: [16.9]
      angle: 185       
    joint:
      section_segments: 6
      offset:
        x: 142
        y: -17-5
        z: 0
      position:
        x: [-90,-90,0,0]
        y: [-150,-150,0,0]
        z: [0,0,0,0]
      width: [0,20,20,0]
      height: [0,7,7,0]
      texture: [1,8]
      angle: 90 
    joint_box:
      section_segments: [45,135,225,315]
      offset:
        x: 90
        y: 37-5
        z: 0
      position:
        x: [-42,-42,0,0]
        y: [-70,-70,0,0]
        z: [0,0,0,0]
      width: [0,16,16,0]
      height: [0,13,13,0]
      texture: [1,2]
      angle: 90   
    joint_box2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 90
        y: 42-5
        z: 0
      position:
        x: [-42,-42,0,0]
        y: [-70,-70,0,2]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,14,14,0]
      texture: [3]
      angle: 90
for i in [1..4]      
  model.bodies["flap"+i] = 
    section_segments: 6
    offset:
      x: 114+i/1.5
      y: i*20-190
      z: -3
    position:
      x: [0,0,0,0,0]
      y: [-12.5-i/2,-12.5-i/2,-10,-3+i,-3+i]
      z: [0,0,0,0,0]
    width: [0,5+i/2,4+i/2,4+i/2,0]
    height: [0,1,1+i/2,1+i/2,0]
    texture: [111,16.9,[15]]
    angle: 90         
return model;      
###    joint_box3:
      section_segments: [45,135,225,315]
      offset:
        x: 100
        y: -19
        z: 0
      position:
        x: [-48,-48,0,1]
        y: [-80,-80,0,2]
        z: [0,0,0,0]
      width: [0,10,10,9]
      height: [0,2,2,0.1]
      texture: [1]
      angle: 90  
    joint_box4:
      section_segments: [45,135,225,315]
      offset:
        x: 70
        y: 10
        z: 0
      position:
        x: [-35,-35,0,0]
        y: [-60,-60,0,0]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 90        
  ###    
      
      
      
