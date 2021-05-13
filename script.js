var playersAnswer = prompt('Welcome to the most awesome game of rock, paper scissor!\nchoose either "rock", "paper", or "scissor"', 'write answer here');
console.log(playersAnswer);

var botResult = "";

var botsAnswer = function () {
  var compAnswer =  Math.floor(Math.random() * 100);
  if (compAnswer > 1 && compAnswer < 33) {
    botResult = 'bot chooses scissors';
  } else if (compAnswer > 32 && compAnswer < 66) {
    botResult = 'bot chooses paper';
  } else { botResult = 'bot chooses rock'};
  return botResult;
};

var determineWinner = function () {
  console.log(botsAnswer());
  if (botResult === 'bot chooses scissors' && playersAnswer === "paper") {
    return 'bot wins'} else if (botResult === 'bot chooses paper' && playersAnswer === "rock") {
      return 'bot wins'} else if (botResult === 'bot chooses rock' && playersAnswer === "scissor") {
        return 'bot wins'} else if (playersAnswer === "scissor" && botResult === 'bot chooses paper') {
          return 'you win'} else if ( playersAnswer === "paper" && botResult === "bot chooses rock") {
            return 'you win'} else if (playersAnswer === "rock" && botResult === 'bot chooses scissors') {
              return 'you win'} else {
                return "its a tie"};
};

console.log(determineWinner());