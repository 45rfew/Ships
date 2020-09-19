multiplyArray = (arr, m) ->
  k = [];
  for i in [0..arr.length]
    k.push(arr[i]*m)
  return k;
ringGen = (xx, yy, zz, segments, length, width, thick, vert, tx, angle) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: multiplyArray([0,0.5,1,2.25,3.5,4,4.5,4,3.5,2.25,1,0.5,0], thick)
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [width,width+1*thick,width+2*thick,width+2.5*thick,width+2*thick,width+1*thick,width,width-1*thick,width-2*thick,width-2.5*thick,width-2*thick,width-1*thick,width]
    height: [length,length+1*thick,length+2*thick,length+2.5*thick,length+2*thick,length+1*thick,length,length-1*thick,length-2*thick,length-2.5*thick,length-2*thick,length-1*thick,length]
    vertical: vert
    texture: [tx]
    angle: angle
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
return model =
  bodies:
    ring1: ringGen(0,40-70,0,116,6,6,1,!true,4,0)
    ring2: ringGen(0,37-70,0,116,6,16,0.9,!true,4,81)    
    oof1: generateBall(9,-70,0,10,10,10,100,6,!true,0)
    oof2: generateBall(0,25-70,0,30,10,10,100,6,!true,0)  
