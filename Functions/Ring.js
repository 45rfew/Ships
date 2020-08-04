ring = (x,y,z,s,l,w,h,a,v,t,j=0) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [3,3,0,0,0,0,0,3,3,3].div(10).mult(l)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].div(10).mult(w)
    height: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].div(10).mult(h)
    texture: t        
    angle: a
    vertical: v
