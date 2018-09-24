

fetch("/api/getPlayers")
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (myData) {
        console.dir(myData)
        document.getElementById('team1Name').innerHTML = myData[0].PlayerHome
        document.getElementById('team2Name').innerHTML = myData[0].PlayerAway

        document.getElementById('team3Name').innerHTML = myData[1].PlayerHome
        document.getElementById('team4Name').innerHTML = myData[1].PlayerAway

        document.getElementById('team5Name').innerHTML = myData[2].PlayerHome
        document.getElementById('team6Name').innerHTML = myData[2].PlayerAway

        document.getElementById('team7Name').innerHTML = myData[3].PlayerHome
        document.getElementById('team8Name').innerHTML = myData[3].PlayerAway

        document.getElementById('team9Name').innerHTML = myData[4].PlayerHome
        document.getElementById('team10Name').innerHTML = myData[4].PlayerAway

        document.getElementById('team11Name').innerHTML = myData[5].PlayerHome
        document.getElementById('team12Name').innerHTML = myData[5].PlayerAway
    })


