    var x = 90
    var y = 0
    var pos = 10
    var fin = 1
    var i = pos
    const feld=[0,"f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    for (var i = 0; i < feld.length; i++) {
      if(feld[i] == "t"){
        document.getElementsByClassName("c")[i].style.fill = "black"
      }else{
        document.getElementsByClassName("c")[i].style.fill = "white"
      }
    }
    function ai_move() {
      if(feld[pos+1] == "f" && pos%10 <  fin%10  && pos%10 != 0){
        feld[pos]="d"
        pos+=1;

        x += 10
        document.getElementById("pl").setAttribute("x",x+"%")

      }else if(feld[pos-11] == "f" && pos%10 == fin%10  && pos > 10){
        feld[pos]="d"
        pos-=11;

        y -= 10
        document.getElementById("pl").setAttribute("y",y+"%")

      }else if(feld[pos-1] == "f" && pos%10 > fin%10  && pos%10 != 1 ){
        feld[pos]="d"
        pos-=1;

        x -= 10
        document.getElementById("pl").setAttribute("x",x+"%")

      }else if(feld[pos+10] == "f" && pos%10 == fin%10  && pos < 90){
        feld[pos]="d"
        pos+=10;

        y += 10
        document.getElementById("pl").setAttribute("y",y+"%")

      }else if(feld[pos+1] == "f"  && pos%10 != 0){
        feld[pos]="d"
        pos+=1;

        x += 10
        document.getElementById("pl").setAttribute("x",x+"%")

      }else if(feld[pos-11] == "f" && pos > 10){
        feld[pos]="d"
        pos-=11;

        y -= 10
        document.getElementById("pl").setAttribute("y",y+"%")

      }else if(feld[pos-1] == "f" && pos%10 != 1){
        feld[pos]="d"
        pos-=1;

        x -= 10
        document.getElementById("pl").setAttribute("x",x+"%")

      }else if(feld[pos+10] == "f" && pos < 90){
        feld[pos]="d"
        pos+=10;

        y += 10
        document.getElementById("pl").setAttribute("y",y+"%")

      }


    }
    setInterval(ai_move,500)








  //     if(d==1){document.querySelector('#svg-temp-obj2').style.transform= 'rotate(0deg)';
  //     y-=10
  //   document.getElementById("pl").setAttribute("y",y+"%")
  // }else if(d==3){document.querySelector('#svg-temp-obj2').style.transform= 'rotate(180deg)'
  //     y+=10
  //     x+=10
  //     document.getElementById("pl").setAttribute("y",y+"%")
  //     document.getElementById("pl").setAttribute("x",x+"%")
  //   }else if(d==4){
  //       document.querySelector('#svg-temp-obj2').style.transform= 'rotate(270deg)'
  //     }



setInterval(function() {
  atk2()

},500)
setInterval(function() {
  fin = pos2

},100)
