function solution(roman) {
  if (!roman) return 0;
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;
  for (let i = 0; i < roman.length; i++) {
    const value = data[roman[i]];
    const big = data[roman[i + 1]];

    if (value < big) {
      number -= value;
    } else {
      number += value;
    }
  }
  return number;
}

solution("CDI");
// solution('I');
// solution('IV');
// solution('MMVIII');
// solution('MDCLXVI');

// 1
function solution(roman) {
  var value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return roman
    .split("")
    .map((d) => value[d])
    .reduce((s, v, i, o) => s + (o[i + 1] > v ? -v : v), 0);
}

// 2
function solution(roman) {
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return roman.split("").reduce((acc, cur, i, arr) => {
    return i !== arr.length - 1 && romanMap[cur] < romanMap[arr[i + 1]]
      ? acc - romanMap[cur]
      : acc + romanMap[cur];
  }, 0);
}
