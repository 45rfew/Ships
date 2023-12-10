model =
 bodies: {}
amount = 200 
a = -1
for i in [0..amount]
  r1 = amount/2.5-i/2.5
  r2 = amount/2.5-(i+1)/2.5
  a1 = i*a/10
  a2 = (i+1)*a/10  
  radius = 200
  theta = (i/amount)*Math.PI*2
  # Change the number of sections
  model.bodies['a'+i] = 
    section_segments: 12
    offset:
     x: Math.sin(a2)*r2*10
     y: Math.cos(a2)*r2*10
     z: 0
    position:
     x: [Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10]
     y: [-10,-10,10,10]
     z: [0,0,0,0]
    # Change the width and height
    width: [0,15,15,0]
    height: [0,15,15,0]
    # Use multiple textures
    texture: [1, 2]
return model;
