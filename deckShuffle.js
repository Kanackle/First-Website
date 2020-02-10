var deck = new Array();
var suits = ["spades", "clubs", "diamonds", "hearts"];
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function makeDeck(){
	
	var deck = new Array();
	
	for(var i = 0; i <suits.length(); i++){
		for(var j = 0; j <numbers.length(); j++){
			var card = {Value: numbers[j], Suit: suits[i]};
				deck.push(card);
		}
	}
	return deck;
	alert(deck);
}

function shuffleDeck(){
	//two cards will change locations 500 times
	for(var i = 0; i < 500; i++){
		var loc1 = Math.floor((Math.random() * deck.length));
		var loc2 = Math.floor((Math.random() * deck.length));
		var tempLoc = deck[loc1];
		deck[loc1] = deck[loc2];
		deck[loc2] = tempLoc;
	}
}

function badShuffle(){
	var pile1 = newArray();
	var pile2 = newArray();
	var pile3 = newArray();
	var pile4 = newArray();
	
	for(i= 0; i < deck.length(); i++){
		if(i % 4 == 0)
			pile1.push(deck[i]);
		if(i % 4 == 1)
			pile2.push(deck[i]);
		if(i % 4 == 2)
			pile3.push(deck[i]);
		if(i % 4 == 3)
			pile4.push(deck[i]);
	}
	
	let newArray1 = [].concat(pile1, pile3);
	let newArray2 = [].concat(pile2, pile4);
	let newArray3 = [].concat(newArray1, newArray2);

	return newArray3;
}
			