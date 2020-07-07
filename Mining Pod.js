return model =
  name: "Mining Pod"
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
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: do ->
          t = undefined
          e = undefined
          e = []
          i = t = 0
          while t <= 6
            e.push 0
            i = ++t
          e
        y: do ->
          t = undefined
          e = undefined
          e = []
          i = t = 0
          while t <= 10
            e.push 50 * -Math.cos(i / 6 * Math.PI)
            i = ++t
          e
        z: [0,0,0,0,0,0,0,0,0]
      width: do ->
        t = undefined
        e = undefined
        e = []
        i = t = 0
        while t <= 10
          e.push 50 * Math.sin(i / 6 * Math.PI)
          i = ++t
        e
      height: do ->
        t = undefined
        e = undefined
        e = []
        i = t = 0
        while t <= 10
          e.push 50 * Math.sin(i / 6 * Math.PI)
          i = ++t
        e
      propeller: !1
      texture: [1,3,1,12,4]
    cannon:
      section_segments: 8
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-50,-60,-30,0,30,55,60]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,10,15,10,0]
      height: [0,10,15,10,15,10,0]
      propeller: false
      texture: [4,63,1,1,1,4]
  wings:
    main:
      length: [50,10]
      width: [20,30,20]
      angle: [45,45]
      position: [0,0,0]
      doubleside: true
      offset:
        x: 0
        y: 30
        z: 0
      bump:
        position: 30
        size: 20
      texture: [63]
    main2:
      length: [50,10]
      width: [20,30,15]
      angle: [-45,-45]
      position: [0,0,0]
      doubleside: true
      offset:
        x: 0
        y: 30
        z: 0
      bump:
        position: 30
        size: 20
      texture: [63]
    wing3:
      length: [20]
      width: [50,30]
      angle: [0,0]
      position: [0,0]
      doubleside: true
      offset:
        x: 35
        y: 0
        z: 0
      bump:
        position: 30
        size: 40
      texture: [3]
