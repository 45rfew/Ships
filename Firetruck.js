Array::add = (mod) -> @map (val) -> val + mod
Array::mult = (mod) -> @map (val) -> val * mod
Array::div = (mod) -> @map (val) -> val / mod
Array::step = (step) -> i for i in @ by step
Array::fill = (val, len) -> val for i in (
  if len
  then [0...len]
  else if @length == 1
  then [0...@[0]]
  else @
)
for key, value of []
  delete Array::[key]
  Object.defineProperty Array::, key,
    value: value
    configurable: true
    enumerable: false
wheelF = (angle, yy, zz) ->
  return k =
    section_segments: 12
    offset:
      x: 0
      y: yy
      z: zz
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0]
      y: [-6,-6,-4,-3,-4,-4,-3,1,2,2].add(-12)
      z: [0,0,0,0,0,0,0,0,0,0,0]
    width: [0,2,4,6,7,8,10,10,8,0]
    height: [0,2,4,6,7,8,10,10,8,0]
    texture: [1,1,8,1,4]
    angle: angle
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
model =
  name: 'Firetruck'
  level: 1
  model: 1
  size: 1
  specs:
    shield:
      capacity: [75,100]
      reload: [2,3]
    generator:
      capacity: [40,60]
      reload: [10,15]
    ship:
      mass: 60
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    wheelFL: wheelF(90,-5,-16)
    wheelFR: wheelF(-90,-5,-16)
    wheelBL: wheelF(90,65,-16)
    wheelBR: wheelF(-90,65,-16)   
    wheelBL2: wheelF(90,43,-16)
    wheelBR2: wheelF(-90,43,-16)    
    ladder_back:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 46
        z: 22
      position:
        x: [0,0,0,0,0]
        y: [0,0,2,30,30]
        z: [0,0,0,0,0]
      width: [0,13,15,15,0]
      height: [0,2,5,5,0]
      texture: [3] 
    ladder_back2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 61
        z: 26
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,10,14,15,15]
        z: [0,0,0,0,0,0,0,0]
      width: [0,12,12,12,12,12,12,0]
      height: [0,2,6,10,10,7,6,0]
      texture: [3]  
    ladder_front:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -1
        z: 26
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,0,2,5,10,14,15,15].div(2)
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,6,0]
      height: [0,2,6,10,10,7,6,0]
      texture: [3]        
    ladder_front2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -4
        z: 20
      position:
        x: [0,0,0,0,0]
        y: [0,0,1.2,5,5]
        z: [0,0,0,0,0]
      width: [0,6,6,6,0]
      height: [0,6,10,10,0]
      texture: [3]  
    bumper:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -28.5
        z: -10
      position:
        x: [0,0,0,0]
        y: [0,0,4,4]
        z: [0,0,0,0]
      width: [0,19.5,19.5,0]
      height: [0,5,5,0]
      texture: [2] 
    bumper2:
      section_segments: [45,135,225,315]
      offset:
        x: 11.5
        y: -28
        z: -10
      position:
        x: [0,0,0,0]
        y: [0,0,105.9,105.9]
        z: [0,0,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      texture: [2]       
    cabinStructure:
      section_segments: 6
      offset:
        x: 0.1
        y: 3
        z: 22
      position:
        x: [-12.5,-12.5,0,0,0,0,0,0,0]
        y: [-30,-20,-20,75,75]
        z: [-18,0,0,0,0,0,0,0,0]
      width: [1,1,15.5,15.5,0]
      height: [1,0.5,1,1,0]
      texture: [62]
    windshield:
      section_segments: 4
      offset:
        x: 0
        y: -15+1
        z: 11-3.4
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-9,-9,-2,-2].mult(1.4)
        z: [-2,-2,10.5,10.5,0,0,0,0,0].mult(1.4)
      width: [0,13,13,0]
      height: [0,0.2,0.2,0]
      texture: [7]
    cabinSideWindow:
      section_segments: 4
      offset:
        x: -13.2
        y: -12
        z: 5
      position:
        x: [6.5,6.5,1,0,0,0,0,0]
        y: [0,0,0,0]
        z: [0,0,12,12,0,0,0,0,0].mult(1.4)
      width: [0,8,4,0].mult(1)
      height: [0,0.2,0.2,0]
      texture: [7]
      angle: 90
    cabinSideWindow2:
      section_segments: 4
      offset:
        x: -13.2
        y: 0
        z: 5
      position:
        x: [0,0,0,0]
        y: [0,0,0,0]
        z: [0,0,12,12].mult(1.4)
      width: [0,10,10,0].mult(1)
      height: [0,0.2,0.2,0]
      texture: [7]
      angle: 90      
    front_bottom:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -27
        z: -5.5
      position:
        x: [0,0,0,0]
        y: [0,0,105,105]
        z: [0,0,0,0]
      width: [0,19,19,0]
      height: [0,15,15,0]
      texture: [62]
    grills_front:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -14
        z: -1.5
      position:
        x: [0,0,0,0]
        y: [-6,-6,6,6]
        z: [0,0,0,0]
      width: [0,19.5,19.5,0]
      height: [0,5,5,0]
      texture: [13]   
      angle: 90      
    grills_side:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 23+53
        z: 16.5
      position:
        x: [0,0,0,0]
        y: [0,0,53,53]
        z: [0,0,0,0]
      width: [0,19.5,19.5,0]
      height: [0,5,5,0]
      texture: [12]   
      angle: 180
    grills_side_bottom:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -16
        z: -75
      position:
        x: [0,0,0,0]
        y: [0,0,30,33]
        z: [0,0,0,0]
      width: [0,12,12,0]
      height: [0,5,5,0]
      texture: [13]
      vertical: true
    back_lid:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 63+13
        z: 0.5
      position:
        x: [0,0,0,0]
        y: [0,0,13,13]
        z: [0,0,0,0]
      width: [0,19.5,19.5,0]
      height: [0,5,5,0]
      texture: [12]
      angle: 180      
    cabin_side:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -11
        z: 11
      position:
        x: [0,0,0,0]
        y: [0,0,5,5]
        z: [0,0,0,0]
      width: [0,19,19,0]
      height: [0,15,15,0]
      texture: [62] 
    cabin_side2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 10
        z: 11
      position:
        x: [0,0,0,0]
        y: [0,0,3,3]
        z: [0,0,0,0]
      width: [0,19,19,0]
      height: [0,15,15,0]
      texture: [62]   
    blocc:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 13
        z: 8
      position:
        x: [0,0,0,0]
        y: [0,0,65,65]
        z: [0,0,0,0]
      width: [0,17,17,0]
      height: [0,4,4,0]
      texture: [5]   
    block:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 13
        z: 16.5
      position:
        x: [0,0,0,0]
        y: [0,0,65,65]
        z: [0,0,0,0]
      width: [0,19,19,0]
      height: [0,8,8,0]
      texture: [62] 
    block_end:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 77.1
        z: 4
      position:
        x: [0,0,0,0]
        y: [0,0,1,1]
        z: [0,0,0,0]
      width: [0,19,19,0]
      height: [0,25,25,0]
      texture: [62]  
    lights_top:
      section_segments: 6
      offset:
        x: 0
        y: -12
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-11,-10.8,-10,-7,-4,-1,0].div(1.1)
        z: [0,0,0,0,0,0,0,0]
      width: [0,.5,1,1,1,1,1].mult(1.5)
      height: [0,1,1.5,1.5,1.5,1.5,1.5]
      texture: [3.8,3.8,16.8,112.8,16.8,3.8]
      angle: 90 
    lights_top2:
      section_segments: 6
      offset:
        x: 0
        y: -12
        z: 23
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-11,-10.8,-10,-7,-4,-1,0].div(1.1)
        z: [0,0,0,0,0,0,0,0]
      width: [0,.5,1,1,1,1,1].mult(1.5)
      height: [0,1,1.5,1.5,1.5,1.5,1.5]
      texture: [3.8,3.8,16.8,112.8,16.8,3.8]
      angle: -90      
    lights_front:
      section_segments: 6
      offset:
        x: 10.5
        y: -27
        z: 0
      position:
        x: [0,0,0,0,0,0.1]
        y: [-5.3,-4.3,-1.3,-1,2,3].div(1.5)
        z: [0,0,0,0,0,0]
      width: [0,1,1,1,1,0]
      height: [1,1.5,1.5,1.5,1.5,1].div(1.2)
      texture: [3.8,112.8,3.8,16.8,3.8]
      angle: 90
    lights_back:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 11
        y: -7
        z: -77.5
      position:
        x: [0,0,0,0,0,0,0,0.1]
        y: [-5,-4.9,-4.3,-1.3,-1,2,2.6,2.7].div(1.2)
        z: [0,0,0,0,0,0,0,0]
      width: [0,.5,1,1,1,1,.5,0].mult(1.2)
      height: [0,1,1.5,1.5,1.5,1.5,1,0]
      texture: [4,4,17,4,1123,4]
      angle: 0
      vertical: true
    lights_back2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 9
        y: 18
        z: -77.5
      position:
        x: [0,0,0,0,0,0,0,0.1]
        y: [-5,-4.9,-4.3,-1.3,-.5,2.5,3.1,3.2].div(1)
        z: [0,0,0,0,0,0,0,0]
      width: [0,.5,1,1,1,1,.5,0].mult(1.5)
      height: [0,1,1.5,1.5,1.5,1.5,1,0]
      texture: [4,4,17,4,17,4]
      angle: 90
      vertical: true    
    lights_front2:
      section_segments: 6
      offset:
        x: 10.5
        y: -27
        z: -3.5
      position:
        x: [0,0,0,0,0,0.1]
        y: [-5.3,-4.3,-1.3,-1,2,3].div(1.5)
        z: [0,0,0,0,0,0]
      width: [0,1,1,1,1,0]
      height: [1,1.5,1.5,1.5,1.5,1].div(1.2)
      texture: [3.8,113.8,3.8,112.8,3.8]
      angle: 90      
    front_above_wheel:
      section_segments: [0,20,40,60,80,100,120,140,160,180].add(90+180)
      offset:
        x: 0
        y: -5
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(4.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90
    front_above_wheel2:
      section_segments: [0,20,40,60,80,100,120,140,160,180].add(270)
      offset:
        x: 0
        y: -5
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(-14.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90    
    back_above_wheel:
      section_segments: [0,20,40,60,80,100,120,140,160,180].add(90+180)
      offset:
        x: 0
        y: 43
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(4.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90      
    back_above_wheel2:
      section_segments: [0,20,40,60,80,100,120,140,160,180].add(90+180)
      offset:
        x: 0
        y: 43
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(-14.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90     
    back_above_wheel3:
      section_segments: [0,20,40,60,80,100,120,140,160,175].add(90+180)
      offset:
        x: 0
        y: 65
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(4.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90   
    back_above_wheel4:
      section_segments: [0,20,40,60,80,100,120,140,160,175].add(90+180)
      offset:
        x: 0
        y: 65
        z: -17
      position:
        x: [0,0,0,0]
        y: [0,0,10,10].add(-14.5)
        z: [0,0,0,0]
      width: [8,10,10,8].mult(1.29)
      height: [8,10,10,8].mult(1.4)
      texture: [3]
      angle: 90   
    hub:
      section_segments: 16
      offset:
        x: 12
        y: 17
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,2,2,2.5,2.5]
        z: [0,0,0,0,0,0]
      width: [0,7,7,5,5,0].div(1.7)
      height: [0,7,7,5,5,0].div(1.7)
      texture: [3,3,3,2]
      angle: 90   
    hub2:
      section_segments: 16
      offset:
        x: 12
        y: 17
        z: 16.5
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,2,2,2.5,2.5].div(1.2)
        z: [0,0,0,0,0,0]
      width: [0,7,7,5,5,0].div(2.2)
      height: [0,7,7,5,5,0].div(2.2)
      texture: [2,2,2,2,63]
      angle: 90 
    hub3:
      section_segments: 16
      offset:
        x: 12
        y: 30
        z: 1
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,2,2,2.5,2.5].div(1.2)
        z: [0,0,0,0,0,0]
      width: [0,7,7,5,5,0].div(2.2)
      height: [0,7,7,5,5,0].div(2.2)
      texture: [2,2,2,2,5]
      angle: 90       
    hub4:
      section_segments: 16
      offset:
        x: 12
        y: 38
        z: 1
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,2,2,2.5,2.5].div(1.2)
        z: [0,0,0,0,0,0]
      width: [0,7,7,5,5,0].div(2.2)
      height: [0,7,7,5,5,0].div(2.2)
      texture: [2,2,2,2,5]
      angle: 90    
    hub5:
      section_segments: 16
      offset:
        x: 12
        y: 46
        z: 1
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,2,2,2.5,2.5].div(1.2)
        z: [0,0,0,0,0,0]
      width: [0,7,7,5,5,0].div(2.2)
      height: [0,7,7,5,5,0].div(2.2)
      texture: [2,2,2,2,5]
      angle: 90    
ladder: pylon(0,-25.7,25)
      
t = -25        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
return model;    
      
