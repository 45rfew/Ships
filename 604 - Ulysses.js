ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle, z) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [].fill(0,13)
      y: [-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25].mult(t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: vert
    texture: tx
    angle: angle
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
a = 2.5
b = 5
model =
  name: "Ulysses"
  level: 6
  model: 4
  size: 1.9
  next: [703,704]
  specs:
    shield:
      capacity: [290,380]
      reload: [9,11]
    generator:
      capacity: [110,180]
      reload: [40,50]
    ship:
      mass: 240
      speed: [80,110]
      rotation: [65,78]
      acceleration: [80,120]
  bodies:
    main:
      section_segments: [10,15,20,140,160,180,200,220,340,345,350]
      offset:
        x: 0
        y: 0
        z: -1
      position:
        x: [0,0,0,0,0,0,0]
        y: [-72,-70,-40,20,80,135,135]
        z: [0,0,0,4,4,4,4]
      width: [0,3,10,20,20,20,0]
      height: [0,1,7-3,7,7,7,0]
      texture: [2.8,3.8,2.8,3.8,3.8]
      laser:
        damage: [11,18]
        rate: 8
        type: 1
        speed: [200,230]
        number: 1
        angle: 0
        error: 0      
    main2:
      section_segments: [90,140,180,220,270,360]
      offset:
        x: 0
        y: 0
        z: -6.5+8
      position:
        x: [0,0,0,0,0,0,0]
        y: [-72,-70,-40,20,80,140,140]
        z: [-3,-3,-5.5,-4,-4,-4,-4]
      width: [0,3/1.6,10/1.6,20/1.6,20/1.6,20/1.6,0]
      height: [0,1,7-3,7,7,7,0]
      texture: [3,4,3,4,4]
    detail1:
      section_segments: [45,135,225,315]
      offset:
        x: 2
        y: 15
        z: 2.37
      position:
        x: [0,-0.3,0,3,0]
        y: [-55,-55,-50,5,0]
        z: [0,0,0.5,6.75,0]
      width: [0,0.5,0.9,0.9,0]
      height: [0,1,1,1,0]
      texture: [63]
    detail2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 27
        z: 2.9
      position:
        x: [0,0,0]
        y: [-30,-7,-7]
        z: [-2.6,0,0]
      width: [0.01,9.7,0]
      height: [10,10,0]
      texture: [4]
    detail3:
      section_segments: 12
      offset:
        x: 7
        y: 9
        z: 3.5
      position:
        x: [0,0,0,-0.2,0]
        y: [-15,-15,-14,5,5]
        z: [0,0,0,0,0]
      width: [0,1.5,1.5,1.5,0]
      height: [0,1.5,1.5,1.5,0]
      texture: [4,63,2]
      laser:
        damage: [9,13]
        rate: 6
        type: 2
        speed: [160,180]
        number: 1
        angle: 0
        error: 3     
    detail4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 32
        z: 4
      position:
        x: [0,0,0,0,0]
        y: [-28,-12,-12,45,45]
        z: [-2.3,-0.4,-0.4,6.4,0.4]
      width: [0.01,7.7,8.7,8.7,0]
      height: [10,10,10,0]
      texture: [3]
    detail5:
      section_segments: 6
      offset:
        x: 0
        y: 15
        z: 8
      position:
        x: [0,0,0,0,0,0,0]
        y: [10/a,40/a,80/a,130/a,150/a,150/a,160/a]
        z: [5.3/a,7/a,3,5/a,5/a,5/a,0/a]
      width: [3/a,10/a,12/a,12/a,12/a,12/a,0]
      height: [0,10/a,15/a,15/a,15/a,15/a,0]
      texture: [9,9,4]         
    detail6:
      section_segments: [45,135,225,315]
      offset:
        x: 7
        y: 18
        z: -42.4
      position:
        x: [2,2,6.5,0,0]
        y: [-25,-25,-20,-7,-7]
        z: [0,0,0,0,0]
      width: [0,1,1,1,0]
      height: [0,30,30,30,0]
      texture: [4]
      vertical: true
    detail7:
      section_segments: [45,135,225,315]
      offset:
        x: 7
        y: 18
        z: -20.5
      position:
        x: [2,2,6.5,0,0]
        y: [-25,-25,-20,-7,-7]
        z: [0,0,0,0,0]
      width: [0,1,1,1,0]
      height: [0,1,1,1,0]
      texture: [63]
      vertical: true 
    detail8:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0]
      height: [0,1,1,1,1,0]
      texture: [1,18,4,18.2,2]
      angle: 90      
    detail85:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9.1
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(1.5)
      height: [0,1,1,1,1,0]
      texture: [1,18,63]
      angle: 90    
    detail852:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9.2
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(2.5)
      height: [0,1,1,1,1,0]
      texture: [1,18,4,18.2,1]
      angle: 90   
    detail88:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9.3
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(6)
      height: [0,1,1,1,1,0]
      texture: [1,18,63]
      angle: 90    
    detail881:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: 9.35
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(30)
      height: [0,1,1,1,1,0]
      texture: [1,18,4,17]
      angle: 90   
    detail882:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 93
        z: 9.35
      position:
        x: [12,12,12.5,6,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(30)
      height: [0,1,1,1,1,0]
      texture: [1,18,4,17]
      angle: 90       
    detail883:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 130
        z: 9.35
      position:
        x: [12,12,12.5,9,10,10]
        y: [-30,-30,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,50,50,45,15,0].div(30)
      height: [0,1,1,1,1,0]
      texture: [1,18,4,17]
      angle: 90             
    detail9:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: -9
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [2,2,-5,-7,9,9]
      width: [0,50,50,45,15,0]
      height: [0,1,1,1,1,0]
      texture: [1,18,4,18.2,2]
      angle: 90    
    detail95:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 99
        z: -8.5
      position:
        x: [0,0,0,-5,-15,-15]
        y: [-30,-30,-10,10,60,60]
        z: [2,2,-5,-7,9,9]
      width: [0,50,50,45,15,0].div(2)
      height: [0,1,1,1,1,0]
      texture: [1,18,63]
      angle: 90          
    detail10:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 91
        z: 9
      position:
        x: [26,26,26,18,-13,-13]
        y: [-31,-31,-10,10,60,60]
        z: [0,0,2,12,-9,-9]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [[15]]
      angle: 90      
    detail11:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 111
        z: 9
      position:
        x: [-22,-22,-22,-24,-13,-13]
        y: [-30,-30,-10,10,58,58]
        z: [0,0,2,12,-8,-8]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [[15]]
      angle: 90  
    detail12:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 91
        z: -9
      position:
        x: [26,26,26,18,-13,-13]
        y: [-30,-30,-10,10,60,60]
        z: [0,2,-5,-7,9,9]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [[15]]
      angle: 90      
    detail13:
      section_segments: [45,135,225,315]
      offset:
        x: 36.8
        y: 111
        z: -9
      position:
        x: [-22,-22,-22,-24,-13,-13]
        y: [-30,-30,-10,10,58,58]
        z: [0,2,-5,-7,8,8]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      texture: [[15]]
      angle: 90  
    detail14:
      section_segments: 12
      offset:
        x: 0
        y: 146.6
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-15,-9,-7,-5,-4,-3,-1,0,1,3,4,10,10,5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,13,13,11,11,13,11,11,13,11,11,13,13,11,0]
      height: [0,13,13,11,11,13,11,11,13,11,11,13,13,11,0]
      texture: [4,4,4,7,[15],[15],7,[15],[15],7,4,4,17]
      propeller: true
    detail15:
      section_segments: [15,65,115,165,195,245,295,345]
      offset:
        x: 100
        y: 113
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20+3,-20+3,-18+3,18-3,20-3,17,7]
        z: [0,0,0,0,0,0,0]
      width: [0,10,10,10,10,8,0]
      height: [0,18,18,18,18,16,0]
      texture: [[15],63,3,63,16.94]
      propeller: true      
    detail16:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 100
        y: 94.9
        z: 0
      position:
        x: [0,0,0,0]
        y: [0,0,0,1]
        z: [0,0,0,0]
      width: [7+1,5.5+1,5.5+1,7+1]
      height: [7+1,5.5+1,5.5+1,7+1]
      texture: [2]
    detail17:
      section_segments: 12
      offset:
        x: 100
        y: 89
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-3,-5,3,5,10,10]
        z: [0,0,0,0,0,0,0]
      width: [0,3.5,4,4,5,4,0]
      height: [0,3.5,4,4,5,4,0]
      texture: [17,2,2,63]
      angle: 2
    detail18:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 115
        z: 15
      position:
        x: [0,0,0,0,0,0]
        y: [-30+5,-30+5,-13+5,18,20,20]
        z: [-5,-5,0,0,0,0]
      width: [0,11,11,11,11,0]
      height: [0,0.1,12,12,12,0]
      texture: [3,3,3,63,17.99]
    detail19:
      section_segments: 12
      offset:
        x: 19.5
        y: 130
        z: 15
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-10,6,11,13,13,6.5]
        z: [0,0,0,0,0,0,0]
      width: [0,7,7,9,9,8,0]
      height: [0,9,9,11,9,8,0]
      texture: [7,7,3,7,16.99,16.99]
      propeller: true     
    detail20:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 90
        z: 11
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-10,-8,20]
        z: [0,0,0,0,0]
      width: [0,7,8,8,8]
      height: [0,2,3,3,3]
      texture: [5,2,63,2]
    detail21:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 142
        z: 23
      position:
        x: [0,0,0,0,0,0]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,5,6,5,5]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3] 
    detail21_5:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 142
        z: 23
      position:
        x: [0,0,0,0,0,0]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,5,6,5,5]
      width: [0,2,2,2,0.75,0].mult(1.4)
      height: [0,1,1,1,1,0].div(2)
      texture: [17]       
    detail22:
      section_segments: [45,135,225,315]
      offset:
        x: 25
        y: 142
        z: 15.2
      position:
        x: [0,0,5,6,5,5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3] 
    detail22_5:
      section_segments: [45,135,225,315]
      offset:
        x: 25
        y: 142
        z: 15.2
      position:
        x: [0,0,5,6,5,5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0].mult(1.4)
      height: [0,1,1,1,1,0].div(2)
      texture: [17]       
    detail23:
      section_segments: [45,135,225,315]
      offset:
        x: 14
        y: 142
        z: 15.2
      position:
        x: [0,0,-5,-6,-5,-5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3] 
    detail23_5:
      section_segments: [45,135,225,315]
      offset:
        x: 14
        y: 142
        z: 15.2
      position:
        x: [0,0,-5,-6,-5,-5]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0.75,0].mult(1.4)
      height: [0,1,1,1,1,0].div(2)
      texture: [17]       
    detail24:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 142
        z: 7
      position:
        x: [0,0,0,0,0,0]
        y: [-5,-5,-0,5,10,10]
        z: [0,0,-5,-6,-5,-5]
      width: [0,2,2,2,0.75,0]
      height: [0,1,1,1,1,0]
      texture: [63,63,4,3]     
    detail29:
      section_segments: [45,135,225,315]
      offset:
        x: 19.5
        y: 14
        z: -120
      position:
        x: [0,0,0,0,0]
        y: [0,0,40,37,37].div(3)
        z: [0,0,0,0,0]
      width: [0,30,10,2,0].div(3)
      height: [0,100,80,80/3,0].div(5)
      angle: 0
      vertical: true
      texture: [17,4,16.93]
    disc:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 124+2
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].mult(.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.05)
      height: [10,10,10,12,12,12,12,12,10,10].mult(.8)
      texture: [4,4,4,4,4,17,4,4]     
    disc2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 112+3
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].mult(.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.05)
      height: [10,10,10,12,12,12,12,12,10,10].mult(.8)
      texture: [4,4,4,4,4,17,4,4]          
    disc3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 118+2.5
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].mult(.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.05)
      height: [10,10,10,12,12,12,12,12,10,10].mult(.8)
      texture: [4,4,4,4,4,17,4,4]
    disc3_5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 19.5
        y: 110-.5
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].mult(.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].mult(1.05)
      height: [10,10,10,12,12,12,12,12,10,10].mult(.8)
      texture: [4,4,4,4,4,17,4,4]       
    disc4:
      section_segments: [20,40,60,120,140,160,180,200,220,240,260,280,300,320,340,360]
      offset:
        x: 9
        y: 4.5
        z: -35
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(3)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: true
      angle: 60
    disc5:
      section_segments: [20,40,60,120,140,160,180,200,220,240,260,280,300,320,340,360]
      offset:
        x: 9
        y: 4.5
        z: -45
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(3)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: true
      angle: 60  
    disc6:
      section_segments: 6
      offset:
        x: 1
        y: 9
        z: -91.6
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(1.8)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: true
      angle: 90   
    disc7:
      section_segments: 10
      offset:
        x: -1
        y: 86
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(3)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: !true
      angle: 90+45  
    disc8:
      section_segments: 6
      offset:
        x: 0.9
        y: 9
        z: -79
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(2)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: true
      angle: 90   
    disc9:
      section_segments: 6
      offset:
        x: 0.01
        y: 98.3
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(3)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: !true
      angle: 90-20 
    disc10:
      section_segments: 6
      offset:
        x: 0
        y: 9
        z: -115
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(3).add(-1.3).mult(1.1)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(3)
      height: [10,10,10,12,12,12,12,12,10,10].div(1.2).mult(2.1)
      texture: [4,16.8,4,4,4,16.8,3.8,4]
      vertical: true
      angle: 90 
    disc11:
      section_segments: 20
      offset:
        x: 99
        y: 106.5+3
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(2.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(1.6)
      height: [10,10,10,12,12,12,12,12,10,10].div(1.1)
      texture: [4,4,4,4,4,17,4,4]
    disc12:
      section_segments: 20
      offset:
        x: 99
        y: 110.5+3
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(2.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(1.6)
      height: [10,10,10,12,12,12,12,12,10,10].div(1.1)
      texture: [4,4,4,4,4,17,4,4]
    disc13:
      section_segments: [15,65,115,165,195,245,295,345]
      offset:
        x: 100
        y: 122
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(2.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(1.1)
      height: [10,10,10,12,12,12,12,12,10,10].div(0.65)
      texture: [17,17.87,17,17,17,17.87,17,17]     
    disc14:
      section_segments: [15,65,115,165,195,245,295,345]
      offset:
        x: 100
        y: 100
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(2.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(1.1)
      height: [10,10,10,12,12,12,12,12,10,10].div(0.65)
      texture: [17,17.87,17,17,17,17.87,17,17]      
    rod:
      section_segments: [45,135,225,315].add(20)
      offset:
        x: 10.5
        y: 40
        z: 5.5
      position:
        x: [0,0,0,0,0.2,0.5,0,0,0,0.5,0.2,0,0,0,0]
        y: [-10,-10,-8.5,-7,-5,-4,-2,0,2,4,5,7,8.5,10,10]
        z: [0,0,0,0,-0.5,-1,0,0,0,-1,-0.5,0,0,0,0]
      width: [0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0]
      height: [0,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0]
      texture: [4]            
    circ:
      section_segments: 30
      offset:
        x: 4.5
        y: 2
        z: -30
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,40,40,40,40,40].div(5)
        z: [0,0,0,0,0,0,0]
      width: [0,12,12,9,2,0].div(5)
      height: [0,12,12,9,2,0].div(5)
      angle: 60
      vertical: true
      texture: [17,4,16.93,17.93]  
    circ2:
      section_segments: 30
      offset:
        x: 4.5
        y: 2
        z: -40
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,40,40,40,40,40].div(5)
        z: [0,0,0,0,0,0,0]
      width: [0,12,12,9,2,0].div(5)
      height: [0,12,12,9,2,0].div(5)
      angle: 60
      vertical: true
      texture: [17,4,16.93,17.93]  
    circ3:
      section_segments: 30
      offset:
        x: 4.5
        y: 2
        z: -50
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,0,40,40,40,40,40].div(5)
        z: [0,0,0,0,0,0,0]
      width: [0,12,12,9,2,0].div(5)
      height: [0,12,12,9,2,0].div(5)
      angle: 60
      vertical: true
      texture: [17,4,16.93,17.93] 
    hub:
      section_segments: 20
      offset:
        x: 0
        y: 10
        z: -120
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6].div(2)
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].div(2)
      height: [18,15,13,12,10,0].div(2)
      texture: [18,17,17,18,18]  
      vertical: true
    hub2:
      section_segments: 20
      offset:
        x: 105+1
        y: 10
        z: -113
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,10,5,5,10,6].div(3)
        z: [0,0,0,0,0,0,0]
      width: [18,15,13,12,10,0].div(3)
      height: [18,15,13,12,10,0].div(3)
      texture: [18,17,17,18,18]  
      vertical: true      
      angle: 55
    bar:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 4
        y: 70
        z: 10
      position:
        x: [4,4,4,4,2,2,0,0,0]
        y: [-4,-4,0,18,22,30,35,60,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2,2.5,2.5,2.5,2.5,2.5,2.5,0]
      height: [0,0.5,2.5,2.5,2.5,2.5,2.5,2.5,0]
      texture: [18.17,17,18.17,4,18.17,17,4]
    bar2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0.001
        y: 70
        z: 10
      position:
        x: [4,4,3,3,2,2,0,0,0]
        y: [-4,-4,0,18,22,30,35,50,50]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,2,3.5,3.5,2.5,2.5,2.5,2.5,0].mult(1.299)
      height: [0,0.5,2.5,2.5,2.5,2.5,2.5,2.5,0].div(2)
      texture: [[15]]
    bar3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 107
        y: 97.5
        z: 0
      position:
        x: [0,0,0,0,1.5,0]
        y: [0,0,10,30,40,40].div(1.3)
        z: [0,0,0,0,0,0]
      width: [0,3,6,6,1,0]
      height: [0,6,6,6,6,0]
      texture: [8,8,4,8]   
    bar4:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 109
        y: 105.5
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,10,30,40,40].div(2.8)
        z: [0,0,0,0,0,0]
      width: [0,3,6,6,3,0]
      height: [0,7,7,7,7,0]
      texture: [3,3,17.95,3]         
    engine_detail:
      section_segments: [45,135,225,315]
      offset:
        x: 17
        y: 82
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,8,10,12,15,17,20,22,22]
        z: [0,0,10,10,10,10,10,10,10]
      width: [0,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,0]
      height: [0,2,2,2,2,2,2,2,2,0]
      texture: [5,18.2,13,18,13,18,13,18]          
    engine_detail2:
      section_segments: [45,135,225,315]
      offset:
        x: 22
        y: 82
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,8,10,12,15,17,20,22,22]
        z: [0,0,10,10,10,10,10,10,10]
      width: [0,1.5,1.5,1.5,1.5,1.5,1.5,1.5,1.5,0]
      height: [0,2,2,2,2,2,2,2,2,0]
      texture: [5,18.2,13,18,13,18,13,18]         
  wings: 
    main:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: 7
      length: [0,20/b]
      width: [0/b,200/b,0/b]
      angle: [90,90]
      position: [-0,-30,-10]
      texture: [63]
      bump:
        position: 35
        size: 20
    main2:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: -7
      length: [0,20/b]
      width: [0/b,200/b,0/b]
      angle: [-90,-90]
      position: [-0,-30,-10]
      texture: [63]
      bump:
        position: 35
        size: 20   
    main3:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: 7.01
      length: [0,15/b]
      width: [0/b,210/b,0/b]
      angle: [90,90]
      position: [-0,-30,-10]
      texture: [17]
      bump:
        position: 35
        size: 20    
    main4:
      doubleside: true
      offset:
        x: 100
        y: 125
        z: -7.1
      length: [0,1/b]
      width: [0/b,220/b,0/b]
      angle: [90,90]
      position: [-0,-30,-10]
      texture: [17]
      bump:
        position: 35
        size: 20        
    sides:
      length: [35]
      width: [13,8]
      angle: [130]
      position: [0,30]
      doubleside: true
      offset:
        x: 92
        y: 115
        z: 5
      bump:
        position: 10
        size: 20
      texture: [3]    
    sides2:
      length: [2]
      width: [7.6,7]
      angle: [130]
      position: [0,0]
      doubleside: true
      offset:
        x: 70
        y: 145
        z: 31.7
      bump:
        position: 0
        size: 0
      texture: [63] 
    sides3:
      length: [35]
      width: [13,8]
      angle: [-130]
      position: [0,30]
      doubleside: true
      offset:
        x: 92
        y: 115
        z: 0
      bump:
        position: 10
        size: 20
      texture: [3] 
    sides4:
      length: [2]
      width: [7.8,6.5]
      angle: [-130]
      position: [0,0]
      doubleside: true
      offset:
        x: 70-0.6
        y: 145
        z: -26
      bump:
        position: 0
        size: 0
      texture: [63]       
for i in [1...9]
  model.bodies['engine_shield'+i] =
    section_segments: [0,45,55,125,135,225,235,305,315]
    offset:
      x: 0
      y: 0
      z: -154
    position:
      x: [0,0,0,0,0,0]
      y: [5,5,10,10,10,11].add(5)
      z: [0,0,0,-6,-6,-6]
    width: [0,2,2,4,2.7,0].add(-1)
    height: [0,1,1,11,9.7,0]
    texture: [17.8,17.8,[15],16.8,[15]]
    angle: i*45
    vertical: true   
for i in [0..4]
  for j in [0..1]
    model.bodies["eqwe"+i+j] = 
      section_segments: [45,135,225,315]
      offset:
        x: 21.7-j*4.3
        y: 92+(i*4)
        z: 20
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [7.5,7.5,1,1,1,2,6,7.5,7.5,7.5].div(5.5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,12,12,12,12,12,10,10].div(5.5)
      height: [10,10,10,12,12,12,12,12,10,10].div(5.5)
      texture: [4,4,4,4,4,17,4,4]      
      angle: 140-j*140*2    
t = -50    
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
