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
addArray = (arr, m) ->
  k = [];
  for i in [0..arr.length-1]
    k.push(arr[i]+m)
  return k;
multiplyArray = (arr,m) ->
  k = [];
  for i in [0..arr.length-1]
    k.push(arr[i]*m)
  return k;
dish = (xx, yy, zz, angle, seg, tx, stepAmount, step, stepunit) ->
  rad = []
  ypos = []
  for i in [0..stepAmount-1]
    ypos.push(-(step/stepunit*i)*(step/stepunit*i))
    rad.push(step*i)
  lastypos = ypos[ypos.length-1]
  for i in [stepAmount-1..0]
    ypos.push((ypos[i]-lastypos)*1.1+ypos[i])
    rad.push(rad[i]*1.1)
  return k = 
    section_segments: seg
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: multiplyArray(ypos,0)
      y: ypos
      z: multiplyArray(ypos,0)
    width: rad
    height: rad
    texture: tx
    angle: angle
r = 40
t = 7
s = 4
ypos = []
for i in [0...50] by 1
  ypos.push(i*1)
xpos = []
for i in [0...5*s] by 0.4
  xpos.push(r*Math.sin(i))
zpos = []
for i in [0...5*s] by 0.4
  zpos.push(r*Math.cos(i))
tub = []
for i in [0...50*s] by 1
  tub.push(t)
spring = (px,py,pz,ang)->
  angle: ang
  section_segments: 6
  offset:
    x: px
    y: py
    z: pz
  position:
    x: xpos
    y: ypos
    z: zpos
  width: tub
  height: tub
  texture: [17]
  vertical: !true   
ballSide = (z,angle)->
  return k = 
    section_segments: 6
    angle: angle
    offset:
      x: 0
      y: 0
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-80,-75,-60,-50,-30,0].mult(1.3)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [0,20,30,10,25,25].mult(1.3)
    height: [0,10,12,8,22,22].mult(1.3)
    texture: [16.83,63,0.9,17,11]
    vertical: true
ballTori = (z,angle)->
  return t = 
    section_segments: 12
    angle: angle
    offset:
      x: 0
      y: 0
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-10,-10,0,10,10,0,-10].div(2.5).mult(1.3)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [60,75,77,75,60,50,60].mult(1.3)
    height: [60,75,77,75,60,50,60].mult(1.3)
    texture: [4,17,17,4]
    vertical: true
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
torus = (r,y,w,h,t) -> 
  return k = 
    segments: 26
    radius: r
    section_segments: 12
    offset:
      x: 0
      y: y
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [].fill(w,21)
    height: [].fill(h,21)
    texture: t
rotateAroundZ = (name, oname, a, rotatePart, isWing) ->
  o = model.bodies[oname];
  if(isWing)
    part = model.wings[name];
  else
    part = model.bodies[name];
  ox = o.offset.x;
  oy = o.offset.y;
  dx = part.offset.x-ox;
  dy = part.offset.y-oy;
  ra = -a*0.0174533;
  ndx = dx*Math.cos(ra) - dy*Math.sin(ra);
  ndy = dx*Math.sin(ra) + dy*Math.cos(ra);
  part.offset.x = ndx+ox;
  part.offset.y = ndy+oy;
  if(rotatePart&&!isWing)
    part.angle+=a
bodyStarY = (name, number, aroundX, aroundY, aoffset = 0, offx = 0, spawn) ->
  b = model.bodies[name]
  delete model.bodies[name]
  for i in [0..(number-1)] by 1
    if(spawn!=undefined&&!spawn[i])
      continue
    if(i == 0)
      n = name
    else
      n = name+"star"+i
    nposx = [];
    nposz = [];
    ang = (i*360/number)+aoffset
    a = ang
    ang = ang*0.0174533
    for j in [0..b.position.x.length-1] by 1
      if(j>=b.position.z.length)
        break;
      ox = b.position.x[j]
      oz = b.position.z[j]
      nposx.push(ox*Math.cos(ang)-oz*Math.sin(ang))
      nposz.push(ox*Math.sin(ang)+oz*Math.cos(ang))
    ox = b.offset.x-aroundX
    oz = b.offset.z-aroundY
    segments = b.section_segments
    if(segments.length != undefined)
      segments = addArray(segments,a)
    model.bodies[n] =
      section_segments: segments
      offset:
        x: 0
        y: b.offset.y
        z: aroundY+ox*Math.sin(ang)+oz*Math.cos(ang)+aroundY
      position:
        x: addArray(nposx,ox*Math.cos(ang)-oz*Math.sin(ang)+aroundX+offx)
        y: b.position.y.slice(0)
        z: addArray(nposz,0)
      width: b.width.slice(0)
      height: b.height.slice(0)
      texture: b.texture.slice(0)
      angle: b.angle
      propeller: b.propeller
      vertical: b.vertical
      laser: b.laser  
