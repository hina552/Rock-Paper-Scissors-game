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
getComputerChoice();