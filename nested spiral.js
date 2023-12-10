model =
bodies: {}
amount = 20
radius = 100
thetaOffset = Math.PI * 2 / 3

for i in [0..amount]
  theta1 = i / amount * Math.PI * 2
  theta2 = (i + 1) / amount * Math.PI * 2
  r1 = radius - i * 5
  r2 = radius - (i + 1) * 5
  model.bodies['s' + i] =
    section_segments: 4
    offset:
      x: 0
      y: 0
      z: 0
    position:
      x: [r1 * Math.cos(theta1), r2 * Math.cos(theta2 + thetaOffset), r2 * Math.cos(theta2), r1 * Math.cos(theta1 + thetaOffset)]
      y: [r1 * Math.sin(theta1), r2 * Math.sin(theta2 + thetaOffset), r2 * Math.sin(theta2), r1 * Math.sin(theta1 + thetaOffset)]
      z: [0, 0, 0, 0]
    width: [5, 5, 5, 5]
    height: [5, 5, 5, 5]
    texture: [2]

return model
