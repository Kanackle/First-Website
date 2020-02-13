var deck = new Array();
var suits = ["spades", "clubs", "diamonds", "hearts"];
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function makeDeck(){
	for(var i = 0; i <suits.length; i++){
		for(var j = 0; j <numbers.length; j++){
			var card = {Value: numbers[j], Suit: suits[i]};
				deck.push(card);
		}
	/*	for(i=0; i< deck.length; i++){
			var card = deck[i];
			document.getElementById("OGDeck").innerHTML = document.getElementById("OGDECK").innerHTML + card.Value + " of " + card.Suit + "<br>";
		}*/
	}
	//console.log(deck);
	//alert(JSON.stringify(deck));
	return deck;
}

function shuffleDeck(){
	//console.log("Hello");
	//two cards will change locations 500 times
	for(var i = 0; i < 500; i++){
		var loc1 = Math.floor((Math.random() * deck.length));
		var loc2 = Math.floor((Math.random() * deck.length));
		var tempLoc = deck[loc1];
		deck[loc1] = deck[loc2];
		deck[loc2] = tempLoc;
		
		/*for(i=0; i< deck.length; i++){
		var card = deck[i];
		document.getElementById("Cards").innerHTML = document.getElementById("Cards").innerHTML + card.Value + " of " + card.Suit + "<br>"; 
		}*/
	}
	return deck;
}

function badShuffle(){
	var pile1 = new Array();
	var pile2 = new Array();
	var pile3 = new Array();
	var pile4 = new Array();
	//console.log(deck.length);
	for(i= 0; i < deck.length; i++){
		//console.log(i);
		if(i % 4 == 0)
			pile1.push(deck[i]);
		if(i % 4 == 1)
			pile2.push(deck[i]);
		if(i % 4 == 2)
			pile3.push(deck[i]);
		if(i % 4 == 3)
			pile4.push(deck[i]);
	}
	/*console.log(pile1);
	console.log(pile2);
	console.log(pile3);
	console.log(pile4);*/
	let newArray1 = [].concat(pile1, pile3);
	let newArray2 = [].concat(pile2, pile4);
	let newArray3 = [].concat(newArray1, newArray2);
	//document.getElementById("Cards").innerHTML = JSON.stringify(newArray3);
	
	for(i=0; i< newArray3.length; i++){
		var card = newArray3[i];
		document.getElementById("badCards").innerHTML = document.getElementById("badCards").innerHTML + card.Value + " of " + card.Suit + "<br>"; 
	}
	return newArray3;
}

makeDeck();
shuffleDeck();
badShuffle();			