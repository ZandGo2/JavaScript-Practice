const numberArrsy = [4, 86, 22, 59, 34, 52];

const averageNumber = (number) => {
  if (number.length !== 0) {
    let average = 0;
    for (let i = 0; i < number.length; i++) {
      average += number[i];
    }
    average = average / number.length;
    console.log(average);
    return average;
  } else {
    return 0;
  }
};

averageNumber(numberArrsy);

// best solution
const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};

// 2 answer
const find_average = (array) =>
  array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
