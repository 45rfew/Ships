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
ring = (x,y,z,s,l,w,h,a,v,t,j=0) ->
  return k =
    section_segments: s or 12
    offset:
      x: x
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [3,3,0,0,0,0,0,3,3,3].mult(l or 1)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].mult(w or 1)
    height: [10-j,10-j,10-j,12,12,12,12,12,10-j,10-j].mult(h or 1)
    texture: t or 17
    angle: a or 0
    vertical: v or false
jab = (x,y,z,s,w,l,h,a,v) ->
  return k =
    section_segments: 6
    offset:
      x: 0
      y: 0
      z: z
    position:
      x: Array(10).fill(y)
      y: [0,0,2,3,7,8,10,10].div(2).add(x).mult(l or 1)
      z: s or [0,0,0,0,0,0,0]
    width: [0,2,2,1,1,2,2,0].mult(w or 1)
    height: [0,2,2,1,1,2,2,0].div(2).mult(h or 1)
    texture: t or [3.9,3.9,112.9,16.9,112.9,3.9,3.9]      
    angle: a or 90
    vertical: v or false
a = [45,135,225,315]
b = [310-30,360,180,230+30]
c = [50,120,240,310]
model =
  name: 'Agartha'
  level: 6
  model: 19
  size: 1.6
  specs:
    shield:
      capacity: [300,385]
      reload: [7,9]
    generator:
      capacity: [120,120]
      reload: [50,70]
    ship:
      mass: 280
      speed: [85,105]
      rotation: [90,110]
      acceleration: [160,190]
      dash:
        rate: 10
        burst_speed: [10,10]
        speed: [10,10]
        acceleration: [0,0]
        initial_energy: [0,0]
        energy: [0,0]
  bodies:
    ring: ring(16,0,5,12,1,.8,1.2)
    ring2: ring(16,-6,5,12,.9,.7,1.1)
    ring3: ring(0,62,15,6,1.2,1,1)
    ring4: ring(0,69,15,6,1.2,1,1)
    ring5: ring(0,76,15,6,1.2,1,1)
    main:
      section_segments: 6
      offset:
        x: 0
        y: -50
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-24.5,-19,-5,0,20,35,80,140,145,145,145,133,142].mult(-1).reverse()
        z: [2.5,1,0,0,0,0,0,0,0,0,0,0,0].reverse()
      width: [0,9,16,18,20,22,22,22,19,19,18,5,0].reverse()
      height: [0,3,10,10,10,12,15,15,12,12,10,5,0].reverse()
      texture: [16.9,17.9,16.9,16.9,17.9,4,3,3,10,0.9,9.99,2,2]
      angle: 180
    mainback:
      section_segments: 6
      offset:
        x: 0
        y: -50
        z: 10
      position:
        x: Array(7).fill(-0.1)
        y: [85,85,140,132,132,142]
        z: [0,0,0,0,0,0]
      width: [0,22,22,5,5,10]
      height: [0,15,15,5,5,10]
      texture: [17,4,18]
      propeller: false
    main2:
      section_segments: 6
      offset:
        x: 10
        y: 10
        z: 3
      position:
        x: [0,0,2,3,2,0,0,9,9,9,9,9,9,9,9]
        y: [-60,-68,-59,-20,-10,-5,40,60,70,95,100,100,90,97]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,12,5,15,15,12,12,12,10,8,4,0]
      height: [0,8,10,12,5,15,15,15,15,15,12,8,4,0]
      texture: [18,4,2,3,4,10,8,3.9,12.9,4,16.9,17.9,16.9]
      propeller: false
    main2stripe:
      section_segments: 6
      offset:
        x: 10.1
        y: 10
        z: 3
      position:
        x: [0,0,2,3,2,0,0,9,9,9,9,9,0]
        y: [-59,-59,-59,-20,-10,-5,40,60,70,70,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,12,5,15,15,12,12,12,10,0]
      height: [0,8,10,12,5,15,15,15,15,15,12,0].div(3)
      texture: [18,4,17,16,16,18,13,13,13,3,17].add(-0.1)
    cockpitTop:
      section_segments: a
      offset:
        x: 0
        y: -18-30
        z: 29
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-18.5,-13.5,6,40]
        z: [-1.5,-1,0,-1.5,0,0,0,0,0]
      width: [0,10,17,19]
      height: [2,2,2,4]
      texture: [3]
    windshield:
      section_segments: 3
      offset:
        x: 0
        y: -20-30
        z: 24
      position:
        x: [-45,-11,10,15,10,-11,-45]
        y: [-13.5,-12,-7,0,7,12,13.5]
        z: [1,0,0,0,0,0,1]
      width: [0,20,10,10,10,20,0]
      height: [0,5,5,5,5,5,0]
      texture: [7,8.7,8.3,8.3,8.7,7]
      angle: 90
    cockpitMiddle:
      section_segments: [45,132,228,315]
      offset:
        x: 0
        y: -20.5-30
        z: 17
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-24,-18.5,-5,45]
        z: [0,0,0,1.5,0,0,0,0,0]
      width: [0,10.5,18,20]
      height: [2,2,2,4].add(5)
      texture: [ 2,2,8,3,4,5 ]
    top_box:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20
        z: 9
      position:
        x: [0,0,0,0,0,0,0]
        y: [-40,-20,0,45,70,85]
        z: [0,0,0,0,0,-5]
      width: [15,20,20,20,20,20]
      height: [0.1,14,18,20,20,0]
      texture: [1,1,9.95,11,12]
    reactor:
      section_segments: 20
      offset:
        x: 0
        y: 35
        z: -40
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-30,-22,-17,-16,6,5,5,5,-7,-7]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [21,21,21,20,19,17,16,12,11,0]
      height: [21,21,21,20,19,17,16,12,11,0]
      texture: [2,2,4,18,18,17,18,113,17]      
      vertical: true 
    rear_box:
      section_segments: 6
      offset:
        x: 0
        y: 34
        z: 25
      position:
        x: [0,0,0,0,0,0]
        y: [20,20,30,45,60,60]
        z: [0,0,0,0,-3.5,-3.5]
      width: [0,5,5,5,5,0]
      height: [0,5,5,5,2,0]
      texture: [17,4,1,10,12.9]      
    wire:
      section_segments: 8
      angle: 0
      offset:
        x: -26
        y: 20
        z: 40
      position:
        x: [11,12,10,10,10,9.5,9.5,10,9,9,10]
        y: [-78,-68,-58,-48,-38,-28,-18,-8,2,12,22]
        z: [-40,-33,-26,-23,-22,-17,-16,-14,-11,-5,-5,-5]
      width: [0,2,2,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2,2,2]
      propeller: false
      texture: [17,18,17,18,17,18,17,18,17,18]  
    toploader:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 19.3
        z: -11
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,-0,11,11,10,13]
        z: [0,0,0,0,0,0,0]
      width: [0,25,25,18,15,15,0]
      height: [0,28,28,28,25,20,0]
      texture: [4,4,8,3.5,10,16.97]
      vertical: true          
    Right_sides:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(28).add(2)
        y: [1.95,1.95,55,170,200,200]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].add(-1)
      height: [3,3,3,3,3,3]
      texture: 2
    Right_sides_outer:
      section_segments: b
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49]
        y: [-1,-1,55,170,202.5,202.5,202.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [2,2,2,2,2,2,0]
      texture: 4
    Right_sides_outer2:
      section_segments: b
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].add(-0.1)
        y: [-1,-1,55,170,202.5,202.5,202.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [2,2,2,2,2,2,0]
      texture: [4,17,17,17,17,4]      
    Right_sides_inner:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(25)
        y: [7,7,55,170,190,190]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0]
      height: [1,1,1,1,1,1]
      texture: 63
    Right_sides_inner2:
      section_segments: 6
      offset:
        x: 0
        y: 12
        z: 0
      position:
        x: [-29,-29,-33,-33]
        y: [7,7,200,200]
        z: [0,0,0,0]
      width: [0,2,5,0]
      height: [0,2,2,0]
      texture: [5,17,5]
      angle: 180
    righttrianglesfront:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -112
        z: 5
      position:
        x: [-11,-25,-25,-11].add(-19.5)
        y: [-32,-30,17,70]
        z: [0,0,0,-2]
      width: [0,20,20,0]
      height: [0,4,4,0]
      texture: 3.3
      angle: 180
    righttrianglesback:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -12
        z: 5
      position:
        x: [-11,-11,-25,-25,-25].add(-19.5)
        y: [-17,-17,24,43,43]
        z: [-2,-2,0,0,0]
      width: [0,0.1,20,20,0]
      height: [0,0.1,4,4,0]
      texture: 3.3
      angle: 180
    rightsidesten:
      section_segments: a
      offset:
        x: 0
        y: -27
        z: 2
      position:
        x: [0,0,0,0].add(41)
        y: [-20,-20,10,10].add(50.5)
        z: [0,2,-1.6,0]
      width: [0,35,35,0]
      height: [0,2,2,0]
      texture: 18
      angle: 90
    left_sides:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(28).add(2)
        y: [1.95+50,1.95+50,55+50,170,200,200].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].add(-1).reverse()
      height: [3,3,3,3,3,3]
      texture: 4
      angle: 180
    left_sides_outer:
      section_segments: b
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].reverse()
        y: [-1+50,-1+50,55+50,170,202.5,202.5,202.5].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0].reverse()
      height: [2,2,2,2,2,2,0]
      texture: 2
      angle: 180
    left_sides_outer2:
      section_segments: b
      offset:
        x: 0
        y: -190
        z: -2
      position:
        x: [40.5,40.5,69,69,49,49,49].add(-0.1).reverse()
        y: [-1+50,-1+50,55+50,170,202.5,202.5,202.5].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [2,2,2,2,2,2,0]
      texture: [4,17,17,17,17,4]    
      angle: 180
    left_sides_inner:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: -190
        z: 0
      position:
        x: Array(10).fill(25)
        y: [7+50,7+50,55+50,170,190,190].mult(-1).reverse()
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,45,45,20,0].reverse()
      height: [1,1,1,1,1,1]
      texture: 63
      angle: 180
    left_sides_inner2:
      section_segments: 6
      offset:
        x: 0
        y: 12-207
        z: 0
      position:
        x: [-29,-29,-33,-33].mult(-1)
        y: [7+50,7+50,200,200].mult(-1).reverse()
        z: [0,0,0,0]
      width: [0,2,5,0]
      height: [0,2,2,0]
      texture: [5,17,5]
      angle: 180
    lefttrianglesfront:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -112
        z: 5
      position:
        x: [-11,-25,-25,-11].add(-19.5)
        y: [-32-10,-30-10,17-50,70-50].mult(-1).reverse()
        z: [0,0,0,-2]
      width: [0,20,20,0].reverse()
      height: [0,4,4,0]
      texture: 2.3
      angle: 180+180
    lefttrianglesback:
      section_segments: [135,225,315]
      offset:
        x: 0
        y: -12
        z: 5
      position:
        x: [-11,-11,-25,-25,-25].add(-19.5).reverse()
        y: [-17,-17,24,33,33].mult(-1).reverse()
        z: [-2,-2,0,0,0].reverse()
      width: [0,0.1,20,20,0].reverse()
      height: [0,0.1,4,4,0].reverse()
      texture: 2.3
      angle: 180+180
    leftsidesten:
      section_segments: a
      offset:
        x: 0
        y: -17.3
        z: 2
      position:
        x: [0,0,0,0].add(-41)
        y: [-20,-20,10,10].add(50.5)
        z: [0,2,-1.6,0]
      width: [0,25,25,0]
      height: [0,2,2,0]
      texture: 11
      angle: 90+180
    Right_sides_back:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: 0
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [25,25,45,80,113,113]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [3,3,3,3,3,3]
      texture: [2,4]
    Right_sides_back2:
      section_segments: b
      offset:
        x: 0
        y: 0
        z: 18.5
      position:
        x: [49.5,49.5,65,65,49,49].add(2)
        y: [24,24,45,80,114,114]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,2,2,2,2,0]
      texture: 2  
    Right_sides_back3:
      section_segments: b
      offset:
        x: 0
        y: 0
        z: 18.6
      position:
        x: [49.5,49.5,65,65,49,49].add(1.8)
        y: [24,24,45,80,114,114]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,2,2,2,2,0]
      texture: [1.9,17,17,17,1.9]     
    Right_sides_back4:
      section_segments: [310,360,180,230]
      offset:
        x: 0
        y: 0
        z: 20.3
      position:
        x: [40,40,40,40,40,40,40]
        y: [25,25,45.5,79.6,105,105]
        z: [0,0,0,0,0.2,0,0,0]
      width: [0,10,30,30,10,0].div(1.45)
      height: [3,3,3,3,3,3]
      texture: [2]
    Right_sides_back_Inner:
      section_segments: c
      offset:
        x: 0
        y: 41
        z: 20
      position:
        x: [40,40,40,40,40,40,40]
        y: [-15,-15,71.5,71.5]
        z: [0,0,0,0,0]
      width: [4,4,4,4,4,4]
      height: [0,2,2,0,0,0]
      texture: 63
    Right_sides_back_Inner2:
      section_segments: c
      offset:
        x: 0
        y: 41
        z: 20.1
      position:
        x: [40,40,40,40,40,40,40].add(1.8)
        y: [-15,-15,71.5,71.5]
        z: [0,0,0,0,0]
      width: [4,4,4,4,4,4]
      height: [0,2,2,0,0,0]
      texture: [63,16.5,63]     
      texture: [1.5,16.5,1.5] 
    righttop:
      section_segments: [45,135,225,315,345,375].add(270)
      offset:
        x: 0
        y: 23.5
        z: -62.5
      position:
        x: [14,14,14,14,14,14,14,14].add(33)
        y: [-1.5,-1.5,0.6,1.5,3,3,3,1.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,10,10,6,5,2,0]
      height: [0,18,18,18,15,14,4.5,0]
      texture: [4,4,17,3,17,18,17]
      vertical: true
      angle: 2
    righttopwire:
      section_segments: c.add(-90)
      offset:
        x: 0
        y: 30
        z: 21.7
      position:
        x: [0,0,0,0,5,5,5,5,5,0,0,0].add(42.2)
        y: [0,0,5,7,18,40,47,50,55,66,75,75]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2,2,2]
      texture: 63
    righttopbox:
      section_segments: a
      offset:
        x: 0
        y: 25.1
        z: 23
      position:
        x: [0,0,0,0,0,0,0].add(43)
        y: [0,0,1,1,1,6,6]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,3,3,3,3,3,0]
      texture: [4,17,8,8,8,4]
    righttopbox2:
      section_segments: a
      offset:
        x: 0
        y: 104
        z: 22.5
      position:
        x: [0,0,0,0,0,0,0].add(43)
        y: [0,0,2,2,2,9,9]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,3,3,3,3,3,0]
      texture: [4,17,8,8,13,4]         
    Left_sides_back:
      section_segments: [0,50,130,180]
      offset:
        x: 0
        y: 10
        z: 20
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [25,25,45,105,145,145]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,30,30,10,0]
      height: [3,3,3,3,3,3]
      texture: [4,2]
    Left_sides_back2:
      section_segments: b.mult(-1).reverse()
      offset:
        x: 0
        y: 10
        z: 18.5
      position:
        x: [-51,-51,-66,-66,-48.5,-48.5].add(-1)
        y: [24,24,45,105,149,149]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,2,2,2,2,0]
      texture: 4      
    Left_sides_back3:
      section_segments: b.mult(-1).reverse()
      offset:
        x: 0
        y: 10
        z: 18.5
      position:
        x: [-51,-51,-66,-66,-48.5,-48.5].add(-0.9)
        y: [24,24,45,105,149,149]
        z: [0,0,0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,2,2,2,2,0]
      texture: [4,17,17,17,4]
    Left_sides_back4:
      section_segments: [0,50,130,180]
      offset:
        x: 0
        y: 10
        z: 20.44
      position:
        x: [-40,-40,-40,-40,-40,-40,-40]
        y: [25,25,45,105,145,145]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,27,27,10,0].div(1.5)
      height: [3,3,3,3,3,3]
      texture: 4
    Left_sides_back_Inner:
      section_segments: c
      offset:
        x: 0
        y: 50
        z: 20
      position:
        x: Array(6).fill(-39)
        y: [-14.5,-14.5,108,108]
        z: [0,0,0,0,0]
      width: [4,4,4,4,4,4]
      height: [0,2,2,0,0,0]
      texture: 63
    Left_sides_back_Inner2:
      section_segments: c
      offset:
        x: 0
        y: 50
        z: 20.1
      position:
        x: Array(6).fill(-40)
        y: [-14.5,-14.5,108,108]
        z: [0,0,0,0,0]
      width: [4,2,2,2,2,0]
      height: [0,2,2,0,0,0]
      texture: [63,16.5,63]
    lefttop:
      section_segments: [45,135,225,315,345,375].add(90)
      offset:
        x: 0
        y: 23.5
        z: -82.5
      position:
        x: [14,14,14,14,13,13,13,13].add(-61)
        y: [-1.5,-1.5,0.6,1.5,3,3,3,1.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,10,10,10,6,5,2,0]
      height: [0,24,24,24,15,14,4.5,0]
      texture: [4,4,17,3,17,18,17]
      vertical: true
      angle: 2
    lefttopwire:
      section_segments: c.add(90)
      offset:
        x: 0
        y: 40
        z: 22
      position:
        x: [0,0,0,0,5,5,0,0,0,0].add(42.5).mult(-1)
        y: [0,0,5,9,20,70,81,110,105,105]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2,2,2,2,2,2,2,2]
      height: [0,2,2,2,2,2,2,2,2]
      texture: 63
    lefttopbox:
      section_segments: a
      offset:
        x: 0
        y: 35.1
        z: 23
      position:
        x: [0,0,0,0,0,0,0].add(-43)
        y: [0,0,1,1,1,6,6]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,3,3,3,3,3,0]
      texture: [63,17,8,8,8,4]
    lefttopbox2:  
      section_segments: a
      offset:
        x: 0
        y: 146
        z: 23
      position:
        x: [0,0,0,0,0,0,0].add(-43)
        y: [0,0,2,2,2,9,9]
        z: [0,0,0,0,0,0,0]
      width: [0,4,4,4,4,4,0]
      height: [0,3,3,3,3,3,0]
      texture: [4,17,8,8,13,63]   
    cannon:
      section_segments: 6
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: Array(12).fill(12)
        y: [3,-2,-2,3,5,53,57,72,75,97,102,163]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      height: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      texture: [16.9,112.9,8,16.9,4,17.9,8,17.9,4,16.9,8]
      laser:
        damage: [80,80]
        rate: 0.4
        type: 2
        speed: [350,350]
        recoil: 110
        number: 1
        error: 0
    cannon2:
      section_segments: 6
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: Array(12).fill(-12)
        y: [58,53,53,58,60,83,87,100,104,110,115,163]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      height: [0,2.3,3,3,2,2,3,3,2,2,3,3]
      texture: [16.9,112.9,8,16.9,4,18,8,18,4,16.9,8]
      laser:
        damage: [1,2]
        rate: 10
        type: 1
        speed: [450,450]
        recoil: 0
        number: 1
        error: 0.1
    cannonlaser:
      section_segments: 8
      offset:
        x: 0
        y: -183
        z: 2
      position:
        x: [-12]
        y: [0]
        z: [0]
      width: [0]
      height: [0]
      laser:
        damage: [1,2]
        rate: 10
        type: 1
        speed: [430,430]
        recoil: 0
        number: 1
        error: 0.1
  wings:
    Back_connector:
      offset:
        x: 20
        y: 85
        z: 6   
      length: [13,0,12,0,0]
      width: [70,55,30,25,15]
      angle: [5,50,50,0,0,0]
      position: [-20,-5,-13,-13,3]
      texture: [63,63,4,4]
      doubleside: true
      bump:
        position: 40
        size: 10
    Back_connector2:
      offset:
        x: 20
        y: 82
        z: 6
      length: [13,0,12,0,0]
      width: [70,55,30,25,15]
      angle: [5,50,50,0,0,0]
      position: [-20,-5,-13,-13,3]
      texture: [17,17,4,4]
      doubleside: true
      bump:
        position: 40
        size: 0        
    Front_connector:
      offset:
        x: 0
        y: 0
        z: 0   
      length: [28,0]
      width: [50,65,65]
      angle: [0,0]
      position: [10,-20,-30]
      texture: 63
      doubleside: true
      bump:
        position: 40
        size: 5
    Front_connector2:
      offset:
        x: 0
        y: 1
        z: 0   
      length: [28,0]
      width: [50,65,65]
      angle: [0,0]
      position: [10,-20,-30]
      texture: 11
      doubleside: true
      bump:
        position: 40
        size: 5
    cover:
      doubleside: true
      offset:
        x: 15-1.5
        y: 0
        z: 20+1.6
      length: [-12-4,-7+5,-20,-27,0].div(2)
      width: [40,40,100,40,0,0].div(2)
      angle: [270,315,325,350,350]
      position: [40,35,7,37,50-4,50].div(2)
      texture: [4,17,4,4]
      bump:
        position: 20
        size: -5
    cover2:
      doubleside: true
      offset:
        x: 15-1.5
        y: 2
        z: 20+1.5
      length: [-12-4,-7+5,-20,-27,0].div(2)
      width: [40,40,100,40,11,0].div(2)
      angle: [270,315,325,370,370]
      position: [30,35,7,37,50-3,50].div(2)
      texture: [4,17,18,18]
      bump:
        position: 20
        size: -5     
    back:
      doubleside: true
      offset:
        x: 28
        y: 20
        z: 15-3
      length: [0,10,0,0,30].div(1.3)
      width: [0,42,40,0,80,100].div(1.3)
      angle: [90,120,0,0,200].div(1.3)
      position: [80,80,80,90,90,30].div(1.3)
      texture: 4
      bump:
        position: 5
        size: 5        
    back2:
      doubleside: true
      offset:
        x: 28
        y: 20-1
        z: 15-3.05
      length: [0,10,0,0,30].div(1.3)
      width: [0,42,40,0,80,100].div(1.3)
      angle: [90,120,0,0,200].div(1.3)
      position: [80,80,80,90,90,30].div(1.3)
      texture: [4,4,18]
      bump:
        position: 5
        size: 5                    
