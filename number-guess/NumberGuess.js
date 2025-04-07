const randomNumber = Math.ceil(Math.random() * 100);
let numberGuess = 0;
console.log(randomNumber);

const user = () => {
  const userChoice = prompt("please enter your number:");

  if (userChoice == null) return;
  const valid = validation(userChoice);
  if (valid) {
    return user();
  }

  console.log(userChoice);

  if (numberGuess >= 10) {
    console.log("game over");
    return;
  } else {
    choice(userChoice);
  }
};

const validation = (value) => {
  if (isNaN(value)) {
    return "please enter correct number";
  } else if (value < 1 || value > 100) {
    return "enter number between 1 to 100";
  }
};

const choice = (value) => {
  numberGuess++;
  if (value == randomNumber) {
    console.log("you win!");
  } else if (value < randomNumber) {
    console.log("choice bigger number");
    user();
  } else {
    console.log("choice smaller number");
    user();
  }
};

user();
