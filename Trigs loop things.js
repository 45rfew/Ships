model =
  bodies: 
    main:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-17,-5,0,5,17,30,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,20,30,30,30,20,5,0]
      height: [0,5,20,30,30,30,20,5,0]
      texture: [16.9,18,11,18,18,11,18,16.9]  
    main2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30,-30,-17,-5,0,5,17,30,30]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,5,20,30,30,30,20,5,0]
      height: [0,5,20,30,30,30,20,5,0]
      texture: [16.9,18,11,18,18,11,18,16.9] 
      angle: 90
for i in [0...6]
  theta = (i/6)*Math.PI*2
  radius = 80
  bz = -30
  x = Math.cos(theta)
  z = Math.sin(theta)
  model.bodies["a"+i] = 
    section_segments: 4
    offset:
      x: Math.cos(theta)*radius
      y: 0
      z: Math.sin(theta)*radius
    position:
      x: [x*(bz-35),x*(bz-35),x*bz,x*(bz-3),x*(bz-10),x*(bz-10),x*(bz-10),x*(bz-3),x*bz,x*(bz-35),x*(bz-35)]
      y: [-50,-50,-30,-10,-5,0,5,10,30,50,50]
      z: [z*(bz-35),z*(bz-35),z*bz,z*(bz-3),z*(bz-10),z*(bz-10),z*(bz-10),z*(bz-3),z*bz,z*(bz-35),z*(bz-35)]
    width: [0,2,10,10,10,10,10,10,10,2,0]
    height: [0,4,10,10,10,10,10,10,10,4,0]
    texture: [3,13,18,17,8,8,17,18,13,3]
return model;     
