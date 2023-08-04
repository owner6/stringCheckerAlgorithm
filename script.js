const stringChecker = function(s, p1, p2) {
  let n = 0;
  let subStr1 = 0;
  let subStr2 = 0;

  while (n < s.length) {
    if (subStr1 < p1.length && p1[subStr1] === s[n]) {
      subStr1++;
    } else if (subStr2 < p2.length && p2[subStr2] === s[n]) {
      subStr2++;
    } else {
      return false;
    }
    n++;
  }
  
  return subStr1 === p1.length && subStr2 === p2.length;
};

console.log(stringChecker('radency', 'rdnc', 'aey'));

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