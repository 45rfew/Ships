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
multiplyArray = (arr,m) ->
  k = [];
  for i in [0..arr.length-1]
    k.push(arr[i]*m)
  return k;    
dish = (xx,yy,zz,angle,seg,tx,stepAmount,step,stepunit,v) ->
  rad = []
  ypos = []
  for i in [0..stepAmount-1]
    ypos.push(-(step/stepunit*i)*(step/stepunit*i))
    rad.push(step*i)
  lastypos = ypos[ypos.length-1]
  for i in [stepAmount-1..0]
    ypos.push((ypos[i]-lastypos)*1.1+ypos[i])
    rad.push(rad[i]*1.1)
  return k = 
    section_segments: seg
    offset:
      x: xx
      y: yy
      z: zz
    position:
      x: multiplyArray(ypos,0)
      y: ypos
      z: multiplyArray(ypos,0)
    width: rad
    height: rad
    texture: tx
    angle: angle  
    vertical: v
ring = (x,y,z,s,l,w,t,tcc,v,tx,a) ->
  return k =
    section_segments: s
    offset:
      x: x
      y: y
      z: z
    position:
      x: [].fill(0,13)
      y: multiplyArray([-2.25,-1.75,-1.25,0,1.25,1.75,2.25,1.75,1.25,0,-1.25,-1.75,-2.25], t+tcc)
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
a = 7
d = 20
q = 1.5
t = 20
return model =
  name: "Ragnarok"
  level: 6
  model: 2
  size: 2
  next: [701,702]
  specs:
    shield:
      capacity: [250,320]
      reload: [17,22]
    generator:
      capacity: [385,485]
      reload: [175,225]
    ship:
      mass: 250
      speed: [110,125]
      rotation: [100,130]
      acceleration: [80,100]
      dash:
        rate: 0.5
        burst_speed: [180,220]
        speed: [140,180]
        acceleration: [70,70]
        initial_energy: [25,25]
        energy: [0.01,0.01]      
  bodies:
    #dish: dish(-25,126,0,90,26,[1,1,1,1,1,17,18,17,18],5,5,10,false)
    #dish2: dish(-53,29,-126,0,26,[1,1,1,1,1,17,18,17,18],5,5,10,true)    
    disc: ring2(12,-130,0,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)
    disc2: ring2(12,-115,0,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    disc3: ring2(12,-100,0,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    disc4: ring2(12,-85,0,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0) 
    disc5: ring2(12,-70,0,[45,135,225,315],0.5,2,1.5,false,[4,4,17,4,17,4],0)  
    disc6: ring(25,-56.5,-3,[45,135,225,315],14,11,1,0.5,false,[4,17,4,4,17,4],0)
    disc7: ring2(9,-40,15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc8: ring2(9,-20,15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc9: ring2(9,0,15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc10: ring2(9,-40,-15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc11: ring2(9,-20,-15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    disc12: ring2(9,0,-15,[40,45,50,130,135,140,220,225,230,310,315,320],.3,.75,.8,false,[4,4,17,4,17,4],90)      
    hub: hub(21,6,122,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17]) 
    hub2: hub(21,6,107,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])     
    hub3: hub(21,6,92,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])   
    hub4: hub(21,6,77,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])  
    hub5: hub(21,6,65,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])  
    hub6: hub(21,6,134,[45,135,225,315],4,4,true,0,[18,17,17,18,18,17])   
    hub7: hub(0,20,40,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17])     
    hub8: hub(0,20,20,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17])     
    hub9: hub(0,20,0,[45,135,225,315],4,3,true,0,[18,17,17,18,18,17]) 
    hub10: hub(55,20,-126,[40,45,50,130,135,140,220,225,230,310,315,320],16,10,true,0,[18,17,17,18,18,17])     
    hub11: hub(-35,126,0,[40,45,50,130,135,140,220,225,230,310,315,320],16,10,!true,90,[18,17,17,18,18,17])     
    wings_deco:
      section_segments: 8
      offset:
        x: 73-d+8.8-21.8
        y: 0-t-30
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(1)
      texture: [17,4,17]    
      angle: 17  
    wings_deco2:
      section_segments: 8
      offset:
        x: 73-d+8.8-27.7
        y: 0-t-50
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(0)
      texture: [17,4,17]    
      angle: 17   
    wings_deco3:
      section_segments: 8
      offset:
        x: 73-d+8.8-33.6
        y: 0-t-70
        z: 0
      position:
        x: [0,0,0,0]
        y: [100,100,110,110]
        z: [0,0,0,0]
      width: [0,7,7,0].add(1)
      height: [0,30,30,0].add(-1)
      texture: [17,4,17]    
      angle: 17
    main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -160-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [0,-10,-10,30,70,120,100]
        z: [0,0,0,0,0,0,0,0]
      width: [0,19,20,30,30,30,0]
      height: [0,4,5,20,25,20,0]
      texture: [15,17,4,3,3,17]
      propeller: true      
    main2:
      section_segments:  [40,45,50,130,135,140,220,225,230,310,315,320]
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
        damage: [150,200]
        rate: 0.5
        type: 1
        speed: [170,240]
        number: 1
        error: 0
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -160-t
        z: 15
      position:
        x: [0,0,0,0,0]
        y: [0,30,70,120,115]
        z: [-8,-1,0,0,0]
      width: [3,11,12,12,0]
      height: [0,10,15,15,0]
      texture: [9,9,4]         
    main_wings:
      section_segments: 8
      offset:
        x: 73-d+8.8
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
    back_wings:
      section_segments: 12
      offset:
        x: 84-d
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
    bar1:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-48,-48,-10,0,10,48,48]
        z: [0,0,15,15,15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]     
    bar2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,15,15,15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]      
    bar3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-48,-48,-10,0,10,48,48]
        z: [0,0,-15,-15,-15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]     
    bar4:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 0-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,-15,-15,-15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]     
    bar5:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,15,15,15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture:[13,13,3,3,13,13]     
    bar6:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 20-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-50,-10,0,10,50,50]
        z: [0,0,-15,-15,-15,0,0]
      width: [0,8,8,8,8,8,0]
      height: [0,8,8,8,8,8,0]
      propeller: false
      angle:90
      texture: [13,13,3,3,13,13]       
    propeller1:
      section_segments: 8
      offset:
        x: 88-d
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
        x: 88-d
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
        x: 62-d
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
        x: 62-d
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
    propeller_support1:
      section_segments: [30,60,120,150,210,240,300,330]
      offset:
        x: 75-d
        y: 172-50-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-4.5,-7,-7,-4.5,4.5,7,4.5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [20+a,20+a,22+a,25+a,27+a,27+a,25+a,22+a,20+a,20+a]
      height: [20+a,20+a,22+a,25+a,27+a,27+a,25+a,22+a,20+a,20+a]
      texture: [7]
    propeller_support2:
      section_segments: [30,60,120,150,210,240,300,330]
      offset:
        x: 75-d
        y: 220-50-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,-4.5,-7,-7,-4.5,4.5,7,4.5,0]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [20+a,20+a,22+a,25+a,27+a,27+a,25+a,22+a,20+a,20+a]
      height: [20+a,20+a,22+a,25+a,27+a,27+a,25+a,22+a,20+a,20+a]
      texture: [7]  
    propeller_front:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -95+d
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
    propeller_f:
      section_segments: 10
      offset:
        x: 10
        y: -50-t
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [15]
      propeller:true
    cannon_rear:
      section_segments: 12
      offset:
        x: 0
        y: -60-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-60*q,-75*q,-60*q,-62*q,-63*q,-60*q,-45*q,-47*q,-49*q,-45*q,-30*q,-33*q,-35*q,-30*q,-15*q,-18*q,-20*q,-15*q,0*q]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10]
      height: [0,2,3,4,6,3,4,6,8,5,6,7,11,7,8,12,15,8,10]
      angle: 180
      propeller: false
      texture: [4,4,8,13,17,4,2,2,17,4,2,2,17,4,2,2,17,4]      
    disc1:
      section_segments: 12
      offset:
        x: 0
        y: -37-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-5,-3,-3,3,3,5,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,25,25,25,25,22,22,22]
      height: [22,22,22,25,25,25,25,22,22,22]
      texture: [18]   
    disc11:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -37-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-5,-3,-3,3,3,5,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [22,22,22,25,25,25,25,22,22,22]
      height: [22,22,22,25,25,25,25,22,22,22]
      texture: [17]         
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
      angle:180
      laser:
        damage: [30,40]
        rate: 10
        type: 2
        speed: [120,140]
        number: 1
        error: 20
        recoil: 130
