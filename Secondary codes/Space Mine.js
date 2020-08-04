return model =
  name: "Space Mine"
  level: 1
  model: 1
  size: 1.05
  specs:
    shield:
      capacity: [75,100]
      reload: [2,3]
    generator:
      capacity: [40,60]
      reload: [10,15]
    ship:
      mass: 60
      speed: [125,145]
      rotation: [110,130]
      acceleration: [100,120]
  bodies:
    main:
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x: x = do ->
          t = undefined
          e = undefined
          e = []
          i = t = 0
          while t <= 6
            e.push 0
            i = ++t
          e
        y: y = do ->
          t = undefined
          e = undefined
          e = []
          i = t = 0
          while t <= 10
            e.push 80 * -Math.cos(i / 6 * Math.PI)
            i = ++t
          e
        z:[0,0,0,0,0,0,0,0]
      width: width = do ->
        t = undefined
        e = undefined
        e = []
        i = t = 0
        while t <= 10
          e.push 80 * Math.sin(i / 6 * Math.PI)
          i = ++t
        e
      height: height = do ->
        t = undefined
        e = undefined
        e = []
        i = t = 0
        while t <= 10
          e.push 80 * Math.sin(i / 6 * Math.PI)
          i = ++t
        e
      propeller:!1
      texture:[1,1,63,63,1]
    peak:
      angle:30+60
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0,0,0]
        y:[-115,-110,-100,-90,90,100,110,115]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,10,20,20,10,10,0]
      height:[0,10,10,20,20,10,10,0]
      propeller:!1
      texture:[4,1,17,4,17,1,4]
    peak2:
      angle:30+120
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0,0,0]
        y:[-115,-110,-100,-90,90,100,110,115]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,10,20,20,10,10,0]
      height:[0,10,10,20,20,10,10,0]
      propeller:!1
      texture:[4,1,17,4,17,1,4]      
    peak3:
      angle:30+180
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0,0,0]
        y:[-115,-110,-100,-90,90,100,110,115]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,10,20,20,10,10,0]
      height:[0,10,10,20,20,10,10,0]
      propeller:!1
      texture:[4,1,17,4,17,1,4]   
    vert:
      vertical: true
      angle: 60-30
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0,0,0]
        y:[-115,-110,-100,-90,90,100,110,115]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,10,20,20,10,10,0]
      height:[0,10,10,20,20,10,10,0]
      propeller:!1
      texture:[4,1,17,4,17,1,4]   
    vert2:
      vertical: true
      angle: 60-90
      section_segments:6
      offset:
        x:0
        y:0
        z:0
      position:
        x:[0,0,0,0,0,0,0,0,0]
        y:[-115,-110,-100,-90,90,100,110,115]
        z:[0,0,0,0,0,0,0,0,0]
      width:[0,10,10,20,20,10,10,0]
      height:[0,10,10,20,20,10,10,0]
      propeller:!1
      texture:[4,1,17,4,17,1,4]   
    vert0:
      vertical: true
      angle: 0
      section_segments: 6
      offset:
        x: 1110
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0]
        y: [-115,-110,-100,-90,90,100,110,115]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,10,20,20,10,10,0]
      height: [0,10,10,20,20,10,10,0]
      propeller: false
      texture: [4,1,17,4,17,1,4]
      
      
      
