function atk() {
  if (corde == corde2){
    castmon2Hp -= (castmonAtk - castmon2Def);
    if(castmon2Hp >= 0){
      alert("you win")
      window.location = 'http://localhost/index.html#?options=go_here';
    }
  }
}
function atk2() {
  if (corde == corde2){
    castmonHp -= (castmon2Atk - castmonDef);
    if(castmon2Hp >= 0){
      alert("you lose")
      window.location = 'file:///C:/Users/MaxTh/api/Locker/3d/castmon%20api/castmon%20game/folder.html/index.html';
    }
  }
}
