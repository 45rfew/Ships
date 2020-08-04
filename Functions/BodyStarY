bodyStarY = (name, number, aroundX, aroundY, aoffset = 0, offx = 0, spawn) ->
  b = model.bodies[name]
  delete model.bodies[name]
  for i in [0..(number-1)] by 1
    if(spawn!=undefined&&!spawn[i])
      continue
    if(i == 0)
      n = name
    else
      n = name+"star"+i
    nposx = [];
    nposz = [];
    ang = (i*360/number)+aoffset
    a = ang
    ang = ang*0.0174533
    for j in [0..b.position.x.length-1] by 1
      if(j>=b.position.z.length)
        break;
      ox = b.position.x[j]
      oz = b.position.z[j]
      nposx.push(ox*Math.cos(ang)-oz*Math.sin(ang))
      nposz.push(ox*Math.sin(ang)+oz*Math.cos(ang))
    ox = b.offset.x-aroundX
    oz = b.offset.z-aroundY
    segments = b.section_segments
    if(segments.length != undefined)
      segments = addArray(segments,a)
    model.bodies[n] =
      section_segments: segments
      offset:
        x: 0
        y: b.offset.y
        z: aroundY+ox*Math.sin(ang)+oz*Math.cos(ang)+aroundY
      position:
        x: addArray(nposx,ox*Math.cos(ang)-oz*Math.sin(ang)+aroundX+offx)
        y: b.position.y.slice(0)
        z: addArray(nposz,0)
      width: b.width.slice(0)
      height: b.height.slice(0)
      texture: b.texture.slice(0)
      angle: b.angle
      propeller: b.propeller
      vertical: b.vertical
      laser: b.laser  
