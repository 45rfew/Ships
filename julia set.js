multi = 10
width = 20*multi
height = 20*multi
maxIterations = 128
cReal = -0.7
cImaginary = 0.27015
julia = (x, y) ->
  real = x
  imaginary = y
  for i in [0..maxIterations]
    if Math.abs(real)**2 + Math.abs(imaginary)**2 > 4
      return i
    tmp = real * real - imaginary * imaginary + cReal
    imaginary = 2 * real * imaginary + cImaginary
    real = tmp
  return 0
Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
a = [1,2,3,4,5,7,6,0,63]
model =
  name: 'Julia set'
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
    iterations = julia(i / width * 3 - 1.5, j / height * 3 - 1.5)
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
