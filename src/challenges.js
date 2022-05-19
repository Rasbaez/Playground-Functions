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
function highestCount(arr) {
  // seu código aqui
  const findMaxNumber = Math.max(...arr);
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === findMaxNumber) {
      count += 1;
    }

  }

  return count;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const cat1FromMouse = Math.abs(cat1 - mouse);
  const cat2FromMouse = Math.abs(cat2 - mouse);

 
  if (cat1FromMouse > cat2FromMouse) {
    return 'cat2';
  }
  if (cat1FromMouse < cat2FromMouse) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
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