eng_ypos = 100
model =
  name: 'Zeroboros'
  level: 7
  model: 1
  size: 2
  specs:
    shield:
      capacity: [900,900]
      reload: [20,20]
    generator:
      capacity: [320+90*4,320+90*4]
      reload: [200,200]
    ship:
      mass: 940
      speed: [55,55]
      rotation: [22,22]
      acceleration: [180,180]
      dash:
        rate: 2
        burst_speed: [230,230]
        speed: [120,120]
        acceleration: [40,40]
        initial_energy: [250,250]
        energy: [200,200]      
  tori: 
    ring: torus(100,65,20,8,[2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2,2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2])
    ring2: torus(100,135,20,8,[2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2,2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2])
    ring3: torus(70,10,20/1.2,8,[2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2,2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2])
    ring4: torus(70,190,20/1.2,8,[2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2,2,10.02,10.02,2,2,2,2,2,2,2,10.02,10.02,2])
    ring5: torus(71,190,20/2.2,8,4)
    ring6: torus(71,10,20/2.2,8,4)
    ring7: torus(95,590-eng_ypos,25,8,2)  
    ring8: torus(96,590-eng_ypos,13,8,4)  
    ring9: torus(45,590-eng_ypos,13,8,4)  
  bodies:
    dish: dish(0,-190,0,180,26,[2,2,2,2,2,2,2,2,17,17.965,4,3,3,4,17.965,17,2,2,2,4],12,16,28)
    dish2: dish(0,-230,0,180,6,[13,13,4,5,6,7,86,3,17.9,16.9,11.9,1.9],8,12,22)
    spring: spring(0,-200+7,0,0) 
    spring2: spring(0,-152+7,0,0)
    spring3: spring(0,-106+7,0,0) 
    spring4: spring(0,-58+7,0,0)
    spring5: spring(0,-199+7,0,0) 
    spring6: spring(0,-151+7,0,0)
    spring7: spring(0,-105+7,0,0) 
    spring8: spring(0,-57+7,0,0)
    spring9: spring(0,-198+7,0,0) 
    spring10: spring(0,-150+7,0,0)
    spring11: spring(0,-104+7,0,0) 
    spring12: spring(0,-56+7,0,0)  
    side1: ballSide(-100,0)
    side2: ballSide(-100,60)
    side3: ballSide(-100,120)
    side4: ballSide(-100,180)
    side5: ballSide(-100,240)
    side6: ballSide(-100,300)
    side7: ballSide(-100,30)
    side8: ballSide(-100,90)
    side9: ballSide(-100,150)
    side10: ballSide(-100,210)
    side11: ballSide(-100,270)
    side12: ballSide(-100,330)
    t1: ballTori(-100,30)
    t2: ballTori(-100,90)
    t3: ballTori(-100,150)
    t4: ballTori(-100,60)
    t5: ballTori(-100,120)
    t6: ballTori(-100,180)
    ring: ring(0,0,0,16,30,30,3,1.5,0,[4,17,4,4,17,4,4],0)
    ring2: ring(0,195,0,16,44,44,2,3,0,[4,17,4,4,17,4,4],0)
    ring3: ring(0,0,0,50,45,45,2,.1,0,[4,17,[15],[15],17,4,4],0)
    ring4: ring(0,10,70,20,8,17,2,4,0,[4,17,[15],[15],17,4,4],90) 
    ring5: ring(0,10,-70,20,8,17,2,4,0,[4,17,[15],[15],17,4,4],90)
    ring6: ring(0,10,70,20,8,17,2,4,0,[4,17,[15],[15],17,4,4],90) 
    ring7: ring(61,32,-10,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],-30)  
    ring8: ring(61,-32,-10,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],30)      
    ring9: ring(0,190,-70,20,8,17,2,4,0,[4,17,[15],[15],17,4,4],90)
    ring10: ring(0,190,70,20,8,17,2,4,0,[4,17,[15],[15],17,4,4],90) 
    ring11: ring(61,32,-190,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],-30)  
    ring12: ring(61,-32,-190,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],30)      
    ring13: ring(0,-190,0,20,46.5,46.5,2,2,0,[4,17,[15],[15],17,4,4],0)
    ring14: ring2(0,65,100,20,1.4,1.1,1,0,[4,17,4,17,4,17,4],90)
    ring15: ring2(0,65,-100,20,1.4,1.1,1,0,[4,17,4,17,4,17,4],90)  
    ring16: ring2(87.5,44.5,-65,20,1.4,0.5,2.2,1,[4,17,4,17,4,17,4],-26.9)  
    ring17: ring2(87.5,-44.5,-65,20,1.4,0.5,2.2,1,[4,17,4,17,4,17,4],26.9)
    ring18: ring2(0,135,100,20,1.4,1.1,1,0,[4,17,4,17,4,17,4],90)
    ring19: ring2(0,135,-100,20,1.4,1.1,1,0,[4,17,4,17,4,17,4],90)  
    ring20: ring2(87.5,44.5,-135,20,1.4,0.5,2.2,1,[4,17,4,17,4,17,4],-26.9)  
    ring21: ring2(87.5,-44.5,-135,20,1.4,0.5,2.2,1,[4,17,4,17,4,17,4],26.9)    
    ring22: ring(44,44,-368+31.5+eng_ypos-50,36,15,30-7,1,1.5,1,[4,17,[15],[15],17,4,17],-45)
    ring23: ring(50,50,-415+30+eng_ypos-50,[45,135,225,315],65,30-10,1,1.5,1,[4,17,[15],[15],17,4,17],-45)
    ring24: ring(50,50,-407+22.5+eng_ypos-50,[45,135,225,315],31,17.5,1,1.5,1,[4,17,[10],[10],17,4,4],45)
    ring25: ring(-50,-52,-415+30+eng_ypos-50,[45,135,225,315],65,30-10,1,1.5,1,[4,17,[15],[15],17,4,17],-45)
    ring26: ring(-50,-50,-407+22.5+eng_ypos-50,[45,135,225,315],31,17.5,1,1.5,1,[4,17,[10],[10],17,4,4],45)
    ring27: ring2(134.5,90,0,8,1.3,0.25,0.7,0,[4,17,4,17,4,17,4],0)
    ring28: ring2(130.5-5,90,0,8,2,0.25,1.7,0,[4,17,4,17,4,17,4],0)
    ring29: ring(0,-95,0,[45,135,225,315],64,125,1,4,0,[4,17,[15],[15],17,4,17],90)
    ring30: ring(0,0,95,[45,135,225,315],125,64,1,4,1,[4,17,[15],[15],17,4,17],0)
    ring31: ring(112,65,0,[45,135,225,315],12,12,0.6,0.7,0,[4,17,4,4,17,4,4],90)
    ring32: ring(120,65,0,[45,135,225,315],12,12,0.6,0.7,0,[4,17,4,4,17,4,4],90)
    ring33: ring(112,135,0,[45,135,225,315],12,12,0.6,0.7,0,[4,17,4,4,17,4,4],90)
    ring34: ring(120,135,0,[45,135,225,315],12,12,0.6,0.7,0,[4,17,4,4,17,4,4],90)
    ring35: ring2(112,177.3,-7,10,0.35,0.68,1.3,0,[4,17,4,17,4,17,4],0)
    ring36: ring(44,-44,-368+31.5+eng_ypos-50,26,15,30-7,1,1.5,1,[4,17,[15],[15],17,4,17],45)
    ring37: ring(114,155,0,[45,135,225,315],10,10,0.4,0.7,0,[4,17,4,4,17,4,4],0)
    ring38: ring(114,148,0,[45,135,225,315],10,10,0.4,0.7,0,[4,17,4,4,17,4,4],0)
    ring39: ring2(0,730-eng_ypos,115,16,0.3,1.25,2.7,0,[4,17,4,17,4,17,4],0)
    ring40: ring2(99.5,730-eng_ypos,-55-2.5,16,0.3,1.4,2.5,0,[4,17,4,17,4,17,4],0)
    ring41: ring(16,121,-628+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],28,1,2,.8,1,[4,17,8,8,17,4,4],0)
    ring42: ring(16,109,-625+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],32,1,2,.8,1,[4,17,8,8,17,4,4],0)
    ring43: ring(115-1,-45-1,-625+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],28,1,2,.8,1,[4,17,8,8,17,4,4],125)
    ring44: ring(105-2,-40,-623+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],32,1,2,.8,1,[4,17,8,8,17,4,4],125)
    ring45: ring(0,110,-608+eng_ypos,[45,135,225,315],5,10,2,1,1,[4,17,8,8,17,4,4],90)
    ring46: ring(103-10,-40-14,-608+eng_ypos,[45,135,225,315],5,10,2,1,1,[4,17,8,8,17,4,4],29)
    ring47: ring(16,121,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,[4,17,8,8,17,4,4],0)
    ring48: ring(16,109,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,[4,17,8,8,17,4,4],0)
    ring49: ring(103,-40,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,[4,17,8,8,17,4,4],125)
    ring50: ring(114,-45-1,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,[4,17,8,8,17,4,4],125)
    ring51: ring(11,125,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,3,0)
    ring52: ring(101,-41,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,3,125)
    ring53: ring(115,-52,-693+eng_ypos,[40,45,50,130,135,140,220,225,230,310,315,320],35,1,2,.8,1,3,125)
    ring54: ring(12,115,-655+eng_ypos,35,35,35,1,1,true,[18,17,18,17,18,17,18,17,18],90)
    ring55: ring(105+2,-45-3,-655+eng_ypos,35,35,35,1,1,true,[18,17,18,17,18,17,18,17,18],30)
    ring56: ring(61,32,-190,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],-30)  
    ring57: ring(61,-32,-190,20,17,8,2,3,1,[4,17,[15],[15],17,4,4],30)   
    main:
      section_segments: 20
      offset:
        x: 0
        y: -200
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,100,200,220,380,400,650-eng_ypos,800-eng_ypos,795-eng_ypos,750-eng_ypos]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,40,40,40,20,20,40,40,40,35,0]
      height: [0,40,40,40,20,20,40,40,40,35,0]
      texture: [4,4,4,[15],18,[15],4,4,17]
      propeller: true
    disc:
      section_segments: 26
      offset:
        x: 0
        y: 74
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,7,7,1,2,6,7,7,7].mult(2.2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11.98,11.98,12,12,11.98,10,10].mult(9.07)
      height: [10,10,10,11.98,11.98,12,12,11.98,10,10].mult(9.07)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180       
    disc2:
      section_segments: 26
      offset:
        x: 0
        y: 144
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7,7,7,7,1,2,6,7,7,7].mult(2.2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,11.98,11.98,12,12,11.98,10,10].mult(9.07)
      height: [10,10,10,11.98,11.98,12,12,11.98,10,10].mult(9.07)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180
    disc3:
      section_segments: 100
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(3)
        z: [0,0,0,0,0,0,0,0]
      width: [10,10,10,10,11,11,10].mult(7.19)
      height: [10,10,10,10,11,11,10].mult(7.19)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180    
    disc4:
      section_segments: 100
      offset:
        x: 0
        y: 195
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(3)
        z: [0,0,0,0,0,0,0,0]
      width: [10,10,10,10,11,11,10].mult(7.19)
      height: [10,10,10,10,11,11,10].mult(7.19)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180
    disc5:
      section_segments: 100
      offset:
        x: 0
        y: 598-eng_ypos
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(5.5)
        z: [0,0,0,0,0,0,0,0]
      width: [10,10,10,10,11,11,10].mult(9.69)
      height: [10,10,10,10,11,11,10].mult(9.69)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180  
    disc6:
      section_segments: 100
      offset:
        x: 0
        y: 598-eng_ypos
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(5.5)
        z: [0,0,0,0,0,0,0,0]
      width: [10,10,10,10,11,11,10].mult(4.9)
      height: [10,10,10,10,11,11,10].mult(4.9)
      texture: [4,4,4,4,17,4,17,17]  
      angle: 180      
    disc7:
      section_segments: 26
      offset:
        x: 0
        y: -129
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(19)
        z: [0,0,0,0,0,0,0,0]
      width: [10.6,10.6,10.6,10.6,11,11,10.6].mult(16)
      height: [10.6,10.6,10.6,10.6,11,11,10.6].mult(16)
      texture: [17]  
      angle: 180    
    disc8:
      section_segments: 26
      offset:
        x: 0
        y: -135
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [2,2,2,2,1,2,2,2].mult(33)
        z: [0,0,0,0,0,0,0,0]
      width: [10.6,10.6,10.6,10.6,11,11,10.6].mult(11.3)
      height: [10.6,10.6,10.6,10.6,11,11,10.6].mult(11.3)
      texture: [17.95]  
      angle: 180          
    star:
      section_segments: 4
      offset:
        x: 0
        y: -176
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0].add(131)
      width: [0,0,2,3]
      height: [0,0,2,3]
      texture: [1,17,18] 
    star2:
      section_segments: 4
      offset:
        x: 0
        y: -202
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0].add(91)
      width: [0,0,2,3]
      height: [0,0,2,3]
      texture: [1,18,17]   
    star3:
      section_segments: 4
      offset:
        x: 0
        y: -251
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,3,3].mult(1.5)
        z: [0,0,0,0]
      width: [0,0,2,3].mult(4)
      height: [0,0,2,3].mult(4)
      texture: [17] 
    side_propulsor:
      section_segments: [45,135,225,315]
      offset:
        x: 115
        y: 140
        z: 0
      position:
        x: [0,0,0,-3,-3,-3]
        y: [2,0,22,30,40,30]
        z: [0,0,0,-7,-7,-7]
      width: [0,10,10,10,10,0]
      height: [0,10,10,10,10,0]
      texture: [1,18,13,[18],17]   
    side_propulsor2:
      section_segments: 12
      offset:
        x: 115
        y: 140
        z: 0
      position:
        x: [0,-3,-3,-3,-3]
        y: [22,30,45,45,37]
        z: [0,-7,-7,-7,-7]
      width: [0,13,13,12,0]
      height: [0,13,13,12,0]
      texture: [13,18,17] 
    side_propulsor_propeller:
      section_segments: 12
      offset:
        x: 112
        y: 205
        z: -5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [13]
      height: [13]
      propeller: true  
    wing_support:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 101
        y: 65
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,20,30,30]
        z: [0,0,0,0,0,0]
      width: [0,10,10,10,10,0]
      height: [0,10,10,10,10,0]
      texture: [1,[15],12.9,[15]]  
      angle: 90
    wing_support2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 101
        y: 135
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,20,30,30]
        z: [0,0,0,0,0,0]
      width: [0,10,10,10,10,0]
      height: [0,10,10,10,10,0]
      texture: [1,[15],12.9,[15]]  
      angle: 90    
    rear_propulsor:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 0
        y: 685-eng_ypos
        z: 115
      position:
        x: [0,0,0,0,0]
        y: [10,30,45,45,37]
        z: [0,0,0,0,0]
      width: [0,13,13,12,0].mult(1.3)
      height: [0,13,13,12,0].mult(2)
      texture: [12.9,17.9,16.95]    
    rear_propulsor:
      section_segments: 16
      offset:
        x: 0
        y: 693-eng_ypos
        z: 115
      position:
        x: [0,0,0,0,0]
        y: [20,30,45,45,37]
        z: [0,0,0,0,0]
      width: [0,13,13,12,0].mult(2)
      height: [0,13,13,12,0].mult(2.2)
      texture: [12.9,17.9,16.95]
    rear_propulsor2:
      section_segments: 16
      offset:
        x: 105-5.5
        y: 693-eng_ypos
        z: 0
      position:
        x: [0,0,0,0,0]
        y: [20,30,45,45,37]
        z: [0,0,0,0,0].add(-55-2.5)
      width: [0,13,13,12,0].mult(2.2)
      height: [0,13,13,12,0].mult(2)
      texture: [12.9,17.9,16.95]
    rear_propulsor_propeller:
      section_segments: 1
      offset:
        x: 0
        y: 765-eng_ypos
        z: 115
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [18]
      height: [18]
      propeller: true
    rear_propulsor_propeller2:
      section_segments: 1
      offset:
        x: 105-5.5
        y: 765-eng_ypos
        z: -55-3.5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [18]
      height: [18]
      propeller: true      
    engine_reactor:
      section_segments: 24
      offset:
        x: 105-3.5
        y: -55-3.5
        z: -655+eng_ypos
      position:
        x: [0,0,0,0]
        y: [-18.4,-18.4,18.4,18.4]
        z: [0,0,0,0]
      width: [0,23,23,0]
      height: [0,23,23,0]
      texture: [4]  
      angle: 30
      vertical: true
    engine_reactor2:
      section_segments: 24
      offset:
        x: 0
        y: 115
        z: -655+eng_ypos
      position:
        x: [0,0,0,0]
        y: [-18.4,-18.4,18.4,18.4]
        z: [0,0,0,0]
      width: [0,23,23,0]
      height: [0,23,23,0]
      texture: [4]  
      angle: 90
      vertical: true
    engine_ball:
      section_segments: 24
      offset:
        x: 0
        y: 115
        z: -655+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-18.4,-18.4,-11,-1.5,1.5,11,18.4,19.4]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,23,46,46,46,46,23,0]
      height: [0,23,46,46,46,46,23,0]
      texture: [17,[15],17,18,17,[15],17]  
      angle: 90
      vertical: true
    engine_ball2:
      section_segments: 24
      offset:
        x: 0
        y: 115
        z: -655+eng_ypos
      position:
        x: [0,0]
        y: [18.4,19.4]
        z: [0,0]
      width: [23,0]
      height: [23,0]
      texture: [17]  
      angle: -90
      vertical: true
    engine_ball3:
      section_segments: 24
      offset:
        x: 137-2
        y: 0
        z: -655+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-18.4,-18.4,-11,-1.5,1.5,11,18.4,19.4].add(-60-7.4)
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,23,46,46,46,46,23,0]
      height: [0,23,46,46,46,46,23,0]
      texture: [17,[15],17,18,17,[15],17]  
      angle: 30
      vertical: true
    reactor_hub:
      section_segments: 20
      offset:
        x: 15 
        y: 115
        z: -655+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,9,7,7,10,6,7]
        z: [0,0,0,0,0,0,0,0]
      width: [18,15,13,12,10,2,0].div(1.2)
      height: [18,15,13,12,10,2,0].div(1.2)
      texture: [18,17,17,18,18,17]     
      vertical: true     
      angle: 90
    reactor_hub2:
      section_segments: 20
      offset:
        x: 109
        y: -30-15
        z: -655+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,9,7,7,10,6,7]
        z: [0,0,0,0,0,0,0,0]
      width: [18,15,13,12,10,2,0].div(1.2)
      height: [18,15,13,12,10,2,0].div(1.2)
      texture: [18,17,17,18,18,17]     
      vertical: true     
      angle: 30  
    hub_reactor:
      section_segments: [45,135,225,315]
      offset:
        x: 33 
        y: 18
        z: -560+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,9,7,7,10,6,7].mult(1.2)
        z: [0,0,0,0,0,0,0,0]
      width: [15,15,13,12,10,2,0].mult(1.4)
      height: [15,15,13,12,10,2,0].mult(2.4)
      texture: [18,17,17,18,18,17]     
      vertical: true     
      angle: 59   
    hub_reactor2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -38
        z: -560+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,9,7,7,10,6,7].mult(1.2)
        z: [0,0,0,0,0,0,0,0]
      width: [15,15,13,12,10,2,0].mult(1.4)
      height: [15,15,13,12,10,2,0].mult(2.4)
      texture: [18,17,17,18,18,17]     
      vertical: true     
      angle: 180         
    engine_disc:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 100
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      vertical: true
    engine_disc2:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 100
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(-12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      vertical: true      
    engine_disc3:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 0
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2).add(100)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      angle: 120
      vertical: true
    engine_disc4:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 0
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(-12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2).add(100)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      angle: 120      
      vertical: true     
    engine_disc5:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 0
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2).add(100)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      angle: -120
      vertical: true
    engine_disc6:
      section_segments: [120,240,360]
      offset:
        x: 0
        y: 0
        z: -620+eng_ypos
      position:
        x: [0,0,0,0,0,0,0,0,0,0].add(-12)
        y: [7,7,7,7,1,2,6,7,7,7].mult(2).add(100)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,20,20,20,20,20,10,10].mult(.35)
      height: [10,10,10,20,20,20,20,20,10,10].mult(2)
      texture: [4,4,4,4,17,4,17,18].add(-0.3)  
      angle: -120      
      vertical: true  
  wings: 
    main:
      length: [40,2,48+28,2,40]
      width: [140,190,190,190,190,140]
      angle: [50,90,90,90,130]
      position: [0,0,0,0,0,0]
      doubleside: true
      offset:
        x: 100
        y: 100
        z: -70
      bump:
        position: 35
        size: 0
      texture: [4,17,18,17,4]   
    main2:
      doubleside: true
      offset:
        x: 126
        y: 60
        z: 0
      length: [0,10]
      width: [40,250,40]
      angle: [0,0]
      position: [0,-80,10]
      texture: [4,4]
      bump:
        position: 45
        size: 13+2
    main3:
      doubleside: true
      offset:
        x: 126
        y: 90
        z: 0
      length: [0,10]
      width: [-40,-350,-40]
      angle: [0,0]
      position: [10,160,10]
      texture: [4,4]
      bump:
        position: 45
        size: 9.4+1.3
    main4:
      doubleside: true
      offset:
        x: 129
        y: 60
        z: 0
      length: [0,10]
      width: [40,200,40]
      angle: [0,0]
      position: [0,-50,10]
      texture: [17]
      bump:
        position: 45
        size: 6
    main5:
      doubleside: true
      offset:
        x: 128
        y: 100
        z: 0
      length: [0,10]
      width: [-40,-300,-40]
      angle: [0,0]
      position: [10,100,10]
      texture: [17]
      bump:
        position: 45
        size: 6 
    main6:
      doubleside: true
      offset:
        x: 125
        y: 60
        z: 0
      length: [0,10]
      width: [40,200,40]
      angle: [0,0]
      position: [0,-50,10]
      texture: [17]
      bump:
        position: 45
        size: 6 
    main7:
      doubleside: true
      offset:
        x: 124
        y: 100
        z: 0
      length: [0,10]
      width: [-40,-300,-40]
      angle: [0,0]
      position: [10,100,10]
      texture: [17]
      bump:
        position: 45
        size: 6    
    main8:
      doubleside: true
      offset:
        x: 124
        y: 60
        z: 0
      length: [0,10]
      width: [40,100,40]
      angle: [0,0]
      position: [0,-50,10]
      texture: [4]
      bump:
        position: 45
        size: 4    
    main9:
      doubleside: true
      offset:
        x: 123
        y: 100
        z: 0
      length: [0,10]
      width: [-40,-200,-40]
      angle: [0,0]
      position: [10,100,10]
      texture: [4]
      bump:
        position: 45
        size: 4            
