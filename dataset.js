let cardName = [];
let cardCost = [];
let cardType = [];
let cardText = [];
let artists = [];

let cardArt = [];
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
			COST = "{" + 0 + "}";
		}
		cardCost.push(COST);
		var TYPE = data.cards[i].type;
		cardType.push(TYPE);
		var TEXT = data.cards[i].text;
		if (TEXT === undefined){
			TEXT = " ";
		}
		cardText.push(TEXT);
		var ARTIST = data.cards[i].artist;
		artists.push(ARTIST);
	}
	/*var current = null;
	var ctr = 0;
	cardArt.sort();
	for (i=0; i <= cardArt.length; i++){
		if(cardArt[i] != current){
			if(ctr > 0){
				document.write(current + ' appears ' + ctr + ' times<br>');
			}
			current = cardArt[i];
			ctr = 1;
		}
		else
			ctr++;
	}*/ //CODE FOR INCREMENT COUNTER OF DUPLICATE VALUES
	//console.log(data.cards.length);
	//console.log(cardName);
	//console.log(cardCost);
	//console.log(cardText);
	data.cards.forEach(function(element, index){
		let cardDiv = $('<div/>', {
			id:element.name,
			"class": "cards"
		})
		.html(element.manaCost +"<hr>" + element.name + "<hr>" + element.type + "<hr>" + element.text + "<hr>" + element.artist)
		$('.flex-container').append(cardDiv)
		$(cardDiv).hover(function(){
			$(this).html(element.flavorText);
		}, function(){
			$(this).html(element.manaCost +"<hr>" + element.name + "<hr>" + element.type + "<hr>" + element.text + "<hr>" + element.artist)
		});
	})
})


function displayData(){
	document.getElementById("CardData").innerHTML = " ";
	for(i=0; i<cardName.length; i++){
		document.getElementById("CardData").innerHTML += cardName[i] + ":" + cardCost[i] + "," + cardType[i] + ":" + "<br>" + cardText[i] + "<br>" + artists[i] + "<hr>";
		//console.log(cardName[i] + "," + cardCost[i] + "," + cardType[i] + "," + cardText[i]);
	}
}



