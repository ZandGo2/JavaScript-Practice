function solution(list) {
  const allList = list.sort((a, b) => a - b);
  const result = [];
  let acc = [];

  allList.forEach((element, index) => {
    if (acc.length === 0) {
      acc.push(element);
    } else if (element - allList[index - 1] === 1) {
      acc.push(element);
    } else {
      if (acc.length >= 3) {
        result.push(`${acc[0]}-${acc[acc.length - 1]}`);
      } else {
        result.push(acc);
      }
      acc = [element];
    }
  });

  if (acc.length >= 3) {
    result.push(`${acc[0]}-${acc[acc.length - 1]}`);
  } else {
    result.push(acc);
  }

  return result.join(",");
}

solution([-10, -9, -8, -6]);


// best anwer
function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + "-" + list[j]);
  }
  return list.join();
}

//
solution = (list) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString();
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
      return acc + "-" + curr;
    return acc + "," + curr;
});

//
function solution(nums) {
  nums = nums.map((v, i) =>
    nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? "-" : v
  );
  return nums
    .filter((v, i) => v != "-" || nums[i - 1] != "-")
    .join(",")
    .replace(/,-,/g, "-");
}

//
function solution(list) {
  return list
    .map((num, i) => {
      let next = list[i + 1],
        previous = list[i - 1];
      return Math.abs(next - num) == 1 && Math.abs(num - previous) == 1
        ? "-"
        : num;
    })
    .toString()
    .replace(/(,-)+,/g, "-");
}