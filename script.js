var currentRoom = "start";
var kingdoms = ["Kingdom of Yiramm", "Kingdom of Lareal", "Hordes of Alaysa"];
let day = 1;
let weather = [];
let temp = "KANAK";
let API_call = fetch("https://cors-anywhere.herokuapp.com/https://api.meteostat.net/v1/history/daily?station=10637&start=2017-01-01&end=2017-12-31&key=ePhqRGrf")
.then((response) => {
	return response.json();
})
.then((data) => {
	//console.log(data.data[0]);
	let array1 = [];
	for(i=0;i<data.data.length;i++){
		var temp = data.data[i].temperature;
		array1.push(temp);
	}
	return array1;
	//console.log(weather);
	//console.log(weather[day]);
	//StartGame();
	//startGame();
	
});
console.log(API_call);
console.log(Promise.resolve(API_call));
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
					/*Efood -= Exped_food;
					Earmy += Exped_army;
					$('#game-text').append("Your perilious journey through the forest takes " + randomInteger(4,11) + " days. You lose " + Exped_food + " food and gain " + Exped_army + " army." + "<br>");
					$('#game-text').append("Your new food supply is " + Efood + ". Your new army size is " + Earmy + "." + "<br>");
					console.log(combatScore(Efood, Earmy, Emoney));*/
					for(i=0;i<5;i++){
						window.setInterval(updateVariables_food(), 20000);
						$('#game-text').append("Day" + day + ": Your new food storage is " + Efood + "<br>");
						Efood_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					} //LOOP IS SUPPOSED TO SIMULATE 5 DAYS
					//console.log("C" + Efood_update);
					Eoriginal = Efood_update;
					$('#game-text').append("Your new combat score is " + Eoriginal + "<br>");
					//console.log("DD" + Eoriginal);
					currentRoom = "start";
					$('#game-text').append(rooms[currentRoom].description2);
					break;
				
				case "b":
					changeRoom("b");
					for(i=0;i<5;i++){
						window.setInterval(updateVariables_army(), 20000);
						$('#game-text').append("Your new army size is " + Earmy + "<br>");
						Earmy_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					}					
					Eoriginal = Earmy_update;
					console.log("HANNAH" + Eoriginal);
					currentRoom = "start";
					$('#game-text').append(rooms[currentRoom].description2);
					break;
				
				case "c":
					changeRoom("c");
					for(i=0;i<5;i++){
						window.setInterval(updateVariables_money(), 20000);
						$('#game-text').append("Your new money amount is " + Emoney + "<br>");
						Emoney_update = combatScore(Efood, Earmy, Emoney);
						day++;	
					}
					Eoriginal = Emoney_update;
					currentRoom = "start";
					$('#game-text').append(rooms[currentRoom].description2);
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
 