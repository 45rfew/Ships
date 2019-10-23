m = 50
n = 0.4
r = -290
a = 3.5
b = 220
c = 30
f = 16
model =
  name: "Raigeki"
  level: 7
  model: 4
  size: 4
  zoom: 0.9
  specs:
    shield:
      capacity: [750,750]
      reload: [20,20]
    generator:
      capacity: [2300,2300]
      reload: [2300,2300]
    ship:
      mass: 500
      speed: [120,120]
      rotation: [80,80]
      acceleration: [50,50]
  bodies:
    lights:
      section_segments: [90,180,270,360]
      offset:
        x: 0.01
        y: -135
        z: 0
      position:
        x: [0,18.5,10,0,0]
        y: [-59,-59,-39,10,10]
        z: [0,0,0,0,0]
      width: [0,0.5,0.5,0.4,0]
      height: [0,0.2,0.2,0.2,0]
      texture: [17]   
      angle: 180    
    lights1:
      section_segments: [90,180,270,360]
      offset:
        x: 0.01
        y: -135
        z: 0
      position:
        x: [11,12.9,6.7,0,0]
        y: [-59,-59,-39,10,10]
        z: [0,5.4,5.3,0,0]
      width: [0,0.5,0.5,0.4,0]
      height: [0,1,1,0.2,0]
      texture: [17]   
      angle: 180
    lights2:
      section_segments: [90,180,270,360]
      offset:
        x: 13.59
        y: -56
        z: 7.2
      position:
        x: [0,0,0,0]
        y: [-20,-20,20,20]
        z: [0.5,0.5,0,0]
      width: [0,0.5,0.5,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180
    lights3:
      section_segments: [90,180,270,360]
      offset:
        x: 19
        y: -56
        z: 0
      position:
        x: [0,0,-0.9,0]
        y: [-20,-20,20,20]
        z: [0.5,0.5,0,0]
      width: [0,0.5,0.5,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180      
    lights4:
      section_segments: [90,180,270,360]
      offset:
        x: 4.7
        y: -45
        z: 10
      position:
        x: [0,-1,1.5,0]
        y: [-10,-10,5,5]
        z: [-0.4,-0.4,0,0]
      width: [0,0.5,0.5,0]
      height: [0,0.2,0.2,0]
      texture: [17]   
      angle: 180 
    lights5:
      section_segments: [90,180,270,360]
      offset:
        x: 0
        y: -42
        z: 11.35
      position:
        x: [0,0,0,0]
        y: [-6,-6,5,5]
        z: [0,0,0.4,0.4]
      width: [0,0.5,0.5,0]
      height: [0,0.5,0.5,0]
      texture: [17]   
      angle: 180       
    lights6:
      section_segments: [90,180,270,360]
      offset:
        x: 19.5
        y: -31
        z: 0
      position:
        x: [-40,-40,0,0]
        y: [-50,-50,5,5]
        z: [0,0,0.4,0.4]
      width: [0,0.5,0.5,0]
      height: [0,0.5,0.5,0]
      texture: [17]   
      angle: 180 
    lights7:
      section_segments: [90,180,270,360]
      offset:
        x: 13.5
        y: -31
        z: 8
      position:
        x: [-20,-29,0,0]
        y: [-50,-50,5,5]
        z: [0,0,0.4,0.4]
      width: [0,0.5,0.5,0]
      height: [0,0.8,0.5,0]
      texture: [17]   
      angle: 180
    lights8:
      section_segments: [90,180,270,360]
      offset:
        x: 0
        y: -31
        z: 11.4
      position:
        x: [0,0,0,0]
        y: [-50,-50,5,5]
        z: [0.2,0.2,0.4,0.4]
      width: [0,0.5,0.5,0]
      height: [0,0.8,0.5,0]
      texture: [17]   
      angle: 180    
    lights9:
      section_segments: [90,180,270,360]
      offset:
        x: 5.5
        y: -31
        z: 10
      position:
        x: [0,-4,0,0]
        y: [-50,-50,5,5]
        z: [1,1,0.4,0.4]
      width: [0,0.5,0.5,0]
      height: [0,0.8,0.5,0]
      texture: [17]   
      angle: 180          
    main:
      section_segments: 8
      offset:
        x: 0
        y: -16
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-130,-80,-60,-60,-20,-20,35,36.5,50,51.5,70,68]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,10,18.5,20,19,20,60,60,40,40,16,15]
      height: [0,8,8.5,10,11,12,12,12,20,20,15,0]
      texture: [3,2,17,8,17,4,17,63,17,18,17]
    cockpit:
      section_segments: 12
      offset:
        x: 0
        y: -60
        z: 7
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-32.5,-12.5,0,12.5,13.2,25,25,25]
        z: [0,0,0,0,0,-.5,-2,-5]
      width: [0,5,7.5,5,5,8,7.5,5]
      height: [0,7.5,10,5,5,5,5,5]
      texture: [9,9,9,17,4,63,3]
    cannons:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 50
        y: 16
        z: -9
      position:
        x: [-10,-10,-10,-10,-10,-10,-10,-10,-20,-25,-25,-25,-25,-25]
        y: [-93,-97,-92,-90,-49,-47,-45,-10,0,10,10,10,10,10]
        z: [0,0,0,0,0,0,0,0,3,3,3,3,3,3]
      width: [0,6,7,6.7,6.7,8,8,12.5,15,7,7,7,7,0,0]
      height: [0,4,5,3,3,4,5,12.5,15,7,7,7,7,0,0]
      texture: [17,16,12,1,5,17,3,4]
      laser:
        damage: [150,150]
        rate: 0.6
        type: 1
        speed: [150,150]
        recoil: 250
        number: 1
        error: 0
    cannon_deco:
      section_segments: 8
      offset:
        x: 43.5
        y: -32
        z: -7
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 189
    cannon_deco2:
      section_segments: 8
      offset:
        x: 36.5
        y: -32
        z: -7
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: -189
    cannon_deco3:
      section_segments: 8
      offset:
        x: 43.5
        y: -32
        z: -11
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: 189
    cannon_deco4:
      section_segments: 8
      offset:
        x: 36.5
        y: -32
        z: -11
      position:
        x: [0,0,0,0]
        y: [0,0,44,0]
        z: [0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1,1,0]
      texture: [17]
      angle: -189
    wire1:
      section_segments: 8
      angle: 120
      offset:
        x: 70
        y: -10
        z: 10
      position:
        x: [12,12,5,5,10,10,22,31]
        y: [-65,-64,-51.5,-38,-25,-25,-18]
        z: [-3,-3,-1,-2,-8,-8,-17]
      width: [4,4,4,4,4,4,4,4]
      height: [0,3,3,3,3,3,3,3]
      propeller: false
      texture: [17,17,12,17,12,12]
    main_engine:
      section_segments: 8
      offset:
        x: 0
        y: 605+r/a-300-b+c-f
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,50/a,90/a,130/a,156/a,160/a,200/a,150/a]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,60/a,60/a,45/a,40/a,40/a,35/a,0]
      height: [0,45/a,45/a,45/a,40/a,40/a,35/a,0]
      texture: [3.9,3.9,3.9,8,17,2.9,17]
      propeller:true
    engine_top:
      section_segments: 8
      offset:
        x: 34/a
        y: 655+r/a-300-b-f
        z: 36/a
      position:
        x: [-34/a,-34/a,-7/a,0,0,0,0,0,0,0,0]
        y: [0,10/a,50/a,80/a,85/a,90/a,145/a,150/a,170/a,200/a,100/a]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30/a,37/a,30/a,23/a,23/a,23/a,23/a,25/a,20/a,0]
      height: [0,30/a,30/a,30/a,23/a,23/a,23/a,23/a,25/a,20/a,0]
      texture: [3.9,3.9,3.9,3.9,17,18,17,2.9,2.9,16.9]
      propeller:true
    engine_bottom:
      section_segments: 8
      offset:
        x: 44/a
        y: 655+r/a-300-b-f
        z: -30/a
      position:
        x: [-34/a,-34/a,-7/a,0,0,0,0,0,0,0,0]
        y: [0,10/a,50/a,80/a,85/a,90/a,145/a,150/a,170/a,200/a,100/a]
        z: [0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,30/a,37/a,30/a,23/a,23/a,23/a,23/a,25/a,20/a,0]
      height: [0,30/a,30/a,30/a,23/a,23/a,23/a,23/a,25/a,20/a,0]
      texture: [3.9,3.9,3.9,3.9,17,18,17,2.9,2.9,16.9]
      propeller:true
    side_engine:
      section_segments: 8
      offset:
        x: 50
        y: -36
        z: 0
      position:
        x: [-40,-9,-9,-9,-9,-9]
        y: [50,80,82,120,122,110]
        z: [0,0,0,0,0,0]
      width: [8,15,15,15,13,0]
      height: [8,15,15,15,13,0]
      texture: [4,17,18,17,17]
    reactor_grid_top:
      section_segments: 6
      offset:
        x: 10
        y: -50
        z: 18
      position:
        x: [0,0,-10,10,0,0,0,0,0,0,0,0]
        y: [30,30,40,60,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [1.5,1.5,1.5,1.5,1.5,1.5]
      height: [1,1,1,1,1,1]
      texture: [2.9]
    reactor_grid_top2:
      section_segments: 6
      offset:
        x: 10
        y: -50
        z: 18
      position:
        x: [0,0,10,-10,0,0,0,0,0,0,0]
        y: [30,30,40,60,70,70]
        z: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.5,1.5,1.5,1.5]
      height: [0,1,1,1,1,1]
      texture: [2.9]
    reactor_grider:
      section_segments: 4
      offset:
        x: 22
        y: -40
        z: 18
      position:
        x: [-12,0,0,-9]
        y: [0,20,56,60]
        z: [-15,0,0,0]
      width: [2,2,2,2]
      height: [1.5,1.5,1.5,1.5]
      texture: [1.9]
    reactor_grider2:
      section_segments: 4
      offset:
        x: 22
        y: 40
        z: 18
      position:
        x: [-15,0,0,0]
        y: [0,20,56,60]
        z: [-15,0,0,0]
      width: [2,2,2,2]
      height: [1.5,1.5,1.5,1.5]
      texture: [1.9]
      angle: 180
    wingsRail:
      section_segments: 4
      offset:
        x: 0
        y: 20
        z: 18
      position:
        x: [1.5,0,0,1.5,0,0,0,0]
        y: [-18,-13,13,18]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1,1,0]
      height: [0,1.5,1.5,0]
      texture: [2]
      angle: 90
    wingsRail2:
      section_segments: 4
      offset:
        x: 0
        y: -20
        z: 18
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-22,-21.7,21.7,22]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,1.5,1.5,0]
      height: [0,1.5,1.5,0]
      texture: [2]
      angle: 90
    reactor_center:
      section_segments: 8
      offset:
        x: 0
        y: 12
        z: 0
      position:
        x: [0,0,0]
        y: [-5,-3.061616997868383e-16,5]
        z: [0,0,0]
      width: [0,8,9.797174393178826e-16]
      height: [0,8,9.797174393178826e-16]
      texture: 17
      vertical: true
    reactor:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -20
    reactor2:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -40
    reactor3:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -60
    reactor4:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -80
    reactor5:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -100
    reactor6:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -120
    reactor7:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -140
    reactor8:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: -160
    reactor9:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 0
    reactor10:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -22
    reactor11:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -42
    reactor12:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -62
    reactor13:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -82
    reactor14:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -102
    reactor15:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -122
    reactor16:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -142
    reactor17:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: -162
    reactor18:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 20
    reactor19:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 40
    reactor20:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 60
    reactor21:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 80
    reactor22:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 100
    reactor23:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 120
    reactor24:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 140
    reactor25:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 160
    reactor26:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 2
    reactor27:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 22
    reactor28:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 42
    reactor29:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 62
    reactor30:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 82
    reactor31:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 102
    reactor32:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 122
    reactor33:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 142
    reactor34:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 162
    reactor35:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -3
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [111]
      propeller: false
      angle: 177
    reactor36:
      section_segments: [30,35,60,65,210,215,240,245]
      offset:
        x: 0
        y: 0
        z: -2.5
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,-0.9,-0.9,-0.9,0.9,0.9,0.9,0,0]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      height: [18.75,18.75,18.75,21.875,21.875,21.875,21.875,18.75,18.75,18.75]
      texture: [63]
      propeller: false
      angle: 179
    propeller_main:
      section_segments: 16
      offset:
        x: 0
        y: 90
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [10]
      texture: [0]
      propeller: true
    propeller_main2:
      section_segments: 16
      offset:
        x: 40
        y: 78
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [15]
      height: [10]
      texture: [0]
      propeller: true
    mainlaser1:
      section_segments: [45,135,225,315]
      offset:
        x: 50
        y: -1050
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser2:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -100
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser3:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -150
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser4:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -200
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser5:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -250
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser6:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -300
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser7:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -350
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1,10]
      height: [1,10]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser8:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -400
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser9:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -450
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser10:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -500
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser11:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -550
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser12:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -600
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser13:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -650
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
    mainlaser14:
      section_segments: [45,135,225,315]
      offset:
        x: 30
        y: -700
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [1]
      height: [1]
      texture: [1]
      laser:
        damage: [m,m]
        rate: n
        speed: [0.01,0.01]
        number: 1
t = 20 
if(1)
  for y,v of model.bodies
    if(v.vertical)
      v.offset.z =  v.offset.z - t
    else
      v.offset.y = v.offset.y + t
  for y,v of model.wings
    v.offset.y = v.offset.y + t      
return model;        
