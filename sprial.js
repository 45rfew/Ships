model =
  bodies: {}
amount = 200 
a = -1
for i in [0..amount]
  r1 = amount/2-i/2
  r2 = amount/2-(i+1)/2
  a1 = i*a/10
  a2 = (i+1)*a/10  
  radius = 200
  theta = (i/amount)*Math.PI*2
  model.bodies['a'+i] = 
    section_segments: [45,135,225,315]
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
    texture: [17]
return model
