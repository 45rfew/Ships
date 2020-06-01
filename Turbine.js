y = -190
multiplyArray = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]*m)
  return k;
addArray = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]+m)
  return k;
reverseArray = (arr) ->
  k = [];
  for i in [arr.length-1..0]
    k.push(arr[i])
  return k;
multiplyArrays = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]*m[i])
  return k;
addArrays = (arr, m, mult=1) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]+m[i]*mult)
  return k;
skewedCircleWing = (xx, yy, zz, segments, radius, widths, positions, bumpPos, bumpH, tx, double=false, dir=1, startAt=0, seg=0, freestyle=false) ->
  lengths = [];
  angles = [];
  lengths.push(0);
  angles.push(0)
  widths.unshift(0);
  positions.unshift(positions[0]);
  addAng = 0
  angMult = 1
  if(dir<0)
    addAng = 180
    angMult = -1
  loopFor = segments-1
    
  if(seg!=0)
    loopFor = seg
  for i in [0..loopFor]
    m = 1
    if((i==0||i==segments-1)&&!freestyle)
      m = 0.5
    lengths.push(m*radius*Math.tan(Math.PI/(segments-1)))
    angles.push(startAt+addAng+angMult*i/(segments-1)*57.3*Math.PI)

  widths = widths.splice(0,loopFor+3)
  positions = positions.splice(0,loopFor+3)
  ###
  if(double)
    for i in [0..segments-1]
      m = 1
      if(i==0||i==segments-1)
        m = 0.5
      lengths.push(m*radius*Math.tan(Math.PI/(segments-1)))
      angles.push(i/(segments-1)*57.3*Math.PI+180)
      positions.push(positions[i+1])
      widths.push(widths[i+1])###
  widths.push(0);
  positions.push(positions[positions.length-1])
  angles.push(angles[angles.length-1]);
  lengths.push(0)
  
  return k =
    length: lengths
    width: widths
    angle: angles
    position: positions
    doubleside: true
    bump:
      position: bumpPos
      size: bumpH
    texture: tx
    offset:
      x: xx
      y: yy
      z: zz-(radius/Math.cos(Math.PI/(segments-1)))

model =
  name: 'Ambassador'
  level: 6
  model: 3
  size: 0.8
  specs:
    shield:
      capacity: [150,300]
      reload: [3,5]
    generator:
      capacity: [120,160]
      reload: [35,50]
    ship:
      mass: 340
      speed: [100,130]
      rotation: [40,90]
      acceleration: [120,180]
  bodies:
    turbinesTop:
      section_segments: 12
      offset:
        x: 90
        y: 110+y
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [40,40,60,50,30,40,70,80,175,200,170,240]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,5,8,16,19,22,24,35,35,26,24,0]
      height: [0,5,8,16,19,22,24,35,35,26,24,0]
      texture: [4,18,17,16,1,1,3,3,3,17] 
    turbinesTopExhaust:
      section_segments: 12
      offset:
        x: 90
        y: 110+y
        z: 45
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [170,150]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [30,0]
      height: [30,0]
      propeller:true
      texture: [3,17] 
      
  wings:
    topTurbineShielding1: skewedCircleWing(90,160+y,47,7,28,[100,100,100,100,100,100,100,100],
    reverseArray([60,60,55,47,24,12,2,0]),20,1,2,false)
    topTurbineShielding2: skewedCircleWing(90,160+y,47,7,28,[100,100,100,100,100,100,100,100],
    reverseArray([60,60,55,47,24,12,2,0]),20,1,2,false,-1)
    
    topTurbineShielding1B: skewedCircleWing(90,270+y,49,7,28,[100,100,100,100,100,100,100,100],
    reverseArray([40,40,35,27,14,6,2,0]),-10,6,4,false)
    topTurbineShielding2B: skewedCircleWing(90,270+y,49,7,28,[100,100,100,100,100,100,100,100],
    reverseArray([40,40,35,27,14,6,2,0]),-10,6,4,false,-1)
    
    topTurbineOverhangShield: skewedCircleWing(48,220+y,80,7,40,addArray([40,50,60,70,85,100,100,100,100,100,100,100],-20),
    [-40,-30,-20,-10,-5,-10,-20,-30,-40,-50,-60],20,1,1,false,-1,-90,7,true)
    topTurbineOverhangShield1: skewedCircleWing(48,270+y,80,7,40,[40,40,40,40,40,40,40,40,40,40,40],
    [-40,-30,-15,0,10,15,5,-5,-15,-25,-35],20,1,1,false,-1,-90,7,true)
    topTurbineOverhangShield2: skewedCircleWing(48,330+y,80,7,40,[80,70,60,50,40,30,20,10,40,40,40],
    [-30,-20,-5,5,10,10,-5,-25,-15,-25,-35],20,1,1,false,-1,-90,6,true)
return model
