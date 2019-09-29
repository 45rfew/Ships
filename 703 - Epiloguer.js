a = 2
b = 2
c = 0.4
a1 = 2
b1 = 2
s = 1
s1 = 1
d = -4
f=-47
return model =
  name: 'Epiloguer'
  level: 7
  model: 3
  size: 2
  zoom:0.9
  specs:
    shield:
      capacity: [780,780]
      reload: [19,19]
    generator:
      capacity: [950,950]
      reload: [220,220]
    ship:
      mass: 600
      speed: [135,135]
      rotation: [80,80]
      acceleration: [70,70]  
  bodies:
    main_body:
      section_segments: 12
      offset:
        x: 0
        y: -47-f
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-180,-125,-110,-90,-68,-50,2,22,90,105,90]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,23,29,45,47,0,0,44,60,50,0]
      height: [0,15,15,25,30,0,0,29,28,15,0]
      texture: [4,4,8,3,13,1,13,2,3,13]
      propeller:false 
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -100-f
        z: 18
      angle: 180
      position:
        x: [0,0,0,0,0]
        y: [10,40,66,84,95]
        z: [-8,-3,-7,-7,-10]
      width: [30-17,35-17,30-17,23-17,0]
      height: [20-15,30-15,30-15,23-15,0]
      texture: [9]
      propeller: false      
    main_body_sides:
      section_segments: [240,270,300,330,335]#[60,90,120,150]
      offset:
        x: 0
        y: -47-f
        z: 0
      position:
        x: [0,0,0,0]
        y: [-70+2,-70+2,22,22]
        z: [0,0,0,0]
      width: [0,-47,-44,0]
      height: [0,-30,-29,0]
      texture: [3]
      propeller:false   
    main_body_sides2:
      section_segments: [205,210,240,270,300]
      offset:
        x: 0
        y: -47-f
        z: 0
      position:
        x: [0,0,0,0]
        y: [-70,-70,22,22]
        z: [0,0,0,0]
      width: [0,47,44,0]
      height: [0,30,29,0]
      texture: [3]
      propeller:false 
    main_body_rail:
      section_segments: 8
      offset:
        x: 40
        y: -115-f
        z: 15
      position:
        x: [0,0,0,-2]
        y: [-0.3,60,60,90]
        z: [-1.3,0,0,-2]
      width: [1,1,1,1]
      height: [2,2,2,2]
      texture: [2]
      propeller: false
    disc:
      section_segments: 34
      offset:
        x: 0
        y: 3-f
        z: 10-6
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-10,-10,-10,10,10,10,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [25,25,25,35,35,35,35,25,25,25]
      height: [25,25,25,35,35,35,35,25,25,25]
      texture: [2.4]
      propeller: false
      angle: [90] 
    reactor:
      section_segments: 3
      angle: 0
      offset:
        x: 1
        y: -71-f
        z: 3
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-68*c,-65*c,-60*c,-55*c,-50*c,-45*c,-40*c,-35*c,-30*c,-25*c,-20*c,-15*c,-10*c,-5*c,0,5*c,10*c,15*c,20*c,25*c,30*c,35*c,40*c,45*c,50*c,55*c,60*c,65*c,68*c]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,26*c,36*c,43*c,49*c,54*c,57*c,60*c,63*c,65*c,67*c,68*c,69*c,69.8*c,70*c,69.8*c,69*c,68*c,67*c,65*c,63*c,60*c,57*c,54*c,49*c,43*c,36*c,26*c,0]
      height: [0,26*c,36*c,43*c,49*c,54*c,57*c,60*c,63*c,65*c,67*c,68*c,69*c,69.8*c,70*c,69.8*c,69*c,68*c,67*c,65*c,63*c,60*c,57*c,54*c,49*c,43*c,36*c,26*c,0]
      propeller: true
      texture: [17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111,17,111] 
    grid1:
      section_segments: 6
      offset:
        x: 10
        y: -115-f
        z: -25
      position:
        x: [-20/b,20/b,-20/b,20/b,-20/b,10/b,0,0,0,0,0,0]
        y: [0,40/b,80/b,120/b,160/b,190/b]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [3/a,3/a,3/a,3/a,3/a,3/a]
      height: [2/a,2/a,2/a,2/a,2/a,2/a]
      texture: [3.5]
    grid2:
      section_segments: 6
      offset:
        x: 10
        y: -115-f
        z: -25
      position:
        x: [20/b,-20/b,20/b,-20/b,20/b,-10/b,0,0,0,0,0]
        y: [0,40/b,80/b,120/b,160/b,190/b]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [3/a,3/a,3/a,3/a,3/a,3/a]
      height: [2/a,2/a,2/a,2/a,2/a,2/a]
      texture: [3.5]  
    grid3:
      section_segments: 6
      offset:
        x: 30
        y: -115-f
        z: 24
      position:
        x: [-20/b1,20/b1,-20/b1,20/b1,-20/b1,10/b1,0,0,0,0,0,0]
        y: [0,40/b1,80/b1,120/b1,160/b1,190/b1]
        z: [0,-10*s,0,-10*s,0,-10*s,0,-10*s,0,-10*s,0,-10*s,0,-10*s]
      width: [3/a1,3/a1,3/a1,3/a1,3/a1,3/a1]
      height: [2/a1,2/a1,2/a1,2/a1,2/a1,2/a]
      texture: [3.5]
    grid4:
      section_segments: 6
      offset:
        x: 30
        y: -115-f
        z: 24
      position:
        x: [20/b1,-20/b1,20/b1,-20/b1,17/b1,-10/b1,0,0,0,0,0]
        y: [0,40/b1,80/b1,120/b1,160/b1,190/b1]
        z: [-10*s,0,-10*s,0,-10*s,-3,-10*s,0,-10*s,0,-10*s,0,-10*s,0]
      width: [3/a1,3/a1,3/a1,3/a1,3/a1,3/a1]
      height: [2/a1,2/a1,2/a1,2/a1,2/a1,2/a1] 
      texture: [3.5]      
    grid5:
      section_segments: 6
      offset:
        x: 10
        y: -115-f
        z: 34
      position:
        x: [-20/b1,20/b1,-20/b1,20/b1,-20/b1,10/b1,0,0,0,0,0,0]
        y: [0,40/b1,80/b1,120/b1,160/b1,190/b1]
        z: [d,-10*s1,d,-10*s1,d,-10*s1,d,-10*s1,d,-10*s1,d,-10*s1,d,-10*s1]
      width: [3/a1,3/a1,3/a1,3/a1,3/a1,3/a1]
      height: [2/a1,2/a1,2/a1,2/a1,2/a1,2/a]
      texture: [3.5]
    grid6:
      section_segments: 6
      offset:
        x: 10
        y: -115-f
        z: 34
      position:
        x: [20/b1,-20/b1,20/b1,-20/b1,20/b1,-10/b1,0,0,0,0,0]
        y: [0,40/b1,80/b1,120/b1,160/b1,190/b1]
        z: [-10*s1,d,-10*s1,d,-10*s1,-3+d,-10*s1,d,-10*s1,d,-10*s1,d,-10*s1,d]
      width: [3/a1,3/a1,3/a1,3/a1,3/a1,3/a1]
      height: [2/a1,2/a1,2/a1,2/a1,2/a1,2/a1] 
      texture: [2.5]  
    cannons_main:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 53
        y: -193-f
        z: 8
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,0,30,35,45,47,74,76,97,102,173]
        z: [-17,-17,-17,-10,-10,-10,-11,-10,-10,-10,-10,-10]
      width: [0,5+1.5,5+1.5,7,7,0,0,4+3,4+3,7+3,7+3]
      height: [0,5,5,8,10,0,0,10,10,8,8]
      texture: [17,13,4,8,18,1,18,7,7,7,8]
      propeller: false   
      laser:
        damage: [20,20]
        rate: 1
        recoil:20
        type: 1
        speed: [216,216]
        number: 20
        error: 5      
    joins:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 53
        y: -143.5-f
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-10,-5,0,5,10,15,20,25,30,35,40]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1,5,1,5,1,5,1,5,1,0]
      height: [0,1,5,1,5,1,5,1,5,1,0]
      texture: [17,18,17,18,17,18,17,18,17,18]
      propeller: false 
    cannon_joint:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 53
        y: -13.5
        z: 137+5+f
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19,0,0,5,5,19,19]
        z: [0,0,0,0,0,0,-5,-5,-5,-5,0,0,-10,-10,-10,-10,0,0,-15,-15,-15,-15,0,0,-20,-20,-20,-20]
      width: [0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0,0,0,0,7,7,0]
      height: [0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0,0,0,0,1.3,1.3,0]
      texture: [17,18,17,18,17,18,17,18,17,18,17,18,1,18,17,18,17,18,17,18,17,18,17,18,17,18,17,18]
      propeller: false 
      vertical:true
    cannon_joint_sides:
      section_segments: [80,90,100]
      offset:
        x: 13.5
        y: -148-f
        z: -2
      position:
        x: [53,53,53,53]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false         
    cannon_joint_sides2:
      section_segments: [-100,-90,-80]
      offset:
        x: 1.5
        y: -148-f
        z: -2
      position:
        x: [53-15,53-15,53-15,53-15]
        y: [-0.3,-0.3,31,31]
        z: [0,0,0,0]
      width: [8,8,8,8]
      height: [0,42,42,0]
      texture: [3]
      propeller: false               
    rear_cannons:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 53+10
        y: -28-f
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,30]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false  
    rear_cannons2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 53
        y: -28-f
        z: -3
      position:
        x: [-5,0,0,0,0]
        y: [-40,-20,0,10,30]
        z: [0,0,10,0,0]
      width: [4,4,4,4,4]
      height: [5,5,5,5,5]
      texture: [3,18,4,8,9]
      propeller: false        
    rear_propeller:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 57.5
        y: -8-f
        z: 1.5
      position:
        x: [0,0,0,0,10,0]
        y: [-20,-20,0,10,30,20]
        z: [0,0,0,0,0,0]
      width: [0,12,13,23,15,0]
      height: [5,12,12,12,5,0]
      texture: [3,13,3,4,13]
      propeller: false        
    propeller:
      section_segments: 10
      offset:
        x: 0
        y: 70-f
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [40]
      height: [10]
      texture: [1]
      propeller: true   
    propeller2:
      section_segments: 10
      offset:
        x: 8
        y: 70-f
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [10]
      texture: [1]
      propeller: true   
    propeller3:
      section_segments: 10
      offset:      
        x: 65.5
        y: 48-f
        z: 1.5
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [5]
      texture: [1]
      propeller: true       
  wings:
    outer:
      offset:
        x: 37+10-4
        y: -115-f
        z: 9
      length: [0,32,22,22,22,38]
      width: [165,135,146,332,167,122,35]
      angle: [15,-35,12,-28,-8,-8]
      position: [84,84,54,47,79,70,155]
      texture: [4,3,4,4,1,8]
      doubleside: true
      bump:
        position: 30
        size: 4
    inner:
      offset:
        x: -97+4
        y: -40-f
        z: 1
      length: [12]
      width: [215,110]
      angle: [0]
      position: [20,0]
      texture: [63,63]
      doubleside: true
      bump:
        position: 30
        size: 4