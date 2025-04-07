function negative (number){
    if (number > 0){
      return number * -1
    } else {
        return number;
    }
}

// best answer 
function makeNegative(num) {
    return num > 0 ? -num : num;
}

function makeNegative(num) {
    return num < 0 ? num : -num;
}

function makeNegative(num) {
    return -Math.abs(num);
}