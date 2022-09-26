function wboom() {
  cords[pos + 10] = 'f'
  cords[pos + 9] = 'f'
  cords[pos + 11] = 'f'
  cords[pos + 1] = 'f'
  cords[pos - 10] = 'f'
  cords[pos - 11] = 'f'
  cords[pos - 12] = 'f'
  cords[pos - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "white"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "black"
    }
  }
}
function wboomo() {
  cords[pos2 + 10] = 'f'
  cords[pos2 + 9] = 'f'
  cords[pos2 + 11] = 'f'
  cords[pos2 + 1] = 'f'
  cords[pos2 - 10] = 'f'
  cords[pos2 - 11] = 'f'
  cords[pos2 - 12] = 'f'
  cords[pos2 - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementsByClassName("c")[i].style.fill = "white"
    }else{
      document.getElementsByClassName("c")[i].style.fill = "black"
    }
  }
}
