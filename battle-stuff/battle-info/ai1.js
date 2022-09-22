    var x = 90
    var y = 0
    var pos = 10
    var fin = 1
    var i = pos
    const feld=[0,"f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
    for (var i = 0; i < feld.length; i++) {
      if(feld[i] == "t"){
        document.getElementById("c"+(i+1)).style.fill = "black"
      }else{
        document.getElementById("c"+(i+1)).style.fill = "white"
      }
    }
    function ai_move() {
      if(feld[pos+1] == "f" && pos%10 <  fin%10  && pos%10 != 0){
        feld[pos]="d"
        pos+=1;

        x += 10
        document.getElementById("pl").setAttribute("x",x+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos-11] == "f" && pos%10 == fin%10  && pos > 10){
        feld[pos]="d"
        pos-=11;

        y -= 10
        document.getElementById("pl").setAttribute("y",y+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos-1] == "f" && pos%10 > fin%10  && pos%10 != 1 ){
        feld[pos]="d"
        pos-=1;

        x -= 10
        document.getElementById("pl").setAttribute("x",x+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos+10] == "f" && pos%10 == fin%10  && pos < 90){
        feld[pos]="d"
        pos+=10;

        y += 10
        document.getElementById("pl").setAttribute("y",y+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos+1] == "f"  && pos%10 != 0){
        feld[pos]="d"
        pos+=1;

        x += 10
        document.getElementById("pl").setAttribute("x",x+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos-11] == "f" && pos > 10){
        feld[pos]="d"
        pos-=11;

        y -= 10
        document.getElementById("pl").setAttribute("y",y+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos-1] == "f" && pos%10 != 1){
        feld[pos]="d"
        pos-=1;

        x -= 10
        document.getElementById("pl").setAttribute("x",x+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
      }else if(feld[pos+10] == "f" && pos < 90){
        feld[pos]="d"
        pos+=10;

        y += 10
        document.getElementById("pl").setAttribute("y",y+"%")
        if(castmon2==1){
              document.getElementById("001").innerHTML = '<path d="m 50 43 l 15 -15 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 15 15 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              setTimeout(function(){
                  document.getElementById("001").innerHTML = '<path d="m 50 43 l 12 -18 l 0 -10 l -10 -10 m -15 37 l 0 -10 l -10 -10" fill="none" stroke="black" stroke-width=1 /><path d="m 60 40 a 40 30 0 0 0 -39 9 a 10 10 0 0 0 0 2 a 40 30 0 0 0 39 9" fill="lightblue" /><path d="M 30 43 l 10 10 l 5 0 l 0 8 a 40 30 0 0 0 10 0 l 0 -8 l 10 0 l 0 -12 a -40 -30 0 0 0 -35 2 M 0 0" fill="#3525A1"/><path d="m 75 25 a 1 1 0 0 0 0 50 a 1 1 0 0 0 0 -50" fill="lightblue"/><path d="m 50 57 l 12 18 l 0 10 l -10 10 m -15 -37 l 0 10 l -10 10" fill="none" stroke="black" stroke-width=1 /><path d="M 85 50 a 1 1 0 0 0 0 10 a 1 1 0 0 0 0 -10" /><path d="M 90 70 a 40 40 0 0 1 -10 -5" stroke="black" stroke-width="1" /><path d="M 90 45 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 70 70 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 60 50 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" /><path d="M 65 35 a 1 1 0 0 0 0 -5 a 1 1 0 0 0 0 5" fill="#5F2FB7" />'
              },250)
          }
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
