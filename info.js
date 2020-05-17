function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function combatScore(a, b, c){
	return (Math.floor((a*.35) + (b*.4) + (c*.25)));
	//a=food
	//b=army
	//c=money
}
let Exped_army = randomInteger(1000,1500);
let Exped_money = randomInteger(250,750);
let Exped_food = randomInteger(1000, 1700);

var Yfood = randomInteger(40000, 50000), Afood = randomInteger(30000,35000), Lfood = randomInteger(30000,40000), Efood = randomInteger(20000, 30000);
var Yarmy = randomInteger(5000, 7500), Aarmy = randomInteger(20000,25000), Larmy = randomInteger(15000,20000), Earmy = randomInteger(10000, 20000);
let Ymoney = randomInteger(35000,50000), Amoney = randomInteger(10000,20000), Lmoney = randomInteger(15000,20000), Emoney = randomInteger(10000, 20000);

var info ={
	"info0": "Your current army size is " + Earmy + ". Your current gold is " + Emoney + ". Your current food stook is " + Efood + ".",
	"info1": "You will gain and lose followers depending on your recent combat results. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
	"info2": "You will gain and lose gold depending on your recent combat results. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
	"info3": "You will lose 2 food stocks for every soldier u have in your army after every battle. Food stock will replenish every 7 days. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
	"info4": "Your current combat score is " + combatScore(Efood, Earmy, Emoney) + ". Your and your enemy's combat score determines who wins the battle. Your combat score will change after every battle."
}
