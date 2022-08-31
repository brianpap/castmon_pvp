var cord = 9
var corde = 10
var x = 90
var y = 0
let d = 1
var coins = 0
function show() {
  document.getElementById("stats").style.display = "block"
}
const cords = ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
for (var i = 0; i < cords.length; i++) {
  if(cords[i] == "t"){
    document.getElementById("c"+(i+1)).style.fill = "white"
  }
}
function st() {

  if(corde <= 10){
    d=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=2
    }else{
      d=4
    }
  }

}
function lt() {

  if(corde==100){
    d=3
  }else if(corde==91){
    d=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=3
    }else{
      d=1
    }
  }
}
function bt() {

  if(corde<=10){
    d=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=2
    }else{
      d=4
    }
  }
}
function rt() {

  if(corde==10){
    d=3
  }else if(corde==1){
    d=1
  }else if(corde%10 == 0){
    d=3
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=3
    }else{
      d=1
    }
  }
}
function move() {
  if(corde%10 != 0){
  cord+=1
  corde+=1
  x += 10
  document.getElementById("pl").setAttribute("x",x)
}else{
  if(corde==10){
    d=2
  }else if(corde==1){
    d=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=2
    }else{
      d=4
    }
    if(corde<=100&&corde>=91){
      d=4
    }
  }

}
}
function moveb() {
  if(corde!=1&&corde!=11&&corde!=21&&corde!=31&&corde!=41&&corde!=51&&corde!=61&&corde!=71&&corde!=81&&corde!=81&&corde!=91){
  cord-=1
  corde-=1
  x -= 10
  document.getElementById("pl").setAttribute("x",x)
}else{
  if(corde==10){
    d=2
  }else if(corde==1){
    d=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=2
    }else{
      d=4
    }
  }

}
}
function movel() {
  if(corde < 91){
  cord+=10
  corde+=10
  y += 10
  document.getElementById("pl").setAttribute("y",y)
}else{
  if(corde==100){
    d=3
  }else if(corde==91){
    d=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=3
    }else{
      d=1
    }
  }

}
}
function mover() {
  if(corde > 10){
  cord-=10
  corde-=10
  y -= 10
  document.getElementById("pl").setAttribute("y",y)
}else{
  if(corde==10){
    d=3
  }else if(corde==1){
    d=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d=3
    }else{
      d=1
    }
  }

}
}
setInterval(function(){
  const ai_code = [[cords[corde],"f",1,move,st],[cords[corde + 10],"f",2,movel,lt],[cords[corde - 2],"f",3,moveb,bt],[cords[corde - 11],"f",4,mover,rt]]
  for (var i = 0; i < ai_code.length; i++) {
    if(ai_code[i][0] == ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][3]()
    }else if(ai_code[i][0] != ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][4]()
    }
  }
},500)
setInterval(function() {
  atk2()
},50)
