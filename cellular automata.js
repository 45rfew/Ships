width = 500
height = 500
cellSize = 5
generations = 5
rule = (neighbors) ->
  if neighbors == 2 or neighbors == 3
    return 1
  else
    return 0
grid = []
for i in [0..width / cellSize - 1]
  grid[i] = []
  for j in [0..height / cellSize - 1]
    grid[i][j] = Math.random() > 0.5 ? 1 : 0
for generation in [0..generations - 1]
  newGrid = []
  for i in [0..width / cellSize - 1]
    newGrid[i] = []
    for j in [0..height / cellSize - 1]
      neighbors = 0
      for dx in [-1, 0, 1]
        for dy in [-1, 0, 1]
          if dx != 0 or dy != 0
            x = i + dx
            y = j + dy
            if x >= 0 and x < width / cellSize and y >= 0 and y < height / cellSize
              neighbors += grid[x][y]
      newGrid[i][j] = rule(neighbors)
  grid = newGrid
Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
model =
  bodies: {}
for i in [0..width / cellSize - 1]
  for j in [0..height / cellSize - 1]
    if grid[i][j] == 1
      model.bodies['a' + i + 'x' + j] =
        section_segments: 12
        offset:
          x: 0
          y: j * cellSize
          z: 0
        position:
          x: [i * cellSize, i * cellSize+cellSize, i * cellSize+cellSize, i * cellSize].add(-.5*height)
          y: [0, 0, cellSize, cellSize].add(-.5*height)
          z: [0, 0, 0, 0]
        width: [0, cellSize, cellSize, 0]
        height: [0, 0, cellSize, cellSize]
        texture: [Math.floor(Math.random() * 8) + 1]

return model