#bodyStarY("star",200,0,0)   
#bodyStarY("star2",150,0,0) 
for i in [1...19]
  model.bodies['bar'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 100
    position:
      x: [0,0,0,0]
      y: [40,40,42,42]
      z: [0,0,0,0]
    width: [0,2,2,0]
    height: [0,140,140,0]
    texture: [13]
    vertical: true
    angle: i*20
for i in [1...7]
  arr = [0,63,117,180,180+63,180+58.5*2]
  model.bodies['hub_joint'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -100
    position:
      x: [0,0,0,0,0,0]
      y: [5,5,10,12,12,12].add(105)
      z: [0,0,0,0,0,0]
    width: [0,10,10,8,2,0]
    height: [0,30,30,30,30,0]
    texture: [17,17,17,10.035,13]
    vertical: true
    angle: arr[i]  
  model.bodies['hub'+i] =
    section_segments: 20
    offset:
      x: 0
      y: 0
      z: -130
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4).add(112)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: arr[i]
  model.bodies['hub2'+i] =
    section_segments: 20
    offset:
      x: 0
      y: 0
      z: -70
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4).add(112)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: arr[i]  
  model.bodies['tori_joint'+i] =
    section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
    offset:
      x: 0
      y: 0
      z: -100
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0]
      y: [5,5,10,15,15].add(100)
      z: [0,0,0,0,0,0,0,0,0,0,0]
    width: [0,20,20,15,0,20,20,20,0]
    height: [0,70,70,60,0,40,40,40,0]
    texture: [2,2,2,3]
    vertical: true
    angle: arr[i]     
