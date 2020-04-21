addToscain = (id, xx, yy, zz) ->
  model.bodies["main"+id] =
    section_segments: 8
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [0,0,0,0,0]
      y: [-100,-95,-25,0,25]
      z: [0,0,0,0,0]
    width: [0,20,40,40,20]
    height: [0,10,35,20,5]
    texture: [63,11,2,63]
    laser:
      damage: [14,30]
      rate: 1
      type: 2
      speed: [150,200]
      number: 1
      recoil: 50
      error: 0
  model.bodies["cockpit"+id] =
    section_segments: 8
    offset:
      x: xx
      y: yy
      z: zz+10
    position:
      x: [0,0,0,0,0]
      y: [-70,-70,-25,0,100]
      z: [0,0,0,0,9]
    width: [0,10,15,15,10]
    height: [0,15,35,20,0]
    texture: [9,9,9,4]
  model.bodies["lasers"+id] =
    section_segments: 8
    angle: 15
    offset:
      x: xx+1
      y: yy+-5
      z: zz+-3
    position:
      x: [0,0,0]
      y: [-90,-70,-100]
      z: [0,0,0]
    width: [5,5,0]
    height: [5,5,0]
    texture: [6]
    laser:
      damage: [3.75,6]
      rate: 2
      type: 1
      speed: [100,130]
      number: 2
      angle: 45
      error: 0
  model.bodies["motor"+id] =
    section_segments: 8
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [0,0,0,0,0]
      y: [10,20,30,100,95]
      z: [0,0,0,0,0]
    width: [0,40,50,50,0]
    height: [0,10,15,20,0]
    texture: [63,63,10,4]
  model.bodies["propulsors"+id] = 
    section_segments: 8
    offset:
      x: xx+25
      y: yy
      z: zz
    position:
      x: [0,0,0]
      y: [30,105,100]
      z: [0,0,0]
    width: [15,15,0]
    height: [10,10,0]
    propeller: true
    texture: [12]  
  model.wings["main"+id] =
    doubleside: true
    offset:
      x: xx+30
      y: yy+80
      z: zz
    length: [70,20]
    width: [80,20]
    angle: [0,0]
    position: [-20,0]
    texture: [11]
    bump:
      position: 20
      size: 10    
  model.wings["winglets"+id] = 
    doubleside: true
    offset:
      x: xx+98
      y: yy+81
      z: zz+-20
    length: [20,50,20]
    width: [20,35,20]
    angle: [90,90,90]
    position: [0,0,0,0]
    texture: [63]
    bump:
      position: 30
      size: 50
  if (Math.abs(xx)>0.001)    
    model.wings["main_mirror"+id] =
      doubleside: true
      offset:
        x: -xx+30
        y: yy+80
        z: zz
      length: [70,20]
      width: [80,20]
      angle: [0,0]
      position: [-20,0]
      texture: [11]
      bump:
        position: 20
        size: 10
    model.wings["winglets_mirror"+id] = 
      doubleside: true
      offset:
        x: -xx+98
        y: yy+81
        z: zz+-20
      length: [20,50,20]
      width: [20,35,20]
      angle: [90,90,90]
      position: [0,0,0,0]
      texture: [63]
      bump:
        position: 30
        size: 50  
  model.bodies["propulsors_mirror"+id] = 
    section_segments: 8
    offset:
      x: -xx+25
      y: yy
      z: zz
    position:
      x: [0,0,0]
      y: [30,105,100]
      z: [0,0,0]
    width: [15,15,0]
    height: [10,10,0]
    propeller: true
    texture: [12]         
model =
model.bodies = []
model.wings = []
for z in [0..1]
  for x in [0..2]
    for y in [0..4]
      sh = 0
      if (y % 2==0)
        sh = 100
      addToscain(""+x+y+z,x*300+sh+0,y*200-500,z*200)
return model;
