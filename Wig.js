y = -10
z = -20
hair_color = 6
size = 2
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
return model =
  name: 'Wig'
  bodies:
    hair:
      vertical: !true
      angle: 180+184
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [-2,-0.8,0,0,0,0].mult(size)
        y: [-11,-9.5,-6,-3,-1,0].mult(size)
        z: [-3.0,-0.3,3,4.1,4.8,5].mult(size)
      width: [0,0.3,0.6,0.7,0.6,0].mult(size)
      height: [0,0.2,0.3,0.4,0.3,0].mult(size)
      texture: [hair_color]
    hair2:
      vertical: !true
      angle: 180+171
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [3.8,1.2,0.4,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-6,-3.3,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.3,1.5,1.6,1.65,1.5,1.1,0.3,0].mult(size)
      height: [0,0.2,0.3,0.4,0.3,0.3,0.3,0.2,0].mult(size)
      texture: [hair_color]
    hair3:
      vertical: !true
      angle: 180+205
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [-5,-2.9,-2,-1.1,-0.5,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-7,-3.7,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.15,1.4,1.5,1.6,1.4,1,0.4,0].mult(size)
      height: [0,0.2,1.3,1.4,1.3,0.8,0.5,0.2,0].mult(size)
      texture: [hair_color]
    hair4:
      vertical: !true
      angle: 180+190
      section_segments: 12
      offset:
        x: 0
        y: 2.1+y
        z: 14-z
      position:
        x: [-5,-2.9,-2,-1.1,-0.5,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-7,-3.7,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,0.8,1,1.2,1.3,1.2,1,0.4,0].mult(size)
      height: [0,0.2,0.3,0.4,0.3,0.3,0.3,0.2,0].mult(size)
      texture: [hair_color]
    hair5:
      vertical: !true
      angle: 180+160
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [5,2.9,2,1.1,0.5,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-7,-3.7,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.15,1.4,1.5,1.6,1.4,1,0.4,0].mult(size)
      height: [0,0.9,1.3,1.4,0.9,0.6,0.4,0.2,0].mult(size)
      texture: [hair_color]
    hair6:
      vertical: !true
      angle: 180+166.5
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [2,0.8,0,0,0,0].mult(size)
        y: [-11,-9.5,-6,-3,-1,0].mult(size)
        z: [-3.0,-0.3,3,4.1,4.8,5].mult(size)
      width: [0,0.3,0.6,0.7,0.6,0].mult(size)
      height: [0,0.2,0.3,0.4,0.3,0].mult(size)
      texture: [hair_color]
    hair7:
      vertical: !true
      angle: 180+190
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [-1.7,-0.5,-0.2,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-10,-4.5,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.2,1.4,1.6,1.65,1.5,1.1,0.3,0].mult(size)
      height: [0,2,1.1,1.2,1,0.7,0.5,0.2,0].mult(size)
      texture: [hair_color]
    hair8:
      vertical: !true
      angle: 180+152
      section_segments: 12
      offset:
        x: 0
        y: 2.1+y
        z: 14-z
      position:
        x: [5,2.9,2,1.1,0.5,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-7,-3.7,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,0.4,0.5,0.6,0.65,0.6,0.5,0.2,0].mult(size)
      height: [0,0.4,0.8,1.2,1.1,0.8,0.5,0.2,0].mult(size)
      texture: [hair_color]
    hair9:
      vertical: !true
      angle: 180+225
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [-4,-2.5,-1.5,-1.4,-1.3,-1.2,-1,-0.4,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-14,-8.3,-4,-0.4,1.2,3,4.3,5,5.1].mult(size)
      width: [0,1.6,2.5,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair10:
      vertical: !true
      angle: 180+135
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [1.8,0.5,0.3,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-8,-3.3,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.9,2.2,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,0.5,0.9,1.2,1.3,1.3,0.8,0.2,0].mult(size)
      texture: [hair_color]
    hair11:
      vertical: !true
      angle: 180+245
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [-0.7,-0.3,-0.1,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-10,-5.5,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0.1,0.4,0.6,0.7,0.85,0.9,1.1,0.3,0].mult(size)
      height: [0,0.3,0.3,0.4,0.4,0.3,0.3,0.2,0].mult(size)
      texture: [hair_color]
    hair12:
      vertical: !true
      angle: 180+105
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 15-z
      position:
        x: [-4,-2.5,-1.9,-1.5,-1.3,-1.2,-1,-0.4,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-17,-8.3,-4,-1.4,0.2,2,3.3,4,4.1].mult(size)
      width: [0.2,1.6,2.5,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair13:
      vertical: !true
      angle: 180+253
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14.5-z
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair14:
      vertical: !true
      angle: 180+263
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14.5-z
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11,-10.5,-9.5,-8.5,-6.5,-3.5,-1,0].mult(size)
        z: [-14,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].mult(size)
      width: [0,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair15:
      vertical: !true
      angle: 180+100
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11,-10,-9,-7,-4,-1,0].mult(size)
        z: [-8,-4.5,-2,-0.1,1.4,3,4.3,5,5.1].mult(size)
      width: [0,1.2,1.4,1.6,1.65,1.5,1.1,0.3,0].mult(size)
      height: [0,2,1.1,1.2,1,0.7,0.5,0.2,0].mult(size)
      texture: [hair_color]
    hair16:
      vertical: !true
      angle: 180+85
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14.5-z
      position:
        x: [-2,-1.1,-0.9,-0.5,-0.3,-0.2,0,0,0].mult(size)
        y: [-11.5,-11.3,-11.0,-10,-9,-8,-5,-3,-1].mult(size)
        z: [-19,-10.3,-6,-1.4,0.2,2,3.3,4,4.1].mult(size)
      width: [0.2,1.6,2.5,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair17:
      vertical: !true
      angle: 180+99
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-11.5,-11,-10.5,-9.5,-8.5,-6.5,-3.5,-1,0].mult(size)
        z: [-14,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].mult(size)
      width: [0,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair18:
      vertical: !true
      angle: 180+265
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 13-z
      position:
        x: [-2,-1.5,-1.3,-1.2,-1.3,-1.2,-1,-0.4,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-13,-8.3,-4,-0.4,1.2,3,4.3,5,5.1].mult(size)
      width: [0,1.6,2.5,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair19:
      vertical: !true
      angle: 180+185.5
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14-z
      position:
        x: [1.5,0.8,0,0,0,0].mult(size)
        y: [-11,-9.5,-6,-3,-1,0].mult(size)
        z: [-3.0,-0.3,3,4.1,4.8,5].mult(size)
      width: [0.1,0.3,0.6,0.7,0.6,0].mult(size)
      height: [0,0.2,0.3,0.4,0.3,0].mult(size)
      texture: [hair_color]
    hair20:
      vertical: !true
      angle: 180+285
      section_segments: 12
      offset:
        x: 0.1
        y: 2+y
        z: 13-z+1
      position:
        x: [-2,-1.5,-1.3,-1.2,-1.3,-1.2,-1,-0.4,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-13,-8.3,-4,-0.4,1.2,3,4.3,5,5.1].mult(size)
      width: [0,1.6,2.5,2.6,2.65,2.5,2.1,1.3,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]
    hair21:
      vertical: !true
      angle: 180+323
      section_segments: 12
      offset:
        x: 0.1
        y: 2+y
        z: 14.5-z-.5
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]      
    hair22:
      vertical: !true
      angle: 180+300
      section_segments: 12
      offset:
        x: -1
        y: 2+y+2
        z: 14.5-z
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].div(1.3).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].div(1.3).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(1.5).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color] 
    hair23:
      vertical: !true
      angle: 180+335
      section_segments: 12
      offset:
        x: 2.1
        y: 2+y+2
        z: 14.5-z-.5
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].div(1.3).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].div(1.3).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(2).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]  
    hair24:
      vertical: !true
      angle: 180+360
      section_segments: 12
      offset:
        x: 0
        y: 2+y
        z: 14.5-z-1
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(1).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].mult(1.06).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(2).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]   
    hair25:
      vertical: !true
      angle: 180+342
      section_segments: 12
      offset:
        x: 0.01
        y: 2+y
        z: 14.5-z-.5
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(1).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].div(1.06).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(1.2).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]       
    hair26:
      vertical: !true
      angle: 180+342
      section_segments: 12
      offset:
        x: 0.01
        y: 2+y
        z: 14.5-z-1
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].mult(1).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].div(1.06).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(1.2).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]  
    hair27:
      vertical: !true
      angle: 180+349
      section_segments: 12
      offset:
        x: 0.01
        y: 2+y+2.8
        z: 14.5-z-1
      position:
        x: [0,0,0,0,0,0,0,0,0].mult(size)
        y: [-12,-11.5,-11.0,-10,-9,-7,-4,-1,0].div(1.4).mult(size)
        z: [-20,-8.3,-4,-0.4,1.2,3,4.3,4.6,4.6].div(1.2).mult(size)
      width: [0.1,0.6,1,1.1,1,0.9,0.8,0.6,0].mult(1.2).mult(size)
      height: [0,2.2,2.3,1.6,1.3,0.8,0.6,0.2,0].mult(size)
      texture: [hair_color]        
