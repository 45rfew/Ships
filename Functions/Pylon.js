pylon = (x,y,z) ->
  a = 10
  b = a/10
  model.bodies["pylon"+a] =
    section_segments: [45,135,225,315]
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0,0,6,0,6,0,6,0,6,0,6,0,0,0,0,6,0,6,0,6,0,6,0,6,0,0,6,6,0,6,0,6,0,6,0,6,0,6,6,6,6,0,6,0,6,0,6,0,6,0,6,6].add(-3).mult(1.8)
      y: [-1,-1,50,50,-1,-1,50,50,0,0,50,50,0,0,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0,0,5,10,15,20,25,30,35,40,45,50,50,0].mult(2)
      z: [a+b/3,a+b/3,0,0,a+b/3,a+b/3,0,0,6+a,6+a,6,6,6+a,6+a,6,6,a,a,a-3/3*b,a-6/3*b,a-9/3*b,a-12/3*b,a-15/3*b,a-18/3*b,a-21/3*b,a-24/3*b,a-27/3*b,a-30/3*b,a-30/3*b,6+a,6+a,6+a-3/3*b,6+a-6/3*b,6+a-9/3*b,a+6-12/3*b,a+6-15/3*b,a+6-18/3*b,a+6-21/3*b,a+6-24/3*b,a+6-27/3*b,a+6-30/3*b,a+6-30/3*b,a,a,a-3/3*b,a-6/3*b,a-9/3*b,a-12/3*b,a-15/3*b,a-18/3*b,a-21/3*b,a-24/3*b,a-27/3*b,a-30/3*b,a-30/3*b,a+6,a+6,a+6-3/3*b,a+6-6/3*b,a+6-9/3*b,a+6-12/3*b,a+6-15/3*b,a+6-18/3*b,a+6-21/3*b,a+6-24/3*b,a+6-27/3*b,a+6-30/3*b,a+6-30/3*b].div(1)
    width: [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0].mult(1.5)
    height: [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0,0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0].mult(1)
    texture: 2
  model.bodies["bar"+a] =
    section_segments: [45,135,225,315]
    offset:
      x: 5.4
      y: 34.7+a-10
      z: 27.5
    position:
      x: [0,0,0,0]
      y: [0,0,6.95,6.95]
      z: [0,0,-2.4,-2.4]
    width: [0,1.5,1.5,0]
    height: [0,1,1,0]
    texture: [2]  
    vertical: true   
  for i in [0..10]
    model.bodies["bar2"+i] =
      section_segments: [45,135,225,315]
      offset:
        x: 5.4
        y: 34.7-i/1.1
        z: 27.5+-i*8.5
      position:
        x: [0,0,0,0]
        y: [0,0,6.95,6.95]
        z: [0,0,-2.4,-2.4]
      width: [0,1,1,0]
      height: [0,.5,.5,0]
      texture: [2]  
      vertical: true
  for i in [0..8]
    model.bodies["bar3"+i] =
      section_segments: [45,135,225,315]
      offset:
        x: 5.4
        y: 33.8-i/1.2
        z: 12+-i*8.5
      position:
        x: [0,0,0,0]
        y: [0,0,6.95,6.95]
        z: [-2,-2,7,7]
      width: [0,1,1,0]
      height: [0,.5,.5,0]
      texture: [2]  
      vertical: true   
  model.bodies["bar4"+a] =
    section_segments: [45,135,225,315]
    offset:
      x: 5.4
      y: 34
      z: 19
    position:
      x: [0,0,0,0]
      y: [0,0,6.95,6.95]
      z: [-1.5,-1.5,6.5,6.5]
    width: [0,1,1,0]
    height: [0,.5,.5,0]
    texture: [2]  
    vertical: true       