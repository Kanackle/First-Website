var currentRoom = "start";
var kingdoms = ["Kingdom of Yiramm", "Kingdom of Lareal", "Hordes of Alaysa"];
let day = 1;
let weather = [];
fetch("https://cors-anywhere.herokuapp.com/https://api.meteostat.net/v1/history/daily?station=10637&start=2017-01-01&end=2017-12-31&key=ePhqRGrf")
.then((response) => {
	return response.json();
})
.then((data) => {
	//console.log(data.data[0]);
	for(i=0;i<data.data.length;i++){
		var temp = data.data[i].temperature;
		weather.push(temp);
	}
	return weather;
	//console.log(weather);
	//console.log(weather[day]);
	//StartGame();
	//startGame();
	
});

$(document).ready(function(){
	$('#game-text').append("<p>" + rooms.start.description + "</p>");
	//$('#game-text').append("The temperature is " + weather[day] + "CELSIUS");
	$('#game-text').append("<p>" + info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3 + "</p>");
	$('#game-text').append("<p>" + "Your original combat score is " + Eoriginal + "</p>");
	$('#game-text').append("The enemy's original combat score is " + Yoriginal);
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
					/*Efood -= Exped_food;
					Earmy += Exped_army;
					$('#game-text').append("Your perilious journey through the forest takes " + randomInteger(4,11) + " days. You lose " + Exped_food + " food and gain " + Exped_army + " army." + "<br>");
					$('#game-text').append("Your new food supply is " + Efood + ". Your new army size is " + Earmy + "." + "<br>");
					console.log(combatScore(Efood, Earmy, Emoney));*/
					for(i=0;i<5;i++){
						window.setInterval(updateVariables_food(), 20000);
						$('#game-text').append("Day" + day + ": Your new food storage is " + Efood + "<br>");
						Yfood_update = combatScore(Yfood, Yarmy, Ymoney);
						Efood_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					} //LOOP IS SUPPOSED TO SIMULATE 5 DAYS
					//console.log("C" + Efood_update);
					Yoriginal = Yfood_update;
					Eoriginal = Efood_update;
					$('#game-text').append("Your new combat score is " + Eoriginal + "<br>");
					$('#game-text').append("The enemy's new combat score is " + Yoriginal + "<br>");
					//console.log("DD" + Eoriginal);
					//getData(day);
					currentRoom = "start";
					$('#game-text').append("<p>" + rooms.start.description + "</p>");
					$('#game-text').append("<p>" + "The temperature is " + weather[day] + " Celsius" + "</p>");
					//console.log(Eoriginal);
					break;
				
				case "b":
					changeRoom("b");
					
					for(i=0;i<7;i++){
						window.setInterval(updateVariables_army(), 20000);
						$('#game-text').append("Day" + day + ": Your new army size is " + Earmy + "<br>");
						Yarmy_update = combatScore(Yfood, Yarmy, Ymoney);
						console.log(Yarmy + " TRACER " + Yarmy_update);
						Earmy_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					}
					Yoriginal = Yarmy_update;
					Eoriginal = Earmy_update;
					$('#game-text').append("Your new combat score is " + Eoriginal + "<br>");
					$('#game-text').append("The enemy's new combat score is " + Yoriginal + "<br>");
					currentRoom = "start";
					$('#game-text').append(rooms.start.description);
					$('#game-text').append("The temperature is " + weather[day] + " Celsius");
					//console.log(Eoriginal);
					break;
				
				case "c":
					changeRoom("c");
					
					for(i=0;i<3;i++){
						window.setInterval(updateVariables_money(), 20000);
						$('#game-text').append("Day" + day + ": Your new money amount is " + Emoney + "<br>");
						Ymoney_update = combatScore(Yfood, Yarmy, Ymoney);
						Emoney_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					}
					Yoriginal = Ymoney_update;
					Eoriginal = Emoney_update;
					$('#game-text').append("Your new combat score is " + Eoriginal + "<br>");
					$('#game-text').append("The enemy's new combat score is " + Yoriginal + "<br>");
					currentRoom = "start";
					$('#game-text').append(rooms.start.description);
					$('#game-text').append("The temperature is " + weather[day] + " Celsius");
					//console.log(Eoriginal);
					break;
				default:
					alert("Invalid move!");
			}
		}
	})
})


function changeRoom(dir) {
	if (rooms[currentRoom].directions[dir] !== undefined){
		currentRoom = rooms[currentRoom].directions[dir]
		console.log("This is" + currentRoom);
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
		if(currentRoom === "war_chambers"){
			
			if(eventWithProbability(.5)){ //50% chance of expedition being successful
				$('#game-text').append("<p>" + "Day" + day + ": " + rooms[currentRoom].war_reports.description2 + "</p>");
				$('#game-text').append("<p>" + "Your combat score is " + Eoriginal + ". The enemy combat score is " + Yoriginal);
			}
			else{
				$('#game-text').append("<p>" + "Day" + day + ": " + rooms[currentRoom].war_reports.description3 + "</p>");
				$('#game-text').append("<p>" + "Your combat score is " + Eoriginal + ". The enemy combat score is " + Yoriginal);
			}
			console.log("ZENYATTA");
			day++;
			for(i=0;i<randomInteger(5,15);i++){
				window.setInterval(updateVariables_food(), 20000);
				window.setInterval(updateVariables_army(), 20000);
				window.setInterval(updateVariables_money(), 20000);
				$('#game-text').append("Day" + day);
				Yarmy_update = combatScore(Yfood, Yarmy, Ymoney);
				Yfood_update = combatScore(Yfood, Yarmy, Ymoney);
				Ymoney_update = combatScore(Yfood, Yarmy, Ymoney);
				//console.log(Yarmy + " TRACER " + Yarmy_update);
				Earmy_update = combatScore(Efood, Earmy, Emoney);
				Efood_update = combatScore(Efood, Earmy, Emoney);
				Emoney_update = combatScore(Efood, Earmy, Emoney);
				day++;	
			}
			console.log(Efood);
			Efood = Efood - (2*Earmy);
			Yfood = Yfood - (2*Yarmy);
			console.log(Efood);
			Efood_update = combatScore(Efood, Earmy, Emoney);
			Yfood_update = combatScore(Yfood, Yarmy, Ymoney);
			Yoriginal = Math.floor((Yarmy_update + Yfood_update + Ymoney_update)/3);
			Eoriginal = Math.floor((Earmy_update + Efood_update + Emoney_update)/3);
			$('#game-text').append("<p>" + "Your combat score is " + Eoriginal + ". The enemy combat score is " + Yoriginal);
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
	
	else{
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
 