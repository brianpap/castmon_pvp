function atk() {
  if (pos == pos2){
    castmon2Hp -= (castmonAtk - castmon2Def);
    if(castmon2Hp >= 0){
      alert("you win")
      window.location = '../index.html';
    }
  }
}
function atk2() {
  if (pos == pos2){
    castmonHp -= (castmon2Atk - castmonDef);
    if(castmon2Hp >= 0){
      alert("you lose")
      window.location = '../index.html';
    }
  }
}
