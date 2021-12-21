ball = (xx, xxx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
  xzpos = []
  ypos = []
  width = []
  tex = []
  for i in [0..segments]
    ang = (i/segments)*Math.PI
    width.push(Math.sin(ang)*radius*2)
    ypos.push(-Math.cos(ang)*length*2)
    xzpos.push(xxx)
    tex.push([17,18,63,17,18,63,113][Math.floor(Math.random()*t.length)])
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
    texture: tex
    vertical: vertical
    angle: angle   
model =
  scale: .08
  bodies: {}
amount = 200
a = -1
t = [17,18,63,17,18,63,113]
for i in [0..amount]
  for j in [0..10]
    r1 = amount/2.5-i/2.5*j
    r2 = amount/2.5-(i+1)/2.5*j
    a1 = i*a/10*j/2
    a2 = (i+1)*a/10*j/2
    radius = 200
    theta = (i/amount)*Math.PI*2
    model.bodies['a'+i+j] = ball(0,Math.cos(a1)*r1*10,Math.sin(a2)*r2*15,j*Math.random()*20+30,15,20,6,6,6,17,0,Math.random()*180)
return model;    
