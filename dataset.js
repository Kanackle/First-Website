let cardName = [];
let cardCost = [];
let cardType = [];
let cardText = [];
//let cardData = [];
fetch("https://cors-anywhere.herokuapp.com/https://www.mtgjson.com/json/FMB1.json")
.then((response) => {
	return response.json();
})
.then((data) => {
	//console.log(data);
	//console.log(data.cards[0].name);
	
	for(i=0; i< data.cards.length; i++){
		var NAME = data.cards[i].name;
		cardName.push(NAME);
		var COST = data.cards[i].manaCost;
		if (COST === undefined){
			//console.log("card is a land");
			cardCost.splice(0,1,"0");
		}
		cardCost.push(COST);
		var TYPE = data.cards[i].type;
		cardType.push(TYPE);
		var TEXT = data.cards[i].text;
		cardText.push(TEXT);
	}
	//console.log(data.cards.length);
	//console.log(cardName);
	//console.log(cardCost);
	//console.log(cardText);

})


function displayData(){
	for(i=0; i<cardName.length; i++){
		document.getElementById("CardData").innerHTML += cardName[i] + ":" + cardCost[i] + "," + cardType[i] + ":" + "<br>" + cardText[i] + "<hr>";
		//console.log(cardName[i] + "," + cardCost[i] + "," + cardType[i] + "," + cardText[i]);
		if(cardCost[i] === "undefined"){
			
		}
	}
}

