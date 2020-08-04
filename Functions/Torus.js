torus = (r,y,w,h,t) -> 
  return k = 
    segments: 26
    radius: r
    section_segments: 12
    offset:
      x: 0
      y: y
      z: 0
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [].fill(w,21)
    height: [].fill(h,21)
    texture: t
