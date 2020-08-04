return model =
  name: 'Defence Pod'
  level:1
  model:1
  size:1.05
  specs:
    shield:
      capacity:[75,100]
      reload:[2,3]
    generator:
      capacity:[40,60]
      reload:[10,15]
    ship:
      mass:60
      speed:[125,145]
      rotation:[110,130]
      acceleration:[100,120]
  bodies:
    main:
      section_segments:[35,55,125,145,215,235,305,325,395]
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0]
        y:[0,25,50,40]
        z:[0,0,0,0,0]
      width:[50,50,20,0]
      height:[15,10,10,0]
      propeller:!1
      texture:[3,3,17]
    cannon:
      section_segments:6
      offset:
        x:40
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0]
        y:[-25,-20,0,0,20,30,35]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,15,10,7,6,0]
      height:[0,10,15,18,15,10,0]
      propeller:!1
      texture:[4,63,1,1,1,4]
   wings: I000l:
      length:[60,20]
      width:[40,35,25]
      angle:[0,0,0]
      position:[0,10,20]  
      texture:[1,63]
      doubleside:!0
      offset:
        x:0
        y:0
        z:0
      bump:
        position:0
        size:80
  
      
      
      
      
      
    
