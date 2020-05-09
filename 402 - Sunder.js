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
ring = (px,py,pz,l,w,ang,tex,ver,h,sec) ->
  a = 0
  if sec == 6
  then a = 0.1
  vertical: ver
  section_segments: sec
  offset:
    x: px
    y: py
    z: pz
  position:
    x: [0,0,0,0]
    y: [-l,-l,l,l]
    z: [0,0,0,0]
  width: [5,10,10,5].mult(w)
  height: [5,10,10,5].mult(h)
  texture: [2,17,2,2].add(-a)
  angle:ang
circledeco = (px,py,pz,l,w,ang,tex,h) ->
  section_segments: 6
  offset:
    x: px
    y: py
    z: pz
  position:
    x: [0,0,0,0,0]
    y: [0,0,4,4,5].mult(l)
    z: [0,0,0,0,0]
  width: [0,3,3,2,0].mult(w)
  height: [0,3,3,2,0].mult(w)
  texture: tex
  vertical: true
  angle:ang
plate = (px,py,pz,l,w,height,ang,tex,h) ->
  section_segments: [45,135,225,315]
  offset:
    x: px
    y: py
    z: pz
  position:
    x: [0,0,0,0]
    y: [-l,-l,l,l]
    z: [0,0,0,0]
  width: [0,w,w,0]
  height: [0,height,height,0]
  texture: tex
  angle: ang
deco = (n, xpos, ypos, zpos, l, w, h, ang, ver, tex, sec) ->
  vertical: ver
  section_segments: sec
  offset:
    x: xpos
    y: ypos
    z: zpos
  position:
    x: [0,0,0,0]
    y: [-1,-1,1,1].mult(l)
    z: [0,0,0,0]
  width: [0,w,w,0]
  height: [0,h,h,0]
  texture: tex
  angle: ang
