(function(){
var apiRequest1 = fetch('/api/getPredictions').then(function(response){ 
    return response.json()
});

var apiRequest2 = fetch('/api/getPlayers').then(function(response){ 
    return response.json()
});

var apiRequest3 = fetch('/api/getScores').then(function(response){ 
    return response.json()
});



Promise.all([apiRequest1, apiRequest2, apiRequest3]).then(function(values) {
    var predictions = values[0];
    var games = values[1];
    var results = values[2]
    var gameResults = []
    console.log(results)

    games.forEach(game =>{
        //  console.log(game["GameID"]);
        var gameID =game["GameID"];
        var gameIDH = "game" + gameID +"H";
        // console.log(gameIDH)
        var gameIDA = "game" + gameID +"A"
        var homeResult= game["homeResult"];
        var awayResult = game["awayResult"];
        gameResults[gameIDH] = homeResult;
        gameResults[gameIDA] = awayResult;

    })
    var formData = {}

    // console.log(gameResults)
    predictions.forEach(element => {
        var user = element["user"];
        userData = {}
        totalPoints = 0
        if (element["game1H"]==gameResults.game1H && element["game1A"]==gameResults.game1A){
            totalPoints +=5
        }
        if (element["game2H"]==gameResults.game2H && element["game2A"]==gameResults.game2A){
            totalPoints +=5
            }
        if (element["game3H"]==gameResults.game3H && element["game3A"]==gameResults.game3A){
            totalPoints +=5
            }
        if (element["game4H"]==gameResults.game4H && element["game4A"]==gameResults.game4A){
            totalPoints +=5
            }
        if (element["game5H"]==gameResults.game5H && element["game5A"]==gameResults.game5A){
            totalPoints +=5
            }
        if (element["game6H"]==gameResults.game6H && element["game6A"]==gameResults.game6A){
            totalPoints +=5
            }

        // console.log(totalPoints)
        formData[user] = totalPoints;
     });
     
     finalData = []
//    console.log(formData)
     results.forEach(element => {
        updateData = {}
        var currentUser = element.user
        var addPoints = (formData[element.user])
        var currentPoints = element.score
        var newPoints = currentPoints + addPoints
        updateData["user"]=currentUser
        updateData["points"] = newPoints
        finalData.push(updateData)
     });
     var filteredData = finalData.filter(val => !isNaN(val.points))
     console.log(filteredData)
  

let endPoint = "/api/editScores";
        fetch (endPoint, {
            method:"put",
            body: JSON.stringify(filteredData),
            headers:{
                'Content-Type': "application/json"
            }
        })
  });
})();