a = 2
bb = 1.1
s = 3
b = 0.18
q = 0.2 
c = 1.3
t = -75
s1 = 6
bc = 0.13
model =
  name: 'Fergus'
  level: 5
  model: 2
  size: 1.8
  specs:
    shield:
      capacity: [250,320]
      reload: [10,20]
    generator:
      capacity: [350,550]
      reload: [200,350]
    ship:
      mass: 400
      speed: [100,120]
      rotation: [90,130]
      acceleration: [180,200]
      dash:
        rate: 0.5
        burst_speed: [180,200]
        speed: [140,180]
        acceleration: [70,70]
        initial_energy: [25,25]
        energy: [0.01,0.01]        
  bodies:
    main:
      section_segments: 10
      offset:
        x: 0
        y: 15
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-105,-100,-90,-20,10,30,55,75,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,8,10,20,20,20,18,15,0]
      height: [0,6*bb,9*bb,14*bb,17*bb,20*bb,20*bb,18*bb,0]
      propeller: true
      texture: [2,2,2,2,2,2,13,18]
    cockpit:
      section_segments: 8
      offset:
        x: 0
        y: -80
        z: 5
      position:
        x: [0,0,0,0,0,0]
        y: [10,40,80,130,150,150]
        z: [5.3,3,0,5,5,0]
      width: [3,8,12,12,12,0]
      height: [0,10,15,15,15,0]
      texture: [9,9,4]        
    claws:
      section_segments: [35,45,55,90,125,135,145,215,225,235,270,305,315,325]
      offset:
        x: -50
        y: 130
        z: 0
      position:
        x: [-30,-20,20,35,40,35,10,-50,-50]
        y: [-105,-100,-70,-40,-10,20,50,90,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,20,25,10]
      height: [0,5/a,15/a,16/a,15/a,15/a,13/a,10/a,10/a]
      texture: [63]
      angle:180
    hole:
      section_segments:[40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x:60
        y:105
        z:0
      position:
        x:[0,10,7,5,6,6,6,0] 
        y:[20/s,0,15/s,165/s,180/s,180/s,100/s,10/s]
      width:[0,75/s,80/s,80/s,80/s,70/s,70/s,0]
      height:[0,35/s,40/s,40/s,40/s,30/s,20/s,0]
      texture:[18,7,2,7,7,17,12]      
      angle:180
    hole2:
      section_segments:[40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x:40
        y:240-4
        z:0
      position:
        x:[0,0,0,0,0,0,0,0] 
        y:[20/s1,0,15/s1,165/s1,180/s1,180/s1,180/s1,100/s1,10/s1]
      width:[0,75/s1,80/s1,80/s1,80/s1,80/s1,70/s1,70/s1,0]
      height:[0,35/s1,40/s1,40/s1,40/s1,0,30/s1,20/s1,0]
      texture:[18,7,2,7,7,7,12]      
      angle:180      
    star1:
      section_segments: 3
      angle: 0
      offset:
        x: -55
        y: 10
        z: -75
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*b*q,-65*b*q,-60*b*q,-55*b*q,-50*b*q,-45*b*q,-40*b*q,-35*b*q,-30*b*q,-25*b*q,-20*b*q,-15*b*q,-10*b*q,-5*b*q,0,5*b*q,10*b*q,15*b*q,20*b*q,25*b*q,30*b*q,35*b*q,40*b*q,45*b*q,50*b*q,55*b*q,60*b*q,65*b*q,68*b*q]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*b,36*b,43*b,49*b,54*b,57*b,60*b,63*b,65*b,67*b,68*b,69*b,69.8*b,70*b,69.8*b,69*b,68*b,67*b,65*b,63*b,60*b,57*b,54*b,49*b,43*b,36*b,26*b,0]
      height: [0,26*b*c,36*b*c,43*b*c,49*b*c,54*b*c,57*b*c,60*b*c,63*b*c,65*b*c,67*b*c,68*b*c,69*b*c,69.8*b*c,70*b*c,69.8*b*c,69*b*c,68*b*c,67*b*c,65*b*c,63*b*c,60*b*c,57*b*c,54*b*c,49*b*c,43*b*c,36*b*c,26*b*c,0]
      vertical:true
      texture: [111,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,16.6]
    star2:
      section_segments: 3
      angle: 0
      offset:
        x: 55
        y: 10
        z: -75
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*bc*q,-65*b*q,-60*b*q,-55*b*q,-50*b*q,-45*b*q,-40*b*q,-35*b*q,-30*b*q,-25*b*q,-20*b*q,-15*b*q,-10*b*q,-5*b*q,0,5*b*q,10*b*q,15*b*q,20*b*q,25*b*q,30*b*q,35*b*q,40*b*q,45*b*q,50*b*q,55*b*q,60*b*q,65*b*q,68*b*q]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*b,36*b,43*b,49*b,54*b,57*b,60*b,63*b,65*b,67*b,68*b,69*b,69.8*b,70*b,69.8*b,69*b,68*b,67*b,65*b,63*b,60*b,57*b,54*b,49*b,43*b,36*b,26*b,0]
      height: [0,26*b*c,36*b*c,43*b*c,49*b*c,54*b*c,57*b*c,60*b*c,63*b*c,65*b*c,67*b*c,68*b*c,69*b*c,69.8*b*c,70*b*c,69.8*b*c,69*b*c,68*b*c,67*b*c,65*b*c,63*b*c,60*b*c,57*b*c,54*b*c,49*b*c,43*b*c,36*b*c,26*b*c,0]
      vertical:true
      texture: [111,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,16.6]
    star3:
      section_segments: 3
      angle: 0
      offset:
        x: -40+0
        y: 10-4
        z: -225+4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*bc*q,-65*b*q,-60*b*q,-55*b*q,-50*b*q,-45*b*q,-40*b*q,-35*b*q,-30*b*q,-25*b*q,-20*b*q,-15*b*q,-10*b*q,-5*b*q,0,5*b*q,10*b*q,15*b*q,20*b*q,25*b*q,30*b*q,35*b*q,40*b*q,45*b*q,50*b*q,55*b*q,60*b*q,65*b*q,68*b*q]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*bc,36*bc,43*bc,49*bc,54*bc,57*bc,60*bc,63*bc,65*bc,67*bc,68*bc,69*bc,69.8*bc,70*bc,69.8*bc,69*bc,68*bc,67*bc,65*bc,63*bc,60*bc,57*bc,54*bc,49*bc,43*bc,36*bc,26*bc,0]
      height: [0,26*bc,36*bc,43*bc,49*bc,54*bc,57*bc,60*bc,63*bc,65*bc,67*bc,68*bc,69*bc,69.8*bc,70*bc,69.8*bc,69*bc,68*bc,67*bc,65*bc,63*bc,60*bc,57*bc,54*bc,49*bc,43*bc,36*bc,26*bc,0]
      vertical:true
      texture: [111,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,16.6]
    star4:
      section_segments: 3
      angle: 0
      offset:
        x: 40-1
        y: 10-4
        z: -225+4
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*bc*q,-65*bc*q,-60*bc*q,-55*bc*q,-50*bc*q,-45*bc*q,-40*bc*q,-35*bc*q,-30*bc*q,-25*bc*q,-20*bc*q,-15*bc*q,-10*bc*q,-5*bc*q,0,5*bc*q,10*bc*q,15*bc*q,20*bc*q,25*bc*q,30*bc*q,35*bc*q,40*bc*q,45*bc*q,50*bc*q,55*bc*q,60*bc*q,65*bc*q,68*bc*q]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*bc,36*bc,43*bc,49*bc,54*bc,57*bc,60*bc,63*bc,65*bc,67*bc,68*bc,69*bc,69.8*bc,70*bc,69.8*bc,69*bc,68*bc,67*bc,65*bc,63*bc,60*bc,57*bc,54*bc,49*bc,43*bc,36*bc,26*bc,0]
      height: [0,26*bc,36*bc,43*bc,49*bc,54*bc,57*bc,60*bc,63*bc,65*bc,67*bc,68*bc,69*bc,69.8*bc,70*bc,69.8*bc,69*bc,68*bc,67*bc,65*bc,63*bc,60*bc,57*bc,54*bc,49*bc,43*bc,36*bc,26*bc,0]
      vertical:true
      texture: [111,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,16.6]
    cannon:
      section_segments: 8
      offset:
        x: 10
        y: 30
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-37,-30,-25,0,25,30,35,40,40]
        z: [0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,3,3,3,3,3,3,3,3,3,3,0]
      height: [0,3,3,3,3,3,3,3,3,3,0]
      angle: 0
      texture: [16.9,5,4,11,17,2,11,4,4]  
      laser:
        damage: [100,180]
        rate: 0.5
        type: 1
        speed: [120,150]
        number: 1      
    cannon2:
      section_segments: 8
      offset:
        x: 10
        y: 42.5
        z: 16-1
      position:
        x: [0,0,0,0]
        y: [-12.5,-12.5,12.5,12.5]
        z: [0,2.01,0,0]
      width: [0,3,3,0]
      height: [0,3,3,0]
      angle: 180
      texture: [17]       
    cannon3:
      section_segments: 8
      offset:
        x: 20
        y: 5
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-37,-30,-25,20,40,40,35,40,40]
        z: [0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      height: [0,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      angle: 0
      texture: [16.9,5,4,11,17,7,11,4,4]    
      laser:
        damage: [13,20]
        rate: 3
        type: 2
        speed: [200,230]
        number: 1     
    cannon4:
      section_segments: 8
      offset:
        x: 40
        y: 220
        z: 1
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [0,0,0,0,0,0,0,0,0,0,0]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      height: [0,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      angle: 180
      texture: [16.9,5,4,11,17,7,11,4,4]    
      laser:
        damage: [20,40]
        rate: 10
        type: 2
        recoil:140
        speed: [100,180]
        number: 1         
    wings_things:
      section_segments: 8
      offset:
        x: -85
        y: 120
        z: 5
      position:
        x: [0,1,0,1,2,4,0]
        y: [-12,-12+2,-6+2,0+2,6+2,12+2,12+4]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,2,2,2,2,2,0]
      angle: -20
      texture: [5]    
    wings_things2:
      section_segments: 8
      offset:
        x: -80
        y: 180
        z: 5
      position:
        x: [0,1,1,1,2,4,0]
        y: [-12,-12+2,-6+2,0+2,6+2,12+2,12+4]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,2,2,2,2,2,0]
      angle: 19
      texture: [5]       
    end_bit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 50
        y: 222.5-2
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,-9,0,9,18,18]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,6,8,10,8,6,0]
      angle: 0
      texture: [1]
    end_bit2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 222.5-2
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,-9,0,9,18,18]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,6,8,10,8,6,0]
      angle: 0
      texture: [1]                   
    f:
      section_segments: 8
      offset:
        x: 0
        y: 140
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [20]
      propeller:true
    f3:
      section_segments: 8
      offset:
        x: 50
        y: 100
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [17]
      height: [5]
      propeller:true  
      
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;      
