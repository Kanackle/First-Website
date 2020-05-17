var rooms = {
    "start": {
        "description": "You are in the entrance to your castle. The throne room is to the <b>north</b>\
     and the war chambers are to the <b>west</b>. Your expedition caravan is to the <b>east</b>.",
        "directions": {
            "north": "throne_room",
            "west": "war_chambers",
			"east": "expeditions"
        }
    },
    "throne_room": {
        "description": info.info0 + "<br>" + info.info1 + "<br>" + info.info2 + "<br>" + info.info3 + "<br>" + info.info4,
        "directions": {
            "south": "start",
        }
    },
    "war_chambers": {
        "description": "You enter the room and begin reading the recent scouting reports",
		"war_reports": {
			"description2": "Be prepared! The Kingdom of Yiraam has just declared attack on you! Their combat score is " + combatScore(Yfood, Yarmy, Ymoney),
			"description3": "Your troops carry out a midnight raid. The Kingdom of Yiraam is unprepared for your attack! Their combat score is " + combatScore(Yfood, Yarmy, Ymoney),
			"description4": "It's a sneak attack! The Hordes of Alaysa are advancing towards your position. Prepare your defenses. Their combat score is " + combatScore(Afood, Aarmy, Amoney),
			"description5": "You've sprung a trap. This is your chance to weaken the Hordes of Alaysa. Their combat score is " + combatScore(Afood, Aarmy, Amoney),
			"description6": "Ambush! The mighty navy of the Kingdom of Lareal are attacking your forces with all the firepower. Their combat score is " + combatScore(Lfood, Larmy, Lmoney),
			"description7": "Now's your chance! The enemy is weak; strike back at the Kingdom of Lareal. Their combat score is " + combatScore(Lfood, Larmy, Lmoney)
		},
        "directions": {
            "east": "start"
        }
    },
    "expeditions": {
        "description": "Decide on the expedition to send your troops to. Each expedition will reward with one of army, food or money. However, the gain of one requirement will come at the cost of another.",
		"choices":{
			"a": "Travel to the mages of Norwood Forest", 
			"b": "Enlist more farmers to increase your crop production",
			"c": "Increase the taxes in the kingdom to better finance your battles"
		},
        "directions": {
            "west": "clearing1"
        }
    },
    "bridge1": {
        "description": "You see a river and there is a bridge to the <b>west</b>",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "bridge2": {
        "description": "You try to cross the bridge but a troll jumps out and bites your leg!",
        "directions": {
            "east": "bridge1"
        }
    }
}