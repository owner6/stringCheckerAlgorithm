const stringChecker = function(s, p1, p2) {
  const n = s.length
  const substr1 = p1.length // длина строки
  const substr2 = p2.length
  
  const matrix = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    matrix[i] = new Array(substr1 + 1);   //размер массива
    for (let j = 0; j <= substr1; j++) {
      matrix[i][j] = false;
    }
  }

  if (n !== substr1 + substr2) {
    return false
  }

  matrix[0][0] = true

  for (let j = 1; j <= substr1; j++) {
    matrix[0][j] = matrix[0][j - 1] && p1[j - 1] === s[j - 1];
  }

  for (let i = 1; i <= substr2; i++) {
    matrix[i][0] = matrix[i - 1][0] && p2[i - 1] === s[i - 1];
  }

  for (let i = 1; i <= substr2; i++) {
    for (let j = 1; j <= substr1; j++) {
      matrix[i][j] = (matrix[i - 1][j] && p2[i - 1] === s[i + j - 1]) || (matrix[i][j - 1] && p1[j - 1] === s[i + j - 1]);
    }
  }
  return matrix[substr2][substr1];
};

console.log(stringChecker('radency', 'rdnc', 'aey')); 

console.log(
  'має повернути true',
  stringChecker('radency', 'rdnc', 'aey')
)

console.log(
  'має повернути false для порожніх вхідних даних',
  stringChecker('radency', '', '')
)

console.log(
  'має повернути false якщо використано не всі літери',
  stringChecker('radency', 'rdnc', 'aeyt')
)

console.log(
  'має повернути false якщо не вистачило літер щоб зібрати слово',
  stringChecker('radency', 'rdn', 'aey')
)

console.log(
  'має повернути false якщо неправильний порядок',
  stringChecker('radency', 'rncd', 'aey')
)

console.log(
  'цікавий сценарій, expect true: ',
  stringChecker('monitor', 'mor', 'onit')
)

console.log(
  'цікавий сценарій 2, expect true: ',
  stringChecker('monitor', 'monit', 'or')
)