// let userChoose = prompt();
// userChoose = userChoose.toLowerCase();

// if (userChoose !== "rock" && userChoose !== "paper" && userChoose !== "scissor") {
//     alert("Enter the correct values")
// } else {
//         let computerChoose = Math.floor(Math.random() * 3);
//         computerChoose += 1
//         switch(computerChoose){
//             case 1:
//                 computerChoose = "rock";
//                 if(userChoose == "paper"){
//                     console.log(computerChoose)
//                     alert("you win");
//                 } else if (userChoose == "scissor"){
//                     console.log(computerChoose)
//                     alert("you lose");
//                 } else {
//                     console.log(computerChoose)
//                     alert("draw");
//                 }
//                 break;
//             case 2:
//                 computerChoose = "paper";
//                 if(userChoose == "scissor"){
//                     console.log(computerChoose)
//                     alert("you win");
//                 } else if (userChoose == "rock"){
//                     console.log(computerChoose)
//                     alert("you lose");
//                 } else {
//                     console.log(computerChoose)
//                     alert("draw");
//                 }
//                 break
//             case 3:
//                 computerChoose = "scissor";
//                 if(userChoose == "rock"){
//                     console.log(computerChoose)
//                     alert("you win");
//                 } else if (userChoose == "scissor"){
//                     console.log(computerChoose)
//                     alert("you lose");
//                 } else {
//                     console.log(computerChoose)
//                     alert("draw");
//                 }
//                 break;
//             default:  alert("Enter the correct valuesss");
//         }
// }

let userChoose = prompt();
userChoose = userChoose.toLowerCase();

if (
  userChoose !== "rock" &&
  userChoose !== "paper" &&
  userChoose !== "scissor"
) {
  alert("Enter the correct values");
} else {
  let computerChoose = Math.floor(Math.random() * 3);
  computerChoose += 1;
  switch (computerChoose) {
    case 1:
      computerChoose = "rock";
      break;
    case 2:
      computerChoose = "paper";
      break;
    case 3:
      computerChoose = "scissor";
      break;
    default:
      alert("Enter the correct valuesss");
  }

  const isPalyerWon =
    (userChoose == "scissor" && computerChoose == "paper") ||
    (userChoose == "rock" && computerChoose == "scissor") ||
    (userChoose == "paper" && computerChoose == "rock");
  if (isPalyerWon) {
    console.log(isPalyerWon);
    console.log(computerChoose);
    alert("you win");
  } else if (userChoose == computerChoose) {
    console.log(computerChoose);
    console.log(isPalyerWon);
    alert("draw");
  } else {
    console.log(isPalyerWon);
    console.log(computerChoose);
    alert("you lose");
  }
}


// tomorow