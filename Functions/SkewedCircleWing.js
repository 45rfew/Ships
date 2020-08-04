skewedCircleWing = (xx, yy, zz, segments, radius, widths, positions, bumpPos, bumpH, tx, double=false, dir=1, startAt=0, seg=0, freestyle=false) ->
  lengths = [];
  angles = [];
  lengths.push(0);
  angles.push(0)
  widths.unshift(0);
  positions.unshift(positions[0]);
  addAng = 0
  angMult = 1
  if(dir<0)
    addAng = 180
    angMult = -1
  loopFor = segments-1
    
  if(seg!=0)
    loopFor = seg
  for i in [0..loopFor]
    m = 1
    if((i==0||i==segments-1)&&!freestyle)
      m = 0.5
    lengths.push(m*radius*Math.tan(Math.PI/(segments-1)))
    angles.push(startAt+addAng+angMult*i/(segments-1)*57.3*Math.PI)

  widths = widths.splice(0,loopFor+3)
  positions = positions.splice(0,loopFor+3)
  ###
  if(double)
    for i in [0..segments-1]
      m = 1
      if(i==0||i==segments-1)
        m = 0.5
      lengths.push(m*radius*Math.tan(Math.PI/(segments-1)))
      angles.push(i/(segments-1)*57.3*Math.PI+180)
      positions.push(positions[i+1])
      widths.push(widths[i+1])###
  widths.push(0);
  positions.push(positions[positions.length-1])
  angles.push(angles[angles.length-1]);
  lengths.push(0)
  
  return k =
    length: lengths
    width: widths
    angle: angles
    position: positions
    doubleside: true
    bump:
      position: bumpPos
      size: bumpH
    texture: tx
    offset:
      x: xx
      y: yy
      z: zz-(radius/Math.cos(Math.PI/(segments-1)))
