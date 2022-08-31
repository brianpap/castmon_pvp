let castmon = 1
if(castmon == 1) {

  document.getElementById("svg-temp").innerHTML += "<g id='svg-temp-obj'><rect width='10%' height='10%' fill='red' x=0 y=0></g>"
}
let castmon2 = 1
if(castmon2 == 1) {

  document.getElementById("svg-temp2").innerHTML += "<g id='svg-temp-obj2'><rect width='10%' height='10%' fill='red' x=0 y=0></g>"
}
let castmonAtk = CastmonStats[castmon][1]
let castmonHp = CastmonStats[castmon][2]
let castmonDef = CastmonStats[castmon][3]
let castmonCOF = CastmonStats[castmon][4]
let castmon2Atk = CastmonStats[castmon2][1]
let castmon2Hp = CastmonStats[castmon2][2]
let castmon2Def = CastmonStats[castmon2][3]
let castmon2COF = CastmonStats[castmon2][4]
