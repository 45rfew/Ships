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
      capacity: [350,400]
      reload: [17,22]
    generator:
      capacity: [385,485]
      reload: [175,225]
    ship:
      mass: 500
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
    main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -160-t
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [0,-10,30,70,120,100]
        z: [0,0,0,0,0,0,0]
      width: [0,20,30,30,30,0]
      height: [0,5,20,25,20,0]
      texture: [15,4,3,3,17]
      propeller: true      
    main2:
      section_segments:  [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: -160-t
        z: -5
      position:
        x: [-10,-10,-3,-3,-3,-3,-3]
        y: [20,10,40,70,120,100]
        z: [0,0,0,0,0,0,0]
      width: [0,5,10,10,10,0]
      height: [0,5,15,15,15,0]
      texture: [15,3,2,2,2,17]
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
      width: [3,8,12,12,0]
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
      angle:10
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
      angle:0
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
