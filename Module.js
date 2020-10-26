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
ball = (xx, yy, zz, length, radius, segments, l_segments, tx, vertical, angle) ->
  xzpos = []
  ypos = []
  width = []
  for i in [0..segments]
    ang = (i/segments)*Math.PI
    width.push(Math.sin(ang)*radius)
    ypos.push(-Math.cos(ang)*length)
    xzpos.push(0)
  return k = 
    section_segments: l_segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: xzpos
      y: ypos
      z: xzpos
    width: width
    height: width
    texture: tx
    vertical: vertical
    angle: angle
a = 50
b = -50
model =
  bodies:
    reactor: ball(0,0,0,60,60,12,20,17,false,0)
    reactor2: ball(0,0,0,60,60,12,20,17,false,45)
    reactor3: ball(0,0,0,60,60,12,20,17,false,90)
    reactor4: ball(0,0,0,60,60,12,20,113,false,135)
    main:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,90,70,90,180,210,350,420,1080,1120,1370,1380,1500,1550,1550,1350,1370,1500,1510].add(30)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,10,60,70,70,80,80,100,90,90,90,80,80,65,62,30,16,5,0].mult(1.3)
      height: [0,2,10,60,70,70,80,80,100,90,90,90,80,80,65,62,30,16,5,0].mult(1.3)
      texture: [17,17,16,4,18,17,4,17,18,17,4,17,4,18,17,17,113,17,113]
    main2:
      section_segments: 12
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,-30,90,70,90,180,210,350,420,1080,1120,1370,1380,1500,1550,1550,1350,1370,1500,1510].add(30)
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,10,60,70,70,80,80,100,90,90,90,80,80,65,62,30,16,5,0].mult(1.3)
      height: [0,2,10,60,70,70,80,80,100,90,90,90,80,80,65,62,30,16,5,0].mult(1.3)
      texture: [17,17,16,4,18,17,4,17,18,17,4,17,4,18,17,17,113,17,113]
      angle: 180
    disc:
      section_segments: 40
      offset:
        x: 0
        y: 950
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [130,-80,-80,-80,-80,-60,0,50,85,130,130]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(7.3)
      height: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(7.3)
      texture: [[18],3,3,3,3,3,3,3,4] 
    disc2:
      section_segments: 40
      offset:
        x: 0
        y: 510-20-a
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [130,-80,-80,-80,-80,-60,0,50,85,130,130].div(1.7)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(4.3)
      height: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(4.3)
      texture: [[15],3,3,3,3,3,3,3,4]     
    disc3:
      section_segments: 40
      offset:
        x: 0
        y: -950
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [130,-80,-80,-80,-80,-60,0,50,85,130,130]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(7.3)
      height: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(7.3)
      texture: [[18],3,3,3,3,3,3,3,4] 
      angle: 180
    disc4:
      section_segments: 40
      offset:
        x: 0
        y: -510-b
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [130,-80,-80,-80,-80,-60,0,50,85,130,130].div(1.7)
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(4.3)
      height: [110,110+5,110+5,110+5,110+5,110+5,120,130,130,110,110].mult(4.3)
      texture: [[15],3,3,3,3,3,3,3,4]   
      angle: 180
    pylon:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -970
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-800,-800,-600,-580,-330,-310,310,330,580,600,800,800]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,80,80,70,70,80,80,70,70,80,80,0]
      height: [0,80,80,70,70,80,80,70,70,80,80,0]
      texture: [4]    
      vertical: true
      angle: 45
    pylon2:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -970
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-800,-800,-600,-580,-330,-310,310,330,580,600,800,800]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,80,80,70,70,80,80,70,70,80,80,0]
      height: [0,80,80,70,70,80,80,70,70,80,80,0]
      texture: [4]    
      vertical: true
      angle: -45 
    pylon3:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 970
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-800,-800,-600,-580,-330,-310,310,330,580,600,800,800]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,80,80,70,70,80,80,70,70,80,80,0]
      height: [0,80,80,70,70,80,80,70,70,80,80,0]
      texture: [4]    
      vertical: true
      angle: 45
    pylon4:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 970
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-800,-800,-600,-580,-330,-310,310,330,580,600,800,800]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,80,80,70,70,80,80,70,70,80,80,0]
      height: [0,80,80,70,70,80,80,70,70,80,80,0]
      texture: [4]    
      vertical: true
      angle: -45   
    lights:
      section_segments: 40
      offset:
        x: 0
        y: -990
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(7)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(98)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(98)
      texture: [17]   
    lights2:
      section_segments: 40
      offset:
        x: 0
        y: 970
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(7)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(98)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(98)
      texture: [17] 
    lights3:
      section_segments: 40
      offset:
        x: 0
        y: -530-b
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(48)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(48)
      texture: [17]     
    lights4:
      section_segments: 40
      offset:
        x: 0
        y: 500-a
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(48)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(48)
      texture: [17]   
    lights5:
      section_segments: 40
      offset:
        x: 0
        y: -550-b
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(59)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(59)
      texture: [17]  
    lights6:
      section_segments: 40
      offset:
        x: 0
        y: 490-a
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(5)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(59)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(59)
      texture: [17]
    lights7:
      section_segments: 40
      offset:
        x: 0
        y: 260
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(7)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(38)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(38)
      texture: [17]    
    lights8:
      section_segments: 40
      offset:
        x: 0
        y: -260
        z: 10
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [3,3,0,0,0,0,0,3,3,3].mult(7)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(38)
      height: [10,10,10,10.1,10.1,10.1,10.1,10.1,10,10].mult(38)
      texture: [17]          
    back:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 1030
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
        y: [-900,-900,-700,-680,-420,-400,-300,0,300,400,420,680,700,900,900]
        z: [-19,-19,120,120,200,200,200,250,200,200,200,120,120,-20,-20]
      width: [0,70,70,55,55,70,70,70,70,70,55,55,70,70,0].add(20)
      height: [0,10,70,55,55,70,70,70,70,70,55,55,70,10,0].add(20)
      texture: [3.9,18,16.9,4,2.9,16.9,18,18,16.9,2.9,3.9,16.9,18]  
      vertical: true
      angle: 90
    back2:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: 1030
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
        y: [-900,-900,-700,-680,-420,-400,-300,0,300,400,420,680,700,900,900]
        z: [-19,-19,120,120,200,200,200,250,200,200,200,120,120,-20,-20]
      width: [0,70,70,55,55,70,70,70,70,70,55,55,70,70,0].add(20)
      height: [0,10,70,55,55,70,70,70,70,70,55,55,70,10,0].add(20)
      texture: [3.9,18,16.9,4,2.9,16.9,18,18,16.9,2.9,3.9,16.9,18]  
      vertical: true
      angle: 0
    back3:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -1030
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
        y: [-900,-900,-700,-680,-420,-400,-300,0,300,400,420,680,700,900,900]
        z: [-19,-19,120,120,200,200,200,250,200,200,200,120,120,-20,-20].mult(-1)
      width: [0,70,70,55,55,70,70,70,70,70,55,55,70,70,0].add(20)
      height: [0,10,70,55,55,70,70,70,70,70,55,55,70,10,0].add(20)
      texture: [3.9,18,16.9,4,2.9,16.9,18,18,16.9,2.9,3.9,16.9,18]  
      vertical: true
      angle: 90
    back4:
      section_segments: 6
      offset:
        x: 0
        y: 0
        z: -1030
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
        y: [-900,-900,-700,-680,-420,-400,-300,0,300,400,420,680,700,900,900]
        z: [-19,-19,120,120,200,200,200,250,200,200,200,120,120,-20,-20].mult(-1)
      width: [0,70,70,55,55,70,70,70,70,70,55,55,70,70,0].add(20)
      height: [0,10,70,55,55,70,70,70,70,70,55,55,70,10,0].add(20)
      texture: [3.9,18,16.9,4,2.9,16.9,18,18,16.9,2.9,3.9,16.9,18]  
      vertical: true
      angle: 0   
