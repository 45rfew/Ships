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
  name: "Brotaur"
  level: 6
  model: 5
  size: 1.5
  next: [705,706]
  specs:
    shield:
      capacity: [300,420]
      reload: [9,12]
    generator:
      capacity: [100,160]
      reload: [40,55]
    ship:
      mass: 230
      speed: [90,105]
      rotation: [65,78]
      acceleration: [90,140]
  bodies:
    main:
      section_segments: [30,60,120,150,210,240,300,330,360]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-240,-240,-228,-175,10,60,63,63,58]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,1,6,17,20,24,16,15,0]
      height: [0,1,9,13,18,18,13,12,0]
      texture: [2,2,2,2,2,13,17]
      propeller: true
      laser:
        damage: [50,75]
        rate: 2
        type: 1
        speed: [170,200]
        number: 1
        angle: 0
        error: 0
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
      texture: [1,2,2]
    topsupport:
      section_segments: [30,60,90,120,150,210,240,300,330,360]
      offset:
        x: 5
        y: -40
        z: 10
      position:
        x: [-5,17,17,9,17,15,10,0,0]
        y: [0,-8,-8,0,2,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,0,5,30,0,0,0,0,0]
      height: [0,1,5,7,0,5,5,5,0]
      angle: -90
      texture: [4]
    engines:
      section_segments: [40,45,50,130,135,140,220,225,230,270,310,315,320]
      offset:
        x: 20
        y: 44
        z: 0
      position:
        x: [0,-2,0,1,22,22,0]
        y: [-45,-45,0,75,120,119]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,0]
      height: [0,12.5,12.5,10,10,0]
      texture: [3,3,3,12,15]
      angle: 180
    backengines:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 22
        y: 125
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [-70,-40,10,10,5]
        z: [0,0,0,0,0]
      width: [0,11,11,9,0]
      height: [0,14,14,12,0]
      propeller: !false
      texture: [3,3,17]
      angle: 0
    grill_toploader:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 18
        y: -23
        z: 0
      position:
        x: [0,0,0,2,22,12,0]
        y: [0,0,0,-0.7,16,5]
        z: [0,0,0,0,0,1,0]
      width: [0,0,0,28.1,14,0]
      height: [0,0,0,10.1,10,0]
      texture: [1,1,1,4,4]
      angle: 120
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
        damage: [10,25]
        rate: 4
        type: 2
        speed: [160,180]
        number: 1
        error: 2
    side_propellers:
      section_segments: 8
      offset:
        x: 90
        y: 45
        z: -7
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-24,-24,-34,-35,-35,-20,45,45,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3,4,7,9,9,12,11,10,0]
      height: [0,3,4,9,11,11,13,12,11,0]
      propeller: true
      texture: [13,17,13,3,17,3,3,17]
    wingsRail:
      section_segments: [45,135,225,315]
      offset:
        x: 135
        y: 75
        z: -13
      position:
        x: [0,0,0,1.2]
        y: [-7,-5,12.1,13.6]
        z: [-1,-1,-.7,-.7]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 0
    wingsRail2:
      section_segments: [45,135,225,315]
      offset:
        x: 86.5
        y: 35
        z: 4
      position:
        x: [0,0,0,0]
        y: [-7,-5,9,10]
        z: [-2,0,0,-1]
      width: [1,2,2,0]
      height: [0,2,2,0]
      texture: [63]
      angle: 0
    wingsRail3:
      section_segments: [45,135,225,315]
      offset:
        x: 93.5
        y: 35
        z: 4
      position:
        x: [0,0,0,0]
        y: [-7,-5,9,10]
        z: [-2,0,0,0]
      width: [1,2,2,0]
      height: [0,2,2,0]
      texture: [63]
      angle: 0
    wingsRail4:
      section_segments: [45,135,225,315]
      offset:
        x: 59
        y: 107
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,4,5]
        z: [0,0,-1,-1,0,0,0,0,0]
      width: [1,1.6,1.6,0]
      height: [1,1.6,1.6,0]
      texture: [63]
      angle: 0
    wingsRail5:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: 15
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,5,7]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63]
      angle: 87
    wingsRail6:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: 4
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,4,6]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63]
      angle: 87
    wingsRail7:
      section_segments: 6
      offset:
        x: 28.8
        y: 133.2
        z: 51
      position:
        x: [4,4,3,3,0,0,0,0]
        y: [-3,-2,4,4.5]
        z: [-3,-3,-3,-3,0,0,0,0,0]
      width: [0.5,0.7,0.7,0]
      height: [1,2,2,0]
      texture: [63]
      angle: 10
    wingsRail8:
      section_segments: [45,135,225,315]
      offset:
        x: 72
        y: 15
        z: -5
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-3,-1,4,6]
        z: [0,0,0,0,0,0,0,0,0]
      width: [1,1.7,1.7,0]
      height: [1,1.7,1.7,0]
      texture: [63]
    wingstail:
      section_segments: 6
      offset:
        x: 65.5
        y: 67.3
        z: -4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-41,-39,19,20]
        z: [10.5,10.5,0,0,0,0,0,0,0]
      width: [1,2,2,0]
      height: [1,2,2,0]
      texture: [4]
      angle: 74
    wingstail2:
      section_segments: 8
      offset:
        x: 115
        y: 80.7
        z: -11
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-17,-15,23,23]
        z: [4,4,-3,-3,0,0,0,0,0]
      width: [1,1.5,1.5,0]
      height: [1,1,1,0]
      texture: [4]
      angle: 75   
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 21.5
        y: -1
        z: -40
      position:
        x: [0,0,0,0,0]
        y: [0,0,40,37,37].div(3)
        z: [0,0,0,0,0]
      width: [0,20,10,2,0].div(2)
      height: [0,100,80,80/3,0].div(3)
      angle: 0
      vertical: true
      texture: [17,4,16.93] 
    ring: ring(25,50,5,16,7,6,1,.2,0,[4,17,18,18,17,4,4],0)
    ring2: ring(25,40,5,16,7,6,1,.2,0,[4,17,18,18,17,4,4],0)
    ring3: ring(25,30,5,16,7,6,1,.2,0,[4,17,18,18,17,4,4],0)
    ring4: ring(25,-13,0,[40,45,50,130,135,140,220,225,230,310,315,320],4,6,0.7,.2,0,[4,17,[15],[15],17,4,4],0)
    ring5: ring(25,-21,0,[40,45,50,130,135,140,220,225,230,310,315,320],4,6,0.7,.2,0,[4,17,[15],[15],17,4,4],0)
    ring6: ring(29,106,-1.5,[40,45,50,130,135,140,220,225,230,310,315,320],4,14,0.7,.2,0,[4,17,[15],[15],17,4,4],0)
    ring7: ring(29,99,-1.5,[40,45,50,130,135,140,220,225,230,310,315,320],4,10,0.7,.2,0,[4,17,[15],[15],17,4,4],0)
    ring8: ring(29,92,-1.5,[40,45,50,130,135,140,220,225,230,310,315,320],4,6,0.7,.2,0,[4,17,[15],[15],17,4,4],0)
    ring9: ring(0,6.5,-90,[40,45,50,130,135,140,220,225,230,310,315,320],24,20,1,.2,1,[4,17,[15],[15],17,4,4],90)
    ring10: ring(0,90,6.5,[40,45,50,130,135,140,220,225,230,310,315,320],20,24,1,.2,0,[4,17,[15],[15],17,4,4],0)
    ring11: ring(89.7,65,6.5,16,5,10,.6,.2,0,[4,17,18,18,17,4,4],90)
    ring12: ring(0,-13,10,16,7,16,0.7,.2,0,[4,17,4,4,17,4,4],0)
    ring13: ring(0,-2,10,16,7,16,0.7,.2,0,[4,17,4,4,17,4,4],0)
    ring14: ring(0,-2+11,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring15: ring(0,-2+19,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring16: ring(0,-2+27,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring17: ring(0,-2+35,10.5,[45,135,225,315],8,11,0.7,.2,0,[4,4,63,63,4,4,4],0)
    ring18: ring(0,120,10.5,16,8,11,0.7,.2,0,[4,4,17,17,4,4,4],0)
    reactor: hub(0,10,-90,20,10,12,1,0,[18,17,17,18,18,17])
    reactor_top: hub(0,23,-90,10,2,2,1,0,[18,17,17,18,18,17])
    reactor2: hub(0,16,-50,[45,135,225,315],8,3,1,0,[18,17,17,18,18,17])
    reactor3: hub(10,16,-120,20,3,3,1,15,[18,17,17,18,18,17])
    propeller_reactor:
      section_segments: 8
      offset:
        x: 89.7
        y: 1
        z: -55
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0].mult(1.2)
      height: [0,3,3,4,4,5,5,0].mult(1.2)
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 180  
    propeller_reactor2:
      section_segments: 8
      offset:
        x: 89.7
        y: 1
        z: -75
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0].mult(1.2)
      height: [0,3,3,4,4,5,5,0].mult(1.2)
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 180       
    hub:
      section_segments: 8
      offset:
        x: 13
        y: 6
        z: 5+8
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
        z: 2
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-5,-7,-5.5,-5.5,-6,-6,8,8]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,4,4,5,5,0]
      height: [0,3,3,4,4,5,5,0]
      vertical: true
      texture: [17,17,18,4,63,[15]]
      angle: 208        
    lights:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 65
        z: 12.4
      position:
        x: [0,0,0,0]
        y: [-10,-10,150,150]
        z: [0,4.1,0,0]
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
        y: [-10,-10,150,150]
        z: [0,4.1,0,0]
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
        y: [-10,-10,150,150]
        z: [0,4.1,0,0]
      width: [0,1.5,1.5,0]
      height: [0,2,2,0]
      texture: [18]
      angle: 180      
  wings:
    headwings:
      doubleside: true
      offset:
        x: 12
        y: 110
        z: 0
      length: [50]
      width: [40,10,40]
      angle: [-5,20]
      position: [-20,0,0]
      texture: [3.2]
      bump:
        position: 40
        size: 12
    headwings_lights:
      doubleside: true
      offset:
        x: 12
        y: 108.5
        z: -.3
      length: [50]
      width: [40,10,40]
      angle: [-5,20]
      position: [-20,0,0]
      texture: [17]
      bump:
        position: 40
        size: 0        
    topwings:
      doubleside: true
      offset:
        x: 15
        y: 130
        z: 0
      length: [55]
      width: [40,10,40]
      angle: [70,70]
      position: [-30,5,0]
      texture: 3.2
      bump:
        position: 40
        size: 30
    headwings2:
      doubleside: true
      offset:
        x: 20
        y: 10
        z: 0
      length: [45,10]
      width: [30,15,10]
      angle: [-5,-5]
      position: [-35,0,8]
      texture: [8,4]
      bump:
        position: 45
        size: 10
    headwings2_lights:
      doubleside: true
      offset:
        x: 20
        y: 8
        z: -0.5
      length: [45,10]
      width: [30,15,10]
      angle: [-5,-5]
      position: [-35,0,8]
      texture: [17]
      bump:
        position: 45
        size: 0        
    back:
      offset:
        x: 0
        y: 200
        z: 9
      length: [80,50,10.5]
      width: [70,44,18+5,18]
      angle: [-10,-9.5,-9.5]
      position: [-175,-143,-125.5,-122]
      texture: [8.12,3,4]
      doubleside: true
      bump:
        position: 35
        size: 5        
    back2:
      offset:
        x: 0
        y: 202
        z: 8.9
      length: [80,60]
      width: [70,22*2,5+21]
      angle: [-10,-9.5]
      position: [-175,-143,-121]
      texture: [18]
      doubleside: true
      bump:
        position: 35
        size: 5     
    back3:
      offset:
        x: 0
        y: 198
        z: 8.8
      length: [80,60]
      width: [70,22*2,5+21]
      angle: [-10,-9.5]
      position: [-175,-143,-118]
      texture: [17]
      doubleside: true
      bump:
        position: 35
        size: 0  
    top:
      doubleside: true
      offset:
        x: 15
        y: 55
        z: 13
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
        y: 56
        z: 13
      length: [0,-3,-3,-1,-12,-3,0]
      width: [0,20,20,60,60,20,10,0].mult(2)
      angle: [280,280,315-60,315,335,350,0]
      position: [7,7,7,-32,-32,3,3,3]
      texture: [63,63,63,17,4,17,63]
      bump:
        position: 30
        size: -4   
    diamond:
      doubleside: true
      offset:
        x: 5
        y: 112+8
        z: 10
      length: [15,3,3,-1]
      width: [12,12,35,15,0].mult(1)
      angle: [90,90,90,90].add(50)
      position: [0,0,-8,-6,10-6]
      texture: [4,4,18,17]
      bump:
        position: 30
        size: 25     
    diamond2:
      doubleside: true
      offset:
        x: 5
        y: 111+8
        z: 10
      length: [15,3,3,-1]
      width: [12,12,35,15,0].mult(1)
      angle: [90,90,90,90].add(50)
      position: [0,0,-8,-6,10-6]
      texture: [4,4,4,17]
      bump:
        position: 30
        size: 25        
t = 10        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
return model;          
        
        
