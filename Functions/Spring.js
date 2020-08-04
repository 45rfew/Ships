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