for i in [0...12]
  th = (i/12)*Math.PI*2
  rd = 122
  bz = -30
  x = Math.cos(th)*bz
  z = Math.sin(th)*bz
  model.bodies["a"+i] = 
    section_segments: 4
    offset:
      x: Math.cos(th)*rd
      y: 0
      z: Math.sin(th)*rd
    position:
      x: [Math.cos(th)*(bz-30/1.3),Math.cos(th)*(bz-30/1.3),x,x,x,Math.cos(th)*(bz+10/1.3),Math.cos(th)*(bz+10/1.3),0,0,0]
      y: [20,20,56,60,180,210,350,420,1000,1000].add(30)
      z: [Math.sin(th)*(bz-30/1.3),Math.sin(th)*(bz-30/1.3),z,z,z,Math.sin(th)*(bz+10/1.3),Math.sin(th)*(bz+10/1.3),0,0,0]
    width: [0,2,10,10,10,10,10,12,12,0].mult(1.8)
    height: [0,4,10,10,10,10,10,12,12,0].mult(1.8)
    texture: [4,4,4,4,16,4,16,4]
for i in [0...12]
  th = (i/12)*Math.PI*2
  rd = 122
  bz = -30
  x = Math.cos(th)*(bz+68)
  z = Math.sin(th)*(bz-6)
  model.bodies["aa"+i] = 
    section_segments: 4
    offset:
      x: Math.cos(th)*rd
      y: 0
      z: Math.sin(th)*rd
    position:
      x: [Math.cos(th)*(bz+82),Math.cos(th)*(bz+82),x,x,x,Math.cos(th)*(bz+50),Math.cos(th)*(bz+50),0,0,0]
      y: [20,20,56,60,180,210,350,420,1000,1000].add(30)
      z: [Math.sin(th)*(bz-50/1.3),Math.sin(th)*(bz-50/1.3),z,z,z,Math.sin(th)*(bz+10),Math.sin(th)*(bz+10),0,0,0]
    width: [0,2,10,10,10,10,10,12,12,0].mult(1.8)
    height: [0,4,10,10,10,10,10,12,12,0].mult(1.8)
    texture: [4,4,4,4,16,4,16,4]  
    angle: 180