railgunside = (n, xpos, ypos, zpos, size, angle) ->
  model.bodies['base'+n] =
    section_segments: 20
    offset:
      x: xpos
      y: zpos
      z: -ypos
    position:
      x: [0,0,0,0]
      y: [0,0,5,5].mult(size)
      z: [0,0,0,0].mult(size)
    width: [0,6,6,0].mult(size)
    height: [0,6,6,0].mult(size)
    texture: 4
    vertical: true 
  model.bodies['base2'+n] =
    section_segments: 20
    offset:
      x: xpos
      y: zpos+.2
      z: -ypos
    position:
      x: [0,0,0,0]
      y: [0,0,5,5].mult(size)
      z: [0,0,0,0].mult(size)
    width: [0,6,6,0].mult(size/1.2)
    height: [0,6,6,0].mult(size/1.2)
    texture: 17
    vertical: true
  model.bodies['stand'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [0,0,0,0,0,0]
        y: [-8,-8,-7,7,8,8].mult(size)
        z: [-1,-1,1,1,-1,-1].mult(size)
      width: [0,2,2,2,2,0].mult(size)
      height: [0,4,4,4,4,0].mult(size)
      texture: 3
      angle: angle
  model.bodies['stand2'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [0,0,0,0,0,0]
        y: [-8,-8,-7,7,8,8].mult(size)
        z: [-1,-1,1,1,-1,-1].mult(size)
      width: [0,2,2,2,2,0].mult(size)
      height: [0,4,4,4,4,0].mult(size)
      texture: 3
      angle: angle+90
  model.bodies['circle'+n] =
      section_segments: 20
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [0,0,0,0]
        y: [-3.5,-3.5,-2.5,-2.5].mult(size)
        z: [5,5,5,5]
      width: [0,4,4,0].mult(size)
      height: [0,6,6,0].mult(size)
      texture: 4
      angle: angle+90
  model.bodies['circle2'+n] =
      section_segments: 20
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [0,0,0,0]
        y: [2.5,2.5,3.5,3.5].mult(size)
        z: [5,5,5,5]
      width: [0,4,4,0].mult(size)
      height: [0,6,6,0].mult(size)
      texture: 4
      angle: angle+90
  model.bodies['rails'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [1.4,1.4,1.4,1.4,1.4,1.4,1.4,1.4].mult(size).add(-1)
        y: [-8.4,-8.4,-6.4,-2.4,-0.4,2,4,4].mult(size)
        z: [6.9,6.9,6.9,6.9,6.9,6.9,6.9,6.9]
      width: [0,0.5,0.5,0.5,0.5,0.5,0.5,0].mult(size)
      height: [0,2,2,2,2,2,2,0].mult(size)
      texture: [4,4,17,4,17,4,4,4]
      angle: angle
      laser:
        damage: [10,14]
        speed: [200,240]
        number: 1
        rate: 3.5
        error: 3
        angle: 0
  model.bodies['rails2'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [-1.1,-1.1,-1.1,-1.1,-1.1,-1.1,-1.1,-1.1]
        y: [-8.4,-8.4,-6.4,-2.4,-0.4,2,4,4].mult(size)
        z: [6.9,6.9,6.9,6.9,6.9,6.9,6.9,6.9,]
      width: [0,0.5,0.5,0.5,0.5,0.5,0.5,0].mult(size)
      height: [0,2,2,2,2,2,2,0].mult(size)
      texture: [4,4,17,4,17,4,4,4]
      angle: angle
  model.bodies['outerplating'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [-2.1,-2.1,-2.1,-1.7,-1.7,-1.7].mult(size)
        y: [-8.3,-8.3,1.7,1.7,4.7,4.7].mult(size)
        z: [7,7,7,7,7,7]
      width: [0,0.5,0.5,2,2,0].mult(size)
      height: [0,2,2,2,2,0].mult(size)
      texture: 3
      angle: angle
  model.bodies['outerplating2'+n] =
      section_segments: [45,135,225,315]
      offset:
        x: xpos
        y: ypos
        z: zpos
      position:
        x: [2.1,2.1,2.1,1.1,1.1,2.1].mult(size)
        y: [-8.3,-8.3,1.7,1.7,4.7,4.7].mult(size)
        z: [7,7,7,7,7,7]
      width: [0,0.5,0.5,2,2,0].mult(size)
      height: [0,2,2,2,2,0].mult(size)
      texture: 3
      angle: angle
engineflaps = (x,y,z,x1,x2,y1,z1,z2,h1,h2,w1,w2,a,t) ->
  section_segments: 6
  offset:
    x: x
    y: y
    z: z
  position:
    x: [x1,x1,x2,x2]
    y: [0,0,y1,y1]
    z: [z1,z1,z2,z2]
  width: [0,w1,w2,0]
  height: [0,h1,h2,0]
  texture: t
  angle: a
circle = (m, id, xx, yy, zz, segments, radPosY, radPosZ, tx, h=1) ->
  widths = [];
  heights = [];
  posx = [];
  for i in [0..radPosY.length]
    posx.push(0);
    heights.push(h);
    widths.push(radPosY[i]*Math.tan(Math.PI/segments))
  for i in [0..segments] by 1
    m.bodies[id+"segment"+i] = 
      section_segments: 4
      offset:
        x: xx
        y: yy
        z: zz
      position:
        x: posx
        y: radPosY
        z: radPosZ
      width: widths
      height: heights
      angle: 360*(i/segments)
      texture: tx
  return m
model =
  name: 'Sunder'
  level: 4
  model: 2
  size: 2.5
  Designer: 'Serendibite'
  specs:
    shield:
      capacity: [260,300]
      reload: [8,11]
    generator:
      capacity: [160,220]
      reload: [400,500]
    ship:
      mass: 380
      speed: [80,100]
      rotation: [50,60]
      acceleration: [100,120]
  bodies:
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-195,-160,-80,0,80,120,141,141,131]
        z: [6,2,0,0,0,0,0,0,0]
      width: [10,25,30,30,30,10,13,12,0]
      height: [0,20,20,20,20,20,16,15,0]
      texture: [63,1.9,1.9,1.9,1.9,4,16.9]
      propeller: true
    center_ridge:
      section_segments: 7
      offset:
        x: 0
        y: 0
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-196,-195,-190,-160,-80,0,80,120,140,140]
        z: [-11,-11,-10,0,0,0,0,-4,0,0]
      width: [0,8,12,20,20,20,20,17,17,0]
      height: [0,2,3,13,13,13,13,10,6,0]
      texture: [1.9,9,9,2.9,2.9,2.9,2.9,2.9]
    big_guns:
      section_segments: 8
      offset:
        x: 30
        y: -50
        z: -10
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-110,-130,-125,-50,-46,-20,-16,-16]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,7,7,8,8,7,0]
      height: [0,5,7,7,8,8,7,0]
      texture: [17,63,2,13,3,63,2]
      laser:
        damage: [40,50]
        recoil: 50
        speed: [80,120]
        error: 0
        angle: 0
        rate: 0.8
        number: 1
    turret_platforms:
      section_segments: [45,135,225,315]
      angle: 90
      offset:
        x: 45
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-20,-20,10,13]
        z: [0,0,0,0]
      width: [0,120,80,0]
      height: [0,10,5,0]
      texture: [2,2,63,2]
    angled_plate_thing:
      section_segments: [45,135,225,315]
      angle: 47.5
      offset:
        x: 67
        y: -41
        z: 3
      position:
        x: [0,0,0,0]
        y: [-60,-60,-20,-20]
        z: [3,3,0,0]
      width: [0,2,2,0]
      height: [0,4,4,0]
      texture: 3
    angled_plate_thing1:
      section_segments: [45,135,225,315]
      angle: 47.5
      offset:
        x: 67
        y: -41
        z: 3.1
      position:
        x: [0,0,0,0]
        y: [-60,-60,-20,-20]
        z: [3,3,0,0]
      width: [0,.5,.5,0]
      height: [0,4,4,0]
      texture: 17      
    angled_plate_thing2:
      section_segments: [45,135,225,315]
      angle: 133.5
      offset:
        x: 67
        y: 40
        z: 3
      position:
        x: [0,0,0,0]
        y: [-60,-60,-20,-20]
        z: [3,3,0,0]
      width: [0,2,2,0]
      height: [0,4,4,0]
      texture: 3   
    angled_plate_thing3:
      section_segments: [45,135,225,315]
      angle: 133.5
      offset:
        x: 67
        y: 40
        z: 3.1
      position:
        x: [0,0,0,0]
        y: [-60,-60,-20,-20]
        z: [3,3,0,0]
      width: [0,.5,.5,0]
      height: [0,4,4,0]
      texture: 17
    bigbaccengines1:
      section_segments: 12
      offset:
        x: 25
        y: 95
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,5,-1,1,15,20,40,45,60,60,50]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7,9,10,11,11,10,9,6,5,0]
      height: [0,7,9,10,11,11,10,9,6,5,0]
      texture: [3,17,4,2,17,2,17,4,17]
      propeller: true
    bigbaccengines2:
      section_segments: 12
      offset:
        x: 40
        y: 35
        z: -1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [0,5,-1,1,15,20,40,45,60,60,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,7,9,10,11,11,10,9,6,5,0]
      height: [0,3,4,5,6,6,5,4,3,2,0]
      texture: [3,17,4,2,17,2,17,4,17]
      propeller: true
