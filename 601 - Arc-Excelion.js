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
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle, z) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [].fill(0,13)
      y: multiplyArray([-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25], t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: vert
    texture: tx
    angle: angle     
f = 100
g = 20
y = 110
u = 120
i = -10
t = 1.3
x = 1.8
model =
  name: 'Arc-Excelion'
  level: 6
  model: 1
  size: 1.7
  next:[701,702]
  specs:
    shield:
      capacity: [380,545]
      reload: [12,16]
    generator:
      capacity: [500,600]
      reload: [200,250]
    ship:
      mass: 400
      speed: [90,120]
      rotation: [60,120]
      acceleration: [85,105]
  bodies:
    ring: ring(78.5,82,-30,12,9,9,1.5,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring2: ring(78.5,60,-30,12,9,9,1.5,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring3: ring(78.5,72,-30,[45,135,225,315],12,10,1.5,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],90)
    ring4: ring(79,-30,-72,[45,135,225,315],12,10,1.5,.1,1,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    main:
      section_segments: 12
      offset:
        x: 0
        y: -74+u
        z: 110-y-5
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30-30-21-10/t,-22-20-30/t,-15-10/t,0,15+10-10/t,22+10+15-5/t,30+20+17/t]
        z: [-12/t,0,-10/t,-10/t,-45/t,-40/t,-40/t,0,0,0]
      width: [80/t,80/t,85/t,80/t,80/t,60/t,30/t,0]
      height: [40/t,40/t,45/t,40/t,65/t,40/t,0,0]
      texture: [4]
    cockpit:
      section_segments: 3
      angle: 0
      offset:
        x: 1
        y: -120+u
        z: 120-y-10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68,-65,-60,-55,-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50,55,60,65,68].mult(0.9)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.9)
      height: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.9)
      propeller: true
      texture: [13.75]
    cockpit_front:
      section_segments: 4
      angle: 0
      offset:
        x: 0
        y: -180+u+10
        z: 120-y
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68,-65,-60,-55,-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50,55,60,65,68].mult(0.36)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.36)
      height: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.36)
      propeller: true
      texture: [7,4,7,4,7,4,7,4,7,4,7,4,7,4]      
    back:
      section_segments: 3
      angle: 90
      offset:
        x: 0
        y: -80-2+u
        z: 130+5-y-10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68,-65,-60,-55,-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50,55,60,65,68].mult(0.9)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.9)
      height: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.9)
      propeller: true
      texture: [3.6]      
    bottom:
      section_segments: 4
      angle: 90
      offset:
        x: 0
        y: -160+u+5
        z: 100-y+2
      position:
        x: [0,-30,-10,-9,-6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-6,-9,-10,-30,0]
        y: [-68,-64,-60,-55,-50,-45,-40,-35,-30,-25,-20,-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50,55,60,64,68].mult(0.9)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26-i,36-i,43-i,49-i,54-i,57-i,60-i,63-i,65-i,67-i,68-i,69-i,69.8-i,70-i,69.8-i,69-i,68-i,67-i,65-i,63-i,60-i,57-i,54-i,49-i,43-i,36-i,26-i,0].mult(0.9)
      height: [0,26,36,43,49,54,57,60,63,65,67,68,69,69.8,70,69.8,69,68,67,65,63,60,57,54,49,43,36,26,0].mult(0.9).add(4).mult(0.4)
      propeller: true
      texture: [3]    
    engines:
      section_segments: 12
      offset:
        x: 77
        y: 110-f
        z: -20-g
      position:
        x: [-9,-9,-9,-9,-9,0,0,0,-4,-4,-5,-5,-5]
        y: [-160,-90,-60,-30,10,40,80,80,108,108,118,118,105]
        z: [10,10,10,10,10,10,10,10,10,10,6,6,6]
      width: [0,10,10,10,10,10,10,10,10,9,18,16,0]
      height: [0,10,10,10,10,10,10,10,10,9,10,8,0]
      texture: [17,13,17,13,17,13,17,17,17,13,17]
      propeller: false
      laser:
        damage: [150,170]
        rate: 1
        type: 1
        speed: [150,170]
        recoil: 150
        number: 1
        error: 0
    maine:
      section_segments: 20
      offset:
        x: 0
        y: 269-f
        z: 50-20-g
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-120,-137,-105,-70,-0,25,24]
        z: [0,20,0,0,21,25,25]
      width: [0,40,50,40,20,11,0]
      height: [0,10,30,30,11,5,0]
      texture: [63,4,4,4,4,11]
    horns:
      section_segments: 8
      offset:
        x: 10
        y: 300-f
        z: 10-g
      position:
        x: [0,25,35,50,65,55,55]
        y: [-120,-150,-125,-100,-80,-45,0]
        z: [0,20,20,22,21,25,24,26]
      width: [0,10,20,10,12,10,0,0]
      height: [0,20,20,25,25,20,0]
      texture: [[15]]
    propeller:
      section_segments: 20
      offset:
        x: 72
        y: 275-f
        z: -14-g
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [5]
      texture: [1]
      propeller:true
    laser:
      section_segments: 12
      offset:
        x: 77
        y: 110-f
        z: -20-g
      position:
        x: [-9,-9,-9,-9,-9,0,0,0,-4,-4,-5,-5,-5]
        y: [-160,-90,-60,-30,10,40,80,80,108,108,118,118,105]
        z: [10,10,10,10,10,10,10,10,10,10,6,6,6]
      width: [0,10,10,10,10,10,10,10,10,9,18,16,0]
      height: [0,10,10,10,10,10,10,10,10,9,10,8,0]
      texture: [17,13,17,13,17,13,17,17,17,13,17]
      propeller: false
      laser:
        damage: [80,100]
        rate: 2
        type: 2
        speed: [130,160]
        recoil: 50
        number: 1
        error: 2  
        angle:2
    laser2:
      section_segments: 12
      offset:
        x: 77
        y: 110-f
        z: -20-g
      position:
        x: [-9,-9,-9,-9,-9,0,0,0,-4,-4,-5,-5,-5]
        y: [-160,-90,-60,-30,10,40,80,80,108,108,118,118,105]
        z: [10,10,10,10,10,10,10,10,10,10,6,6,6]
      width: [0,10,10,10,10,10,10,10,10,9,18,16,0]
      height: [0,10,10,10,10,10,10,10,10,9,10,8,0]
      texture: [17,13,17,13,17,13,17,17,17,13,17]
      propeller: false
      laser:
        damage: [45,75]
        rate: 4
        type: 2
        speed: [120,170]
        recoil: 25
        number: 1
        error: 4
        angle: 4
    laser3:
      section_segments: 12
      offset:
        x: 77
        y: 110-f
        z: -20-g
      position:
        x: [-9,-9,-9,-9,-9,0,0,0,-4,-4,-5,-5,-5]
        y: [-160,-90,-60,-30,10,40,80,80,108,108,118,118,105]
        z: [10,10,10,10,10,10,10,10,10,10,6,6,6]
      width: [0,10,10,10,10,10,10,10,10,9,18,16,0]
      height: [0,10,10,10,10,10,10,10,10,9,10,8,0]
      texture: [17,13,17,13,17,13,17,17,17,13,17]
      propeller: false
      laser:
        damage: [20,30]
        rate: 6
        type: 2
        speed: [150,175]
        recoil: 10
        number: 1
        error: 5
        angle: 5
    front_wing_colour:
      section_segments: [45,135,225,315]
      offset:
        x: 104
        y: -22
        z: -11
      position:
        x: [0,0,-37,-37]
        y: [0,0,15,15]
        z: [-20,-20,-4,-4]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,18,4]       
      angle: 90    
    front_wing_colour2:
      section_segments: [45,135,225,315]
      offset:
        x: 103.9
        y: -6
        z: -11
      position:
        x: [0,0,-26,-26]
        y: [0,0,10,10]
        z: [-20,-20,-9,-9]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,18,4]       
      angle: 90   
    front_wing_colour3:
      section_segments: [45,135,225,315]
      offset:
        x: 103.9
        y: 10
        z: -11
      position:
        x: [0,0,-15,-15]
        y: [0,0,5,5]
        z: [-18,-18,-12,-12]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,18,4]       
      angle: 90     
    front_wing_colour4:
      section_segments: [45,135,225,315]
      offset:
        x: 104.1
        y: -20
        z: -11
      position:
        x: [0,0,-37,-37]
        y: [0,0,15,15]
        z: [-20,-20,-4,-4]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,17,4]       
      angle: 90    
    front_wing_colour5:
      section_segments: [45,135,225,315]
      offset:
        x: 103.8
        y: -4
        z: -11
      position:
        x: [0,0,-26,-26]
        y: [0,0,10,10]
        z: [-20,-20,-9,-9]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,17,4]       
      angle: 90   
    front_wing_colour6:
      section_segments: [45,135,225,315]
      offset:
        x: 104
        y: 12
        z: -11
      position:
        x: [0,0,-15,-15]
        y: [0,0,5,5]
        z: [-18,-18,-12,-12]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [4,17,4]       
      angle: 90           
  wings:
    back:
      offset:
        x: 40
        y: 15-f
        z: 30-4-g+4
      length: [11,11,11,11,4,2,30]
      width: [135,235,206,122,327,122,122,100]
      angle: [-35,-35,-35,-38,-8,-8,-48]
      position: [80,65,60,160,160,260,260,300]
      texture: [17,18,4,18,18,17,4]
      doubleside: true
      bump:
        position: 40
        size: 2
    outer:
      offset:
        x: 45
        y: -115-f
        z: 20-g+4
      length: [10,12,2,12,2,22,2,7,2,32]
      width: [135,265,235,256,256,222,127,127,120,120,35]
      angle: [-35,-35,-35,-35,-35,-38,-8,-8,-8+30,48]
      position: [120,104,104,124,144,147,179,183,200,200,211]
      texture: [4,4,17,4,17,18,17,4,17,4]
      doubleside: true
      bump:
        position: 30
        size: 2
    outer2:
      offset:
        x: 45
        y: -115-f+2
        z: 20-g+4
      length: [10,12,2,12,2,22,2,7,2,32]
      width: [135,235,235,256,256,222,127,127,120,120,35]
      angle: [-35,-35,-35,-35,-35,-38,-8,-8,-8+30,47.9]
      position: [120,104,104,154,154,147,179,183,200,200,211]
      texture: [4,4,17,4,17,4,17,4,17,4]
      doubleside: true
      bump:
        position: 30
        size: 2        
    coloredside:
      offset:
        x: -60-4
        y: -25-f
        z: 17-g
      length: [13]
      width: [215,172]
      angle: [40]
      position: [90,0]
      texture: [63,63]
      doubleside: true
      bump:
        position: 0
        size: 0
    coloredside2:
      offset:
        x: -66-5
        y: 40-f
        z: 10+2-g
      length: [13]
      width: [215,172]
      angle: [40]
      position: [90,0]
      texture: [63,63]
      doubleside: true
      bump:
        position: 0
        size: 0
    coloredside3:
      offset:
        x: -70-7
        y: 130-f
        z: 10-4-g+2
      length: [10]
      width: [130,160]
      angle: [40]
      position: [10,0]
      texture: [63,63]
      doubleside: true
      bump:
        position: 0
        size: 0
    coloredstripe:
      offset:
        x: 0
        y: 200-120+10
        z: 80-20-20+0.9
      length: [3,6,12]
      width: [200-10,200-10,130,55]
      angle: [0,0,0]
      position: [0,0,0,0]
      texture: [63,63]
      doubleside: true
      bump:
        position: 30
        size: 2
    coloredstripe2:
      offset:
        x: 0
        y: 200-120+10
        z: 80-20-20+1.9
      length: [3/x,6/x,4/x]
      width: [120-10/x,110-10/x,110/x,55/x]
      angle: [0,0,0]
      position: [0,0,-10,0]
      texture: [17,63]
      doubleside: true
      bump:
        position: 30
        size: 3   
