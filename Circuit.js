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
i = -60  
return model =
  bodies:
    floor:
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-15,-15,-10,10,15,15]
        z: [0,0,0,0,0,0]
      width: [0,595,600,600,595,0]
      height: [0,595,600,600,595,0] 
      texture: [3,17,7,17,3]
      vertical: true  
    chip:
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0,0,0]
        y: [-30,-30,-25,25,30,30]
        z: [0,0,0,0,0,0]
      width: [0,65,70,70,65,0]
      height: [0,65,70,70,65,0] 
      texture: [4,18,13,18,4]
      vertical: true        
    capacitors: 
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 50
        y: 30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0] 
      texture: [2,13,3,4,3,13]
      angle: 90
    capacitors2:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 50
        y: 10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 90      
    capacitors3:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 50
        y: -10
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 90
    capacitors4:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 50
        y: -30
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 90
    capacitors5:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 10
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 180      
    capacitors6:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 30
        y: -50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 180  
    capacitors7:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 10
        y: 50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 0  
    capacitors8:  
      section_segments: [42,45,48,132,135,138,222,225,228,312,315,318]
      offset:
        x: 30
        y: 50
        z: 0
      position:
        x: [0,0,0,0,0,0,0,0]
        y: [-20,-20,-3,0,17,20,21.5,21.5]
        z: [0,0,0,0,0,0,0,0]
      width: [0,6,6,6,6,6,5,0]
      height: [0,34,34,34,34,34,31,0]
      texture: [2,13,3,4,3,13]
      angle: 0        
    transistor:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [10,10,10,-15,-15,10,10,10]
        y: [0,0,190,215,245,270,325,325]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,30,0]
      texture: [4]
    transistor2:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 240
        z: 0
      position:
        x: [10,10,60,60,60]
        y: [0,0,50,100,100]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]      
    transistor3:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 120
        z: 0
      position:
        x: [10,10,40,40,40]
        y: [0,0,30,80,80]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]  
    transistor4:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 188
        z: 0
      position:
        x: [40,40,90,90,90]
        y: [-30,-30,20,60,60]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]      
    transistor5:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 270
        z: 0
      position:
        x: [40,40,60,60].add(55)
        y: [0,0,20,20]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,30,30,0]
      texture: [4]         
    transistor6:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 288
        z: 0
      position:
        x: [0,0,0,0].add(0)
        y: [90,90,115,115].add(21)
        z: [0,0,0,0]
      width: [0,3,3.5,0]
      height: [0,30,30,0]
      texture: [4]        
      angle: 90
    transistor7:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 196
        z: 0
      position:
        x: [0,0,20,20,41,41].add(135)
        y: [90,90,110,145,163,163].add(0)
        z: [0,0,0,0,0,0]
      width: [0,3.5,3.5,3.5,3.5,0]
      height: [0,30,30,30,30,0]
      texture: [4]        
    transistor8:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,-5,-5].add(-10)
        y: [0,0,70,75,75].add(0)
        z: [0,0,0,0,0]
      width: [0,5,5,7,0]
      height: [0,30,30,30,0]
      texture: [4]         
    transistor9:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 165
        z: 0
      position:
        x: [35,35,0,0,0].add(-65)
        y: [4,4,55,64,64].add(0)
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]         
    transistor10:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 255
        z: 0
      position:
        x: [0,0,0,-30,-30,-45,-45].add(-65)
        y: [0,0,45,90,130,145,145].add(0)
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,0]
      texture: [4]             
    transistor11:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,-90,-90,-90].add(-30)
        y: [0,0,10,150,210,210].add(0)
        z: [0,0,0,0,0,0]
      width: [0,5,5,5,5,0]
      height: [0,30,30,30,30,0]
      texture: [4]          
    transistor12:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 70
        z: 0
      position:
        x: [0,0,0,15,15].add(30)
        y: [0,0,15,25,25].add(0)
        z: [0,0,0,0,0]
      width: [0,5,5,8,0]
      height: [0,30,30,30,0]
      texture: [4]        
    transistor13:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 40
        z: 0
      position:
        x: [0,0,-0.5,-35,-35].add(-52)
        y: [0,0,20,55,55].add(39.3)
        z: [0,0,0,0,0]
      width: [0,4,5,6,0]
      height: [0,30,30,30,0]
      texture: [4]         
      angle: 90
    transistor14:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 122
        z: 0
      position:
        x: [0,0,0,26,26].add(91)
        y: [0,0,30,57,57].add(0)
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]     
    transistor15:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 130
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(-46)
        y: [0,0,35,35].add(115)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]    
      angle: 90
    transistor16:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 130
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(84)
        y: [0,0,35,35].add(130)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 40
    transistor17:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 130
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(200+i*2)
        y: [0,0,70,70].add(250+i)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 40
    transistor18:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 275
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(227)
        y: [0,0,54,54].add(0)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 0      
    transistor19:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [10,10,10,-15,-15,10,10,10]
        y: [0,0,190,215,245,270,325,325]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,30,0]
      texture: [4]
      angle: 180
    transistor20:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -240
        z: 0
      position:
        x: [10,10,60,60,60]
        y: [0,0,50,100,100]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor21:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -120
        z: 0
      position:
        x: [10,10,40,40,40]
        y: [0,0,30,80,80]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor22:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -188
        z: 0
      position:
        x: [40,40,90,90,90]
        y: [-30,-30,20,60,60]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor23:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -270
        z: 0
      position:
        x: [95,95,115,115]
        y: [0,0,20,20]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 180
    transistor24:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -288
        z: 0
      position:
        x: [0,0,0,0]
        y: [111,111,136,136]
        z: [0,0,0,0]
      width: [0,3,3.5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 270
    transistor25:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -196
        z: 0
      position:
        x: [135,135,155,155,176,176]
        y: [90,90,110,145,163,163]
        z: [0,0,0,0,0,0]
      width: [0,3.5,3.5,3.5,3.5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 180
    transistor26:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [-10,-10,-10,-15,-15]
        y: [0,0,70,75,75]
        z: [0,0,0,0,0]
      width: [0,5,5,7,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor27:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -165
        z: 0
      position:
        x: [-30,-30,-65,-65,-65]
        y: [4,4,55,64,64]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor28:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -255
        z: 0
      position:
        x: [-65,-65,-65,-95,-95,-110,-110]
        y: [0,0,45,90,130,145,145]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,0]
      texture: [4]
      angle: 180
    transistor29:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [-30,-30,-30,-120,-120,-120]
        y: [0,0,10,150,210,210]
        z: [0,0,0,0,0,0]
      width: [0,5,5,5,5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 180
    transistor30:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -70
        z: 0
      position:
        x: [30,30,30,45,45]
        y: [0,0,15,25,25]
        z: [0,0,0,0,0]
      width: [0,5,5,8,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor31:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -40
        z: 0
      position:
        x: [-52,-52,-52.5,-87,-87]
        y: [40,40,60,95,95]
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor32:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -123
        z: 0
      position:
        x: [91,91,91,116,116].add(0.9)
        y: [0,0,30,55.9,55.9]
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 180
    transistor33:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -131
        z: 0
      position:
        x: [-45,-45,-45.5,-45.5]
        y: [115,115,150,150]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 270
    transistor34:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -130
        z: 0
      position:
        x: [84,84,83.5,83.5]
        y: [130,130,165,165]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 220
    transistor35:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -130
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(200+i*2)
        y: [0,0,70,70].add(250+i)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 220      
    transistor36:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -275
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(227)
        y: [0,0,54,54].add(0)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 180        
    transistor37:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,10,-15,-15,10,10,10]
        y: [0,0,190,215,245,270,325,325].add(70)
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,30,0]
      texture: [4]
      angle: 90
    transistor38:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,60,60,60]
        y: [0,0,50,100,100].add(240)
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor39:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,40,40,40]
        y: [0,0,30,80,80].add(120)
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor40:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [40,40,90,90,90]
        y: [-30,-30,20,60,60].add(188)
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor41:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [95,95,115,115]
        y: [0,0,20,20].add(270)
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 90   
    transistor42:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(288)
        y: [111,111,136,136].add(-248)
        z: [0,0,0,0]
      width: [0,3,3.5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 0 
    transistor43:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [135,135,155,155,176,176]
        y: [90,90,110,145,163,163].add(196)
        z: [0,0,0,0,0,0]
      width: [0,3.5,3.5,3.5,3.5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor44:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-30,-30,-65,-65,-65]
        y: [4,4,55,64,64].add(165)
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90
    transistor45:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-10,-10,-10,-15,-15]
        y: [0,0,70,75,75].add(70)
        z: [0,0,0,0,0]
      width: [0,5,5,7,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor46:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-65,-65,-65,-95,-95,-110,-110]
        y: [0,0,45,90,130,145,145].add(255)
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor47:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-30,-30,-30,-120,-120,-120]
        y: [0,0,10,150,210,210].add(70)
        z: [0,0,0,0,0,0]
      width: [0,5,5,5,5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor48:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [30,30,30,45,45]
        y: [0,0,15,25,25].add(70)
        z: [0,0,0,0,0]
      width: [0,5,5,8,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90   
    transistor49:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [84,84,83.5,83.5].add(-135)
        y: [115,115,165,165].add(95)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: -220      
    transistor50:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(200+i*2).add(-83.5)
        y: [0,0,70,70].add(250+i).add(99)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 220-90  
    transistor51:  
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,-0.5,-0.5].add(227)
        y: [0,0,54,54].add(275)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]         
      angle: 90  
    transistor52:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -4
        z: 0
      position:
        x: [-45,-45,-45.5,-45.5].add(220)
        y: [133,133,150,150].add(-260)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 0 
    transistor53:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [52,52,52.5,87+-34.5*2,87+-34.5*2].add(-144)
        y: [40,40,60,95,95].add(0)
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: -270+90
    transistor54:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: -1
        z: 0
      position:
        x: [91,91,91,117,117]
        y: [0,0,30,55,55].add(122)
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 90 
    transistor55:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,10,-15,-15,10,10,10]
        y: [70,70,260,285,315,340,395,395]
        z: [0,0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,30,0]
      texture: [4]
      angle: 270
    transistor56:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,60,60,60]
        y: [240,240,290,340,340]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor57:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [10,10,40,40,40]
        y: [120,120,150,200,200]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor58:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [40,40,90,90,90]
        y: [158,158,208,248,248]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor59:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [95,95,115,115]
        y: [270,270,290,290]
        z: [0,0,0,0]
      width: [0,5,5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 270
    transistor60:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [288,288,288,288]
        y: [-137,-137,-112,-112]
        z: [0,0,0,0]
      width: [0,3,3.5,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 180
    transistor61:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [135,135,155,155,176,176]
        y: [286,286,306,341,359,359]
        z: [0,0,0,0,0,0]
      width: [0,3.5,3.5,3.5,3.5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 270
    transistor62:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-30,-30,-65,-65,-65]
        y: [169,169,220,229,229]
        z: [0,0,0,0,0]
      width: [0,5,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor63:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-10,-10,-10,-15,-15]
        y: [70,70,140,145,145]
        z: [0,0,0,0,0]
      width: [0,5,5,7,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor64:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-65,-65,-65,-95,-95,-110,-110]
        y: [255,255,300,345,385,400,400]
        z: [0,0,0,0,0,0,0]
      width: [0,5,5,5,5,5,0]
      height: [0,30,30,30,30,30,0]
      texture: [4]
      angle: 270
    transistor65:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-30,-30,-30,-120,-120,-120]
        y: [70,70,80,220,280,280]
        z: [0,0,0,0,0,0]
      width: [0,5,5,5,5,0]
      height: [0,30,30,30,30,0]
      texture: [4]
      angle: 270
    transistor66:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [30,30,30,45,45]
        y: [70,70,85,95,95]
        z: [0,0,0,0,0]
      width: [0,5,5,8,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor67:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-51,-51,-51.5,-51.5]
        y: [210,210,260,260]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: -40
    transistor68:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-3.5,-3.5,-4,-4]
        y: [289,289,359,359]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 310
    transistor69:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [227,227,226.5,226.5]
        y: [275,275,329,329]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 270
    transistor70:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 4
        z: 0
      position:
        x: [175,175,174.5,174.5]
        y: [-127,-127,-110,-110]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 180
    transistor71:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [-92,-92,-91.5,-126,-126]
        y: [40,40,60,95,95]
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 0
    transistor72:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 1
        z: 0
      position:
        x: [91,91,91,117,117]
        y: [122,122,152,177,177]
        z: [0,0,0,0,0]
      width: [0,4,5,5,0]
      height: [0,30,30,30,0]
      texture: [4]
      angle: 270
    transistor73:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 110
        z: 0
      position:
        x: [0,0,0,0].add(150)
        y: [0,0,50,50]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 15
    transistor74:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 335
        z: 0
      position:
        x: [0,0,0,0].add(260)
        y: [30,30,120,120]
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55      
    transistor75:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 325
        z: 0
      position:
        x: [0,0,0,0].add(134.5)
        y: [0,0,40,40].add(245)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 90              
    transistor76:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 160
        z: 0
      position:
        x: [0,0,0,0].add(138.5)
        y: [0,0,40,40].add(250)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55       
    transistor77:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(150+-30)
        y: [0,0,50,50].add(105)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 15+270
    transistor78:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(-15)
        y: [30,30,120,120].add(190)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55+270      
    transistor79:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 325
        z: 0
      position:
        x: [0,0,0,0].add(134.5+-325)
        y: [0,0,40,40].add(-80)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 90+270              
    transistor80:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 160
        z: 0
      position:
        x: [0,0,0,0].add(138.5+-224)
        y: [0,0,40,40].add(250+-40)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55+270 
    transistor81:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(150+-30)
        y: [0,0,50,50].add(105)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 15+180
    transistor82:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(-15)
        y: [30,30,120,120].add(190)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55+180      
    transistor83:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 325
        z: 0
      position:
        x: [0,0,0,0].add(134.5+-649)
        y: [0,0,40,40].add(244)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 90+180              
    transistor84:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 160
        z: 0
      position:
        x: [0,0,0,0].add(138.5+-262.5)
        y: [0,0,40,40].add(430)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55+180 
    transistor85:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0
        z: 0
      position:
        x: [0,0,0,0].add(150+-30)
        y: [0,0,50,50].add(105)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 15+90
    transistor86:
      section_segments: [45,135,225,315]
      offset:
        x: 0
        y: 0.5
        z: 0
      position:
        x: [0,0,0,0].add(-15)
        y: [30,30,120,120].add(190)
        z: [0,0,0,0]
      width: [0,4,4,0]
      height: [0,30,30,0]
      texture: [4]
      angle: 55+90      
    inductors:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -410
      position:
        x: [10,10,10,10,10,10,10,10,10,10]
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.5)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.5)
      texture: [4,17,4,4,4,17,4]      
      vertical: true
    inductors2:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -355
      position:
        x: [60,60,60,60,60,60,60,60,60,60]
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      texture: [4,17,4,4,4,17,4]      
      vertical: true      
    inductors3:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -215
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(10)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.6)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.6)
      texture: [4,17,4,4,4,17,4]      
      vertical: true        
    inductors4:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -260
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(42)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      texture: [4,17,4,4,4,17,4]      
      vertical: true      
    inductors5:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -372
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(142)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      texture: [4,17,4,4,4,17,4]      
      vertical: true      
    inductors6:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -157
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(-62)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      texture: [4,17,4,4,4,17,4]      
      vertical: true       
    inductors7:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -241
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(-106)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      texture: [4,17,4,4,4,17,4]      
      vertical: true         
    inductors8:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -392
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(-163)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      texture: [4,17,4,4,4,17,4]      
      vertical: true       
    inductors9:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -295
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(-155)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.2)
      texture: [4,17,4,4,4,17,4]      
      vertical: true       
    inductors10:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -212
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(136)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      texture: [4,17,4,4,4,17,4]      
      vertical: true               
    inductors11:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -342
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(185)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.3)
      texture: [4,17,4,4,4,17,4]      
      vertical: true      
    inductors12:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 410
      position:
        x: [10,10,10,10,10,10,10,10,10,10]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [15,15,15,21,21,21,21,21,15,15]
      height: [15,15,15,21,21,21,21,21,15,15]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors13:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 355
      position:
        x: [60,60,60,60,60,60,60,60,60,60]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors14:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 215
      position:
        x: [50,50,50,50,50,50,50,50,50,50]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      height: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors15:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 260
      position:
        x: [82,82,82,82,82,82,82,82,82,82]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors16:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 372
      position:
        x: [182,182,182,182,182,182,182,182,182,182]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors17:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 157
      position:
        x: [-22,-22,-22,-22,-22,-22,-22,-22,-22,-22]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors18:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 241
      position:
        x: [-66,-66,-66,-66,-66,-66,-66,-66,-66,-66]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors19:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 392
      position:
        x: [-123,-123,-123,-123,-123,-123,-123,-123,-123,-123]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors20:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 295
      position:
        x: [-115,-115,-115,-115,-115,-115,-115,-115,-115,-115]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors21:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 212
      position:
        x: [176,176,176,176,176,176,176,176,176,176]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      height: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors22:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 342
      position:
        x: [225,225,225,225,225,225,225,225,225,225]
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors23:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [10,10,10,10,10,10,10,10,10,10].add(-420)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(10)
      width: [15,15,15,21,21,21,21,21,15,15]
      height: [15,15,15,21,21,21,21,21,15,15]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors24:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [60,60,60,60,60,60,60,60,60,60].add(-415)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(60)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors25:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [50,50,50,50,50,50,50,50,50,50].add(-265)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(50)
      width: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      height: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors26:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [82,82,82,82,82,82,82,82,82,82].add(-260+-82)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(82)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors27:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [182,182,182,182,182,182,182,182,182,182].add(-372+-182)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(182)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors28:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-22,-22,-22,-22,-22,-22,-22,-22,-22,-22].add(-157+22)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-22)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors29:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-66,-66,-66,-66,-66,-66,-66,-66,-66,-66].add(-241+66)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-66)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors30:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-123,-123,-123,-123,-123,-123,-123,-123,-123,-123].add(-392+123)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-124)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors31:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-115,-115,-115,-115,-115,-115,-115,-115,-115,-115].add(-295+115)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-115)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors32:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [176,176,176,176,176,176,176,176,176,176].add(-212+-176)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(176)
      width: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      height: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors33:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(-342+-225)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(225)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors34:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [10,10,10,10,10,10,10,10,10,10].add(400)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-10)
      width: [15,15,15,21,21,21,21,21,15,15]
      height: [15,15,15,21,21,21,21,21,15,15]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors35:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [60,60,60,60,60,60,60,60,60,60].add(415-120)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-60)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors36:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [50,50,50,50,50,50,50,50,50,50].add(265-100)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-50)
      width: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      height: [16,16,16,22.4,22.4,22.4,22.4,22.4,16,16]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors37:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [82,82,82,82,82,82,82,82,82,82].add(260+-82)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-82)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors38:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [182,182,182,182,182,182,182,182,182,182].add(372+-182)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-182)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors39:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-22,-22,-22,-22,-22,-22,-22,-22,-22,-22].add(157+22)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(22)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors40:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-66,-66,-66,-66,-66,-66,-66,-66,-66,-66].add(241+66)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(66)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors41:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-123,-123,-123,-123,-123,-123,-123,-123,-123,-123].add(392+123)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(124)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors42:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [-115,-115,-115,-115,-115,-115,-115,-115,-115,-115].add(295+115)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(115)
      width: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      height: [12,12,12,16.8,16.8,16.8,16.8,16.8,12,12]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors43:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [176,176,176,176,176,176,176,176,176,176].add(212+-176)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-176)
      width: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      height: [11,11,11,15.4,15.4,15.4,15.4,15.4,11,11]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180
    inductors44:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(342+-225)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-225)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180      
    inductors45:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(-322+-225)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-226)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180          
    inductors46:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -132
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(122)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      texture: [4,17,4,4,4,17,4]      
      vertical: true      
    inductors47:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: -160
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(132+-302)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3).add(0)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      texture: [4,17,4,4,4,17,4]      
      vertical: true         
    inductors48:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(-322+325)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(-325)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180     
    inductors49:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: 130
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(132+-332)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3).add(0)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      texture: [4,17,4,4,4,17,4]      
      vertical: true         
    inductors50:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(-225+325)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(225)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180     
    inductors51:
      section_segments: 16
      offset:
        x: 0
        y: 0.2
        z: 160
      position:
        x: [40,40,40,40,40,40,40,40,40,40].add(-242+332)
        y: [7,7,0,0,0,2,6,7,7,7].mult(3).add(0)
        z: [0,0,0,0,0,0,0,0,0,0]
      width: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      height: [10,10,10,14,14,14,14,14,10,10].mult(1.1)
      texture: [4,17,4,4,4,17,4]      
      vertical: true         
    inductors52:
      section_segments: 16
      offset:
        x: 0
        y: 21
        z: 0
      position:
        x: [225,225,225,225,225,225,225,225,225,225].add(-95+-325)
        y: [21,21,0,0,0,6,18,21,21,21].mult(2)
        z: [0,0,0,0,0,0,0,0,0,0].add(260)
      width: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      height: [13,13,13,18.2,18.2,18.2,18.2,18.2,13,13]
      texture: [4,17,4,4,4,17,4]
      vertical: true
      angle: 180        


       

      
