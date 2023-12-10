model =
bodies: {}
amount = 200
a = -1
waveFrequency = 0.5
noiseAmplitude = 5
for i in [0..amount]
  r1 = amount / 2.5 - i / 2.5
  r2 = amount / 2.5 - (i + 1) / 2.5
  a1 = i * a / 10
  a2 = (i + 1) * a / 10
  radius = 200
  theta = (i / amount) * Math.PI * 2
  waveDisplacement = Math.sin(i * waveFrequency + theta) * 50 + Math.random() * noiseAmplitude
  model.bodies['a' + i] =
    section_segments: 6
    offset:
      x: 0
      y: waveDisplacement
      z: Math.sin(a2) * r2 * 10
    position:
      x: [Math.cos(a1) * r1 * 10, Math.cos(a1) * r1 * 10, Math.cos(a1) * r1 * 10, Math.cos(a1) * r1 * 10]
      y: [-10, -10, 10, 10]
      z: [0, 0, 0, 0]
    width: [0, 10, 10, 0]
    height: [0, 10, 10, 0]
    texture: [3]
return model
