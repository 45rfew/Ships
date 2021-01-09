model =
  scale: .08
  bodies: {}
amount = 200 
a = -1
t = [17,18,63,17,18,63,113]
for i in [0..amount]
  for j in [0..10]
    r1 = amount/2.5-i/2.5*j
    r2 = amount/2.5-(i+1)/2.5*j
    a1 = i*a/10*j/2
    a2 = (i+1)*a/10*j/2
    radius = 200
    theta = (i/amount)*Math.PI*2
    model.bodies['a'+i+j] = 
      section_segments: 6
      offset:
        x: 0
        y: Math.sin(a2)*r2*10
        z: j*Math.random()*40+30
      position:
        x: [Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10,Math.cos(a1)*r1*10]
        y: [-20,-20,20,20]
        z: [0,0,0,0]
      width: [0,30,30,0]
      height: [0,30,30,0]
      texture: [t[Math.floor(Math.random()*t.length)]]
return model;    