for i in [1...9-Math.round(eng_ypos/50)]
  for j in [1...6]  
      model.bodies['grid'+i+j] =    
        section_segments: [45,90,135,225,270,315]
        offset:
          x: 0
          y: 0
          z: (-215+40)-i*50
        position:
          x: [0,0,0,0,0,0,0]
          y: [0,10,5,5,10,6].div(1.4).add(37)
          z: [0,0,0,0,0,0,0]
        width: [18,15,13,12,10,0].div(1.2)
        height: [18,15,13,12,10,0].mult(2)
        texture: [17.98,16.98,16.98,17.98,3.98]     
        vertical: true 
        angle: j*70-70
      model.bodies['ammo'+i+j] =
        section_segments: 20
        offset:
          x: 0
          y: 0
          z: (-225+50+7)-i*50
        position:
          x: [0,0,0,0,0,0,0,0]
          y: [0,8,5,5,8,5,6,6].div(1.4).add(40)
          z: [0,0,0,0,0,0,0,0]
        width: [18,15,13,12,10,4,0].div(2.6)
        height: [18,15,13,12,10,4,0].div(2.6)
        texture: [18,17,17,18,[15],17]     
        vertical: true     
        angle: j*70-70  
      model.bodies['ammo2'+i+j] =
        section_segments: 20
        offset:
          x: 0
          y: 0
          z: (-225+50-7)-i*50
        position:
          x: [0,0,0,0,0,0,0,0]
          y: [0,8,5,5,8,5,6,6].div(1.4).add(40)
          z: [0,0,0,0,0,0,0,0]
        width: [18,15,13,12,10,4,0].div(2.6)
        height: [18,15,13,12,10,4,0].div(2.6)
        texture: [18,17,17,18,[15],17]     
        vertical: true     
        angle: j*70-70              
      arr = [0,35,105,175,245,320]
      model.bodies['grid2'+i+j] =    
        section_segments: [45,90,135,225,270,315]
        offset:
          x: 0
          y: 0
          z: (-215+60)-i*50
        position:
          x: [0,0,0,0,0,0,0]
          y: [0,10,5,5,10,6].div(1.4).add(37)
          z: [0,0,0,0,0,0,0]
        width: [18,15,13,12,10,0].div(1.2)
        height: [18,15,13,12,10,0].mult(2)
        texture: [17.98,16.98,16.98,17.98,3.98]   
        vertical: true 
        angle: arr[j]
      model.bodies['ammo3'+i+j] =
        section_segments: 20
        offset:
          x: 0
          y: 0
          z: (-225+70+7)-i*50
        position:
          x: [0,0,0,0,0,0,0,0]
          y: [0,8,5,5,8,5,6,6].div(1.4).add(40)
          z: [0,0,0,0,0,0,0,0]
        width: [18,15,13,12,10,4,0].div(2.8)
        height: [18,15,13,12,10,4,0].div(2.8)
        texture: [18,17,17,18,[15],17]     
        vertical: true     
        angle: arr[j]
      model.bodies['ammo4'+i+j] =
        section_segments: 20
        offset:
          x: 0
          y: 0
          z: (-225+70-7)-i*50
        position:
          x: [0,0,0,0,0,0,0,0]
          y: [0,8,5,5,8,5,6,6].div(1.4).add(40)
          z: [0,0,0,0,0,0,0,0]
        width: [18,15,13,12,10,4,0].div(2.8)
        height: [18,15,13,12,10,4,0].div(2.8)
        texture: [18,17,17,18,[15],17]     
        vertical: true     
        angle: arr[j] 
      model.bodies['ammo_joint'+i+j] =
        section_segments: [45,135,225,315]
        offset:
          x: 0
          y: 0
          z: (-225+70)-i*50
        position:
          x: [0,0,0,0]
          y: [0,0,2,2].add(42)
          z: [0,0,0,0]
        width: [0,2,2,0]
        height: [0,3,3,0]
        texture: [2]     
        vertical: true     
        angle: arr[j]     
      model.bodies['ammo_joint2'+i+j] =
        section_segments: [45,135,225,315]
        offset:
          x: 0
          y: 0
          z: (-225+50)-i*50
        position:
          x: [0,0,0,0]
          y: [0,0,2,2].add(42)
          z: [0,0,0,0]
        width: [0,2,2,0]
        height: [0,3,3,0]
        texture: [2]     
        vertical: true     
        angle: j*70-70     
