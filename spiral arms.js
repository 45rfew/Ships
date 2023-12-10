model =
  bodies: {}
amount = 200
a = -1
arms = 4
for i in [0..amount]
  for j in [0..arms-1]
    r1 = amount/2.5-i/2.5
    r2 = amount/2.5-(i+1)/2.5
    a1 = i*a/10 + j*Math.PI*2/arms
    a2 = (i+1)*a/10 + j*Math.PI*2/arms
    radius = 200
    theta = (i/amount)*Math.PI*2
    model.bodies['a'+i+'j'+j] =
      section_segments: 6
      offset:
        x: 0
        y: Math.sin(a2)*r2*10
        z: 0
      position:
        x: [Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10]
        y: [-10,-10,10,10]
        z: [0,0,0,0]
      width: [0,15,15,0]
      height: [0,15,15,0]
      texture: [2]
return model;
