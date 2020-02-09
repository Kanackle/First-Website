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