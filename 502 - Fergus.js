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
return model =
  name: "Fergus"
  level: 5
  model: 2
  size: 1.8
  specs:
    shield:
      capacity: [250,320]
      reload: [4,7]
    generator:
      capacity: [175,250]
      reload: [160,200]
    ship:
      mass: 200
      speed: [70,85]
      rotation: [90,100]
      acceleration: [100,130]
      dash:
        rate: 0.01
        burst_speed: [70,85]
        speed: [70,85]
        acceleration: [100,130]
        initial_energy: [0.01,0.01]
        energy: [0.01,0.01]
  bodies:
    disc: ring2(0,0,19.7,[45,135,225,315],0.15,1.05,0.3,false,[17,18,3,63,3,18,17],0)     
    disc2: ring2(0,0,19.7,[45,135,225,315],0.15,1.05,0.3,false,[17,18,3,63,3,18,17],90)     
    disc3: ring2(7,-70,9,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc4: ring2(7,-65,9.3,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc5: ring2(7,-60,9.6,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc6: ring2(7,-55,9.9,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc7: ring2(7,-50,10.2,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc8: ring2(7,-45,10.5,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc9: ring2(7,-40,10.8,16,0.15,1.05,0.4,false,[3,63,63,3,63,63,3],0)     
    disc10: ring2(13,-28,5,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1.05,1,false,[4,17,4,17,4,17,4],0)     
    disc11: ring2(13,-22,5,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1.05,1,false,[4,17,4,17,4,17,4],0)     
    disc12: ring2(13,-16,5,[40,45,50,130,135,140,220,225,230,310,315,320],0.2,1.05,1,false,[4,17,4,17,4,17,4],0)     
    disc13: ring2(0,-72.9,9.5,6,0.3,0.8,1,false,[63,17,63,17,63,17,63],0)     
    disc14: ring2(0,-62.9,10.6,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    disc15: ring2(0,-52.9,11.7,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    disc16: ring2(0,-42.9,12.8,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    disc17: ring2(0,-32.9,13.9,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    disc18: ring2(0,-22.9,15,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    disc19: ring2(0,-12.9,15.6,6,0.3,0.7,1,false,[63,17,63,17,63,17,63],0)     
    hub: hub(0,16,0,[45,135,225,315],7,6,true,0,[18,17,17,18,18,17])     
    hub2: hub(0,22,0,[45,135,225,315],1,1,true,0,17)     
    hub3: hub(51,10,0,3,10,1,true,0,16.8)     
    hub4: hub(-51,10,0,3,10,1,true,0,16.8) 
    hub5: hub(-40,5,-146,3,5,1,true,0,16.8)     
    hub6: hub(40,5,-146,3,5,1,true,0,16.8)     
    main:
      section_segments: 6
      offset:
        x: 0
        y: -60
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0]
        y: [-105,-100,-90,-20,-17,30,30,55,75,75,60]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,8,10,20,20,20,20,20,15,13,0].mult(1.2)
      height: [0,6.6,9.9,15.4,15.5,22,22,22,16.8,14.8,0]
      propeller: true
      texture: [2,2,3,17,8,8,18,13,16.9]
    cockpit:
      section_segments: 6
      offset:
        x: 0
        y: -155
        z: 5
      position:
        x: [0,0,0,0,0,0]
        y: [10,40,80,130,150,150]
        z: [5.3,3,0,5,5,0]
      width: [3,8,12,12,12,0]
      height: [0,10,15,15,15,0]
      texture: [9,9,[15]]
    cockpit_light:
      section_segments: 6
      offset:
        x: 1
        y: -155
        z: 5
      position:
        x: [-.5,0,0,0,0]
        y: [40,80,130,150,150]
        z: [3,4,5,5,0]
      width: [8,12,12,12,0].mult(1.1)
      height: [10,15,15,15,0].div(2)
      texture: [17]      
    claws:
      section_segments: [35,45,55,90,125,135,145,215,225,235,270,305,315,325]
      offset:
        x: -50
        y: 55
        z: 0
      position:
        x: [-30,-20,20,35,40,35,10,-50,-50]
        y: [-105,-100,-70,-40,-10,20,50,90,100]
        z: [0,0,0,0,0,0,0,0,0]
      width: [0,10,15,15,15,15,20,25,10]
      height: [0,2.5,7.5,8,7.5,7.5,6.5,5,5]
      texture: [63]
      angle: 180
    claws2:
      section_segments: [45,135,225,315]
      offset:
        x: -50
        y: 55
        z: 1.1
      position:
        x: [-20,20,35,40,35,10,-50,-50]
        y: [-100,-70,-40,-10,20,50,90,100]
        z: [0,0,0,0,0,0,0,0]
      width: [3.3,5,5,5,5,6.6,8.3,3.3]
      height: [2.5,7.5,8,7.5,7.5,6.5,5,5]
      texture: [[15]]
      angle: 180
    claws3:
      section_segments: [45,135,225,315]
      offset:
        x: -50
        y: 55
        z: 1
      position:
        x: [-20,20,35,40,35,10,-50,-50]
        y: [-100,-70,-40,-10,20,50,90,100]
        z: [0,0,0,0,0,0,0,0]
      width: [3.3,5,5,5,5,6.6,8.3,3.3].mult(1.4)
      height: [2.5,7.5,8,7.5,7.5,6.5,5,5]
      texture: [2]
      angle: 180
    booster:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 57
        y: 30
        z: 0
      position:
        x: [6,6,6,6,6,6,6,6,6,6,0]
        y: [6.6,0,0,5,7,53,55,60,60,43.3,48.3]
        z: [0,0,0,0,0,0,0,0,0,0,0]
      width: [0,23,25,26.6,26.6,26.6,26.6,24.6,21.3,21.3,0].div(1.1)
      height: [0,9.6,11.6,13.3,13.3,13.3,13.3,12.3,9,6.6,0]
      texture: [18,17,7,63,3,63,7,7,17,[15]]
      angle: 180
    booster2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 40
        y: 161
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0,0,0]
        y: [0,0,2.5,3.5,26.5,27.5,30,30,30,16.6,1.6]
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [0,12.5,13.3,13.3,13.3,13.3,13.3,13.3,11.6,11.6,0]
      height: [0,5.8,6.6,6.6,6.6,6.6,6.6,0,5,3.3,0]
      texture: [7,7,63,3,63,7,7,7,12]
      angle: 180
    lights:
      section_segments: [45,135,225,315]
      offset:
        x: 5
        y: 15
        z: 48.5
      position:
        x: [0,0,0,0,0]
        y: [-5,-5,5,6,6]
        z: [0,0,0,0,0]
      width: [0,2,2,1.5,0]
      height: [0,37,37,16,0]
      texture: [63,17,4,63]
      angle: 45
      vertical: true
    main_shell:
      section_segments: [0,60,120,180]
      offset:
        x: -.01
        y: -44
        z: 0
      position:
        x: [0,0,0,-3.5,0]
        y: [-58,-58,-52,-18,-18].mult(2)
        z: [0,0,0,0,0]
      width: [0,3,8,10,0].mult(2)
      height: [0,4,7,16,0].mult(1)
      texture: [3.9] 
    main_shell2:
      section_segments: [0,60,120,180]
      offset:
        x: -.01
        y: -44
        z: 0
      position:
        x: [0,0,0,-3.5,0]
        y: [-58,-58,-52,-18,-18].mult(2)
        z: [0,0,0,0,0]
      width: [0,3,8,10,0].mult(2.1)
      height: [0,4,7,16,0].div(2)
      texture: [[15],[15],16.9]   
    cannon:
      section_segments: 8
      offset:
        x: 11
        y: -45
        z: 15
      position:
        x: [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        y: [-35,-40,-40,-37,-30,-25,0,25,30,35,40,40]
        z: [0,0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,2,3,3,3,3,3,3,3,3,3,3,0]
      height: [0,2,3,3,3,3,3,3,3,3,3,0]
      angle: 0
      texture: [17,17,5,4,11,17,2,11,4,4]
      laser:
        damage: [40,50]
        rate: 1
        type: 1
        speed: [120,150]
        number: 1
    cannon2:
      section_segments: 8
      offset:
        x: 11
        y: -32.5
        z: 15
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
        y: -70
        z: -3
      position:
        x: [0,0,0,0,0,0,0,2,0,0,0,0,0,0]
        y: [-35,-40,-40,-37,-30,-25,20,40,40,35,40,40]
        z: [0,0,0,0,0,0,0,2,2,2,2,2,2]
      width: [0,2.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      height: [0,2.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,0]
      texture: [17,17,5,4,11,17,7,11,4,4]
    cannon4:
      section_segments: 8
      offset:
        x: 40
        y: 145
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
        damage: [20,25]
        rate: 6
        type: 2
        recoil: 90
        speed: [140,200]
        number: 1
    end_bit:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 50
        y: 145.5
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,-9,0,9,18,18]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,6,8,10,8,6,0]
      angle: 0
      texture: [2]
    end_bit2:
      section_segments: [40,45,50,130,135,140,220,225,230,310,315,320]
      offset:
        x: 30
        y: 145.5
        z: 0
      position:
        x: [0,0,0,0,0,0,0]
        y: [-18,-18,-9,0,9,18,18]
        z: [0,0,0,0,0,0,0]
      width: [0,3,3,3,3,3,0]
      height: [0,6,8,10,8,6,0]
      angle: 0
      texture: [2]
    propeller:
      section_segments: 8
      offset:
        x: 0
        y: 65
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [20]
      height: [20]
      propeller: true
    propeller2:
      section_segments: 8
      offset:
        x: 50
        y: 25
        z: 0
      position:
        x: [0]
        y: [0]
        z: [0]
      width: [17]
      height: [5]
      propeller: true
    top_loader:
      section_segments: [45,135,225,315]
      offset:
        x: -2
        y: 5
        z: 15
      position:
        x: [0,0,0,0,0,0]
        y: [-11,-11,-8,-5,2,2]
        z: [0,0,0,0,-2,-2]
      width: [0,12,12,12,12,0].div(1.5)
      height: [0,15,15,10,10,0].div(1.7)
      texture: [0.9,18,16.9,15,3.9]    
      angle: 90       
  wings: 
    top:
      doubleside: true
      offset:
        x: 25
        y: -25
        z: 10
      length: [0,-2,-3,-1,-9,-3,0].mult(1.6)
      width: [0,10,20,60,60,10,8,0].mult(2)
      angle: [280,280,315,315,335,320,0]
      position: [2,2,7,-20,-20,15,15,15]
      texture: [63,63,63,17,4,17,63]
      bump:
        position: 30
        size: -3
    top2:
      doubleside: true
      offset:
        x: 25
        y: -26
        z: 10
      length: [0,-2,-3,-1,-9,-3,0].mult(1.6)
      width: [0,10,20,60,60,10,8,0].mult(2)
      angle: [280,280,315,315,335,320,0]
      position: [2,2,7,-20,-20,15,15,15]
      texture: [63,63,63,17,18,17,63]
      bump:
        position: 30
        size: -3.1  
