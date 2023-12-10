model =
bodies: {}
amount = 200
a = -1
for i in [0..amount]
  r1 = amount / 2.5 - i / 2.5
  r2 = amount / 2.5 - (i + 1) / 2.5
  a1 = i * a / 10
  a2 = (i + 1) * a / 10
  radius1 = 200
  radius2 = 150
  theta = (i / amount) * Math.PI * 2
  model.bodies['a1' + i] =
    section_segments: 6
    offset:
      x: Math.sin(a2) * radius1 * 5
      y: 0
      z: Math.cos(a2) * radius1 * 5
    position:
      x: [Math.cos(a1) * radius1 * 10, Math.cos(a1) * radius1 * 10, Math.cos(a1) * radius1 * 10, Math.cos(a1) * radius1 * 10]
      y: [-10, -10, 10, 10]
      z: [0, 0, 0, 0]
    width: [0, 10, 10, 0]
    height: [0, 10, 10, 0]
    texture: [17] 

  model.bodies['a2' + i] =
    section_segments: 6
    offset:
      x: -Math.sin(a2) * radius2 * 5
      y: 0
      z: Math.cos(a2) * radius2 * 5
    position:
      x: [Math.cos(a1) * radius2 * 10, Math.cos(a1) * radius2 * 10, Math.cos(a1) * radius2 * 10, Math.cos(a1) * radius2 * 10]
      y: [-10, -10, 10, 10]
      z: [0, 0, 0, 0]
    width: [0, 8, 8, 0]
    height: [0, 8, 8, 0]
    texture: [117] 
return model
