function boomo() {
  feld[corde + 10] = 'f'
  feld[corde + 9] = 'f'
  feld[corde + 11] = 'f'
  feld[corde + 1] = 'f'
  feld[corde - 10] = 'f'
  feld[corde - 11] = 'f'
  feld[corde - 12] = 'f'
  feld[corde - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "black"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "white"
    }
  }
}
function boom() {
  feld[corde2 + 10] = 'f'
  feld[corde2 + 9] = 'f'
  feld[corde2 + 11] = 'f'
  feld[corde2 + 1] = 'f'
  feld[corde2 - 10] = 'f'
  feld[corde2 - 11] = 'f'
  feld[corde2 - 12] = 'f'
  feld[corde2 - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "black"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "white"
    }
  }
}
