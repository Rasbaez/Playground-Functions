// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui           
  let count = 0;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (const number of arr) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        count += 1
      }
    }
    if (count > 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phone = '(' + arr[0] + arr[1] + ')' + ' ' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10];

  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  const extractedNumbers = /\d+/g;
  const arrString = str.match(extractedNumbers);
  const arrOfNumbers = arrString.map(Number);
  const total = arrOfNumbers.reduce((acc, curr) => acc + curr, 0);

  if (total > 1) {
    return `${total} copos de água`;
  }
  return `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
