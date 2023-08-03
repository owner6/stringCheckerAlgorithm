const stringChecker = function(s, p1, p2) {
  n = 0;
  subStr1 = 0;
  subStr2 = 0;

  while (n < s.length) {
    if (subStr1 < p1.length && p1[subStr1] === s[n]) {
      subStr1++
  } else if (subStr2 < p2.length && p2[subStr2] === s[n]) {
      subStr2++
  } else {
      return false;
    } 
  n++
  }
  return subStr1 === p1.length && subStr2 === p2.length 
}

const result = stringChecker('radency', 'rdnc', 'aey')

console.log(result)