function random(max) {
  return Math.random()*max;
}

function mult(num1,num2,num3) {
  return num1 * num2 * num3;
}

module.exports = {
  random: random,
  mult: mult
}
