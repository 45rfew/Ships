model =
bodies: {}
amount = 200
depth = 6
branchLength = 50
branchAngle = Math.PI / 3
colorFactor = 0.1

createBranch = (x, y, z, theta, depth, color) ->
  branchLength *= 0.7
  branchWidth = Math.sin(depth * colorFactor) * 5 + 2
  newColor = color + (depth / amount) * 20
  model.bodies['a' + depth] =
    section_segments: 10
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0, branchLength, branchLength, 0]
      y: [0, -10, -10, 0]
      z: [0, 0, 0,0]
    width: [0, branchWidth, branchWidth, 0]
    height: [0, branchWidth, branchWidth, 0]
    texture: [newColor]
  if depth < 7
    createBranch(x + Math.cos(theta) * branchLength, y - 10, z + Math.sin(theta) * branchLength, theta + branchAngle, depth + 1, newColor)
    createBranch(x + Math.cos(theta) * branchLength, y - 10, z + Math.sin(theta) * branchLength, theta - branchAngle, depth + 1, newColor)
createBranch(10, 0, 0, 0, 0, 1)

return model
