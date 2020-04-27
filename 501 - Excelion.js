multiplyArray = (arr,m) ->
  k = [];
  for i in [0..arr.length-1]
    k.push(arr[i]*m)
  return k;
ring = (xx, yy, zz, segments, l, w, t, tcc, vert, tx, angle, z) ->
  return k =
    section_segments: segments
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: [].fill(0,13)
      y: multiplyArray([-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25], t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: vert
    texture: tx
    angle: angle 
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
b = 1.2
c = .66
h = .7
f = 180
g = 100
a = -50
model =
  name: 'Excelion'
  level: 5
  model: 1
  size: 1.1
  specs:
    shield:
      capacity: [280,340]
      reload: [9,13]
    generator:
      capacity: [200,280]
      reload: [130,160]
    ship:
      mass: 325
      speed: [100,120]
      rotation: [80,100]
      acceleration: [50,60]  
  bodies:
    ball: ball(0.01,105,23,75,80,10,3,7,0,0)
    ring: ring(58,41,70,[45,135,225,315],5,13,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring2: ring(58,41,40,[45,135,225,315],5,13,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring3: ring(58,41,10,[45,135,225,315],5,13,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring4: ring(58,41,-20,[45,135,225,315],5,13,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring5: ring(56,41,100,[45,135,225,315],5,10,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring6: ring(54,41,130,[45,135,225,315],5,5,1.5,.1,1,[4,17,4,4,17,18,18,17,4],18)
    ring7: ring(58,41,55,[45,135,225,315],16.22,7,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring8: ring(58,41,25,[45,135,225,315],16.22,7,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring9: ring(58,41,-5,[45,135,225,315],16.22,7,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring10: ring(56,41,85,[45,135,225,315],16.22,4,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring11: ring(54,41,115,[45,135,225,315],16.22,0,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring12: ring(58,41,-42,[45,135,225,315],26.22,7,1.4,.1,1,[4,17,4,4,17,[15],[15],17,4],18)
    ring13: ring(103.5,34,-100,[45,135,225,315],4,8*1.4,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring14: ring(103.5,33.5,-80,[45,135,225,315],4,8*1.3,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring15: ring(103.5,33.5,-60,[45,135,225,315],4,8*1.25,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring16: ring(103.5,33,-40,[45,135,225,315],4,8*1.25,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring17: ring(102.5,33,-20,[45,135,225,315],4,8*1.1,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring18: ring(102.3,32.5,0,[45,135,225,315],4,8*1.1,0.7*1.4,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring19: ring(100.3,32.5,20,[45,135,225,315],4,8/1.5,0.7,.1,1,[4,17,4,4,17,111,111,17,4],10)
    ring20: ring(103.5,34,-90,[45,135,225,315],10,5,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    ring21: ring(103.5,34,-70,[45,135,225,315],10,5,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    ring22: ring(103.5,33.5,-50,[45,135,225,315],10,5,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    ring23: ring(103,33,-30,[45,135,225,315],10,4,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    ring24: ring(103,32.5,-10,[45,135,225,315],10,4,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    ring25: ring(101,32,10,[45,135,225,315],10,0,0.7,.1,1,[4,17,4,4,17,[15],[15],17,4],10)
    main:  
      section_segments: 12
      offset:
        x: 0
        y: -80+f-a
        z: 70-g
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-30-30-21-10,-22-20-30,-15-10,0,15+10-10,22+10+15-5,30+20+17]
        z: [12,0,10,10,45,40,40,0,0,0]
      width: [80,80,85,80,80,60,30,0]
      height: [40,40,45,40,65,40,0,0]
      texture: [3]
    cockpit_front:
      section_segments: 4
      angle: 0
      offset:
        x: 0
        y: -180+f-a
        z: 120-g
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*c,-65*c,-60*c,-55*c,-50*c,-45*c,-40*c,-35*c,-30*c,-25*c,-20*c,-15*c,-10*c,-5*c,0,5*c,10*c,15*c,20*c,25*c,30*c,35*c,40*c,45*c,50*c,55*c,60*c,65*c,68*c]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*c,36*c,43*c,49*c,54*c,57*c,60*c,63*c,65*c,67*c,68*c,69*c,69.8*c,70*c,69.8*c,69*c,68*c,67*c,65*c,63*c,60*c,57*c,54*c,49*c,43*c,36*c,26*c,0]
      height: [0,26*c,36*c,43*c,49*c,54*c,57*c,60*c,63*c,65*c,67*c,68*c,69*c,69.8*c,70*c,69.8*c,69*c,68*c,67*c,65*c,63*c,60*c,57*c,54*c,49*c,43*c,36*c,26*c,0]
      propeller: true
      texture: [7,4,7,4,7,4,7,4,7,4,7,4,7,4]      
    back:
      section_segments: 3
      angle: 90
      offset:
        x: 0
        y: -80+f+2-a
        z: 150-g-5
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*b,-65*b,-60*b,-55*b,-50*b,-45*b,-40*b,-35*b,-30*b,-25*b,-20*b,-15*b,-10*b,-5*b,0,5*b,10*b,15*b,20*b,25*b,30*b,35*b,40*b,45*b,50*b,55*b,60*b,65*b,68*b]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*b,36*b,43*b,49*b,54*b,57*b,60*b,63*b,65*b,67*b,68*b,69*b,69.8*b,70*b,69.8*b,69*b,68*b,67*b,65*b,63*b,60*b,57*b,54*b,49*b,43*b,36*b,26*b,0]
      height: [0,26*b,36*b,43*b,49*b,54*b,57*b,60*b,63*b,65*b,67*b,68*b,69*b,69.8*b,70*b,69.8*b,69*b,68*b,67*b,65*b,63*b,60*b,57*b,54*b,49*b,43*b,36*b,26*b,0]
      propeller: true
      texture: [3.6]      
    bottom:
      section_segments: 4
      angle: 90
      offset:
        x: 0
        y: -160+f-a
        z: 100-g
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*b,-65*b,-60*b,-55*b,-50*b,-45*b,-40*b,-35*b,-30*b,-25*b,-20*b,-15*b,-10*b,-5*b,0,5*b,10*b,15*b,20*b,25*b,30*b,35*b,40*b,45*b,50*b,55*b,60*b,65*b,68*b]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*b,36*b,43*b,49*b,54*b,57*b,60*b,63*b,65*b,67*b,68*b,69*b,69.8*b,70*b,69.8*b,69*b,68*b,67*b,65*b,63*b,60*b,57*b,54*b,49*b,43*b,36*b,26*b,0]
      height: [0,26*b*h,36*b*h,43*b*h,49*b*h,54*b*h,57*b*h,60*b*h,63*b*h,65*b*h,67*b*h,68*b*h,69*b*h,69.8*b*h,70*b*h,69.8*b*h,69*b*h,68*b*h,67*b*h,65*b*h,63*b*h,60*b*h,57*b*h,54*b*h,49*b*h,43*b*h,36*b*h,26*b*h,0]
      propeller: true
      texture: [3]
    engines:
      section_segments: 12
      offset:
        x: -80
        y: -165+f-a
        z: 120-g
      position:
        x: [35-6,25,-2,-4,-2,0,0,0]
        y: [-40,0,40,74,98,108,108,98]
        z: [10,18,10,9,5,5,5,5]
      width: [10,10+2,10+2,9+2,14+2,11+2,11,0]
      height: [10,10+2,10+2,9+2,14+2,11+2,11,0]
      texture: [17,13,17,13,13,17]
      propeller: false    
    engines_propeller:
      section_segments: 12
      offset:
        x: -80
        y: -15+f-a
        z: 125-g
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [20]
      propeller: true
    cannons:
      section_segments: 8
      offset:
        x: 40
        y: -350+f-a
        z: 115-g
      position:
        x: [2,2,2,1.5,1,0.5,0,0,9,0]
        y: [-15-5,-20-5,23-5,27-5,62-5,62-5,97-5,102,163]
        z: [15,15,13,15,15,15,14,13,16,0]
      width: [0,5+2,5+2,7+2+2,7+2+2,4+2+2,4+2+2,7+2+2,7+2+2]
      height: [0,5+2,5+2,7+2+2,7+2+2,4+2+2,4+2+2,7+2+2,7+2+2]
      texture: [13,17,4,13,4,17,4,13]
      propeller: false
      laser:
        damage: [18,25]
        rate: 3
        type: 1
        speed: [150,180]
        recoil: 25
        number: 1
        error: 0
    cannons1:
      section_segments: 8
      offset:
        x: 40
        y: -350+f-a
        z: 115-g
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [0]
      height: [0]
      laser:
        damage: [10,18]
        rate: 6
        type: 2
        speed: [140,170]
        recoil: 10
        number: 1
        error: 4   
    cannons2:
      section_segments: 8
      offset:
        x: 40
        y: -350+f-a
        z: 115-g
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [0]
      height: [0]
      laser:
        damage: [2,4]
        rate: 10
        type: 2
        speed: [180,220]
        recoil: 2.5
        number: 1
        error: 2           
  wings:
    outer:
      offset:
        x: 27
        y: -215+f-a
        z: 150-g-24-5
      length: [10,3,20,32,32,35,3,15]
      width: [185,375,375,306,232,167,122,118,35]
      angle: [75,75,-30+60,-15,-8,-8,-8,-8]
      position: [-100,-100,-100,-50,30,50,70,72,80]
      texture: [13,17,18,4,4,18,17,63]
      doubleside: true
      bump:
        position: 25
        size: 1
    outer_back:
      offset:
        x: 27
        y: -215+f-a+2
        z: 150-g-24-5
      length: [10,3,20,32,32,35,3,15]
      width: [185,375,375,306,232,167,122,118,35]
      angle: [75,75,-30+60,-15,-8,-8,-8,-8.1]
      position: [-100,-100,-20,-50,30,50,70,72,80]
      texture: [13,17,11,1,1,11,17,63]
      doubleside: true
      bump:
        position: 25
        size: 1        
    innercolor:
      offset:
        x: 71
        y: -200+f-a+5
        z: 143-g-5
      length: [2,20,2]
      width: [164,164,165,195]
      angle: [-10,-10,-10]
      position: [-50,-45,0,20]
      texture: [17,63,17]
      doubleside: true
      bump:
        position: 30
        size: 4
t = 25
if (1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;  
