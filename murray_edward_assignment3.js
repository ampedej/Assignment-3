//alert("JavaScript works!");

// Nest any data type in an object
/*var student = { 
	id : "0000032",
	name: "Mike",
	interests: [
		"JavaScript", 
		"HTML", 
		"CSS", 
		"Flash"
	], 
	age: 503423, 						//Property: Value stored inside of an object.
	sayHi: function () {				//Method: Function stored inside of an object.
		console.log ("Hello");
	}
};
var name = "name";

student.sayHi();

student.sayHi = function (){
	console.log (student[name] );
};
student.sayHi();

for (var key in student) {
	console.log("My " + key + " is " + student[key]);
};*/

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

//--- New Function














