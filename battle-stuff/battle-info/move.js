var pos2 = 1;
var x2 = 0;
var y2 = 0;
for (var i = 0; i < 100; i++) {
  document.getElementsByClassName("c")[i].setAttribute('onclick','fun('+i+')')
}

function fun(i){
  i++
  if(feld[pos2-11] != "t" && pos2%10 ==  i%10 && i < pos2 && pos2 > 10){
    pos2-= 11
    y2 -= 10
    document.getElementById("pl2").setAttribute("y",y2+"%")
  }else if(feld[pos2+10] != "t" && pos2%10 ==  i%10  && i > pos2){
    pos2+=10;
    y2 += 10
    document.getElementById("pl2").setAttribute("y",y2+"%")
  }else if(feld[pos2+1] != "t" && pos2%10 <  i%10){
    pos2+=1;
    x2 += 10
    document.getElementById("pl2").setAttribute("x",x2+"%")
  }else if(feld[pos2-1] != "t" && pos2%10 >  i%10){
    pos2--;
    x2 -= 10
    document.getElementById("pl2").setAttribute("x",x2+"%")
  }
}
1
