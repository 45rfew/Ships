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
model =
  name: "Zirnitron"
  level: 6
  model: 6
  size: 1.55
  specs:
    shield:
      capacity: [210,330]
      reload: [7,10]
    generator:
      capacity: [100,160]
      reload: [45,60]
    ship:
      mass: 220
      speed: [90,116]
      rotation: [70,85]
      acceleration: [80,120]
  bodies:
    main:
      section_segments: [30,60,120,150,210,240,300,330,360]
      offset:
        x: 0
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-173,-172,-158,-125,70,120,125,125,115]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,6,13,18,23,17,16,0]
      height: [0,1,9,13,18,18,13,12,0]
      texture: [2,2,2,2,2,17]
      propeller: true
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -120
        z: 9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,0,20,32,45]
        z: [0,0,0,0,0]
      width: [0,5,10,10,0]
      height: [0,5,10,12,0]
      texture: [9,9,9,4]
    engines:
      section_segments: 18
      offset:
        x: 19
        y: 39
        z: -1.2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-45,-45,0,25,50,52,43,43,49,48]
        z: [2,2,1,0,0,0,3,3,3,3]
      width: [0,10,10,10,10,9,3,2,1,0]
      height: [0,10,10,10,10,9,3,2,1,0]
      texture: [3,3,3,3,3,13,17,13]
      angle: 182
    backengines:
      section_segments: 18
      offset:
        x: 20.5
        y: 105
        z: 1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-30,20,25,25,15]
        z: [0,0,0,0,0,0,0]
      width: [0,9,13,13,10,9,0]
      height: [0,9,13,13,10,9,0]
      propeller: true
      texture: [3,3,3,17,17] 
      laser:
        damage: [10,15]
        rate: 2
        recoil: 0
        type: 2
        speed: [140,200]
        number: 1  
    backengines2:
      section_segments: 18
      offset:
        x: 21
        y: 105
        z: 1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-40,-30,20,25,25,15]
        z: [0,0,0,0,0,0,0]
      width: [0,9,13,13,10,9,0]
      height: [0,9,13,13,10,9,0]
      texture: [3,3,8,17,17]       
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -115
        z: -14
      position:
        x: [0,0,0,0,0,0]
        y: [-55,-65,-20,0,20,30]
        z: [3,3,2,1,0,20]
      width: [0,0.7,2,2,1.5,0]
      height: [0,0.7,2,2,1.5,0]
      angle: 0
      propeller: false
      texture: [2.8,2.8,2.8,2.8]
      laser:
        damage: [60,100]
        rate: 1
        recoil: 90
        type: 1
        speed: [170,230]
        number: 1      
    frontsupport:
      section_segments: 6
      offset:
        x: 1
        y: -66
        z: -7
      position:
        x: [-5,17,17,9,17,15,10,0,0]
        y: [0,-20,-13,-9,-5,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,10,20,30,15,10,10,0,0]
      height: [0,1,5,7,5,5,5,5,0]
      angle: 90
      texture: [17,11,1]
    topsupport:
      section_segments: [30,60,90,120,150,210,240,300,330,360]
      offset:
        x: 5
        y: -35
        z: 10
      position:
        x: [-5,17,17,9,17,15,10,0,0]
        y: [0,-8,-8,0,2,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,5,30,0,0,0,0,0]
      height: [0,1,5,7,0,5,5,5,0]
      angle: -90
      texture: [4]      
    wingsRail:
      section_segments: 12
      offset:
        x: 38
        y: -25
        z: -2
      position:
        x: [-.8,0,0,.8]
        y: [-20,-17,0.4,2]
        z: [0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [[15]]
    wingsRail2:
      section_segments: 12
      offset:
        x: 74
        y: 92
        z: -18
      position:
        x: [-2,0,0,0,1]
        y: [-34.5,-28,30,45,46]
        z: [-4,-4,-1,-5,-5]
      width: [0,1.5,1.5,1.5,0]
      height: [0,1,1,1,0]
      texture: [[15]]
    lights:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 65
        z: 12.4
      position:
        x: [0,0,0,0]
        y: [-65,-65,150,150]
        z: [6,6,0,0]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      texture: [17]
      angle: 180     
    lights2:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 65
        z: 12.4
      position:
        x: [0,0,0,0]
        y: [-65,-65,150,150]
        z: [6,6,0,0]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      texture: [[15]]
      angle: 180
    lights3:
      section_segments: [45,135,225,315]
      offset:
        x: 4
        y: 65
        z: 12.4
      position:
        x: [0,0,0,0]
        y: [-65,-65,150,150]
        z: [6,6,0,0]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      texture: [18]
      angle: 180 
    ring: ring(19.5,60,0,16,9,9,1,.2,0,[4,17,18,18,17,4,4],0)
    ring2: ring(19,50,0,16,9,9,1,.2,0,[4,17,18,18,17,4,4],0)
    ring3: ring(19,40,0,16,9,9,1,.2,0,[4,17,18,18,17,4,4],0)
    ring4: ring(18.6,30,-.8,16,9,9,1,.2,0,[4,17,18,18,17,4,4],0)
    ring5: ring(18,20,-1,16,9,9,1,.2,0,[4,17,18,18,17,4,4],0)
    ring6: ring(0,115,9,16,8,27,1,2,0,[4,4,16,16,4,4,4],0)
    ring7: ring(0,85,8.1,16,8,27,1,2,0,[4,4,16,16,4,4,4],0)
    ring8: ring(0,-1,10,16,7,16,0.7,.2,0,[4,17,4,4,17,4,4],0)
    ring9: ring(0,10,10,16,7,16,0.7,.2,0,[4,17,4,4,17,4,4],0)
    ring10: ring(0,-2+21,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring11: ring(0,-2+29,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring12: ring(0,-2+37,11,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring13: ring(0,-2+45,11,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring14: ring(30,110,0,[45,135,225,315],13,5,0.7,.2,0,[17],0)
    ring15: ring(30,100,0,[45,135,225,315],13,5,0.7,.2,0,[17],0)
    ring16: ring(30,90,0,[45,135,225,315],13,5,0.7,.2,0,[17],0)
    ring17: ring(18.5,96.5,13,18,6,8,0.3,.2,0,[17,4,17,4,17,4],25)
    ring18: ring(19,99.5,13,18,6,8,0.3,.2,0,[17,4,17,4,17,4],0)
    ring19: ring(18.5,102.5,13,18,6,8,0.3,.2,0,[17,4,17,4,17,4],-25)
    ring20: ring(8,-55,5,6,8,6,0.5,.2,0,[17,4,17,4,17,4],0)
    ring21: ring(8,-65,5,6,8,6,0.5,.2,0,[17,4,17,4,17,4],0)
    ring22: ring(8,-75,5,6,8,6,0.5,.2,0,[17,4,17,4,17,4],0)
    ring23: ring(0,-80,14,6,3,6,0.5,.2,0,[17,4,4,4,17,4],0)
    ring24: ring(0,-70,14,6,3,6,0.5,.2,0,[17,4,4,4,17,4],0)
    ring25: ring(0,-60,14,6,3,6,0.5,.2,0,[17,4,4,4,17,4],0)
    reactor: hub(13,13,-100,16,4,5,1,0,[18,17,17,18,18,17])
    hub:
      section_segments: 8
      offset:
        x: 13
        y: 6
        z: -10+11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0]
      height: [0,3,3,4,4,5,5,0]
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 208  
    hub2:
      section_segments: 8
      offset:
        x: 13
        y: 6
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0]
      height: [0,3,3,4,4,5,5,0]
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 208        
    deco:
      section_segments: [45,135,225,315]
      offset:
        x: -5
        y: 100
        z: 6
      position:
        x: [0,0,0,0,0,0]
        y: [-11,-11,-8,-5,2,2]
        z: [-2,-2,0,0,0,0]
      width: [0,15,15,15,15,0].mult(1.7)
      height: [0,15,15,10,10,0]
      texture: [0.9,18,16.9,15,3.9]      
      angle: 89
    wings_bottom:
      section_segments: 10
      offset:
        x: -3
        y: 70
        z: 6
      position:
        x: [0,0,0,0,0,0]
        y: [-11,-11,-8,-5,2,2]
        z: [-2,-2,0,0,0,0]
      width: [0,15,15,15,15,0]
      height: [0,15,15,10,10,0]
      texture: [0.9,18,16.9,15,3.9]      
      angle: 89
    front_streak:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 1
        z: 70
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,25,25,23,0]
      texture: [63,17,63]
      angle: 20
      vertical: true   
    back_streak:
      section_segments: [45,135,225,315]
      offset:
        x: 1
        y: 5
        z: -100
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,15,16,16]
        z: [0,0,0,0,0]
      width: [0,3,3,2,0]
      height: [0,25,25,18,0]
      texture: [63,17,63]
      angle: 20
      vertical: true            
  wings:
    main:
      offset:
        x: 0
        y: 250
        z: 5
      length: [100,1.5,5]
      width: [170,50,50,5]
      angle: [-20,0,0]
      position: [-230,-130,-128,-100]
      texture: [6.28,17,[15]]
      doubleside: true
      bump:
        position: 30
        size: 4
    main2:
      offset:
        x: 0
        y: 251
        z: 5
      length: [100,1.5,5]
      width: [170,50,50,5]
      angle: [-20,0,0]
      position: [-230,-130,-128,-100]
      texture: [3.28,17,[15]]
      doubleside: true
      bump:
        position: 30
        size: 4   
    main3:
      offset:
        x: 0
        y: 247
        z: 4
      length: [100,1.5]
      width: [170,50,50]
      angle: [-20,0]
      position: [-230,-130,-128]
      texture: [17]
      doubleside: true
      bump:
        position: 30
        size: 0
    headwings:
      doubleside: true
      offset:
        x: 0
        y: -60
        z: 1
      length: [50,1]
      width: [50,10,10]
      angle: [-5,20]
      position: [-20,40,41]
      texture: [6.3,17]
      bump:
        position: 30
        size: 4
    headwings2:
      doubleside: true
      offset:
        x: 0
        y: -62
        z: -.2+1
      length: [50,1]
      width: [50,10,10]
      angle: [-5,20]
      position: [-20,40,41]
      texture: [17]
      bump:
        position: 30
        size: 0    
    headwings3:
      doubleside: true
      offset:
        x: 0
        y: -59
        z: 1
      length: [50,1]
      width: [50,10,10]
      angle: [-5,20]
      position: [-20,40,41]
      texture: [3.3,17]
      bump:
        position: 30
        size: 4            
    rear:
      offset:
        x: -0.01
        y: 95
        z: 15
      length: [19,9,9,9,8,7,14]
      width: [85,60,45,34,25,20,15,0]
      angle: [90,90,90,90,90,90,90]
      position: [-10,10,19,28,34,40,45,63]
      texture: [3]
      bump:
        position: 30
        size: 5
    top:
      doubleside: true
      offset:
        x: 15
        y: 45
        z: 10
      length: [0,-3,-3,-1,-12,-3,0]
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315,335,350,0]
      position: [7,7,7,-32,-32,3,3,3]
      texture: [63,63,63,17,18,17,63]
      bump:
        position: 30
        size: -4
    top2:
      doubleside: true
      offset:
        x: 15
        y: 46
        z: 10
      length: [0,-3,-3,-1,-12,-3,0]
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315,335,350,0]
      position: [7,7,7,-32,-32,3,3,3]
      texture: [63,63,63,17,4,17,63]
      bump:
        position: 30
        size: -4         
t = 5        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
return model;      
