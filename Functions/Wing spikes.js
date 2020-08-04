wings = (x,y,z,a,s) ->
  model.bodies["wing_main"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x  
      y: y
      z: z
    position:
      x: [3,3,0,-3,-6.5,-6.5,-6.5,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
      y: [0,0,15,160,165,220-s,220-s,220-s,39,39,40,40,45,45,46,46,51,51,52,52,57,57,58,58,63,63,64,64,69,69,70,70]
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,2,6,11,6,6,0,0,0,4,4,0,0,4,4,0,0,4.5,4.5,0,0,4.5,4.5,0,0,5,5,0,0,5,5,5]
    height: [0,3,3,3,3,3,0,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,0,0,3.1,3.1,3.1]
    texture: [4,4,4,4,4,4,4,4,1]
    angle: 180+a
  model.bodies["wing_main2"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [3,3,0,-3,-6.5,-6.5,-6.5].add(1.5)
      y: [0,0,15,160,165,220-s,220-s]
      z: [0,0,0,0,0,0,0]
    width: [0,2,6,11,6,6,0]
    height: [0,3,3,3,3,3,0].div(1.1)
    texture: [4,1,1,1,1,4]
    angle: 180+a
  model.bodies["wing_deco"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,5.5,0,0,0,0,6].add(-1)
      y: [4,4,10,10,80,80,83,83].add(70)
      z: [0,0,0,0,0,0,0,0]
    width: [0,1.5,1.3,1,1,1.7,2,0]
    height: [0,3.1,3.1,3.1,3.1,3.1,3.1,0]
    texture: [1]
    angle: 180+a    
  model.bodies["wing_deco2"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [-3,-3,0,0,0,0,-3].add(7)
      y: [-43,-43,-40,-40,85,85,87,87].add(70)
      z: [0,0,0,0,0,0,0,0]
    width: [0,2.5,2.5,1.5,1.5,2.5,2.5,0]
    height: [0,2.6,2.6,3.1,3.1,2.6,2.6,0]
    texture: [4,4,17]
    angle: 180+a 
  model.bodies["wing_deco3"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(190)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a  
  model.bodies["wing_deco4"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(170)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a   
  model.bodies["wing_deco5"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(150)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a   
  model.bodies["wing_deco6"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0].add(9)
      y: [-51,-48,-48,-43,-43,-40,-40,85,85,87,87].add(130)
      z: [0,0,0,0,0,0,0]
    width: [4.5,4.5,0,0,4.5,4.5,0]
    height: [3.2,3.2,0,0,3.2,3.2,0]
    texture: [17]
    angle: 180+a      
  model.bodies["wing_deco7"+a+y] = 
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [-5,0,0,0,-10,0,0,0].add(12)
      y: [30,40,145,145,155].add(5)
      z: [0,0,0,0,0,0,0]
    width: [1.5,1.5,1.5,1.5,3.5]
    height: [1.5,1.5,1.5,1.5,1.5]
    texture: [4,17]
    angle: 180+a          
