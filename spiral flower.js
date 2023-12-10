model =
  bodies: {}
amount = 200
a = -1
petals = 5
for i in [0..amount]
  for j in [0..petals-1]
    r1 = amount/2.5-i/2.5
    r2 = amount/2.5-(i+1)/2.5
    a1 = i*a/10 + j*Math.PI*2/petals
    a2 = (i+1)*a/10 + j*Math.PI*2/petals
    radius = 200
    theta = (i/amount)*Math.PI*2
    model.bodies['a'+i+'j'+j] =
      section_segments: 6
      offset:
        x: Math.cos(a2)*r2*10
        y: 0
        z: Math.sin(a2)*r2*10
      position:
        x: [Math.cos(a1)*r1*10 + Math.cos(a2)*r2*10,Math.cos(a1)*r1*10 + Math.cos(a2)*r2*10,Math.cos(a1)*r1*10 + Math.cos(a2)*r2*10,Math.cos(a1)*r1*10 + Math.cos(a2)*r2*10]
        y: [-10,-10,10,10]
        z: [Math.sin(a1)*r1*10 + Math.sin(a2)*r2*10,Math.sin(a1)*r1*10 + Math.sin(a2)*r2*10,Math.sin(a1)*r1*10 + Math.sin(a2)*r2*10,Math.sin(a1)*r1*10 + Math.sin(a2)*r2*10]
      width: [0,15,15,0]
      height: [0,15,15,0]
      texture: [2]
return model;
