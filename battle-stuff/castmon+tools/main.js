
var pos = 0;
if(card_ids[0]==1){
  document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 50 75 a 10 10 0 0 0 10 -10 l 0 -30 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 l 0 30 a 10 10 0 0 0 10 10 m 0 -30 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 m 0 -10 l 0 -20' fill='red' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
}
if(card_ids[0]==0){
  document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 40 0 l -40 40 l 60 0 l 40 -40 l -60 0 l -40 40' fill='white' stroke-width='1' stroke='black'/><path d='m 0 40 l 60 0 l 0 60 l -60 0 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 60 40 l 40 -40 l 0 60 l -40 40 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
}
function right() {
  if(card_ids[pos] != undefined){
    pos+= 1;

      if(card_ids[pos]==1){
        document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 50 75 a 10 10 0 0 0 10 -10 l 0 -30 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 l 0 30 a 10 10 0 0 0 10 10 m 0 -30 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 m 0 -10 l 0 -20' fill='red' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
      }
      if(card_ids[pos]==0){
        document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 40 0 l -40 40 l 60 0 l 40 -40 l -60 0 l -40 40' fill='white' stroke-width='1' stroke='black'/><path d='m 0 40 l 60 0 l 0 60 l -60 0 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 60 40 l 40 -40 l 0 60 l -40 40 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
      }

  }
}
function left() {
  if(card_ids[pos-1] != undefined){
    pos-= 1;
      if(card_ids[pos]==1){
        document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 50 75 a 10 10 0 0 0 10 -10 l 0 -30 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 l 0 30 a 10 10 0 0 0 10 10 m 0 -30 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 m 0 -10 l 0 -20' fill='red' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
      }
      if(card_ids[pos]==0){
        document.getElementById("tool").innerHTML="<svg style='position: absolute;left: 0;top: 0;' viewBox='0 0 100 100' width='100%' height='100%'><path d='m 40 0 l -40 40 l 60 0 l 40 -40 l -60 0 l -40 40' fill='white' stroke-width='1' stroke='black'/><path d='m 0 40 l 60 0 l 0 60 l -60 0 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 60 40 l 40 -40 l 0 60 l -40 40 l 0 -60' fill='white' stroke-width='1' stroke='black'/><path d='m 10 40 l -10 10 l 10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='left()' /><path d='m 90 40 l 10 10 l -10 10 l 0 -20' fill='white' stroke-width='1' stroke='black' onclick='right()' /></svg>"
      }

  }
}
