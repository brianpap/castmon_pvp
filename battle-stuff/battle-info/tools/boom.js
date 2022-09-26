function boomo() {
  feld[pos + 10] = 'f'
  feld[pos + 9] = 'f'
  feld[pos + 11] = 'f'
  feld[pos + 1] = 'f'
  feld[pos - 10] = 'f'
  feld[pos - 11] = 'f'
  feld[pos - 12] = 'f'
  feld[pos - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "white"
    }
  }
}
function boom() {
  feld[pos2 + 10] = 'f'
  feld[pos2 + 9] = 'f'
  feld[pos2 + 11] = 'f'
  feld[pos2 + 1] = 'f'
  feld[pos2 - 10] = 'f'
  feld[pos2 - 11] = 'f'
  feld[pos2 - 12] = 'f'
  feld[pos2 - 1] = 'f'
  for (var i = 0; i < feld.length; i++) {
    if(feld[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "black"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "white"
    }
  }
}