#rings
    ring1: ring(30,-94,-10,2,1,0,2,false,1,6)
    ring2: ring(30,-88,-10,2,1,0,2,false,1,6)
    ring3: ring(30,-82,-10,2,1,0,2,false,1,6)
    ring4: ring(30,-76,-10,2,1,0,2,false,1,6)
    ring5: ring(30,-70,-10,2,1,0,2,false,1,6)
    ring7: ring(0,-85,18,2,2,90,2,false,2,[40,45,50,130,135,140,220,225,230,310,315,320])
    ring8: ring(0,-85,17,2,2,0,2,false,1.5,20)
    ring9: ring(0,113,15,2,1.7,0,2,false,1.2,20)
    ring10: ring(0,138.1,13,2,1.7,0,2,false,1.5,[-95,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,95])
#gun color tube things
    tubething1: circledeco(30,-11,110,2,2,20,[2.9,2.9,16.9,2.9,1.9],1)
    tubething2: circledeco(30,-11,127,2,2,20,[2.9,2.9,16.9,2.9,1.9],1)
    tubething3: circledeco(0,24,0,2,2,0,[2.9,2.9,16.9,2.9,1.9],1)
    tubething4: circledeco(0,24,35,2,2,0,[2.9,2.9,16.9,2.9,1.9],1)
    tubething5: circledeco(0,24,-35,2,2,0,[2.9,2.9,16.9,2.9,1.9],1)
