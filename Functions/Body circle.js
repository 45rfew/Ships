circle = (m, id, xx, yy, zz, segments, radPosY, radPosZ, tx, h=1) ->
  widths = [];
  heights = [];
  posx = [];
  for i in [0..radPosY.length]
    posx.push(0);
    heights.push(h);
    widths.push(radPosY[i]*Math.tan(Math.PI/segments))
  for i in [0..segments] by 1
    m.bodies[id+"segment"+i] = 
      section_segments: 4
      offset:
        x: xx
        y: yy
        z: zz
      position:
        x: posx
        y: radPosY
        z: radPosZ
      width: widths
      height: heights
      angle: 360*(i/segments)
      texture: tx
  return m
