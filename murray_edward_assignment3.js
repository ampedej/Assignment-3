//alert("JavaScript works!");
/*
Edward M Murray Jr
SDI 1209
Project 3
*/

var league = {
    "teams": [{
        "name": "Kyle",
        "teamName": "Steel City Squashers",
        "teamNumber": 1,
        "teamScore": 0
    }, {
        "name": "Alex",
        "teamName": "4th & Long",
        "teamNumber": 2,
        "teamScore": 0
    }, {
        "name": "Edward",
        "teamName": "What's your Forte",
        "teamNumber": 3,
        "teamScore": 50
    }, {
        "name": "Frank",
        "teamName": "Steel City",
        "teamNumber": 4,
        "teamScore": 0
    }],
    "teamsCreated": true,
    "totalTeams": 4
};

//Global Variable
var yesPar = "We have all of our teams created and ready to go!",
    noPar = "All teams have not been created yet....";

//---Boolean Function*/
function getParticipation(areCreated) {
    if (areCreated != true) {
        return noPar;
    } else {
        return yesPar;
    }
};
var participation = getParticipation(league.teamsCreated);
console.log(participation);

//--- Array Function
function leagueTeams(teamInfo) {
    var teams;
    teams = teamInfo;
    for (var i = 0; i < teams.length; i++) {
        // Set some scores.
        var team = league.teams[i];
        var s = 0,
            score = 0;
        while (s < 5) {
            score += Math.floor((Math.random() * 10) + 1);
            s++;
        }
        team.teamScore = score;
        console.log(team.name + "'s team " + team.teamName + " is team number " + team.teamNumber + "." + "They scored " + team.teamScore + " last game.");
    };
    return teams;
};

leagueTeams(league.teams);

//--- String Function

function weekOne(string) {
    var weekOneComplete;
    weekOneComplete = string;
    return weekOneComplete;
};

var complete = weekOne("Week one is final. Let's see who won their matchups.");
console.log(complete);

// Number function
function winners(kyleScore, alexScore, edwardScore, frankScore) {
    var teamsPlayed;
    if (teamsPlayed = 4) {
        if (kyleScore > alexScore) {
            console.log(league.teams[0].teamName + " won his matchup against " + league.teams[1].teamName + ".");
        } else {
            console.log(league.teams[1].teamName + " won his matchup against " + league.teams[0].teamName + ".");
        };
        if (edwardScore > frankScore) {
            console.log(league.teams[2].teamName + " won his matchup against " + league.teams[3].teamName + ".");
        } else {
            console.log(league.teams[3].teamName + " won his matchup against " + league.teams[2].teamName + ".");
        };
        teamsPlayed = league.teams.length;
        return teamsPlayed;
    };
};
winners(league.teams[0].teamScore, league.teams[1].teamScore, league.teams[2].teamScore, league.teams[3].teamScore);

//---Object Function

function addedTeams(newName) {
    var newTeamName = [];
    var addNewTeamName = function (newTeamsName) {
        newTeamName.push(newTeamsName);
    };
    var teamNameList = function () {
        for (var n = 0; n < newTeamName.length; n++) {
            console.log(newName + "'s team: " + newTeamName[n] + " Wants to join our league.");
        }
    };
    return {
        "name": newName,
        "newTeamName": newTeamName,
        "addNewTeamName": addNewTeamName,
        "teamNameList": teamNameList
    };
};
var tom = addedTeams("Tom");
tom.newTeamName.push("Head Cracker");
tom.teamNameList();

//---Procedure Function

function allowToJoin(totalTeams) {
    if (totalTeams % 2 == 0) {
        console.log("New teams have been added to our league.");
    } else {
        console.log("Tom needs to find another player to make the teams even.");
    };
};
allowToJoin(5);