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
generateBall = (xx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
  xzpos = []
  ypos = []
  width = []
  for i in [0..segments]
    ang = (i/segments)*Math.PI
    width.push(Math.sin(ang)*radius)
    ypos.push(-Math.cos(ang)*length)
    xzpos.push(0)
  return k = 
    section_segments: l_segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: xzpos
      y: ypos
      z: xzpos
    width: width
    height: width
    texture: tx
    vertical: vertical
    angle: angle  
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
hub = (x,y,z,s,w,h,v,a,t) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0]
      y: [0,9,7,7,10,6,7].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a    
return model =
  bodies:
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,5,5,0]
 
