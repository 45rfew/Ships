multi = 10
width = 20 * multi
height = 20 * multi
maxIterations = 128

###
transformations = [
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.20, -0.26, 0.23, 0.22, 0, 1.6],
    [-0.15, 0.28, 0.26, 0.24, 0, 0.44],
  ],
  [
    [0.70, 0.37, -0.37, 0.70, 0, 1.6],
    [0.35, 0.07, 0.07, 0.35, 0, 0.74],
    [-0.15, 0.28, 0.26, 0.24, 0, 0.44],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.20, -0.26, 0.23, 0.22, 0, 1.6],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.425, 0.353553390593274, -0.353553390593274, 0.425, 0, 1.4],
    [0.425, -0.353553390593274, 0.353553390593274, 0.425, 0, 1.4],
    [0.425, -0.353553390593274, -0.353553390593274, 0.425, 0, 1.4],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.20, -0.26, 0.23, 0.22, 0, 1.6],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
    [-0.05, 0.7, 0.7, -0.05, 0, 0.5], 
  ],
  [
    [0.5, 0.5, -0.5, 0.5, 0, 0],
    [0.875, 0, 0, 0.875, -1, 1.5],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.9, 0.4, -0.4, 0.9, 0, 0],
    [0.5, 0.5, -0.5, 0.5, 0, 0],
    [0.20, -0.26, 0.23, 0.22, 0, 1.6],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.8, 0.15, -0.15, 0.8, 0.318, 0.009],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.6, 0.6, -0.6, 0.6, 0, 0],
    [-0.2, 0.3, 0.3, -0.2, 0, 0.8],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.5, 0.5, -0.5, 0.5, 0, 0],
    [0.75, 0, 0, 0.75, -0.5, 0.5],
    [0.6, -0.6, 0.6, 0.6, 0.2, 0],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.9, 0.4, -0.4, 0.9, 0, 0],
    [0.8, 0.15, -0.15, 0.8, 0.318, 0.009],
    [0.2, 0.3, 0.3, -0.2, sin(time * 0.1), 0],
    [0.7, 0.7, -0.7, 0.7, 0, 0],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [0.75, 0.1, -0.1, 0.75, 0, 0],
    [0.4, -0.3, 0.3, 0.4, 0, 0.4],
  ],
  [
    [0.5, 0.5, -0.5, 0.5, 0, 0],
    [0.8, 0.1, -0.1, 0.8, 0, 0],
    [0.7, 0.7, -0.7, 0.7, 0, 0.3],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
  [
    [0.85, 0.04, -0.04, 0.85, 0, 1.6],
    [-0.05, 0.7, 0.7, -0.05, 0, 0.5],
    [0.5, 0.5, -0.5, 0.5, 0, 0],
    [0.40, -0.30, 0.30, 0.44, 0, 0.4],
  ],
]
###

time = 1 

transformations = [
  [0.70, 0.37, -0.37, 0.70, 0, 1.6],
  [0.35, 0.07, 0.07, 0.35, 0, 0.74],
  [-0.15, 0.28, 0.26, 0.24, 0, 0.44],
]

transformPoint = (point, transformation) ->
  [a, b, c, d, e, f] = transformation
  [
    a * point[0] + b * point[1] + e,
    c * point[0] + d * point[1] + f,
  ]

distanceFromOrigin = (point) ->
  Math.sqrt(point[0] * point[0] + point[1] * point[1])

calculateColor = (iterations) ->
  palette = [
    1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
  ]
  palette[iterations % palette.length]

flame = (x, y) ->
  point = [x, y]
  for i in [0..maxIterations]
    transformation = transformations[Math.random() * transformations.length | 0]
    point = transformPoint(point, transformation)
    return i if distanceFromOrigin(point) > 2
  0

Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
model =
  name: 'Flame fractal'
  level: 1
  model: 1
  size: 1
  scale: 8
  specs:
    shield:
      capacity: [100,100]
      reload: [100,100]
    generator:
      capacity: [50,50]
      reload: [10,10]
    ship:
      mass: 1000
      speed: [100,100]
      rotation: [100,100]
      acceleration: [100,100]
  bodies: {} 
for i in [0..width]
  for j in [0..height]
    iterations = flame(i / width * 3 - 2, j / height * 3 - 1.5)
    color = calculateColor(iterations)
    model.bodies['a' + i + 'x' + j] =
      section_segments: 6
      offset:
        x: 0
        y: j
        z: 0
      position:
        x: [i, i, i, i].add(-.5*height)
        y: [0, 0, 1, 1].add(-.5*height)
        z: [0, 0, 0, 0]
      width: [0, 1, 1, 0]
      height: [0, 1, 1, 0]
      texture: [color]
return model;
