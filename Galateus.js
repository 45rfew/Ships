e = 55
f = 0
return model =
  name: "Galateus"
  level: 7
  model: 1
  size: 2
  zoom: 1.2
  specs:
    shield:
      capacity: [800,800]
      reload: [23,23]
    generator:
      capacity: [2500,2500]
      reload: [620,620]
    ship:
      mass: 1300
      speed: [82,82]
      rotation: [40,40]
      acceleration: [180,180]
  bodies:
    #bridge
    bridge_main:
      section_segments: 6
      offset:
        x: 0
        y: 260+e
        z: 92+f
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-215,-208,-208,-50,-10,0,20,60,130,138,130]
        z: [0,0,0,0,-37,-37,-37,-37,-37,-37,-37]
      width: [0,55,55,55,55,55,55,55,55,55,0]
      height: [0,5,10,10,20,20,20,20,20,20,0]
      texture: [14,7,7,7,7,7,7,7,7,12.96]
    bridge_underside:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 304+e
        z: 78+f
      position:
        x: [0,0,0,0,0,0,0]
        y: [-80,-80,50,90,250,250]
        z: [-28,-28,-28,3,0,0,0]
      width: [0,65,65,65,65,0]
      height: [0,9,10,10,10,0]
      texture: [17,17,5,17]#[8.95,8.95,8.95,8.98,7]
      angle: -180
    bridge_disc:
      section_segments: 20
      offset:
        x: 0
        y: 102+f
        z: -160-e
      position:
        x: [0,0,0,0,0,0,0]
        y: [-10,-30,-10,5,5,0]
        z: [0,0,0,0,0,0,0]
      width: [0,55.55555555555555,44.44444444444444,33.33333333333333,25.925925925925924,0]
      height: [0,55.55555555555555,48.148148148148145,33.33333333333333,25.925925925925924,0]
      texture: [15.9,7,7,4,12]
      vertical: true
      angle: 0
    bridge_connecter:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -305+e
        z: 26+f
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-60,-55,-46,0,0,46,55,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [50,45,28,28,28,28,45,50]
      height: [25,20,15,15,15,15,20,25]
      texture: [12.99,12.99,8,8,8,12.99,12.99]
      angle: -90
    bridge_connecter2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -155+e
        z: 26+f
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-60,-55,-46,0,0,46,55,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [50,45,28,28,28,28,45,50]
      height: [25,20,15,15,15,15,20,25]
      texture: [12.99,12.99,8,8,8,12.99,12.99]
      angle: -90
    bridge_connecter3:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -305+e
        z: 68+f
      position:
        x: [0,0,0,0]
        y: [-50,-50,50,50]
        z: [0,0,0,0]
      width: [0,13,13,0]
      height: [0,10,10,0]
      texture: [3]
      angle: -90
    bridge_bottom:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: -100+e
        z: -60+f
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-210,-210,-210,-80,320,320,360,460,460]
        z: [-45,-35,-35,-35,-35,-35,0,0,0]
      width: [0,40,40,40,40,40,35,35,0]
      height: [0,20,20,20,20,20,20,20,0]
      texture: [3]
    bridge_bottom_front_join:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0.1
        y: -20+f
        z: 305-e
      position:
        x: [0,0,20,20,0]
        y: [-90,-90,0,50.5,50.5]
        z: [0,0,0,0,0]
      width: [0,40,40,40,0]
      height: [0,10,10,10,0]
      texture: [3]   
      vertical:true      
    bridge_bottom_joints:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -0.0001
        y: -90+e
        z: -70+f
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,25,25,25,25,25,25,25,25,25,0,0,50,50,50,50,50,50,50,50,50,0,0,75,75,75,75,75,75,75,75,75,0,0,100,100,100,100,100,100,100,100,100]
        y: [20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80]
        z: [-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23]
      width: [0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0]
      height: [0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0]
      texture: [4]
      angle: -90
    bridge_bottom_joints2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -0.0001
        y: -250+e
        z: -70+f
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,25,25,25,25,25,25,25,25,25,0,0,50,50,50,50,50,50,50,50,50]
        y: [20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80,0,0,20,25,25,50,50,50,50,80,80]
        z: [-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23,0,0,-25,-25,-25,-20,-20,-20,-20,23,23]
      width: [0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0,0,0,0,13,13,13,13,13,13,13,0]
      height: [0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0,0,0,0,15,15,15,15,15,15,15,0]
      texture: [4]
      angle: -90
    bridge_back:
      section_segments: [35,45,55,125,135,145,215,225,235,305,315,325]
      offset:
        x: 0
        y: 160+e
        z: -60+f
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-50,-47,-41,30,30,30,35,40,180,200]
        z: [0,0,0,0,0,0,0,0,15,15,15]
      width: [0,45,65,65,65,65,60,60,60,0]
      height: [0,20,26.7,26.7,26.7,26.7,23.3,23.3,23.3,0]
      angle: 0
      propeller: false
      texture: [4,3,2,2,2,3,4]
    box:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -41.5+394+e-55
        z: 16+60+f
      position:
        x: [0,0,0,0,0,0]
        y: [-30,-30,10,12.5,15,15]
        z: [0,0,0,0,0,0]
      width: [0,13,13,13,13,0]
      height: [0,5,5,5,5,0]
      texture: [1,9.96,2,3]       
    box_deco:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -75+394+5+e-55
        z: 18.8+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    box_deco2:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -74+394+5+e-55
        z: 18.7+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90      
    box_deco3:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -65+394+3+e-55
        z: 18.8+60
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    box_deco44:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -64+394+3+e-55
        z: 18.7+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90        
    box_deco4:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -55+394+1+e-55
        z: 18.8+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90
    box_deco5:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -54+394+1+e-55
        z: 18.7+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90        
    box_deco6:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -45+394-1+e-55
        z: 18.8+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [63]    
      angle: 90  
    box_deco7:
      section_segments: [45,135,225,315]
      offset:
        x: 19
        y: -44+394-1+e-55
        z: 18.7+60+f
      position:
        x: [0,0,0,0,0]
        y: [-10,-10,-7,10,10]
        z: [0,0,-0.5,-10,-10]
      width: [0,2.5,2.5,2.5,0]
      height: [0,1,1,1,0]
      texture: [5]    
      angle: 90        
    main_support2:
      section_segments: [45,135,225,315]
      offset:
        x: 0.01
        y: -90.01+403+e-55
        z: 15.01+60+f
      position:
        x: [0,0,0,0,0,0]
        y: [-25,-25,-20,0,0,0]
        z: [0,0,0,0,0,0]
      width: [0,12,12,12,12,12,0]
      height: [0,3,3,3,3,0]
      texture: [7,7,17,7,7]
      angle: 270           
    #side  
    side_walls_inner:
      section_segments: [45,135,218,225,315,322]
      offset:
        x: -70
        y: -110+e
        z: 0+f
      position:
        x: [-1,-1,0,0,0,0,-1,-1,-1]
        y: [-300,-300,-280,0,320,320,360,460,460]
        z: [0,0,0,0,0,0,-40,-50,-50]
      width: [0,10,15,15,15,10,5,5,0]
      height: [0,80,80,80,80,80,25,5,0]
      texture: [1,1,3,3]
    side_walls_inner2:
      section_segments: [45,135,210,225,315,330]
      offset:
        x: -66
        y: -110+e
        z: 15+f
      position:
        x: [0,0,1.5,1.5,1.5,1.5]
        y: [-250,-250,-210,320]
        z: [15,15,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,30,50,50,0]
      texture: [4]
      angle: 0      
    side_walls_outer:
      section_segments: [45,135,210,225,315,330]
      offset:
        x: -75
        y: -110+e
        z: -8+f
      position:
        x: [1.453,1.435,1.435,1.435,1.435,1.435]
        y: [-250,-250,320,320]
        z: [0,0,0,0,0,0]
      width: [0,10,10,10,0]
      height: [0,60,60,60,0]
      texture: [4,8]
      angle: 0
    side_wall_outer2:
      section_segments: [-10,-5,0,45,50,55,120,125,130,175,180,185]
      offset:
        x: -65
        y: 50+e
        z: 0+f
      position:
        x: [0,0,0,-20,-10,-65,-65]
        y: [-60,-60,-40,100,138,342,332]
        z: [-20,-20,-20,-20,10,5,5]
      width: [0,45,50,50,40,15,0]
      height: [0,35,35,35,30,25,0]
      texture: [15.8,0.75,7,7,7,12.2]
      angle: 10
    side_wall2d:
      section_segments: [145,150,155,240,245,250,290,295,300,385,390,395]
      offset:
        x: 78
        y: 1+f
        z: -97-e
      position:
        x: [0,0,0,-5]
        y: [-12,-12,12,12]
        z: [0,0,0,0]
      width: [0,25,25,0]
      height: [0,50,50,0]
      texture: [2]
      angle: 375
      vertical: true
    side_walls_top:
      section_segments: [35,45,55,120,135,180,225,235,305,315,325,0]
      offset:
        x: -70
        y: -106+e
        z: 69+f
      position:
        x: [4,4,3,3,3,3,10,10,10,10,10]
        y: [-304,-304,-200,0,160,320,360,480,480,505,503]
        z: [0,0,0,0,0,0,-30,-30,-30,-30,-30]
      width: [0,15,30,30,30,30,20,20,20,20,0]
      height: [0,20,20,20,20,20,20,20,20,20,0]
      texture: [1,1,7,7,7,7,7,7,7,11.91]
    side_walls_underside:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -70
        y: -110+e
        z: -80+f
      position:
        x: [0,0,0,0,0,0,15,20,20]
        y: [-170,-170,-170,80,83,310,360,450,450]
        z: [-15,-15,-15,-15,0,0,5,20]
      width: [0,25,25,25,25,25,2,2,0]
      height: [0,7,7,7,30,30,15,15,0]
      texture: [3,3,2,12,2]
    side_walls_underside_side:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: -54
        y: -110+e
        z: -80+f
      position:
        x: [0,0,0,0,0,0,0]
        y: [-170.01,-170.01,-170.01,70,73,300,300]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,0]
      texture: [3,3,8]
    side_walls_underside_wallsa:
      section_segments: [45,135,225,315]
      offset:
        x: 39.3
        y: -205+e
        z: -76+f
      position:
        x: [0,0,0,0,0,0,20,20,20,20]
        y: [-120,-120,-100,-100,0,0,-120,-120,-100,-100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0,0,0,0,5,5,0]
      height: [0,30,30,0,0,0,0,30,30,0]
      texture: [16,3,3,3,3,3,16,3]   
      angle:90    
    side_walls_underside_wallsb:
      section_segments: [45,135,225,315]
      offset:
        x: 39.3
        y: -135+e
        z: -76+f
      position:
        x: [0,0,0,0,0,0,20,20,20,20]
        y: [-120,-120,-100,-100,0,0,-120,-120,-100,-100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0,0,0,0,5,5,0]
      height: [0,30,30,0,0,0,0,30,30,0]
      texture: [16,3,3,3,3,3,16,3]   
      angle:90      
    side_walls_underside_wallsc:
      section_segments: [45,135,225,315]
      offset:
        x: 39.3
        y: -130+e+65
        z: -76+f
      position:
        x: [0,0,0,0,0,0,20,20,20,20]
        y: [-120,-120,-100,-100,0,0,-120,-120,-100,-100]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,5,5,0,0,0,0,5,5,0]
      height: [0,30,30,0,0,0,0,30,30,0]
      texture: [16,3,3,3,3,3,16,3]       
      angle:90            
    side_pipe1:
      section_segments: 8
      offset:
        x: -95
        y: -300+e
        z: 15+f
      position:
        x: [20,20,0,0,20,20,20]
        y: [-40,-40,0,230,260,260]
        z: [0,0,0,0,-40,0,0]
      width: [0,6,6,6,6,6,0]
      height: [0,6,6,6,10,6,0]
      angle: 0
      texture: [3]
    side_pipe2:
      section_segments: 8
      offset:
        x: -95
        y: -300+e
        z: -20+f
      position:
        x: [20,20,0,0,20,20,20]
        y: [-40,-40,0,180,210,210]
        z: [0,0,0,0,0,0]
      width: [0,6,6,6,6,0]
      height: [0,6,6,6,6,0]
      angle: 0
      texture: [3]
    side_pipe3:
      section_segments: 8
      offset:
        x: -95
        y: -300+e
        z: -35+f
      position:
        x: [20,20,0,0,20,20,20]
        y: [-40,-40,0,180,210,210]
        z: [0,0,0,0,0,0]
      width: [0,4,4,4,4,0]
      height: [0,4,4,4,4,0]
      angle: 0
      texture: [3]
    side_pipe4:
      section_segments: 8
      offset:
        x: -95
        y: 40+f
        z: 120-e
      position:
        x: [-20,-20,0,0,-10,-13,-13,0]
        y: [-20,-20,0,50,70,130,130]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,7,7,7,7,7,0]
      height: [0,7,7,7,7,7,0]
      angle: 180
      vertical: true
      texture: [3]
    side_pipe5:
      section_segments: 8
      offset:
        x: -70
        y: -224+e
        z: -65+f
      position:
        x: [16,16,0,0,0,0,0]
        y: [-40,-40,0,20,350,350]
        z: [0,0,0,0,0,0]
      width: [0,4,8,8,8,0]
      height: [0,4,8,8,8,0]
      angle: 0
      texture: [3]      
    side_pipe6:
      section_segments: 8
      offset:
        x: -70
        y: -224+e
        z: -85+f
      position:
        x: [16,16,0,0,0,0,0]
        y: [-40,-40,0,20,350,350]
        z: [0,0,0,0,0,0]
      width: [0,4,8,8,8,0]
      height: [0,4,8,8,8,0]
      angle: 0
      texture: [3]         
    side_barrel:
      section_segments: [45,135,225,315]
      offset:
        x: -76
        y: -70+f
        z: 75-e
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0,0,0]
      width: [0,6,6,0]
      height: [0,10,10,0]
      angle: 0
      vertical:true
      texture: [18,17,18]        
    side_barrel2:
      section_segments: [45,135,225,315]
      offset:
        x: -76
        y: -70+f
        z: 145-e
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0,0,0]
      width: [0,6,6,0]
      height: [0,10,10,0]
      angle: 0
      vertical:true
      texture: [18,17,18]        
    side_barrel3:
      section_segments: [45,135,225,315]
      offset:
        x: -76
        y: -70+f
        z: 215-e
      position:
        x: [0,0,0,0,0,0,0]
        y: [-20,-20,20,20]
        z: [0,0,0,0,0,0]
      width: [0,6,6,0]
      height: [0,10,10,0]
      angle: 0
      vertical:true
      texture: [18,17,18]           
    side_tri:
      section_segments: [235,240,245,330,335,340,380,385,390,475,480,485]
      offset:
        x: 0
        y: -75+e
        z: -35+f
      position:
        x: [0,0,0,0]
        y: [60,60,84,84]
        z: [0,0,0,0]
      width: [0,25,25,0]
      height: [0,30,30,0]
      texture: [7]
      angle: -90
    side_tri2:
      section_segments: [235,240,245,330,335,340,380,385,390,475,480,485]
      offset:
        x: 0
        y: -75+e
        z: -35+f
      position:
        x: [0,0,0,0]
        y: [-84,-84,-60,-60]
        z: [0,0,0,0]
      width: [0,25,25,0]
      height: [0,30,30,0]
      texture: [7]
      angle: -90
    side_trid:
      section_segments: 4
      offset:
        x: -83
        y: -35+f
        z: 82-e
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [-22,-22,17,17,0,0,-22,-22,17,17]
        z: [-1,-1,8,8,-21,-21,-13,-13,-22,-22]
      width: [0,2,2,0,0,0,0,2,2,0]
      height: [0,3,3,0,0,0,0,3,3,0]
      texture: [1]
      angle: 180
      vertical: true
    side_trid2:
      section_segments: 6
      offset:
        x: -83.1
        y: -75+e
        z: -14+f
      position:
        x: [0,0,0,0]
        y: [-7.5,-7.5,7.5,7.5]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,2,2,0]
      texture: [1]
      angle: 0
    side_end_joint:
      section_segments: 6
      offset:
        x: -70
        y: 227+e
        z: 32+f
      position:
        x: [0,0,-20,0]
        y: [-12,-12,11,11]
        z: [0,0,10,10]
      width: [0,25,25,10]
      height: [0,25,25,0]
      texture: [7]
      angle: -90
    side_lights:
      section_segments: 10
      offset:
        x: 43
        y: -5+e
        z: 70+f
      position:
        x: [0,0,0,-11,-11]
        y: [-230,-230,300,405,405]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,0]
      height: [0,10,10,10,0]
      texture: [17]
      angle: 180
    side_lights2:
      section_segments: 10
      offset:
        x: 91
        y: -5+e
        z: 70+f
      position:
        x: [15,15,15,0,0,13,13]
        y: [-400,-400,-260,-220,300,405,405]
        z: [-32,-32,-32,-3,0,0,0,0]
      width: [0,2,2,2,2,2,0]
      height: [0,7,7,9,10,10,0]
      texture: [17,17,5,17]
      angle: 180      
    #weapons  
    weapons_front_cannon_down:
      section_segments: [45,135,225,315]
      offset:
        x: 73
        y: -320+e
        z: -95+f
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-40,-50,-10,20,20,35,40,55,55]
        z: [-5,-5,-5,-5,-5,-5,0,0,0]
      width: [0,4,4,4,8,8,20,20,0]
      height: [0,4,4,4,8,8,7,7,0]
      angle: 0
      texture: [17,4,4,12,3]
      laser:
        damage: [25,25]
        rate: 1
        type: 2
        speed: [180,180]
        recoil: 0
        number: 3
        error: 0
    weapons_front_cannon_right:
      section_segments: [45,135,225,315]
      offset:
        x: 75
        y: -358+e
        z: -100+f
      position:
        x: [10,10,10,10,0,0]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,3,3,3,3,0]
      angle: 0
      texture: [17,4] 
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0      
    weapons_front_cannon_left:
      section_segments: [45,135,225,315]
      offset:
        x: -72
        y: -358+e
        z: -100+f
      position:
        x: [10,10,10,10,0,0]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,3,3,3,3,0]
      height: [0,3,3,3,3,0]
      angle: 0
      texture: [17,4]  
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0          
    weapons_front_cannon:
      section_segments: 8
      offset:
        x: 84
        y: -257+e
        z: -79+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0          
    weapons_front_cannon2:
      section_segments: 8
      offset:
        x: 70
        y: -257+e
        z: -79+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0                
    weapons_front_cannon_connecter:
      section_segments: 12
      offset:
        x: -87
        y: -262+e
        z: -79+f
      position:
        x: [0,0,0,0]
        y: [-20,-20,0,0]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,4,4,0]
      angle: -90
      texture: [17,18]      
    weapons_cannons_front_base:
      section_segments: 30
      offset:
        x: -70
        y: -90+f
        z: 265-e
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,5,5,5,10]
        z: [0,0,0,0,0,0]
      width: [0,16,16,12,10,0]
      height: [0,16,16,12,10,0]
      texture: [1,13,16,17,13]
      vertical: true
      angle: 0      
    weapons_cannon:
      section_segments: 12
      offset:
        x: -68
        y: -460+e
        z: 72+f
      position:
        x: [0,0,0,0,0,0]
        y: [-20,-18.7,0,40,44,50]
        z: [0,0,0,0,0,0]
      width: [0,2.5,2.5,2.5,5,5]
      height: [0,2.5,2.5,2.5,5,5]
      angle: 0
      texture: [17,4,4,3,3]
      laser:
        damage: [25,25]
        rate: 1
        type: 2
        speed: [180,180]
        recoil: 0
        number: 1
        error: 0                
    weapons_cannon2:
      section_segments: 12
      offset:
        x: -69
        y: -460+e
        z: -50+f
      position:
        x: [0,0,0,0,0,0]
        y: [-16,-14.7,0,40,44,50]
        z: [0,0,0,0,0,0]
      width: [0,2.5,2.5,2.5,5,5]
      height: [0,2.5,2.5,2.5,5,5]
      angle: 0
      texture: [17,4,4,3,3] 
      laser:
        damage: [25,25]
        rate: 1
        type: 2
        speed: [180,180]
        recoil: 0
        number: 1
        error: 0         
    weapons_cannon3:
      section_segments: 12
      offset:
        x: -72
        y: -460+e
        z: -20+f
      position:
        x: [0,0,0,0,0,0]
        y: [-18,-20,0,40,44,50]
        z: [0,0,0,0,0,0]
      width: [0,2.5,2.5,2.5,5,5]
      height: [0,2.5,2.5,2.5,5,5]
      angle: 0
      texture: [17,4,4,3,3]  
      laser:
        damage: [25,25]
        rate: 1
        type: 2
        speed: [180,180]
        recoil: 0
        number: 3
        error: 0         
    weapons_cannon3_right:
      section_segments: 12
      offset:
        x: 0.0
        y: -470+e
        z: -20+f
      position:
        x: [10+72,10+72,10+72,10+72,0+72,+72]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      angle: 0
      texture: [17,4]  
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0         
    weapons_cannon3_right2:
      section_segments: 12
      offset:
        x: 0.0
        y: -470+e
        z: -20+f
      position:
        x: [-10+72,-10+72,-10+72,-10+72,0+72,+72]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      angle: 0
      texture: [17,4]  
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0         
    weapons_cannon4:
      section_segments: 12
      offset:
        x: 72
        y: -460+e
        z: 42+f
      position:
        x: [0,0,0,0,0,0]
        y: [-18,-20,0,40,44,50]
        z: [0,0,0,0,0,0]
      width: [0,2.5,2.5,2.5,5,5]
      height: [0,2.5,2.5,2.5,5,5]
      angle: 0
      texture: [17,4,4,3,3]
      laser:
        damage: [25,25]
        rate: 1
        type: 2
        speed: [180,180]
        recoil: 0
        number: 1
        error: 0         
    weapons_cannon4_left:
      section_segments: 12
      offset:
        x: 0
        y: -470+e
        z: 42+f
      position:
        x: [10+-72,10+-72,10+-72,10+-72,0+-72,+-72]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      angle: 0
      texture: [17,4]  
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0       
    weapons_cannon4_left2:
      section_segments: 12
      offset:
        x: 0.0
        y: -470+e
        z: 42+f
      position:
        x: [-10+-72,-10+-72,-10+-72,-10+-72,0+-72,+-72]
        y: [-25,-35,-10,0,10,10]
        z: [0,0,0,0,0,0]
      width: [0,2,2,2,2,0]
      height: [0,2,2,2,2,0]
      angle: 0
      texture: [17,4]
      laser:
        damage: [15,15]
        rate: 1
        type: 2
        speed: [140,140]
        recoil: 0
        number: 1
        error: 0   
    weapons_turrets_front:
      section_segments: 12
      offset:
        x: -60
        y: -85+e
        z: 92+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0           
    weapons_turrets_front2:
      section_segments: 12
      offset:
        x: -80
        y: -85+e
        z: 92+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0           
    weapons_turret_front_connecter:
      section_segments: 12
      offset:
        x: -80
        y: -90+e
        z: 92+f
      position:
        x: [0,0,0,0]
        y: [-20,-20,0,0]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,4,4,0]
      angle: -90
      texture: [17,18]
    weapons_turrets_middle:
      section_segments: 12
      offset:
        x: -55
        y: 145+e
        z: 92+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0           
    weapons_turrets_middle2:
      section_segments: 12
      offset:
        x: -75
        y: 145+e
        z: 92+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-43,-45,-38,-36,-24,-22,5,5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,3,3,5,5,0]
      height: [0,5,5,3,3,5,5,0]
      texture: [17,4,4,13,3,10,3]
      angle: 0
      laser:
        damage: [20,20]
        rate: 3
        type: 1
        speed: [120,120]
        recoil: 0
        number: 1
        error: 0           
    weapons_turret_middle_connecter:
      section_segments: 12
      offset:
        x: -75
        y: 140+e
        z: 92+f
      position:
        x: [0,0,0,0]
        y: [-20,-20,0,0]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,4,4,0]
      angle: -90
      texture: [17,18]
    weapons_turret_front_base:
      section_segments: 30
      offset:
        x: -70
        y: 84+f
        z: 90-e
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,5,5,5,10]
        z: [0,0,0,0,0,0]
      width: [0,16,16,12,10,0]
      height: [0,16,16,12,10,0]
      texture: [1,13,16,17,13]
      vertical: true
      angle: 0
    weapons_turret_middle_base:
      section_segments: 30
      offset:
        x: -65
        y: 84+f
        z: -140-e
      position:
        x: [0,0,0,0,0,0]
        y: [0,0,5,5,5,10]
        z: [0,0,0,0,0,0]
      width: [0,16,16,12,10,0]
      height: [0,16,16,12,10,0]
      texture: [1,13,16,17,13]
      vertical: true
      angle: 0
    weapons_turrets_back:
      section_segments: 12
      offset:
        x: -38
        y: 360+e
        z: 68+f
      position:  
        x: [0,0,0,0,0,0,0,15,15,15]
        y: [-43,-45,-38,-36,-24,-22,5,25,40,40]
        z: [-7,-7,-7,-7,-7,-7,0,10,10,10,0]
      width: [0,5,5,3,3,5,5,5,5,0]
      height: [0,5,5,3,3,5,5,5,5,0]
      texture: [17,4,4,13,3,10,18,17]
      angle: 90
      laser:
        damage: [69,69]
        rate: 10
        type: 1
        speed: [160,160]
        recoil: 0
        number: 2
        error: 0           
    weapons_turrets_back2:
      section_segments: 12
      offset:
        x: -38
        y: 340+e
        z: 68+f
      position:
        x: [0,0,0,0,0,0,0,5,5,5]
        y: [-43,-45,-38,-36,-24,-22,5,25,40,40]
        z: [-7,-7,-7,-7,-7,-7,0,10,10,10,0]
      width: [0,5,5,3,3,5,5,5,5,0]
      height: [0,5,5,3,3,5,5,5,5,0]
      texture: [17,4,4,13,3,10,18,15]
      angle: 90
      laser:
        damage: [69,69]
        rate: 10
        type: 1
        speed: [160,160]
        recoil: 0
        number: 2
        error: 0        
    weapons_turrets_back3:
      section_segments: 12
      offset:
        x: -38
        y: 320+e
        z: 68+f
      position:
        x: [0,0,0,0,0,0,0,-5,-5,-5]
        y: [-43,-45,-38,-36,-24,-22,5,25,40,40]
        z: [-7,-7,-7,-7,-7,-7,0,10,10,10,0]
      width: [0,5,5,3,3,5,5,5,5,0]
      height: [0,5,5,3,3,5,5,5,5,0]
      texture: [17,4,4,13,3,10,18,15]
      angle: 90
      laser:
        damage: [69,69]
        rate: 10
        type: 1
        speed: [160,160]
        recoil: 0
        number: 2
        error: 0        
    weapons_turrets_back4:
      section_segments: 12
      offset:
        x: -38
        y: 300+e
        z: 68+f
      position:
        x: [0,0,0,0,0,0,0,-15,-15,-15]
        y: [-43,-45,-38,-36,-24,-22,5,25,40,40]
        z: [-7,-7,-7,-7,-7,-7,0,10,10,10,0]
      width: [0,5,5,3,3,5,5,5,5,0]
      height: [0,5,5,3,3,5,5,5,5,0]
      texture: [17,4,4,13,3,10,18,17]
      angle: 90
      laser:
        damage: [69,69]
        rate: 10
        type: 1
        speed: [160,160]
        recoil: 0
        number: 2
        error: 0          
    weapons_turret_back_bottom:
      section_segments: 12
      offset:
        x: -35
        y: 364+e
        z: 63+f
      position:
        x: [0,0,0,0]
        y: [0,0,67,67]
        z: [0,0,0,0]
      width: [0,7,7,0]
      height: [0,6,6,0]
      angle: -180
      texture: [13]
    weapons_turret_back_bottom2:
      section_segments: 12
      offset:
        x: -32
        y: 364+e
        z: 63+f
      position:
        x: [0,0,0,0]
        y: [0,0,67,67]
        z: [0,0,0,0]
      width: [0,2,2,0]
      height: [0,6,6,0]
      angle: -180
      texture: [17] 
    hubs:  
      section_segments: 30
      offset:
        x: 0
        y: 100+f
        z: -330-e
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-13,-10,-12,-12.5,-10,-10,-12]
        z: [0,0,0,0,0,0,0,0]
      width: [13,13,10,9,6,4.2,4,0]
      height: [13,13,10,9,6,4.2,4,0]
      texture: [1,3,18,17,18,16,17]
      vertical: true
    hub_support:  
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 330+e
        z: 90+f
      position:
        x: [0,0,0,0,0,0]
        y: [-15,-15,-5,10,15,15]
        z: [0,1.2,0,0,-2.8,-2.8]
      width: [0,1.5,1.5,1.5,1.5,0]
      height: [0,3,3,3,3,0]
      texture: [4]      
    hub_support2:  
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 0
        y: 330+e
        z: 90+f
      position:
        x: [0,0,0,0,0,0]
        y: [-15,-15,-10,10,15,15]
        z: [-2.8,-2.8,0,0,-2.8,-2.8]
      width: [0,1.5,1.5,1.5,1.5,0]
      height: [0,3,3,3,3,0]
      texture: [4]       
      angle: 90      
    #proplulsors  
    propulsors_middle:
      section_segments: 12
      offset:
        x: -20
        y: 355+e
        z: 0+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-97,-81,30,30,30,35,25]
        z: [0,0,0,0,0,0,0,0]
      width: [0,11,11,11,11,11,11,0]
      height: [0,10,55,55,55,55,55,0]
      angle: 0
      propeller: true
      texture: [4,3,3,13,12,12,17]
    propulsors_middle2:
      section_segments: 12
      offset:
        x: 0
        y: 355+e
        z: 0+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-97,-81,30,30,30,35,25]
        z: [0,0,0,0,0,0,0,0]
      width: [0,11,11,11,11,11,11,0]
      height: [0,10,55,55,55,55,55,0]
      angle: 0
      propeller: true
      texture: [4,3,3,13,12,12,17]
    propulsors_middle3:
      section_segments: [45,135,225,315]
      offset:
        x: -0.01
        y: 345+e
        z: 0+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-97,-81,30,30,30,35,25]
        z: [0,0,0,0,0,0,0,0]
      width: [0,40,40,40,40,40,40,0]
      height: [0,10,55,55,55,55,55,0]
      angle: 0
      propeller: true
      texture: [4,3,3,13,12,12,17]
    propulsors_side:
      section_segments: 14
      offset:
        x: -45
        y: 315+e
        z: 0+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-97,-81,30,30,30,35,25]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,25,25,25,25,25,25,0]
      angle: 0
      propeller: true
      texture: [4,4,12,13,12,12,17]
    propulsors_side2:
      section_segments: 14
      offset:
        x: -55
        y: 255+e
        z: -45+f
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-100,-97,-81,110,110,110,115,105]
        z: [0,0,0,0,0,0,0,0]
      width: [0,20,20,20,20,20,20,0]
      height: [0,25,25,25,25,25,25,0]
      angle: 0
      propeller: true
      texture: [4,4,12,13,12,12,17]
    propulsors_side3:
      section_segments: 8
      offset:
        x: -45
        y: 378+e
        z: 0+f
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [25]
      height: [25]
      propeller: true
    propulsors_side4:
      section_segments: 8
      offset:
        x: -55
        y: 430+e
        z: -50+f
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [25]
      height: [25]
      propeller: true
