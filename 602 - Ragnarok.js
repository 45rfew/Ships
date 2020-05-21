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
ring = (x,y,z,s,l,w,t,tcc,v,tx,a) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,13)
      y: [-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25].mult(t+tcc)
      z: [].fill(0,13)
    width: [w,w+1*t,w+2*t,w+2.5*t,w+2*t,w+1*t,w,w-1*t,w-2*t,w-2.5*t,w-2*t,w-1*t,w]
    height: [l,l+1*t,l+2*t,l+2.5*t,l+2*t,l+1*t,l,l-1*t,l-2*t,l-2.5*t,l-2*t,l-1*t,l]
    vertical: v
    texture: tx
    angle: a   
ring2 = (x,y,z,s,w,l,h,v,t,a) ->
  return k =    
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,14)
      y: [-10.5,-12.5,-7.5,-2,2,7.5,13.5,13.5,13.5,7.5,0,-7.5,-10.5,-13.5].div(2).mult(w)
      z: [].fill(0,14)
    width: [0,21,21,21,21,21,21,21,15,13,12,13,15,17].add(-9).mult(l)
    height: [0,11,11,11,11,11,11,11,6,4,3,4,6,8].mult(h)
    vertical: v
    texture: t
    angle: a   
hub = (x,y,z,s,w,h,v,a,t) ->
  return k =
    section_segments: s
    offset:
      x: x 
      y: y
      z: z
    position:
      x: [0,0,0,0,0,0,0,0]
      y: [0,9,7,7,10,6,7].div(10).mult(h)
      z: [0,0,0,0,0,0,0,0]
    width: [18,15,13,12,10,2,0].div(10).mult(w)
    height: [18,15,13,12,10,2,0].div(10).mult(w)
    texture: t     
    vertical: v     
    angle: a        
