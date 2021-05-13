var welcome = prompt('Welcome to the most awesome game of rock, paper scissor!\nchoose between 1. single round mode. or 2. best out of 3.', 'type 1 or 2');
console.log(welcome);

var playersAnswer = prompt('great! time to get started!\nchoose either "rock", "paper", or "scissor"', 'write answer here');

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
    return alert('bot chose scissors, bot wins')} else if (botResult === 'bot chooses paper' && playersAnswer === "rock") {
      return alert('bot chose paper, bot wins')} else if (botResult === 'bot chooses rock' && playersAnswer === "scissor") {
        return alert('bot chose rock, bot wins')} else if (playersAnswer === "scissor" && botResult === 'bot chooses paper') {
          return alert('bot chose paper, you win')} else if ( playersAnswer === "paper" && botResult === "bot chooses rock") {
            return alert('bot chose rock, you win')} else if (playersAnswer === "rock" && botResult === 'bot chooses scissors') {
              return alert('bot chose scissors, you win')} else {
                return alert("its a draw")};
};

if (welcome === '1') {
  console.log(playersAnswer);
  console.log(determineWinner());
  };