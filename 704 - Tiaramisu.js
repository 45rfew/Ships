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
  model: 4
  size: 2
  specs:
    shield:
      capacity: [700,700]
      reload: [50,50]
    generator:
      capacity: [600,600]
      reload: [300,300]
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
    ring5: ring(126,0,2,6,5,3,5,-3,0,17,0)
    ring6: ring(125,-11,2,6,5,3,5,-3,0,17,0)
    ring7: ring(119,29-6,0,[45,135,225,315],5,8,5,-3,0,[17,4,17,4,17,4],94)
    ring8: ring(137,28,2,6,7,3,5,-3,0,16.9,5)
    ring9: ring(136,15,2,6,6.3,3,5,-3,0,16.9,5)
    ring10: ring(130,-39,1,6,5,3,5,-3,0,16.9,10)
    ring11: ring(128.7,-51,0.5,6,4.5,3,5,-3,0,16.9,10)
    ring12: ring(127.4,-64,0,6,3,2,5,-3,0,16.9,10)
    ring13: ring(126.8,-77,0.6,6,.5,1,5,-3,0,16.9,10)
    ring14: ring(0,93,50,6,5,14,.5,.4,0,16.9,90)
    ring15: ring(36,40,0,[25,135+20,225,315],10,5,5,-3,0,16.9,0)
    ring16: ring(36,30,0,[25,135+20,225,315],10,5,5,-3,0,16.9,0)
    reactor: hub(91,0,-39+5,[45,135,225,315],6,5,1,90,[18,17,17,18,18,17])
    reactor2: hub(118,0,-29+6,[45,135,225,315],6,5,1,270,[18,17,17,18,18,17])
    lips: hub(0,23-5,0,[45,135,225,315],12,5,0,180,17)
    reactor3: hub(144,-2,0,16,6,5,0,95,[18,17,17,18,18,17])
    reactor4: hub(142,-22,0,16,5,5,0,95,[18,17,17,18,18,17])
    reactor5: hub(0,47,-105,16,4.5,6,1,0,[18,17,17,18,18,17])
    reactor6: hub(0,47,-81,16,4.5,6,1,0,[18,17,17,18,18,17])
    reactor7: hub(35,17,-76,16,6,6,1,15,[18,17,17,18,18,17])
    main:
      section_segments: [45,135,225+20,315-20]
      offset:
        x: 2.5
        y: 80-5
        z: 0
      position:
        x: [0,0,18.5,16.5,16.5,16.5]
        y: [-145,-145,-60,-60,60,60]
        z: [0,0,0,0,0,0]
      width: [0,1,25,27,27,0]
      height: [0,1,26,26,26,0]
      texture: [17,2.8,2.8,2.8,16.8]
      laser:
        damage: [50,50]
        rate: 1
        type: 1
        speed: [200,200]
        number: 5
        angle: 0
        error: 0        
    lights:
      section_segments: [45,135,225,315]
      offset:
        x: 3.5
        y: -110-5
        z: 0
      position:
        x: [0,0,1,1]
        y: [-140,-140,-60,-60]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,20,.5,0]
      texture: [17]    
      angle: 180
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 30-5
        z: 15
      position:
        x: [0,0,0,0,0,0]
        y: [-10,-2,20,30,110,110]
        z: [0,0,0,0,0,0]
      width: [0,10,13,13,13,0]
      height: [0,8,11,13,13,0]
      propeller: false
      texture: [7,9,9,4,4]  
    propeller:
      section_segments: 6
      offset:
        x: 0
        y: 113-5
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [0,0,30,30,25]
        z: [0,0,0,0,0]
      width: [0,40,35,28,0]
      height: [0,19,19,17,0]
      propeller: true
      texture: [16.9]        
    stand:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 40-5
        z: 33
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [27,28,30,45,45,70,85,88,90]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,17,24,28,28,28,24,15,0].mult(1.2)
      height: [0,10,15,20,20,20,17,13,0].div(2)
      texture: [2,2,2,2,10,2]     
    shield:
      section_segments: [0,60-10,120+10,180]
      offset:
        x: -25+5
        y: 93-5
        z: 0
      position:
        x: [14,14,8.5,0,0,0,0,0,0,-6.5,-7.5,-7.5]
        y: [-145,-145,-105,-73,-70,-43,-40,17,20,56,59,50]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [-10,-5,12.5,25,25,25,25,25,25,15,13,0].add(10)
      height: [0,3.5,12,20,20.3,22,22,25,25,25,23,0]
      texture: [16.9,4,18,17,3.9,17,18,17,3.9,16.9]
    shield2:
      section_segments: [0,60-10,120+10,180]
      offset:
        x: -25+5.1
        y: 93-5
        z: 0
      position:
        x: [14,8.5,0,0,0,-6.5,-6.5,-6.5]
        y: [-145,-105,-73,-40,20,56,56,47]
        z: [0,0,0,0,0,0,0,0]
      width: [-5,12.5,25,25,25,15,15,15].add(10)
      height: [3.5,12,20,22,25,25,25,25]
      texture: [3.6]
    shield3:
      section_segments: [0,60-10,120+10,180]
      offset:
        x: -25+4.9
        y: 93-5
        z: 0
      position:
        x: [14,8.5,0,0,0,-6.5,-6.5,-6.5]
        y: [-145,-105,-73,-40,20,56,56,47]
        z: [0,0,0,0,0,0,0,0]
      width: [-5,12.5,25,25,25,15,15,15].add(10)
      height: [3.5,12,20,22,25,25,25,25].div(1.1)
      texture: [3.6,17.6,3.6,17.6,3.6]      
    deco:
      section_segments: [0,60-10,120+10,180]
      offset:
        x: -22
        y: 117
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,25,25,0].add(8)
      height: [0,20,20,0].mult(1.29)
      texture: [63]
    deco2:
      section_segments: [0,60-10,120+10,180]
      offset:
        x: -25
        y: 130
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,25,25,0].add(3)
      height: [0,20,20,0].mult(1.27)
      texture: [63]      
    arm:
      section_segments: 6
      offset:
        x: 131
        y: 0+7
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-105,-104,-100,-30,0,30,34,36]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,12,17,17,17,10,0]
      height: [0,5,10,20,21,22,10,0]
      texture: [3.9,3.9,18,3.9,18,3.9]
      angle: 5
    arm2:
      section_segments: 6
      offset:
        x: 122
        y: -130+7
        z: -3
      position:
        x: [-6,-6,0,0]
        y: [-80,-80,30,30]
        z: [0,0,0,0]
      width: [0,2,10,0]
      height: [0,2,5,0]
      texture: [16.9,2.9]
      angle: 5
      laser:
        damage: [20,20]
        rate: 5
        type: 2
        speed: [140,140]
        number: 1
        angle: 0
        error: 2        
    arm3:
      section_segments: 6
      offset:
        x: 122
        y: -130+7
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
        y: -179+7
        z: -3
      position:
        x: [0.5,0.5,0,0]
        y: [-80,-80,30,30]
        z: [0,0,0,0]
      width: [0,1,1,0]
      height: [0,4.5,1.5,0]
      texture: [16.9]
      angle: 185 
    arm5:
      section_segments: 6
      offset:
        x: 131.5
        y: 0+7
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-105,-104,-100,-30,0,30,34,36]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,12,17,17,17,10,0]
      height: [0,5,10,20,21,22,10,0]
      texture: [2.9,2.9,8,2.9,8,3.9]
      angle: 5   
    arm6:
      section_segments: 6
      offset:
        x: 134
        y: -33.5
        z: 10
      position:
        x: [-6,-6.5,-6.5,-6.5,-6.5]
        y: [-60,-60,10,70,70]
        z: [0,-3,3.5,5.5,5.5]
      width: [0,3,5,5,0]
      height: [0,4,8,8,0]
      texture: [16.9,63]
      angle: 5      
    lights2:
      section_segments: [45,135,225,315]
      offset:
        x: 120
        y: -70+7
        z: 0
      position:
        x: [0,5,7,0]
        y: [-50,-50,29,29]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,5,1.5,0]
      texture: [17]
      angle: 180 
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 7
        y: 38
        z: -98+5
      position:
        x: [0,0,0,0,0,0]
        y: [-7,-7,6,8,6,6]
        z: [0,0,0,0,0,0]
      width: [0,7,7,3,1,1].div(1.5)
      height: [0,30,30,26,24,0].mult(1.05)
      texture: [3,3,63,17]
      vertical: true
      angle: 30      
    box2:
      section_segments: [45,135,225,315]
      offset:
        x: 8
        y: 13
        z: -71+5
      position:
        x: [0,0,0,0,0,0]
        y: [-7,-7,6,8,6,6]
        z: [0,0,0,0,0,0]
      width: [0,7,7,3,1,1].div(1.5)
      height: [0,30,30,26,24,0].mult(1.05)
      texture: [3,3,63,17]
      vertical: true
      angle: 30            
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
    joint2:
      section_segments: [45,135,225,315]
      offset:
        x: 142
        y: -17-5
        z: 0
      position:
        x: [-90,-90,0,0]
        y: [-150,-150,0,0]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,9,9,0]
      texture: [17]
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
    joint3:
      section_segments: [45,135,225,315]
      offset:
        x: 121
        y: 17
        z: 0
      position:
        x: [-20,-20,0,0]
        y: [-30,-30,0,0]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,5,5,0]
      texture: [9.96]
      angle: 90       
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: 115-5
        z: 43
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-93,-97,-97,-92,-90,-49,-47,-40,5,8,8]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,6,7,6,6,6,11,11,0]
      height: [0,3,4,5,3,3,5,7,8,0]
      texture: [16.9,16.9,16.9,4,18,4,16.9,3.9]  
      laser:
        damage: [40,40]
        rate: 3
        type: 2
        speed: [180,180]
        number: 1
        error: 2   
    propeller_sides:
      section_segments: 6
      offset:
        x: 35
        y: 170-5
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [14]
      height: [23]
      propeller: true
    bump:
      section_segments: [45,135,225,315]
      offset:
        x: 70
        y: 25
        z: 9
      position:
        x: [0,0,0,0,0]
        y: [-1,-1,12,20,20]
        z: [-4.9,-4.9,-1,0,0]
      width: [0,3,3,3,0]
      height: [0,4,4,4,0]
      texture: [63,63,4]
      angle: 30
    bump2:
      section_segments: [45,135,225,315]
      offset:
        x: 60
        y: 25+6
        z: 9
      position:
        x: [0,0,0,0,0]
        y: [-1,-1,12,20,20]
        z: [-4.9,-4.9,-1,0,0]
      width: [0,3,3,3,0]
      height: [0,4,4,4,0]
      texture: [63,63,4]
      angle: 30      
  wings: 
    top:
      doubleside: true
      offset:
        x: 35
        y: 65
        z: 14.5
      length: [0,0,-6,-1,-19,-1.5,-1.5,-10].mult(1)
      width: [0,20,20,20,20,60,30,30,0].mult(2)
      angle: [280,280,315-60,315-20,300,300,300,0]
      position: [50,50,50,50,50,8,28,28,50]
      texture: [63,63,63,17,11,17,63]
      bump:
        position: 30
        size: -4 
    top2:
      doubleside: true
      offset:
        x: 35
        y: 66
        z: 14.5
      length: [0,0,-6,-1,-19,-1.5,-1.5,-10].mult(1)
      width: [0,20,20,20,20,60,30,30,0].mult(2)
      angle: [280,280,315-60,315-20,300,300,300,0]
      position: [50,50,50,50,50,8,28,28,50]
      texture: [63,63,63,17,18,17,63]
      bump:
        position: 30
        size: -4         
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
for i in [0..6]
  model.bodies["a"+i] = 
    ring(4,i*10-45-5,0,[45,135,225,315],0+i*2.5,1,1,.5,0,[17,4,17,4,17,4],0)
  model.bodies["c"+i] =
    section_segments: 6
    offset:
      x: 0
      y: i*6.5+23
      z: 43
    position:
      x: [0,0,0,0,0]
      y: [-2,-2,-2,0,0]
      z: [0,0,0,0,0]
    width: [0,5.5,7,7,0].add(i/4)
    height: [0,3.5,5,5,0].add(i/4)
    texture: [[15],16.9]
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
      
      
