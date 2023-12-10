model =
  bodies: {}
amount = 200
a = -1
knot_type = "trefoil"
for i in [0..amount]
  radius = 200
  theta = (i/amount)*Math.PI*2
  x = radius*Math.cos(theta)
  y = radius*Math.sin(theta)
  z = 0
  if knot_type is "trefoil"
    x += radius*Math.cos(3*theta)/3
    z += radius*Math.sin(3*theta)/3
  else if knot_type is "cinquefoil"
    x += radius*Math.cos(5*theta)/5
    z += radius*Math.sin(5*theta)/5
  else if knot_type is "heptafoil"
    x += radius*Math.cos(7*theta)/7
    z += radius*Math.sin(7*theta)/7
  model.bodies['a'+i] =
    section_segments: 6
    offset:
      x: 0
      y: y
      z: z
    position:
      x: [x + radius/3, x + radius/3, x - radius/3, x - radius/3]
      y: [-10,-10,10,10]
      z: [z + radius/3, z - radius/3, z - radius/3, z + radius/3]
    width: [0,15,15,0]
    height: [0,15,15,0]
    texture: [2]
return model;
