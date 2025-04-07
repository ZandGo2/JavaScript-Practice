const love = (flower1, flower2) => {
  const truthLove =
    (flower1 % 2 == 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 == 0);
  return truthLove ? true : false;
};

// best answer
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

//
let lovefunc1 = (f1, f2) => !!((f1 + f2) % 2);

//
const lovefunc2 = (flower1, flower2) => !!((flower1 ^ flower2) % 2);