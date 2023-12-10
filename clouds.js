model =
bodies: {}
amount = 200
a = -1
noiseAmplitude = 20
noiseFrequency = 0.05
detailScale1 = 5
detailScale2 = 10
density = []
for i in [0..amount]
  x = i / amount * 200
  z = Math.random() * 200
  density[i] = Math.sin(x / noiseFrequency) * noiseAmplitude + Math.cos(z / noiseFrequency) * noiseAmplitude + Math.random() * noiseAmplitude
for i in [0..amount]
  x = i / amount * 200
  z = Math.random() * 200
  density[i] += Math.sin(x / detailScale1) * 2 + Math.cos(z / detailScale1) * 2
  density[i] += Math.sin(x / detailScale2) * 1 + Math.cos(z / detailScale2) * 1
for i in [0..amount]
  x = i / amount * 200
  z = Math.random() * 200
  model.bodies['a' + i] =
    section_segments: 8
    offset:
      x: x
      y: density[i]
      z: z
    position:
      x: [-5, 5, 5, -5]
      y: [-5, -5, 5, 5]
      z: [-5, -5, -5, -5]
    width: [0, 5, 5, 0]
    height: [0, 5, 5, 0]
    texture: [1 + Math.floor(density[i] / 10)]

return model
