function trapo() {
  feld[corde2 + 10] = 't'
  feld[corde2 + 9] = 't'
  feld[corde2 + 11] = 't'
  feld[corde2 + 1] = 't'
  feld[corde2 - 10] = 't'
  feld[corde2 - 11] = 't'
  feld[corde2 - 12] = 't'
  feld[corde2 - 1] = 't'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "black"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "white"
    }
  }
}
function trap() {
  feld[corde + 10] = 't'
  feld[corde + 9] = 't'
  feld[corde + 11] = 't'
  feld[corde + 1] = 't'
  feld[corde - 10] = 't'
  feld[corde - 11] = 't'
  feld[corde - 12] = 't'
  feld[corde - 1] = 't'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "black"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "white"
    }
  }
}
