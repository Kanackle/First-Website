var currentRoom = "start";
var kingdoms = ["Kingdom of Yiramm", "Kingdom of Lareal", "Hordes of Alaysa"];


$(document).ready(function(){
	$('#game-text').append("<p>" + rooms.start.description + "</p>");
	$('#game-text').append("<p>" + info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3 + "<br>" + info.info4 + "</p>");
	
	$(document).keypress(function(key){
		if(key.which === 13){
			let input = $('#user-input').val().toLowerCase();
			//$('#game-text').append(info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3);
			switch(input){
				case "north":
					changeRoom("north");
					break;
				case "south":
					changeRoom("south");
					break;
				case "east":
					changeRoom("east");
					break;
				case "west":
					changeRoom("west");
					break;
				case "a":
					changeRoom("a");
					Efood -= Exped_food;
					Earmy += Exped_army;
					$('#game-text').append("Your perilious journey through the forest takes " + randomInteger(4,11) + " days. You lose " + Exped_food + " food and gain " + Exped_army + " army." + "<br>");
					$('#game-text').append("Your new food supply is " + Efood + ". Your new army size is " + Earmy + "." + "<br>");
					console.log(combatScore(Efood, Earmy, Emoney));
					break;
				case "b":
					changeRoom("b");
					Emoney -= Exped_money;
					Efood += Exped_food;
					$('#game-text').append("You enlist farmers from nearby villages for greater food production. You lose " + Exped_money + " money and gain " + Exped_food + " food." + "<br>");
					$('#game-text').append("Your new food supply is " + Efood + ". Your new money amount is " + Emoney + "." + "<br>");
					console.log(combatScore(Efood, Earmy, Emoney));
					break;
				case "c":
					changeRoom("c");
					Earmy -= Exped_army;
					Emoney += Exped_money;
					$('#game-text').append("You raise taxes throughout the kingdom. Due to small revolts, you lose " + Exped_army + " army and gain " + Exped_money + " money." + "<br>");
					$('#game-text').append("Your new army size is " + Earmy + ". Your new money amount is " + Emoney + "." + "<br>");
					console.log(combatScore(Efood, Earmy, Emoney));
					break;
				default:
					alert("Invalid move!");
			}
		}
	})
})

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
		currentRoom = rooms[currentRoom].directions[dir]
		console.log("This is" + currentRoom);
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
		if(currentRoom === "war_chambers"){
			$('#game-text').append("ZENYATTA");
			let Reports = [];
			Reports = Object.values(rooms.war_chambers.war_reports);
			console.log(Reports);
			let Random = randomInteger(0, Reports.length-1);
			console.log(Reports[Random]);
			$('#game-text').append("<p>" + Reports[Random] + "</p>");
		}
		if(currentRoom === "expeditions"){
			let Expeditions = [];
			Expeditions = Object.entries(rooms.expeditions.choices);
			for(i = 0; i < Expeditions.length; i++){
				$('#game-text').append("<p>" + Expeditions[i] + "<br>" + "</p>");		
			}
			let input = $('#user-input').val().toLowerCase();
			console.log("Input is" + input);
			//$('#game-text').append(info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3);
		}
    }
	else if(rooms[currentRoom].choices[dir] !== undefined){
		let input = $('#user-input').val().toLowerCase();
		console.log("SOLDIER76 " + input);
	}
	else {
		alert("INVALID MOVE!");
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}
/*if(currentRoom = "war_chambers"){
	let Reports = [];
	Reports = Object.values(rooms.war_chambers.war_reports);
	console.log(Reports);
	let Random = randomInteger(0, Reports.length-1);
	console.log(Reports[Random]);
	$('#game-text').append("<p>" + Reports[Random] + "</p>");
}
if(currentRoom = "expeditions"){
	console.log(currentRoom);
	$('#game-text').append("<p>" + rooms.expeditions.A + "<br>" + rooms.expeditions.B + "<br>" + rooms.expeditions.C + "</p>");
}*/
 