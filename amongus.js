Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
Array::div = (mod) -> @map (val) -> val / mod
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
a = [45,135,225,315]
b = [40,45,50,70,110,130,135,140,220,225,230,250,290,310,315,320]
c = [-10,10,40,45,50,70,110,130,135,140,170,190,220,225,230,250,290,310,315,320]
t = -12
y = 0
model =
  name: 'sus'
  level: 1
  model: 1
  size: 2
  scale: 3
  specs:
    shield:
      capacity: [75,100]
      reload: [2,3]
    generator:
      capacity: [40,60]
      reload: [10,15]
    ship:
      mass: 60
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    main:
      section_segments: a
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0]
        y: [-20,-20,40,45]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,40,40,0]
      height: [0,10,10,0]
      propeller: 0
      texture: 63
    head:
      section_segments: 8
      offset:
        x: 0
        y: -5
        z: 20
      position:
        x: [0,0,0,0]
        y: [-2,-2,12,12]
        z: [0,0,0,0]
      width: [0,30,30,0].mult(.944)
      height: [0,30,30,0].mult(.5)
      propeller: 0
      texture: 63
      angle: 0
      vertical: 1
    face:
      section_segments: b
      offset:
        x: 0
        y: -5
        z: 10-1-y
      position:
        x: [0,0,0,0,0,0].add(15)
        y: [-4,-4,-3,13,14,14]
        z: [0,0,0,0,0,0]
      width: [0,24,30,30,24,0].mult(1-.25)
      height: [0,23,30,30,23,0].mult(.5)
      propeller: 0
      texture: 7
      angle: 0
      vertical: 1
    back:
      section_segments: b
      offset:
        x: 0
        y: 0-5
        z: -13
      position:
        x: [0,0,0,0,0,0].add(-28)
        y: [-2,-2,0,10,12,12]
        z: [0,0,0,0,0,0]
      width: [0,5,30,30,5,0].mult(.3)
      height: [0,30,30,30,30,0].mult(1)
      propeller: 0
      texture: 63
      angle: 0
      vertical: 1
    foot:
      section_segments: b
      offset:
        x: 0
        y: -7
        z: -30
      position:
        x: [0,0,0,0].add(-15)
        y: [0,0,10,10].mult(1.4)
        z: [0,0,0,0]
      width: [0,30,30,0].mult(.45)
      height: [0,30,30,0].mult(1)
      propeller: 0
      texture: 63
      angle: 0
      vertical: 1
    foot2:
      section_segments: b
      offset:
        x: 0
        y: -7
        z: -30
      position:
        x: [0,0,0,0].add(15)
        y: [0,0,10,10].mult(1.4)
        z: [0,0,0,0]
      width: [0,30,30,0].mult(.45)
      height: [0,30,30,0].mult(1)
      propeller: 0
      texture: 63
      angle: 0
      vertical: 1           
if(1)
  for k,v of model.bodies
    v.offset.x=-v.offset.x
    if(v.vertical)
      v.offset.y = -v.offset.y
      if(v.angle!=undefined)
        v.angle = 180-v.angle
      else
        v.angle = 180
    else
      v.offset.z = -v.offset.z
      if(v.angle!=undefined)
        v.angle = -v.angle
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
    for y,v of model.wings
      v.offset.y = v.offset.y + t     
    for y,v of model.tori
      v.offset.y = v.offset.y + t        
return model;      
      
