var rooms = {
    "start": {
        "description": "You are in the entrance to your castle. The throne room is to the <b>north</b>\
     and the war chambers is to the <b>west</b>",
        "directions": {
            "north": "throne_room",
            "west": "war_chambers"
        }
    },
    "throne_room": {
        "description": "You arrive to a clearing, you see a lighthouse to the <b>north</b>\
     and there is a strange smell coming from the <b>east</b>",
        "directions": {
            "south": "start",
            //"north": "lighthouse",
            //"east": "trolls"
        }
    },
    "war_chambers": {
        "description1": "You enter the room and begin reading the recent scouting reports",
		"description2": "The Kingdom of Yiramm has declared attack on you. You have " + Emoney +\
		" Meanwhile, the enemy has " + Ymoney + ".",
        "directions": {
            "east": "start"
        }
    },
    "trolls": {
        "description": "You arrive to another clearing, there are some trolls roasting some mysterious meat\
     They haven't seen you yet. What do you do?",
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