for i in [0...12]
  rsize = 8
  model.bodies['jab'+i] = jab [42,41,63.9,63.9,63.9,63.9,63.9,63.9,123,124,125][i], [24,44,30,50,70,90,110,130,96,116,136][i],0,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],2,1,1,if i<2 then 55 else if i>7 then 120 else 90
  model.bodies['reactorcore'+i] =
    section_segments: 6
    angle: i*30
    offset:
      x: 0
      y: 40
      z: 35
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-80,-75,-60,-50,-30,0].div(rsize)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [0,20,30,10,25,25].div(rsize)
    height: [0,10,12,8,22,22].div(rsize)
    texture: [16.83,17,0.9,17,18]
  if i<6 then  model.bodies['reactorcoresides'+i] =
    section_segments: 12
    angle: i*30
    offset:
      x: 0
      y: 40
      z: 35
    position:
      x: [0,0,0,0,0,0,0,0,0,0]
      y: [-10,-10,0,10,10,0,-10].div(2.5).div(rsize)
      z: [0,0,0,0,0,0,0,0,0,0]
    width: [60,75,77,75,60,50,60].div(rsize)
    height: [60,75,77,75,60,50,60].div(rsize)
    texture: [4,17,17,4] 
for i in [0..7]
  th = (i/4)*Math.PI*4; rd = 16
  model.bodies['reactorrings'+i] =
    section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
    offset:
      x: 0
      y: 40
      z: 24.5
    position:
      x: Array(10).fill(Math.cos(th)*rd)
      y: [-4.5,-3.5,-2.5,0,2.5,3.5,4.5,3.5,2.5,0,-2.5,-3.5,-4.5].div(2).add(Math.sin(th)*rd)
      z: [0,0,0,0,0,0,0,0,0,0,0,0,0]
    width: [10.6,12,13.3,14,13.3,12,10.6,9.3,8,7.3,8,9.3,10.6].div(2)
    height: [10.6,12,13.3,14,13.3,12,10.6,9.3,8,7.3,8,9.3,10.6].mult(1.8)
    vertical: 0
    texture: [63,17,4,4,17,63,63]
    angle: i*45   
  model.bodies['jab2'+i] = jab [98,99,100,63.9,63.9,63.9,45,44][i], [50-2,50-22,50-42,25,45,65,60,80].add(-100)[i],0,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],2,1,1,if i<3 then 240 else if i>5 then 300 else 270
for i in [0..6] 
  model.bodies['jab3'+i] = jab [24-1.2,62,62,62,62,114,116][i],[67,114,59,77,95,83,99][i],20.5,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],1.5,1,1,if i<1 then 238 else if i>4 then 300 else 270
  if i < 5 then model.bodies['jab4'+i] = jab [86,87,62.4,62.4,19][i],[-77,-60,-70,-52,-64][i],20.5,[0,0,-0.7,-1,-2,-2.3,-2.5,-2.5],1.5,1,1,[68,68,90,90,130][i]
t = 15        
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t     
  for y,v of model.tori
    v.offset.y = v.offset.y + t
return model; 
