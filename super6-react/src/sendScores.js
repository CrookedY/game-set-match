// A function to handle the submit button/ Writes in mongodb under each userID

export const sendScores = function () {
    
  
    //used to hide the submit button after clicked
    document.getElementById('submit').style.visibility = 'hidden'

    //used to hide prediction input after submit clicked
    for (let el of document.querySelectorAll('.score')) el.style.visibility = 'hidden';


    let game1ScH = document.getElementById('score1').value
    let game1ScA = document.getElementById('score2').value
    let game2ScH = document.getElementById('score3').value
    let game2ScA = document.getElementById('score4').value
    let game3ScH = document.getElementById('score5').value
    let game3ScA = document.getElementById('score6').value
    let game4ScH = document.getElementById('score7').value
    let game4ScA = document.getElementById('score8').value
    let game5ScH = document.getElementById('score9').value
    let game5ScA = document.getElementById('score10').value
    let game6ScH = document.getElementById('score11').value
    let game6ScA = document.getElementById('score12').value

    let formData = {
        "game1H": parseInt(game1ScH, 10),
        "game1A": parseInt(game1ScA, 10),
        "game2H": parseInt(game2ScH, 10),
        "game2A": parseInt(game2ScA, 10),
        "game3H": parseInt(game3ScH, 10),
        "game3A": parseInt(game3ScA, 10),
        "game4H": parseInt(game4ScH, 10),
        "game4A": parseInt(game4ScA, 10),
        "game5H": parseInt(game5ScH, 10),
        "game5A": parseInt(game5ScA, 10),
        "game6H": parseInt(game6ScH, 10),
        "game6A": parseInt(game6ScA, 10)
    }

    let endPoint = "/api/predictions";

    fetch(endPoint, {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            if(response.ok){
            return response.json()
            }
            alert('Please log in');
            window.location.href = '/Login';
            return Promise.reject("Not logged in");
            
        })

        document.getElementById('editButton').style.visibility = 'visible';

  fetch('/api/getPredictions', {
        method: 'get',
    })
    .then(function (response) {
        if(response.ok){
            return response.json()
            }
            return Promise.reject("Not logged in");        
    })
        .then(function (myData) {
           
            document.getElementById('showPredictionGame1_1').innerHTML = myData[myData.length - 1].game1H
            document.getElementById('showPredictionGame1_2').innerHTML = myData[myData.length - 1].game1A

            document.getElementById('showPredictionGame2_1').innerHTML = myData[myData.length - 1].game2H
            document.getElementById('showPredictionGame2_2').innerHTML = myData[myData.length - 1].game2A

            document.getElementById('showPredictionGame3_1').innerHTML = myData[myData.length - 1].game3H
            document.getElementById('showPredictionGame3_2').innerHTML = myData[myData.length - 1].game3A

            document.getElementById('showPredictionGame4_1').innerHTML = myData[myData.length - 1].game4H
            document.getElementById('showPredictionGame4_2').innerHTML = myData[myData.length - 1].game4A

            document.getElementById('showPredictionGame5_1').innerHTML = myData[myData.length - 1].game5H
            document.getElementById('showPredictionGame5_2').innerHTML = myData[myData.length - 1].game5A

            document.getElementById('showPredictionGame6_1').innerHTML = myData[myData.length - 1].game6H
            document.getElementById('showPredictionGame6_2').innerHTML = myData[myData.length - 1].game6A
        })
    }