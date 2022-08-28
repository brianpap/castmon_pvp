var cord = 0
var corde = 1
var x = 0
var y = 0
const d = [1,3]
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
function st(e) {

  if(corde <= 10){
    d[e]=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=2
    }else{
      d[e]=4
    }
  }

}
function lt(e) {

  if(corde==100){
    d[e]=3
  }else if(corde==91){
    d[e]=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=3
    }else{
      d[e]=1
    }
  }
}
function bt(e) {

  if(corde<=10){
    d[e]=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=2
    }else{
      d[e]=4
    }
  }
}
function rt(e) {

  if(corde==10){
    d[e]=3
  }else if(corde==1){
    d[e]=1
  }else if(corde%10 == 0){
    d[e]=3
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=3
    }else{
      d[e]=1
    }
  }
}
function move(id,e) {
  if(corde%10 != 0){
  cord+=1
  corde+=1
  x += 10
  document.getElementById(id).setAttribute("x",x)
}else{
  if(corde==10){
    d[e]=2
  }else if(corde==1){
    d[e]=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=2
    }else{
      d[e]=4
    }
    if(corde<=100&&corde>=91){
      d[e]=4
    }
  }

}
}
function moveb(id,e) {
  if(corde!=1&&corde!=11&&corde!=21&&corde!=31&&corde!=41&&corde!=51&&corde!=61&&corde!=71&&corde!=81&&corde!=81&&corde!=91){
  cord-=1
  corde-=1
  x -= 10
  document.getElementById(id).setAttribute("x",x)
}else{
  if(corde==10){
    d[e]=2
  }else if(corde==1){
    d[e]=2
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=2
    }else{
      d[e]=4
    }
  }

}
}
function movel(id,e) {
  if(corde < 91){
  cord+=10
  corde+=10
  y += 10
  document.getElementById(id).setAttribute("y",y)
}else{
  if(corde==100){
    d[e]=3
  }else if(corde==91){
    d[e]=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=3
    }else{
      d[e]=1
    }
  }

}
}
function mover(id,e) {
  if(corde > 10){
  cord-=10
  corde-=10
  y -= 10
  document.getElementById(id).setAttribute("y",y)
}else{
  if(corde==10){
    d[e]=3
  }else if(corde==1){
    d[e]=1
  }else{
    var c = Math.floor(Math.random*2)
    if(c==1){
      d[e]=3
    }else{
      d[e]=1
    }
  }

}
}
setInterval(function(){
  const ai_code = [[cords[corde],"f",1,move,st],[cords[corde + 10],"f",2,movel,lt],[cords[corde - 2],"f",3,moveb,bt],[cords[corde - 11],"f",4,mover,rt]]
  for (var i = 0; i < ai_code.length; i++) {
    if(ai_code[i][0] == ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][3]("pl",0)
    }else if(ai_code[i][0] != ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][4](0)
    }
  }
},500)
setInterval(function(){
  const ai_code = [[cords[corde],"f",1,move,st],[cords[corde + 10],"f",2,movel,lt],[cords[corde - 2],"f",3,moveb,bt],[cords[corde - 11],"f",4,mover,rt]]
  for (var i = 0; i < ai_code.length; i++) {
    if(ai_code[i][0] == ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][3]("pl1",1)
    }else if(ai_code[i][0] != ai_code[i][1] && d == ai_code[i][2]){
      ai_code[i][4](1)
    }
  }
},500)
function chat() {
    let input = document.getElementById("chat_in").value;
    input.split(/[.,!,?, ]/);
    if(input=="hi"||input=="Hi"||input=="hI"||input=="HI"){}
}