for i in [1...5]
  arr = [0,45,-45,135,-135]
  model.bodies["ring1"+i] = 
    ring(0,i*-40,0,[40,45,50,130,135,140,220,225,230,310,315,320],57,57,1,2.5,0,[4,17,18,18,17,4,17],0)
  model.bodies['back'+i] =   
    section_segments: [40,45,50,90,130,135,140,220,225,230,270,310,315,320]
    offset:
      x: 0
      y: 0
      z: -400+15+eng_ypos-50
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,4,5,10,15,15,15].add(40)
      z: [0,0,0,0,0,0,0]
    width: [0,30,35,35,30,27,0]
    height: [0,85,90,90,80,77,0].mult(1.2)
    texture: [[15],17,[15],2,17,2]
    vertical: true
    angle: arr[i]
  model.bodies['back2'+i] =   
    section_segments: [43,45,47,133,135,137,223,225,227,313,315,317]
    offset:
      x: 0
      y: 0
      z: -415+30+eng_ypos-50
    position:
      x: [0,0,0,0]
      y: [0,0,40,40].add(45)
      z: [0,0,0,0]
    width: [0,25,12,0]
    height: [0,100,70,0]
    texture: [1,3,2]
    vertical: true
    angle: arr[i]
for i in [1...3]
  model.bodies['rear_hub'+i] =
    section_segments: 20
    offset:
      x: 45-3
      y: 60-3
      z: i*65+-505+22.5+eng_ypos-50
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: -32
  model.bodies['rear_hub2'+i] =
    section_segments: 20
    offset:
      x: 60+-1-3
      y: 50+-5-3
      z: i*65+-505+22.5+eng_ypos-50
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: 122 
  model.bodies['rear_hub3'+i] =
    section_segments: 20
    offset:
      x: 45-3
      y: -60+3
      z: i*65+-505+22.5+eng_ypos-50
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: -32*4.5  
  model.bodies['rear_hub4'+i] =
    section_segments: 20
    offset:
      x: 60+-1-3
      y: -45+3
      z: i*65+-505+22.5+eng_ypos-50
    position:
      x: [0,0,0,0,0,0,0]
      y: [0,10,5,5,10,6].div(1.4)
      z: [0,0,0,0,0,0,0]
    width: [18,15,13,12,10,0].div(1.5)
    height: [18,15,13,12,10,0].div(1.5)
    texture: [18,17,17,18,18]     
    vertical: true     
    angle: 327+90 
