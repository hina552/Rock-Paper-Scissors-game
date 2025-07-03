function getComputerChoice(){
let luck = Math.floor(Math.random()* 10);
if(luck >= 0 && luck <= 3){
return "rock";}
else if(luck > 3 && luck <= 6){
return "paper";}
else if(luck > 6 && luck <= 9 ){
return "scissors";}
return "error";
}
function getHumanChoice(){
let choice = prompt("pick something").toLowerCase();
if(choice === "paper" || choice === "rock" || choice === "scissors"){
return choice;}
return "error";
}
function playGame(){
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
if(humanChoice === "scissors" && computerChoice === "rock"){
console.log("you lost rock beats scissors!");
computerScore++;}
else if(humanChoice === "scissors" && computerChoice === "paper"){
console.log("you won! scissors beats paper!");
humanScore++;}
else if(humanChoice === "paper" && computerChoice === "rock"){
console.log("you won! paper beats rock!");
humanScore++;}
else if(humanChoice === "paper" && computerChoice === "scissors"){
console.log("you lost scissors beats paper!");
computerScore++;}
else if(humanChoice === "rock" && computerChoice === "paper"){
console.log("you lost paper beats rock!");
computerScore++;}
else if(humanChoice === "rock" && computerChoice === "scissors"){
console.log("you won! rock beats scissors!");
humanScore++;}
else{
console.log("try again!")}};
for(let i = 1; i <= 5; i++){
playRound(getHumanChoice(), getComputerChoice());
}
if(humanScore > computerScore){
console.log("you won!" + " your score is: " + humanScore)}
else{
console.log("you lost!" + " your score is: " + humanScore)}};
playGame();