for i in [1...7]
  model.bodies["wing_color"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 83
      y: i*15+115
      z: -16
    position:
      x: [0,0,-50,-50]
      y: [0,0,20,20]
      z: [0,0,-20,-20]
    width: [0,2,2,0]
    height: [0,2,2,0]
    texture: [111,111,4]       
    angle: 90
  model.bodies["wing_color2"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 83
      y: i*15+117
      z: -16
    position:
      x: [0,0,-50,-50]
      y: [0,0,20,20]
      z: [0,0,-20,-20]
    width: [0,3,3,0]
    height: [0,1.9,1.9,0]
    texture: [17,17,4]       
    angle: 90    
  model.bodies["wing_color3"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 83
      y: i*15+114
      z: -16
    position:
      x: [0,0,-50,-50]
      y: [0,0,20,20]
      z: [0,0,-20,-20]
    width: [0,3,3,0]
    height: [0,1.9,1.9,0]
    texture: [63,63,4]       
    angle: 90  
for i in [1...4]
  model.bodies["front_wing_color"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 104
      y: i*15-82
      z: -11
    position:
      x: [0,0,-48,-48]
      y: [0,0,20,20]
      z: [-20,-20,1,0]
    width: [0,2,2,0]
    height: [0,2,2,0]
    texture: [4,18,4]       
    angle: 90  
  model.bodies["front_wing_color2"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 104.1
      y: i*15-80
      z: -11
    position:
      x: [0,0,-48,-48]
      y: [0,0,20,20]
      z: [-20,-20,1,0]
    width: [0,2,2,0]
    height: [0,2,2,0]
    texture: [4,17,4]       
    angle: 90      
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
