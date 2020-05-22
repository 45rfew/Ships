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
a = 0.6
model =
  name: "Pusat"
  level: 7
  model: 6
  size: 2
  specs:
    shield:
      capacity: [300,300]
      reload: [20,20]
    generator:
      capacity: [150,150]
      reload: [60,60]
    ship:
      mass: 260
      speed: [145,145]
      rotation: [85,85]
      acceleration: [60,60]
  bodies:
    ring: ring(34.5,79,1.5,[40,45,50,130,135,140,220,225,230,310,315,320],12,13,0.6,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring2: ring(34.5,69,1.5,[40,45,50,130,135,140,220,225,230,310,315,320],12,13,0.6,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring3: ring(38.5,5,-74,[45,135,225,315],7,8.1,0.6,.1,1,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring4: ring(38.5,-2,-74,[45,135,225,315],7,8.1,0.6,.1,1,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring5: ring(30,-95,-8.7,[40,45,50,130,135,140,220,225,230,310,315,320],4.5,6,0.6,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring6: ring(30,-90,-8.7,[40,45,50,130,135,140,220,225,230,310,315,320],4.5,6,0.6,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring7: ring(30,-85,-8.7,[40,45,50,130,135,140,220,225,230,310,315,320],4.5,6,0.6,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring8: ring(30,-80,-8.7,[40,45,50,130,135,140,220,225,230,310,315,320],4.5,6,0.6,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring9: ring(30,-75,-8.7,[40,45,50,130,135,140,220,225,230,310,315,320],4.5,6,0.6,.1,0,[[15],17,[15],[15],17,[15],[15],17,[15]],0)
    ring10: ring(0,40,9.5,6,16,16,0.6,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring11: ring(0,50,14.5,6,6,16,0.6,.1,0,[18,17,18,18,17,18,18,17,18],0)
    ring12: ring(12,45,14.5,8,8,8,0.6,.1,0,[[15],[15],63,63,[15]],0)
    ring13: ring(7,68,19,8,4,4,0.5,.1,0,[[15],[15],63,63,[15]],0)
    ring14: ring(0,61,19,8,4,4,0.5,.1,0,[[15],[15],63,63,[15]],90)
    ring15: ring(0,75,19,8,4,4,0.5,.1,0,[[15],[15],63,63,[15]],90)
    front:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-126,-126,-115,-70,-23,-5,-5,-5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,9.6,25,25,25,23,0]
      height: [0,5.3,8.4,20,20,15,13,0]
      texture: [12,2,3.9,18,10,63,4]
      laser:
        damage: [100,100]
        rate: 1
        type: 1
        speed: [240,240]
        number: 1
        error: 0
        recoil: 160  
    back:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-20,-20,-10,-8,40,70,80,90,100,100,100,85]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,25,25,25,25,25,35,35,35,30,28,0]
      height: [0,15,20,20,19,20,20,20,20,15,13,0]
      texture: [63,18,17,4,18,3.9,3.9,4.9,4.9,16.84]
      propeller: true
    head:
      section_segments: 6
      offset:
        x: 0
        y: -2
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-130,-128,-115,-70,-70]
        z: [0,0,0,0,0]
      width: [0,5,10,25,25]
      height: [0,5,8.1,20,20].div(1.1)
      texture: [3.9]  
    head_top:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-115,-115,-115,-70,-70]
        z: [0,0,0,0,0]
      width: [0,0,11.2,29,25].div(1.3)
      height: [0,0,8.4,20,20].mult(1.1)
      texture: [17,63,3] 
    head_top2:
      section_segments: 5
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-115,-115,-115,-70,-70]
        z: [0,0,1.1,2.4,0]
      width: [0,0,11.2,29,25].div(1.4)
      height: [0,0,8.4,20,20].mult(1)
      texture: [17,18] 
    head_top3:
      section_segments: 5
      offset:
        x: 0
        y: 0
        z: -0.1
      position:
        x: [0,0,0,0,0]
        y: [-115,-115,-115,-70,-70]
        z: [0,0,1.1,2.4,0]
      width: [0,0,11.2,29,25].div(1.3)
      height: [0,0,8.4,20,20].div(1)
      texture: [63,63,17]       
    bottom:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [0,-80,-30,-25,0,20,50,80]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,0,0,20,27+3,30,25,0]
      height: [0,2,20-5,20-5,20,20,20,0]
      texture: [4,3,2,3,11,18]             
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: 30
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-20,0,10,20,30,48]
        z: [0,0,-2,-4,0,-9,0]
      width: [0,10,15,15,15,10,0]
      height: [0,10,15,15,5,10,0]
      texture: [9,9,9,4,4]
    cannons_main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -100
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,0,0,30,35,45,47,74,76,97,102,173]
        z: [-17,-17,-17,-17,-10,-10,-10,-11,-10,-10,-10,-10,-10]
      width: [0,5,5+1.5,5+1.5,7,7,0,0,4+3,4+3,7+3,7+3]
      height: [0,3.5,5,5,8,10,0,0,10,10,8,8]
      texture: [17,17,13,4,8,18,1,18,7,7,7,8]
      propeller: false   
      laser:
        damage: [15,15]
        rate: 8
        type: 2
        speed: [280,280]
        number: 1
        error: 5
        recoil: 20    
    joints:
      section_segments: [45,135,225,315]
      offset:
        x: 16
        y: 8.5
        z: -15-10
      position:
        x: [0,0,0,0,0,0]
        y: [-7,-7,6,8,6,6]
        z: [0,0,0,0,0,0]
      width: [0,7,7,3,1,1]
      height: [0,30,30,26,24,0].mult(1.19)
      texture: [8,8,63,17,18]
      vertical: true
      angle: 30  
    sides:
      section_segments: [0,60,120,180]
      offset:
        x: -14
        y: 32
        z: 14
      position:
        x: [0,0,0,0,0,0,-8,-8]
        y: [-20,-20,4,6,18,20,35,35]
        z: [-7,-4,-4,-3,-3,-3,-6,-6]
      width: [0,5,15,15,15,15,5,0]
      height: [0,5,10,10,10,10,3,0]
      texture: [16.9,4,63,18,63,4]      
    joins:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -54.5
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-5,0,5,10,15,20,25,30,35,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,5,1,5,1,5,1,5,1,0]
      height: [0,1,7,1,7,1,7,1,7,1,0]
      texture: [17,18,17,18,17,18,17,18,17,18]
      propeller: false 
    cannon_joint:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -13.5
        z: 50-1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19]
        z: [0,0,0,0,0,0,-5,-5,-5,-5,0,0,-10,-10,-10,-10,0,0,-15,-15,-15,-15,0,0,-20,-20,-20,-20]
      width: [0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0]
      height: [0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0]
      texture: [17,18,17,18,17,18,17,18,17,18,17,18,1,18,17,18,17,18,17,18,17,18,17,18,17,18,17,18]
      propeller: false 
      vertical: true
    cannon_joint_side:
      section_segments: [80,90,100]
      offset:
        x: -20
        y: -55
        z: -2
      position:
        x: [53,53,53,53]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false         
    cannon_joint_side2:
      section_segments: [-100,-90,-80]
      offset:
        x: -10.52
        y: -55
        z: -2
      position:
        x: [53-15,53-15,53-15,53-15]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false               
    rear_cannon:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30+10
        y: -55+120
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,20]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false
    rear_cannon1:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30+10
        y: -55+120
        z: -3
      position:
        x: [-5,0,0]
        y: [-40,-20,0]
        z: [0,0,0]
      width: [4,4.01,4.01]
      height: [5,5,5]
      texture: [3,18,4]
      propeller: false        
    rear_cannon2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -55+120
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,20]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false     
    rear_propeller:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 34.5
        y: -8+83.5
        z: 1.7
      position:
        x: [0,0,0,0,0,-4,-4,-4]
        y: [-10,-10,-8,5,7,20,20,10]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,13,13,13,13,12,0]
      height: [5,12,12,12,12,10,9,0]
      texture: [3,17,13,17,5,17]
      propeller: true     
    rear_propeller2:
      section_segments: [45,135,225,315]
      offset:
        x: 21
        y: 0
        z: 25
      position:
        x: [-10,-10,-4,-4]
        y: [0,0,94,94]
        z: [-5,-5,-11,-10]
      width: [0,3,1.3,0]
      height: [0,2,0.3,0]
      texture: [17]
      angle: 180
    hubs:
      section_segments: 8
      offset:
        x: 5
        y: 17
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-4,-4,-6,-6,8,8].div(1.4)
        z: [0,0,0,0,0,0,0,0]
      width: [-4,4,4,5,5,6,6,0].div(1.9)
      height: [-4,4,4,5,5,6,6,0].div(1.9)
      vertical: true
      texture: [17,18,18,18,63,4]
      angle: 205      
    reactor:
      section_segments: 12
      angle: 0
      offset:
        x: 0
        y: 14
        z: -68
      position:
        x: [0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,5.5*5/4]
        z: [0,0,0,0,0]
      width: [2.2*5-0.6,2.2*5-0.6,10-0.6,10-0.6,10-0.6]
      height: [2.2*5-0.6,2.2*5-0.6,10-0.6,10-0.6,0]
      texture: [17,2,17,11]
      vertical: true
    reactor_top:
      section_segments: 8
      angle: 0
      offset:
        x: 0
        y: 19
        z: -68
      position:
        x: [0,0,0,0]
        y: [-10,-10,0,5]
        z: [0,0,0,0]
      width: [0,10,10,0]
      height: [0,10,10,0]
      texture: [18]
      vertical:true
    reactor_bottom:
      section_segments: 12
      angle: 0
      offset:
        x: 0
        y: 13
        z: -68
      position:
        x: [0,0,0,0,0]
        y: [-0.5*5,30/4,30/4,5.5*5/4,5.5*5/4]
        z: [0,0,0,0,0]
      width: [3.2*5,3.2*5,14,14,0]
      height: [3.2*5,3.2*5,14,14,0]
      texture: [3,17,3,18]
      vertical: true   
    reactor_reactor:
      section_segments: 8
      offset:
        x: 10
        y: 16.5
        z: -68
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0].div(1.5)
      height: [0,3,3,4,4,5,5,0].div(1.5)
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 180      
    reactor_reactor2:
      section_segments: 8
      offset:
        x: 0
        y: 16.5
        z: -58
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0].div(1.5)
      height: [0,3,3,4,4,5,5,0].div(1.5)
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 180
    reactor_reactor3:
      section_segments: 8
      offset:
        x: 0
        y: 16.5
        z: -78
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0].div(1.5)
      height: [0,3,3,4,4,5,5,0].div(1.5)
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 180      
    body_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 12
        y: 0-15
        z: 14
      position:
        x: [0,0,0,5,5,5]
        y: [-8*5,-8*5,-5,5,25,25]
        z: [2,2,1,0,0,0]
      width: [0,0.4*5,0.4*5,0.4*5,0.4*5,0]
      height: [0,0.6*5,0.6*5,0.6*5,0.6*5,0]
      texture: [3] 
    body_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 11.2
        y: 0-15
        z: 13.99
      position:
        x: [-5,-5,0,0,0,0]
        y: [-4.95,-4.95,5,8*5,8*5,7.99*5]
        z: [0,0,1,2,2,2,2]
      width: [0,0.4*5,0.4*5,0.4*5,0.4*5,0]
      height: [0,0.6*5,0.6*5,0.6*5,0.6*5,0]
      texture: [7,18,17,7,7]   
      angle:180
    body_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 11.2
        y: 0-15
        z: 13.99
      position:
        x: [5,5,5]
        y: [5,25,25]
        z: [0,0,0]
      width: [0.4*5,0.4*5,0.4*5]
      height: [0.6*5,0.6*5,0.6*5]
      texture: [17]       
    cannon_base:
      section_segments: [45,135,225,315]
      angle: 0
      offset:
        x: 0
        y: -48
        z: 17
      position:
        x: [0,0,0,0,0,0]
        y: [-22,-22,-10,-5,25,25]
        z: [0,0,0,0,-1,-1]
      width: [0,10,2.5*5,1.8*5,1.8*5,0]
      height: [0,5,5,5,5,0]
      texture: [7]
    cannon_base_deco:
      section_segments: [45,135,225,315]
      angle: 0
      offset:
        x: 0
        y: -31
        z: 19
      position:
        x: [0,0,0,0]
        y: [-1.5*5,-1.5*5,1.5*5,1.5*5]
        z: [0,0,0,0]
      width: [0,1.2*5,1.2*5,0]
      height: [0,0.5*5,0.5*5,0]
      texture: [4,15,4]
    cannon_base_deco2:
      section_segments: [45,135,225,315]
      angle: 0
      offset:
        x: 5
        y: -62.4
        z: 20
      position:
        x: [0.5,0.4*5,0,0.5,0.5,0.5]
        y: [-3.8*2,4.5,1.7*5,2.8*5,7.9*5,7.9*5]
        z: [0,0,0,0,-0.8,-0.8]
      width: [0.8,1,1,1,1,0]
      height: [1,1,1,1,1,0]
      texture: [63]  
    cannon_front:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-93,-96,-92,-90,-50-3,-47-3,-45-3,-43.5,-43.5]
        z: [0,0,0,0,0,0,0,-2,-2]
      width: [0,6*a,7*a,6.7*a,6.7*a,8*a,8*a,8*a,0]
      height: [0,4*a,5*a,3*a,3*a,4*a,5*a,5*a,0]
      texture: [17,13,5,1,5,17,3,4]
      laser:
        damage: [70,70]
        rate: 3
        type: 1
        speed: [300,300]
        number: 1
        error: 0
        recoil: 100
    front_cannon_deco:
      section_segments: 8
      offset:
        x: 0
        y: -32.5
        z: 24
      position:
        x: [-2.3,-2.3,-2.4,-2.2]
        y: [0,0,38,0]
        z: [0,0,0,0]
      width: [0,1.5*a,1.5*a,0]
      height: [0,1*a,1*a,0]
      texture: [7.5]
      angle: 187
    front_cannon_deco2:
      section_segments: 8
      offset:
        x: 0
        y: -32.5
        z: 24
      position:
        x: [2.3,2.3,2.4,2.2]
        y: [0,0,38,0]
        z: [0,0,0,0]
      width: [0,1.5*a,1.5*a,0]
      height: [0,1*a,1*a,0]
      texture: [7.5]
      angle: -187
  wings:
    winglets:
      doubleside: true
      offset:
        x: 10
        y: 60
        z: 5
      length: [30]
      width: [50,30]
      angle: [60]
      position: [0,50]
      texture: [3]
      bump:
        position: 10
        size: 10
    winglets2:
      doubleside: true
      offset:
        x: 10
        y: 61
        z: 5
      length: [30]
      width: [50,30]
      angle: [60]
      position: [0,50]
      texture: [18]
      bump:
        position: 10
        size: 9   
    back:
      doubleside: true
      offset:
        x: 10
        y: 70
        z: 10
      length: [30]
      width: [40,20]
      angle: [3]
      position: [0,60]
      texture: [63]
      bump:
        position: 10
        size: 10
    back2:
      doubleside: true
      offset:
        x: 10
        y: 75
        z: 10
      length: [30]
      width: [40,20]
      angle: [3]
      position: [0,60]
      texture: [7]
      bump:
        position: 10
        size: 9        
    main:
      doubleside: true
      offset:
        x: 25
        y: -70
        z: 14
      length: [1,25]
      width: [0,190,76]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,63]
      bump:
        position: 20
        size: 7
    main2:
      doubleside: true
      offset:
        x: 22.8
        y: -70
        z: 14
      length: [1,25]
      width: [0,190,36]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,17]
      bump:
        position: 20
        size: 7
    main3:
      doubleside: true
      offset:
        x: 25
        y: -65
        z: 13
      length: [0,30]
      width: [0,184,76]
      angle: [10,20]
      position: [30,70,130]
      texture: [63,7]
      bump:
        position: 20
        size: 6
    top_loader:
      doubleside: true
      offset:
        x: 4
        y: 75
        z: 15
      length: [0,6,12,0]
      width: [0,50,50,30,20]
      angle: [0,0,-10,-10]
      position: [-20,-6,-13,-20,-20]
      texture: [12,17,8.3,3.9]
      bump:
        position: -45
        size: 5 
    top_loader2:
      doubleside: true
      offset:
        x: 4
        y: 70
        z: 15
      length: [0,6,12,0]
      width: [0,50,50,30,20]
      angle: [0,0,-10,-10]
      position: [-20,-6,-13,-20,-20]
      texture: [17]
      bump:
        position: -45
        size: 5        
for i in [1...8]
  arr = [0,0,1.5,3,4.5,6,7.5,9,10.5,12,13.5]
  ar = [0,0,.1,.2,.5,.7,.9,1.1]
  a = [18,11,11,8,18,8,18,8]
  model.bodies["stripe"+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 8.5-i/4+1/4
      y: i*-6.5-71.5+6.5
      z: 11.5-i*0.7+.7
    position:
      x: [0,0,0,0,0]
      y: [-5,-5,7-arr[i],8-arr[i],8-arr[i]]
      z: [0,-i+1,-6.8-ar[i],-6.8-ar[i],-6.8-ar[i]]
    width: [0,2,2,1,0]
    height: [0,12,12,10,0]
    texture: [a[i],a[i],17]
    angle: 90 
return model;
