bodyStar = (name, number) ->
  b = model.bodies[name]
  for i in [1..number-1] by 1
    n = name+"star"+i
    model.bodies[n] =
      section_segments: b.section_segments
      offset:
        x: b.offset.x
        y: b.offset.y
        z: b.offset.z
      position:
        x: b.position.x.slice(0)
        y: b.position.y.slice(0)
        z: b.position.z.slice(0)
      width: b.width.slice(0)
      height: b.height.slice(0)
      texture: b.texture.slice(0)
      angle: b.angle+(i*360/number)

glEx = 0
glRet = 1;
if(anim>0.98)
  glEx = 1;
  glRet = 0;
