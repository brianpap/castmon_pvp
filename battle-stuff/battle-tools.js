
for (var i = 0; i < card_ids.length; i++) {
  if(card_ids[i] == 0) {
    document.getElementById("toolbar").innerHTML += "<svg onclick='trap()' viewBox='0 0 100 100' width='3%' height='3%'><path d='m 50 75 a 10 10 0 0 0 10 -10 l 0 -30 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 l 0 30 a 10 10 0 0 0 10 10 m 0 -30 a 10 10 0 0 0 10 -10 a 10 10 0 0 0 -10 -10 a 10 10 0 0 0 -10 10 a 10 10 0 0 0 10 10 m 0 -10 l 0 -20' fill='red' stroke-width='1' stroke='black'/></svg>"
  }
}
