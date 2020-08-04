dish = (xx, yy, zz, angle, seg, tx, stepAmount, step, stepunit, vertical) ->
  rad = []
  ypos = []
  for i in [0..stepAmount-1]
    ypos.push(-(step/stepunit*i)*(step/stepunit*i))
    rad.push(step*i)
  lastypos = ypos[ypos.length-1]
  for i in [stepAmount-1..0]
    ypos.push((ypos[i]-lastypos)*1.1+ypos[i])
    rad.push(rad[i]*1.1)
  return k = 
    section_segments: seg
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: ypos.mult(0)
      y: ypos
      z: ypos.mult(0)
    width: rad
    height: rad
    texture: tx
    angle: angle   
    vertical: vertical
