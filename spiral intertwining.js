model =
  bodies: {}
amount = 200
a = -1
radius1 = 80
radius2 = 60
thetaFactor = 0.2

for i in [0..amount]
  theta = i * Math.PI * 2 / amount
  x1 = Math.cos(theta * thetaFactor) * radius1 + Math.sin(theta * 2 * thetaFactor) * radius2
  y1 = Math.sin(theta) * radius1 + Math.cos(theta * 2 * thetaFactor) * radius2
  x2 = Math.cos(theta * (thetaFactor + 1.5)) * radius1 + Math.sin(theta * (2 * thetaFactor + 1.5)) * radius2
  y2 = Math.sin(theta) * radius1 + Math.cos(theta * (2 * thetaFactor + 1.5)) * radius2

  model.bodies['a' + i] =
    section_segments: 2
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [x1, x1, x2, x2]
      y: [y1, y1, y2, y2]
      z: [0, 0, 0, 0]
    width: [0, 5, 5, 0]
    height: [0, 5, 5, 0]
    texture: [i] 

return model
