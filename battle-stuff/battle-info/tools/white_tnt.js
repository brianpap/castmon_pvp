function wboom() {
  cords[corde + 10] = 'f'
  cords[corde + 9] = 'f'
  cords[corde + 11] = 'f'
  cords[corde + 1] = 'f'
  cords[corde - 10] = 'f'
  cords[corde - 11] = 'f'
  cords[corde - 12] = 'f'
  cords[corde - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "white"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "black"
    }
  }
}
function wboomo() {
  cords[corde2 + 10] = 'f'
  cords[corde2 + 9] = 'f'
  cords[corde2 + 11] = 'f'
  cords[corde2 + 1] = 'f'
  cords[corde2 - 10] = 'f'
  cords[corde2 - 11] = 'f'
  cords[corde2 - 12] = 'f'
  cords[corde2 - 1] = 'f'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "white"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "black"
    }
  }
}
