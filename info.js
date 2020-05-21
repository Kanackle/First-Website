function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function combatScore(a, b, c){
	return (Math.floor((a*.25) + (b*.4) + (c*.35)));
	//a=food
	//b=army
	//c=money
}
function eventWithProbability(probability){
	if(Math.random() < probability) return true;
	else return false;
}
function updateVariables_food(){
	let Exped_food = randomInteger(1000, 1750);
	if(eventWithProbability(.5)){ //50% chance of expedition being successful
		Efood = Efood + Exped_food;
		Yfood = Yfood + Exped_food;
	}
	else{
		Efood = Efood - Exped_food;
		Yfood = Yfood - Exped_food;
	}
	//Efood = Efood + Exped_food;
}
function updateVariables_army(){
	let Exped_army = randomInteger(250,500);
	if(eventWithProbability(.5)){ //50% chance of expedition being successful
		Earmy = Earmy + Exped_army;
		Yarmy = Yarmy + Exped_army;
	}
	else{
		Earmy = Earmy - Exped_army;
		Yarmy = Yarmy - Exped_army;
	}
	//Earmy = Earmy + Exped_army;
}
function updateVariables_money(){
	let Exped_money = randomInteger(250,750);
	if(eventWithProbability(.5)){ //50% chance of expedition being successful
		Emoney = Emoney + Exped_money;
		Ymoney = Ymoney + Exped_money;
	}
	else{
		Emoney = Emoney - Exped_money;
		Ymoney = Ymoney - Exped_money;
	}
}
//let Earmy = 20000, Efood = 50, Emoney = 7500;
let Yfood = randomInteger(55000, 85000), Efood = randomInteger(50000, 65000);
let Yarmy = randomInteger(5000, 7500), Earmy = randomInteger(15000, 25000);
let Ymoney = randomInteger(25000,30000), Emoney = randomInteger(15000, 20000);

var info = {
	"info0": "Your current army size is " + Earmy + ". Your current gold is " + Emoney + ". Your current food stook is " + Efood + ".",
	"info1": "You will gain and lose followers depending on your recent combat results. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
	"info2": "You will gain and lose gold depending on your recent combat results. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
	"info3": "You will lose 2 food stocks for every soldier u have in your army after every battle. Food stock will replenish every day. Go down to 0 and it is " + "<b>" + "GAME OVER" + "</b>",
}
var results = {
	"un": "The day has been long and bloody. Both sides have suffered great casualties.",
	"deux": "The overwhelming pressure forces you to call your troops back",
	"trois": "Your superior army and tactics turned the tide of the battle in your favor. The day is yours!",
	"quatre": "Reinforcements! The arrival of your citizen militias help turn the tide in your favor."
}