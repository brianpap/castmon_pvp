function trap() {
  cords[corde2 + 10] = 't'
  cords[corde2 + 9] = 't'
  cords[corde2 + 11] = 't'
  cords[corde2 + 1] = 't'
  cords[corde2 - 10] = 't'
  cords[corde2 - 11] = 't'
  cords[corde2 - 12] = 't'
  cords[corde2 - 1] = 't'
  for (var i = 0; i < cords.length; i++) {
    if(cords[i] == "t"){
      document.getElementById("c"+(i+1)).style.fill = "white"
    }else{
      document.getElementById("c"+(i+1)).style.fill = "black"
    }
  }
}
