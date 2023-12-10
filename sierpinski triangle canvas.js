multi = 10
width = 20*multi
height = 20*multi
maxIterations = 128
sierpinskiTriangle = (x, y) ->
  if Math.random() < 0.5
    x /= 2
  if Math.random() < 0.5
    y /= 2
  if x + y < 1
    return 1
  return 0
Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
a = [1,2,3,4,5,7,6,0,8]
model =
  name: ''
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
    iterations = sierpinskiTriangle(i / width, j / height)
    color = iterations % 8 + 1
    model.bodies['a' + i + 'x' + j] =
      section_segments: 6
      offset:
        x: 0
        y: j
        z: 0
      position:
        x: [i, i+1, i+1, i].add(-.5*height)
        y: [0, 0, 1, 1].add(-.5*height)
        z: [0, 0, 0, 0]
      width: [0, 1, 1, 0]
      height: [0, 1, 1, 0]
      texture: [a[color]]
return model;
