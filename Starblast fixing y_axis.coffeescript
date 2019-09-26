model =

tcf = 0
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - tcf
    else
      v.offset.y = v.offset.y + tcf
  for y,v of model.wings
    v.offset.y = v.offset.y + tcf      
return model;
