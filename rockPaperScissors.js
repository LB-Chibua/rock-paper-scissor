// This progam is a rock, paper scissors game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// Function to allow users to choose ‘rock’, ‘paper’, or ‘scissors’ 
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock') {
    return 'rock'
  } else if (userInput === 'paper') {
    return 'paper'
  } else if (userInput === 'scissors') {
    return 'scissors'
  } else if (userInput === 'bomb') {
      return 'bomb'
  } else {
    console.log('error message')
  }
}
 getUserChoice('rock');

// Function to allow computer choice
 const getComputerChoice = () => {
   const computerChoice = Math.floor((Math.random() * 3))
   if (computerChoice === 0 ) {
     return 'rock'
   } else if (computerChoice === 1 ) {
     return 'paper'
   } else {
     return 'scissor'
   }
 }

getComputerChoice();

// Function to determine the winner
const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie'
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won'
    } else {
      return 'user won'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'computer won'
    } else {
      return 'user won'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won'
    } else {
      return 'user won' 
    }
  } else if (userChoice === 'bomb') {
    return 'user won'
  }
}


// Function to play the Game
const playGame = () => {
  const userChoice = getUserChoice('bomb')
  console.log('User choice: ' + userChoice)
  const computerChoice = getComputerChoice()
  console.log('Computer choice: ' + computerChoice)
  const winner = determineWinner(userChoice,computerChoice)
  console.log(winner)
}

playGame()

 