#plate detailing
    plate1: plate(32,-119,-6,4,2,4,0,3,1)
    plate2: plate(32,-152,-4.5,23,2,2,0,3,1)
    plate3: plate(52,0,3,55,2,4,0,3,1)
    plate4: plate(19.7,-40,12,120,3,1,0,63,1)
    plate5: plate(52,0,3.1,55,.5,4,0,17,1)
#random detailing
    deco1: deco(1,32,-5.5,153,2,5,20,20,true,[3,2,16.99,17],[-140,-130,-50,-40,40,50,130,140])
    deco2: deco(1,17.7,20,-79,9,2,2,-19,true,63,[45,135,225,315])
    deco3: deco(1,7.7,30,-79,8.4,2,2,-74,true,63,[45,135,225,315])
#engineplates
    cover1: engineflaps(25,140,18,0,0,25,0,-3,1,1,5,2,0,2.9)
    cover2: engineflaps(25,140,18.5,0,0,25,0,-3,1,1,1.5,.5,0,16.9)
    cover3: engineflaps(25,140,2,0,0,25,0,3,1,1,5,2,0,2.9)
    cover4: engineflaps(33.1,140,10,0,-4,25,0,0,1.5,.5,1,1,0,16.9)
    cover5: engineflaps(33,140,10,0,-4,25,0,0,5,2,1,1,0,2.9)
    cover6: engineflaps(17,140,10,0,4,25,0,0,5,2,1,1,0,2.9)
    cover7: engineflaps(16.9,140,10,0,4,25,0,0,1.5,.5,1,1,0,16.9)
    cover8: engineflaps(40,80,3,0,0,25,0,-1,1,.5,4,1.8,0,2.9)
    cover9: engineflaps(40,80,3.2,0,0,25,0,-1,1,.5,1.6,.5,0,16.9)
    cover10: engineflaps(40,80,-5,0,0,25,0,1,1,.5,4,1.8,0,2.9)
    cover11: engineflaps(40,80,-5,0,0,25,0,1,1,.5,4,1.8,0,2.9)
    cover12: engineflaps(48,80,-1,0,-4,25,0,0,3,1.8,1,.5,0,2.9)
    cover13: engineflaps(48.1,80,-1,0,-4,25,0,0,1.4,.8,1,.5,0,16.9)
    cover14: engineflaps(32.2,80,-1,0,4,25,0,0,3,1.8,1,.5,0,2.9)
    cover15: engineflaps(32,80,-1,0,4,25,0,0,1.8,1.4,.8,.5,0,16.9)
    front: engineflaps(1,-160,31,0,16,58,-0.7,-6,1,2,2,2,0,63)
    front2: engineflaps(17,-102,26,0,2,15,-1,-13,2,2,2,2,0,63)
    bacc: engineflaps(0,113,25,0,0,25,0,-2,1,1,4,4,0,[[15]])
    back: engineflaps(0,87-8,27,0,0,35,0,-2,6.5,1,8,4,0,[[15]])
    top: engineflaps(0,-85,27,0,0,165,0,0,4,4,8,8,0,[[15]])
    top2: engineflaps(0,-160,27,0,0,75,1.8,0,4,4,1,8,0,[[15]])
#railgun turrets
railgunturret: railgunside(2,37,-44,2,1.4,-85)
railgunturret2: railgunside(3,37,-14.5,2,1.4,-90)
railgunturret3: railgunside(4,37,14.5,2,1.4,-90)
railgunturret4: railgunside(5,37,44,2,1.4,-95)
circle(model,"reactor",0,0,31.5,12,[0,12,14,16,18,21,25,28,29,29,30,15,0].div(2.1),[0,0,5,5,4,6,6.2,0,0,-15,-20,-21,-21].div(2),[18,17,17,17,16,2,2,17,17,63],0) 
circle(model,"reactor2",0,35,31.5,12,[0,12,14,16,18,21,25,28,29,29,30,15,0].div(2.1),[0,0,5,5,4,6,6.2,0,0,-15,-20,-21,-21].div(2),[18,17,17,17,16,2,2,17,17,63],0) 
circle(model,"reactor3",0,-35,31.5,12,[0,12,14,16,18,21,25,28,29,29,30,15,0].div(2.1),[0,0,5,5,4,6,6.2,0,0,-15,-20,-21,-21].div(2),[18,17,17,17,16,2,2,17,17,63],0) 
t = 15        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;
