ball = (xx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
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
model =
  name: 'Candy'
  bodies:
    ball: ball(0,0,0,13,10,10,20,63,0,90)
for i in [-2..2]
  model.bodies["wrap"+i] = 
    section_segments: 8
    offset:
      x: 20
      y: 0
      z: 0
    position:
      x: [0,0,i*3,i*3]
      y: [-10,-10,2,3]
      z: [0,0,0,0]
    width: [0,2,2,0]
    height: [0,2,2,0]
    texture: [63]    
    angle: 90   
return model;    