t = 20
return model =
  name: "Ragnarok"
  level: 6
  model: 2
  size: 1.7
  next: [701,702]
  specs:
    shield:
      capacity: [300,400]
      reload: [6,8]
    generator:
      capacity: [200-50,300-50]
      reload: [175,225]
    ship:
      mass: 250
      speed: [80,95]
      rotation: [45,70]
      acceleration: [85,110]
      dash:
        rate: 0.01
        burst_speed: [80,95]
        speed: [80,95]
        acceleration: [85,110]
        initial_energy: [.01,.01]
        energy: [.01,.01]      
  bodies:
    ring: ring2(13,-130,1,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)
    ring2: ring2(13,-115,2,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    ring3: ring2(13,-100,2,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    disc4: ring2(13,-85,2,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0) 
    disc5: ring2(13,-70,2,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    disc6: ring(25,-56.5,-3,[45,135,225,315],14,11,1,0.5,false,[4,17,4,4,17,4],0)
    disc7: ring2(9,-40,20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc8: ring2(9,-20,20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc9: ring2(9,0,20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc10: ring2(9,-40,-20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc11: ring2(9,-20,-20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc12: ring2(9,0,-20,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc13: ring2(0,-63,18,6,.5,1.1,1.2,false,[3,3,3,3,63,63],180)      
    disc14: ring2(0,-77,18,6,.5,1.1,1.2,false,[3,3,3,3,63,63],180)      
    disc15: ring2(0,-91,18,6,.5,1.1,1.2,false,[3,3,3,3,63,63],180)      
    disc16: ring2(0,-106,18,6,.5,1.1,1.2,false,[3,3,3,3,63,63],180)      
    hub: hub(24,6,122,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17]) 
    hub2: hub(24,6,107,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])     
    hub3: hub(24,6,92,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])   
    hub4: hub(24,6,77,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])  
    hub5: hub(24,6,65,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])  
    hub6: hub(24,6,134,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])   
    hub7: hub(0,25,40,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17])     
    hub8: hub(0,25,20,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17])     
    hub9: hub(0,25,0,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17]) 
    hub10: hub(55,20,-126,[40,45,50,130,135,140,220,225,230,310,315,320],16,10,true,0,[18,17,17,18,18,17])     
    hub11: hub(-35,126,0,[40,45,50,130,135,140,220,225,230,310,315,320],16,10,!true,90,[18,17,17,18,18,17])     
    main:
      section_segments: 6
      offset:
        x: 0
        y: -160-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,-10,-10,30,70,120,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,19,20,30,30,30,0]
      height: [0,4,5,20,25,25,0]
      texture: [15,17,4,3,8,17]
      propeller: true 
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -160-t
        z: 15
      position:
        x: [0,0,0,0,0]
        y: [0,30,70,120,115]
        z: [-8,-1,0,0,0]
      width: [3,11,14,14,0]
      height: [0,10,15,15,0]
      texture: [9,9,4]              
    cockpit_shield:
      section_segments: [0,60,120,180]
      offset:
        x: -12
        y: -110
        z: 12
      position:
        x: [2,2,0,0,0,0,0]
        y: [-40,-38,0,38+6,46,50,50]
        z: [0,1,0,0,0,0,0]
      width: [0,5,10,10,10,10,0]
      height: [0,5,14,14,14,14,0]
      texture: [17.3,1,18,63,4,63]     
    cockpit_shield2:
      section_segments: [0,60,120,180]
      offset:
        x: -11.95
        y: -110
        z: 12
      position:
        x: [2,2,0,0,0,0,0]
        y: [-40,-38,0,38,40,50,50]
        z: [0,1,0,0,0,0,0]
      width: [0,5,10,10,10,10,0]
      height: [0,5,14,14,14,14,0]
      texture: [63]           
    cannons:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -160-t
        z: -5
      position:
        x: [-10,-10,-10,-3,-3,-3,-3,-3]
        y: [20,11,10,40,70,120,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,4,5,10,10,10,0]
      height: [0,4,5,15,15,15,0]
      texture: [17,17,3,2,2,2,17]
      laser:
        damage: [40,57]
        rate: .5
        type: 1
        speed: [120,160]
        number: 1
        error: 0
    tong_joints:
      section_segments: 8
      offset:
        x: 73-20+8.8
        y: 0-t
        z: 0
      position:
        x: [-14,-14,-25,-15,0,0.6,0,0]
        y: [-120,-120,-40,-30,150-50,170-50,170-50]
        z: [-5,-5,-3.5,0,0,0,0,0]
      width: [0,7,7,7,7,4,0]
      height: [0,10,10,25,30,30,0]
      texture: [4,63,63]    
      angle: 10
    tong_joints_deco:
      section_segments: 8
      offset:
        x: 73-20+8.8-21.8
        y: 0-t-30
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(1)
      texture: [17,[15],17]    
      angle: 17  
    tong_joints_deco2:
      section_segments: 8
      offset:
        x: 73-20+8.8-27.7
        y: 0-t-50
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(0)
      texture: [17,[15],17]    
      angle: 17   
    tong_joints_deco3:
      section_segments: 8
      offset:
        x: 73-20+8.8-33.6
        y: 0-t-70
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(-1)
      texture: [17,[15],17]    
      angle: 17      
    shields:
      section_segments: 12
      offset:
        x: 84-20
        y: -60
        z: -195+50+t
      position:
        x: [10,10,20,25,20,10,10]
        y: [20,20,40,60,80,100,100]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,50,50,50,50,50,0]
      vertical:true
      angle: 0
      texture: [3,8,8,8,8,3]
    shields_deco:
      section_segments: 6
      offset:
        x: 85-20
        y: -60
        z: -175+50+t
      position:
        x: [10,10,20,25,20,10,10]
        y: [20,20,40,60,80,100,100]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,50,50,50,50,50,0].div(4)
      vertical: true
      texture: [2.9,63,63,63,63,2.9] 
    shields_deco2:
      section_segments: 6
      offset:
        x: 85-20
        y: -60
        z: -215+50+t
      position:
        x: [10,10,20,25,20,10,10]
        y: [20,20,40,60,80,100,100]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,50,50,50,50,50,0].div(4)
      vertical: true
      texture: [2.9,63,63,63,63,2.9]   
    shields_deco3:
      section_segments: 12
      offset:
        x: 84-18
        y: -60+30
        z: -195+50+t
      position:
        x: [10,10,20,25,20,10,10]
        y: [20,20,40,60,80,100,100].div(2)
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,50,50,50,50,50,0].div(2)
      vertical: true
      angle: 0
      texture: [63]      
    joint:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-48,-48,-10,0,10,48,48]
        z: [0,0,20,20,20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 90
      texture: [13,13,3,3,13,13]     
    joint2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,20,20,20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      angle: 90
      texture: [13,13,3,3,13,13]      
    joint3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-48,-48,-10,0,10,48,48]
        z: [0,0,-20,-20,-20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]     
    joint4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,-20,-20,-20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]     
    joint5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,20,20,20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture:[13,13,3,3,13,13]     
    joint6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,-20,-20,-20,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]       
    propeller1:
      section_segments: 8
      offset:
        x: 88-20
        y: 150-50-t
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0,90,90,94,85]
        z: [0,0,0,0,0,0]
      width: [0,14,14,14,13,0]
      height: [0,14,14,14,13,0]
      propeller: true
      texture: [12,13,13,17,17]
    propeller2:
      section_segments: 8
      offset:
        x: 88-20
        y: 150-50-t
        z: -12
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0,90,90,94,85]
        z: [0,0,0,0,0,0]
      width: [0,14,14,14,13,0]
      height: [0,14,14,14,13,0]
      propeller: true
      texture: [12,13,13,17,17]    
    propeller3:
      section_segments: 8
      offset:
        x: 62-20
        y: 150-50-t
        z: 12
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0,90,90,94,85]
        z: [0,0,0,0,0,0]
      width: [0,14,14,14,13,0]
      height: [0,14,14,14,13,0]
      propeller: true
      texture: [12,13,13,17,17]
    propeller4:
      section_segments: 8
      offset:
        x: 62-20
        y: 150-50-t
        z: -12
      position:
        x: [0,0,0,0,0,0]
        y: [-4,0,90,90,94,85]
        z: [0,0,0,0,0,0]
      width: [0,14,14,14,13,0]
      height: [0,14,14,14,13,0]
      propeller: true
      texture: [12,13,13,17,17]  
    propeller_band:
      section_segments: [30,60,120,150,210,240,300,330]
      offset:
        x: 75-20
        y: 172-50-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-4.5,-7,-7,-4.5,4.5,7,4.5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [20,20,22,25,27,27,25,22,20,20].add(7)
      height: [20,20,22,25,27,27,25,22,20,20].add(7)
      texture: [7]
    propeller_band2:
      section_segments: [30,60,120,150,210,240,300,330]
      offset:
        x: 75-20
        y: 220-50-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-4.5,-7,-7,-4.5,4.5,7,4.5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [20,20,22,25,27,27,25,22,20,20].add(7)
      height: [20,20,22,25,27,27,25,22,20,20].add(7)
      texture: [7]  
    propeller_front:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -95+20
        y: 150-50-t
        z: 0
      position:
        x: [10,10,10,-5,-10,-10]
        y: [-4,0,20,40,42,42]
        z: [0,0,0,0,0,0]
      width: [0,14,14,14,13,0]
      height: [0,18,18,18,17,0]
      angle:90
      texture: [7]        
    cannon_rear:
      section_segments: 12
      offset:
        x: 0
        y: -60-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60*1.5,-75*1.5,-60*1.5,-62*1.5,-63*1.5,-60*1.5,-45*1.5,-47*1.5,-49*1.5,-45*1.5,-30*1.5,-33*1.5,-35*1.5,-30*1.5,-15*1.5,-18*1.5,-20*1.5,-15*1.5,0*1.5]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10]
      height: [0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10]
      angle: 180
      propeller: false
      texture: [4,4,8,13,17,4,2,2,17,4,2,2,17,4,2,2,17,4]      
    disc:
      section_segments: 6
      offset:
        x: 0
        y: -37-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-5,-3,-3,3,3,5,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,25,25,25,25,22,22,22].mult(1.1)
      height: [22,22,22,25,25,25,25,22,22,22].mult(1.2)
      texture: [18,18,18,18,18,17]   
    backrecoil:
      section_segments: 12
      offset:
        x: 55
        y: 170
        z: 0
      position:
        x: [1]
        y: [1]
        z: [1]
      width: [1]
      height: [1]
      angle: 180
      laser:
        damage: [25,35]
        rate: 6
        type: 2
        speed: [160,180]
        number: 1
        error: 2
        recoil: 60
