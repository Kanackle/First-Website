var currentRoom = "start";
var kingdoms = ["Kingdom of Yiramm", "Kingdom of Lareal", "Hordes of Alaysa"];

$(document).ready(function(){
	$(document).keypress(function(key){
		if(key.which === 13){
			let input = $('#user-input').val().toLowerCase();
			$('#game-text').append(info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3);
			let dir_input = $('#directions').val().toLowerCase();
			switch(value){
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
				default:
					alert("Invalid move!");
			}
		}
	})
})

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
		/*if(currentRoom === "war_chambers"){
			
		}*/
    } 
	else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }


}