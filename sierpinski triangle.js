depth = 5
width = 200
height = 200
Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
drawTriangle = (x1, y1, x2, y2, x3, y3, depth) ->
  if depth == 0
    model.bodies['a' + x1 + 'x' + y1 + 'x' + x2 + 'x' + y2 + 'x' + x3 + 'x' + y3] =
      section_segments: 6
      offset:
        x: 0
        y: y1
        z: 0
      position:
        x: [x1, x1, x1+x2 - x1, x1+x3 - x1, x1+x3 - x1].add(height*-.5)
        y: [0, 0, y2 - y1, y3 - y1, y3 - y1].add(height*-.5)
        z: [0,0,0,0,0,0]
      width: [0, x2 - x1, x3 - x1, x3 - x1, 0]
      height: [0, y2 - y1, y3 - y1 , y3 - y1 ,0]
      texture: [13]
  else
    midX1 = (x1 + x2) / 2
    midY1 = (y1 + y2) / 2
    midX2 = (x2 + x3) / 2
    midY2 = (y2 + y3) / 2
    midX3 = (x1 + x3) / 2
    midY3 = (y1 + y3) / 2
    drawTriangle(x1, y1, midX1, midY1, midX3, midY3, depth - 1)
    drawTriangle(midX1, midY1, x2, y2, midX2, midY2, depth - 1)
    drawTriangle(midX3, midY3, midX2, midY2, x3, y3, depth - 1)
model = 
  bodies: {}
drawTriangle(0, height, width / 2, 0, width, height, depth)

return model
