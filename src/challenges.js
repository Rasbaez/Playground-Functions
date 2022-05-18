// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  let result = num1 && num2 === true ? true : false;

  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  const area = (base * height) / 2;

  return area;

}

// Desafio 3
function splitSentence(str) {
  // seu código aqui

  const strSeparator = str.split(' ');

  return strSeparator;
}

// Desafio 4
function concatName(arr) {
  // seu código aqui


  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const numbers = [];
  numbers.push(wins, ties);

  const calcWins = numbers.reduce((value) => value * 3);
  const result = calcWins && ties === 0 ? 0 : calcWins + ties;
  return result;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
