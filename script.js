var welcome = prompt('Welcome to the most awesome game of rock, paper scissor!\nchoose between 1. single round mode. or 2. best out of 3.', 'type "1" or "2"');
console.log(welcome);

var playersFirstAnswer = function () {
  return prompt('great! time to get started!\nchoose either "rock", "paper", or "scissor"', 'write answer here');
};

var playersAnswer = function () {
  return prompt('next round!\nchoose either "rock", "paper", or "scissor"', 'write answer here')
};

var botResult = "";
var playersWins = 0;
var botsWins = 0;

var botsAnswer = function () {
  var compAnswer =  Math.floor(Math.random() * 100);
  if (compAnswer > 1 && compAnswer < 33) {
    botResult = 'bot chooses scissors';
  } else if (compAnswer > 32 && compAnswer < 66) {
    botResult = 'bot chooses paper';
  } else { botResult = 'bot chooses rock'}
  return botResult;
};

var determineWinner = function () {
  var answer = playersFirstAnswer();
  console.log(botsAnswer());
  if (botResult === 'bot chooses scissors' && answer === "paper") {
    alert('bot chose scissors, bot wins');
    return botsWins += 1;} else if (botResult === 'bot chooses paper' && answer === "rock") {
    alert('bot chose paper, bot wins');
    return botsWins += 1;} else if (botResult === 'bot chooses rock' && answer === "scissor") {
    alert('bot chose rock, bot wins');
    return botsWins += 1;} else if (answer === "scissor" && botResult === 'bot chooses paper') {
    alert('bot chose paper, you win');
    return playersWins += 1;} else if (answer === "paper" && botResult === "bot chooses rock") {  
    alert('bot chose rock, you win');
    return playersWins += 1;} else if (answer === "rock" && botResult === 'bot chooses scissors') {
    alert('bot chose scissors, you win');
    return playersWins += 1;} else if (answer === "rock" && botResult === "bot chooses rock" || answer === "scissor" && botResult === "bot chooses scissors" || answer === "paper" && botResult === "bot chooses paper") {
    return alert("its a draw")} else {alert('not a valid answer, maybe check your spelling')}
    return botResult;
    };


var determineWinner2 = function () {
  determineWinner();
  alert('current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);
  while (botsWins < 2 && playersWins < 2) {
   var answer = playersAnswer();
  console.log(botsAnswer());
  if (botResult === 'bot chooses scissors' && answer === "paper") {
    botsWins += 1;
    alert('bot chose scissors, bot wins. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);
    } else if (botResult === 'bot chooses paper' && answer === "rock") {
    botsWins += 1;
    alert('bot chose paper, bot wins. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);} else if (botResult === 'bot chooses rock' && answer === "scissor") {
    botsWins += 1;
    alert('bot chose rock, bot wins. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);
    } else if (answer === "scissor" && botResult === 'bot chooses paper') { 
    playersWins += 1;
    alert('bot chose paper, you win. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);
    } else if (answer === "paper" && botResult === "bot chooses rock") { 
    playersWins += 1;
    alert('bot chose rock, you win. current tally: \nbot: ' + botsWins +'\nyou: ' + playersWins);
    } else if (answer === "rock" && botResult === 'bot chooses scissors') {
    playersWins += 1;
    alert('bot chose scissors, you win. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);
     } else if (answer === "rock" && botResult === "bot chooses rock" || answer === "scissor" && botResult === "bot chooses scissors" || answer === "paper" && botResult === "bot chooses paper") {
     alert('its a draw. current tally: \nbot: ' + botsWins + '\nyou: ' + playersWins);;} else {alert('not a valid answer, maybe check your spelling')};
   
  }if (botsWins === 2) {
     alert('bot won 2 times. better luck next time \nbot: ' + botsWins + '\nyou: ' + playersWins);;
     } else if (playersWins === 2) {
      alert('2 wins. congratulations!\nbot: ' + botsWins + '\nyou: ' + playersWins);
  };
};
  
var game = function () {
  if (welcome === '1') {
  determineWinner();
  } else if (welcome === '2') { 
  determineWinner2();
} else {
  alert('sorry, not a valid answer')}
};

game();
var response = confirm('Do you want to play again?');
if (response) {
 var welcome = prompt('Welcome to the most awesome game of rock, paper scissor!\nchoose between 1. single round mode. or 2. best out of 3.', 'type "1" or "2"');
  game();
} else {
  alert('sheesh, ok be like that, im not offended');
};