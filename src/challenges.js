/* eslint-disable no-unused-expressions */
// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  let result = num1 && num2 === true ? true : false;

  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  const areaCalculator = (base * height) / 2;

  return areaCalculator;
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
  const concating = `${arr[arr.length - 1]}, ${arr[0]}`;

  return concating;
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
function fizzBuzz(arr) {
  // seu código aqui
  const valueConverter = arr.map((value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'fizzBuzz';
    }
    if (value % 5 === 0) {
      return 'buzz';
    }
    if (value % 3 === 0) {
      return 'fizz';
    }
    return 'bug!';
  });

  return valueConverter;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  const arrOfLetters = str.split('');


  const changeLetters = arrOfLetters.map(value =>
    value === 'a' ? 1 : value &&
    value === 'e' ? 2 : value &&
    value === 'i' ? 3 : value &&
    value === 'o' ? 4 : value &&
    value === 'u' ? 5 : value
  );

  const result = changeLetters.join('').replace();

  return result;

}

function decode(str) {
  // seu código aqui
  const arrOfLetters = str.split('');


  const changeLetters = arrOfLetters.map(value =>
    value === '1' ? 'a' : value &&
    value === '2' ? 'e' : value &&
    value === '3' ? 'i' : value &&
    value === '4' ? 'o' : value &&
    value === '5' ? 'u' : value
  );

  const result = changeLetters.join('').replace();

  return result;
}

// Desafio 10
function techList(arr, studant) {
  // seu código aqui

  const result = [];
  const sortedArr = arr.sort();

  for (let i = 0; i < sortedArr.length; i += 1) {
    result.push({
      tech: arr[i],
      name: studant,
    });
  }
  return result <= 0 ? 'Vazio!' : result;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
