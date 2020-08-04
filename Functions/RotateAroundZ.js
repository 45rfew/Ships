rotateAroundZ = (name, oname, a, rotatePart, isWing) ->
  o = model.bodies[oname];
  if(isWing)
    part = model.wings[name];
  else
    part = model.bodies[name];
  ox = o.offset.x;
  oy = o.offset.y;
  dx = part.offset.x-ox;
  dy = part.offset.y-oy;
  ra = -a*0.0174533;
  ndx = dx*Math.cos(ra) - dy*Math.sin(ra);
  ndy = dx*Math.sin(ra) + dy*Math.cos(ra);
  part.offset.x = ndx+ox;
  part.offset.y = ndy+oy;
  if(rotatePart&&!isWing)
    part.angle+=a