rt = [16,11,10]    
for j in [0...2]    
  for i in [0...20]
    model.bodies["claw"+i+j] = 
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -930+j*975*2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,40,40,100,150,150].add(880)
        z: [0,0,0,0,-45,-45,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [74,74,60,60,60,0]
      height: [16,16,10,10,10,0]
      texture: [18,17,2,rt[Math.floor(Math.random()*rt.length)],17]    
      vertical: true
      angle: 4.5+i*18
    model.bodies["claw2"+i+j] = 
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -90+-930+j*975*2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,40,40,100,150,150].add(880)
        z: [0,0,0,0,45,45,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [74,74,60,60,60,0]
      height: [16,16,10,10,10,0]
      texture: [18,17,2,rt[Math.floor(Math.random()*rt.length)],17]    
      vertical: true
      angle: 4.5+i*18   
    model.bodies["claw3"+i+j] = 
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -420+j*470*2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,40,40,100,150,150].div(1.5).add(520)
        z: [0,0,0,0,-45,-45,0,0,0,0,0,0,0,0,0,0,0,0].div(1.5)
      width: [74,74,60,60,60,0].div(1.5)
      height: [16,16,10,10,10,0].div(1.5)
      texture: [18,17,2,rt[Math.floor(Math.random()*rt.length)],17]    
      vertical: true
      angle: 4.5+i*18  
    model.bodies["claw4"+i+j] = 
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: -90/1.5-420+j*470*2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-30,40,40,100,150,150].div(1.5).add(520)
        z: [0,0,0,0,45,45,0,0,0,0,0,0,0,0,0,0,0,0].div(1.5)
      width: [74,74,60,60,60,0].div(1.5)
      height: [16,16,10,10,10,0].div(1.5)
      texture: [18,17,2,rt[Math.floor(Math.random()*rt.length)],17]    
      vertical: true
      angle: 4.5+i*18      
for i in [0...3]
  model.bodies["joint"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 22.5+i*18  
  model.bodies["joint2"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: -67.5+i*18 
  model.bodies["joint3"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 113+i*18 
  model.bodies["joint4"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 202+i*18     
  model.bodies["joint5"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 22.5+i*18      
  model.bodies["joint6"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 202+i*18  
  model.bodies["joint7"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: 113+i*18    
  model.bodies["joint8"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,40,50,0]
    height: [0,10,10,0]
    texture: [4]    
    vertical: true
    angle: -67.5+i*18    
  model.bodies["jointdeco"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: -67.5+i*18   
  model.bodies["jointdeco2"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 113+i*18  
  model.bodies["jointdeco3"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 202+i*18  
  model.bodies["jointdeco4"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: -800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [400,400,-140,-140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 22.5+i*18       
  model.bodies["jointdeco5"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 22.5+i*18   
  model.bodies["jointdeco6"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: -67.5+i*18       
  model.bodies["jointdeco7"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 202+i*18       
  model.bodies["jointdeco8"+i] = 
    section_segments: [45,135,225,315]
    offset:
      x: 0
      y: 0
      z: 800
    position:
      x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      y: [0,0,420,420].add(500)
      z: [-310,-310,140,140,0,0,0,0,0,0,0,0,0,0,0]
    width: [0,10,20,0]
    height: [0,20,5,0]
    texture: [17]    
    vertical: true
    angle: 113+i*18       
return model;
