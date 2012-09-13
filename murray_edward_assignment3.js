//alert("JavaScript works!");

// Nest any data type in an object
/*function obj (name){
	return { 
		teamNames: [
			"JavaScript", 
			"HTML", 
			"CSS", 
			"Flash"
		],
	};
	while (teamNames.length > 0) {
		console.log("Picked up ");
	peopleLeft = peopleLeft-1;
	};
};

obj();*/

//JSON data
var league =  {
	"teams": [
		{
		"name":			"Kyle",
		"teamName": 	"Steel City",
		"teamNumber": 	1
		},
		{
		"name":			"Alex",
		"teamName": 	"4th & Long",
		"teamNumber": 	2
		},
		{
		"name":			"Edward",
		"teamName": 	"What's your Forte",
		"teamNumber":	3
		},
		{
		"name":			"Frank",
		"teamName": 	"Steel City",
		"teamNumber": 	4
		}
	],
	"teamsCreated": true,
	"totalTeams": 4
};

//Global Variable
var yesPar = "We have all of our teams created and ready to go!",
	noPar = "All teams have not been created yet...."
;

//---Boolean Function*/
function getParticipation(areCreated){
	if (areCreated != true) {
		return noPar;
	} else {
		return yesPar;
	}
};
var participation = getParticipation(league.teamsCreated);
console.log (participation);

//--- Array Function
function leagueTeams (teamInfo) {
	for (var i = 0; i < league.teams.length; i++){
		var team = league.teams[i];
		console.log (team.name + "'s team " + team.teamName + " is team number " + team.teamNumber + ".")	
	};
};

leagueTeams (league.teams);

//--- String Function

function draftPlayers(string){
	var needToDraft;
	needToDraft = string;
	return needToDraft;
};		

var draft = draftPlayers("Now each team needs to draft players for their roster.");
console.log (draft);






