let Yoriginal = combatScore(Yfood, Yarmy, Ymoney), Yfood_update = combatScore(Yfood, Yarmy, Ymoney), Yarmy_update = combatScore(Yfood, Yarmy, Ymoney), Ymoney_update = combatScore(Yfood, Yarmy, Ymoney);
let Eoriginal = combatScore(Efood, Earmy, Emoney), Efood_update = combatScore(Efood, Earmy, Emoney), Earmy_update = combatScore(Efood, Earmy, Emoney), Emoney_update = combatScore(Efood, Earmy, Emoney);
/*async function fetchAsync () {
	let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.meteostat.net/v1/history/daily?station=10637&start=2017-01-01&end=2017-12-31&key=ePhqRGrf');
	let data = await response.json();
	return data["data"];
  };

function getData(dayId){
	const newData = fetchAsync().then((newData) => 
	{
		var obj = document.getElementById("tempId");
		obj.innerHTML = newData[dayId]["temperature"];
	}
	);
	return 1
  };
*/
var rooms = {
	"start": {
		"description": "You are in the entrance to your castle. The throne room is to the <b>north</b>\
	 and the war chambers are to the <b>west</b>. Your expedition caravan is to the <b>east</b>.",
		//"description2": "The temperature is <span id='tempId'> </span> Celsius",
		"directions": {
			"north": "throne_room",
			"west": "war_chambers",
			"east": "expeditions"
		}
	},
	"throne_room": {
		"description": info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3,
		"directions": {
			"south": "start",
		}
	},
	"war_chambers": {
		"description": "You enter the room and begin reading the recent scouting reports",
		"war_reports": {
			"description2": "Be prepared! The Kingdom of Yiraam has just declared attack on you!", 
			"description3": "Your troops carry out a midnight raid. The Kingdom of Yiraam is unprepared for your attack!",
			/*"description4": "It's a sneak attack! The Hordes of Alaysa are advancing towards your position. Prepare your defenses. Their combat score is " + combatScore(Afood, Aarmy, Amoney),
			"description5": "You've sprung a trap. This is your chance to weaken the Hordes of Alaysa. Their combat score is " + combatScore(Afood, Aarmy, Amoney),
			"description6": "Ambush! The mighty navy of the Kingdom of Lareal are attacking your forces with all the firepower. Their combat score is " + combatScore(Lfood, Larmy, Lmoney),
			"description7": "Now's your chance! The enemy is weak; strike back at the Kingdom of Lareal. Their combat score is " + combatScore(Lfood, Larmy, Lmoney)*/
		},
		"directions": {
			"east": "start"
		}
	},
	"expeditions": {
		"description": "Decide on the expedition to send your troops to. Each expedition will reward with one of army, food or money.",
		"choices":{
			"a": "Enlist more farmers to increase your crop production", //food
			"b": "Travel to the mages of Norwood Forest", //army
			"c": "Increase the taxes in the kingdom to better finance your battles" //money
		},
		"directions":{
			"west":"start"
		}
	},
}