for i in [1...4]
  model.bodies['star_deco'+i] =
    section_segments: [40,45,50,130,135,140,220,225,230,310,315,320].add(45)
    offset:
      x: -115
      y: 60
      z: i*-50
    position:
      x: [0,0,0,0]
      y: [0,0,3,3]
      z: [0,0,0,0]
    width: [0,0,2,3].mult(3.5)
    height: [0,0,2,3].mult(3.5)
    texture: [17]
    angle: 130
    vertical: true
  model.bodies['star_deco2'+i] =
    section_segments: [40,45,50,130,135,140,220,225,230,310,315,320].add(45)
    offset:
      x: -115
      y: -60
      z: i*-50
    position:
      x: [0,0,0,0]
      y: [0,0,3,3]
      z: [0,0,0,0]
    width: [0,0,2,3].mult(3.5)
    height: [0,0,2,3].mult(3.5)
    texture: [17]
    angle: 130+-90
    vertical: true
  model.bodies['rear_engineholds'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -555+eng_ypos
    position:
      x: [15,15,0,0].add(15)
      y: [0,0,70,70].add(35)
      z: [0,0,-15,-15]
    width: [0,5,5,0]
    height: [0,30,22.5,0].add(0)
    texture: [3] 
    vertical: true 
    angle: i*120
  model.bodies['rear_enginehold'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -555+eng_ypos
    position:
      x: [-15,-15,0,0].add(-15)
      y: [0,0,70,70].add(35)
      z: [0,-3,-15,-15]
    width: [0,5,5,0]
    height: [0,34,22.5,0]
    texture: [3] 
    vertical: true 
    angle: i*120 
  model.bodies['rear_enginehold1'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -563+eng_ypos
    position:
      x: [-15,-15,-2.4,-2.4].add(-15)
      y: [0,0,60,60].add(35)
      z: [-6.6,-6.6,-15.7,-15.7]
    width: [0,5.1,5.1,0]
    height: [0,34,15,0].div(2)
    texture: [4] 
    vertical: true 
    angle: i*120 
  model.bodies['rear_enginehold15'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -568+eng_ypos
    position:
      x: [15,15,2.4,2.4].add(15)
      y: [0,0,60,60].add(35)
      z: [-2.6,-2.6,-15.7,-15.7]
    width: [0,5.1,5.1,0]
    height: [0,30,15,0].div(2)
    texture: [4] 
    vertical: true 
    angle: i*120     
  model.bodies['rear_engineholds2'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -568+eng_ypos
    position:
      x: [0,0,0,0].add(15)
      y: [0,0,15,15].add(105)
      z: [0,0,-15,-15]
    width: [0,5,5,0]
    height: [0,20,0.01,0]
    texture: [3] 
    vertical: true 
    angle: i*120    
  model.bodies['rear_enginehold2'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -568+eng_ypos
    position:
      x: [0,0,0,0].add(-15)
      y: [0,0,15,15].add(105)
      z: [0,0,-15,-15]
    width: [0,5,5,0]
    height: [0,20,0.01,0]
    texture: [3] 
    vertical: true 
    angle: i*120    
  model.bodies['rear_engineholds3'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -580+eng_ypos
    position:
      x: [0,0,0,0].add(15)
      y: [0,0,31,31].add(105)
      z: [0,0,-14,-14]
    width: [0,4.98,4.98,0]
    height: [0,20,0.01,0]
    texture: [3] 
    vertical: true  
    angle: i*120
  model.bodies['rear_enginehold3'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -580+eng_ypos
    position:
      x: [0,0,0,0].add(-15)
      y: [0,0,31,31].add(105)
      z: [0,0,-14,-14]
    width: [0,4.98,4.98,0]
    height: [0,20,0.01,0]
    texture: [3] 
    vertical: true  
    angle: i*120    
  model.bodies['rear_engineholds4'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -622+eng_ypos
    position:
      x: [0,0,0,0].add(15)
      y: [0,0,40,40].add(95.8)
      z: [0,0,0,0]
    width: [0,4.98,4.98,0]
    height: [0,40,40,0]
    texture: [3] 
    vertical: true  
    angle: i*120
  model.bodies['rear_enginehold4'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -622+eng_ypos
    position:
      x: [0,0,0,0].add(-15)
      y: [0,0,40,40].add(95.8)
      z: [0,0,0,0]
    width: [0,4.98,4.98,0]
    height: [0,40,40,0]
    texture: [3] 
    vertical: true  
    angle: i*120    
  model.bodies['rear_engineholds5'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -643.2+eng_ypos
    position:
      x: [0,0,0,0].add(15)
      y: [0,0,40.5,40.5].add(95.5)
      z: [0,0,-4,0]
    width: [0,4.99,4.99,0]
    height: [0,10,5,0]
    texture: [4] 
    vertical: true    
    angle: i*120
  model.bodies['rear_enginehold5'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -643.2+eng_ypos
    position:
      x: [0,0,0,0].add(-15)
      y: [0,0,40.5,40.5].add(95.5)
      z: [0,0,-4,0]
    width: [0,5,5,0]
    height: [0,10,5,0]
    texture: [4] 
    vertical: true    
    angle: i*120    
  model.bodies['rear_engineblock'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -690+eng_ypos
    position:
      x: [0,0,0,0,0]
      y: [0,0,35,35].add(98)
      z: [0,0,0,0,0]
    width: [0,15,15,0]
    height: [0,35,35,0]
    texture: [2] 
    vertical: true    
    angle: i*120
  model.bodies['rear_engineblock2'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -715+eng_ypos
    position:
      x: [0,0,0,0,0]
      y: [0,0,45,45].add(98-5)
      z: [0,0,0,0,0]
    width: [0,20,20,0]
    height: [0,10,10,0]
    texture: [3,8,3] 
    vertical: true    
    angle: i*120
  model.bodies['rear_engineblock3'+i] =
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -714.9+eng_ypos
    position:
      x: [0,0,0,0,0]
      y: [0,0,45.1,45.1].add(98-5)
      z: [0,0,0,0,0]
    width: [0,19.9,19.9,0]
    height: [0,10,10,0]
    texture: [3] 
    vertical: true    
    angle: i*120    
for i in [1...5]    
  model.bodies['rear_support_deco'+i] = 
    ring((29-i*3)+3,45+i*15-20,(-560-i*2.5)+2.5+eng_ypos,[45,135,225,315],(25-i*3)+3,4,1,0.2,1,[17,18,17,18,17,18,17,18,17],0)
  model.bodies['rear_support_deco2'+i] = 
    ring((52+i*10)-10,3-i*9+9,(-560-i*2.5)+2.5+eng_ypos,[45,135,225,315],(25-i*3)+3,4,1,0.2,1,[17,18,17,18,17,18,17,18,17],120)
  model.bodies['rear_support_deco3'+i] = 
    ring((38+i*13)-25,(-33-i*4.2)-10,(-560-i*2.5)+2.5+eng_ypos,[45,135,225,315],(25-i*3)+3,4,1,0.2,1,[17,18,17,18,17,18,17,18,17],120)
t = -240        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
  for y,v of model.tori
    v.offset.y = v.offset.y + t
return model;    
      
