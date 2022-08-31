function atk() {
  if (corde == corde2){
    castmon2Hp -= (castmonAtk - castmon2Def);
    if(castmon2Hp >= 0){
      alert("you win")
      window.location = 'https://brianpap.github.io/castmon_pvp_downlod_files/';
    }
  }
}
function atk2() {
  if (corde == corde2){
    castmonHp -= (castmon2Atk - castmonDef);
    if(castmon2Hp >= 0){
      alert("you lose")
      window.location = 'https://brianpap.github.io/castmon_pvp_downlod_files/';
    }
  }
}
