model =
 
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
 
return model;
