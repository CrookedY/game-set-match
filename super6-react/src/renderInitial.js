export const renderInitial = function (ev) {
    
    //fetches predictions from database
    fetch('/api/getPredictions', {
        method: 'get',
    })
    .then(function (response) {
        return response.json()
        
    })
        .then(function (myData) {
            
            //if user has submitted scores previously, show them and only show edit button
            if(myData.length !== 0){

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
            
// sets the hidden inputs to have prediction values
            document.getElementById('score1').value = myData[myData.length - 1].game1H
            document.getElementById('score2').value = myData[myData.length - 1].game1A

            document.getElementById('score3').value = myData[myData.length - 1].game2H
            document.getElementById('score4').value = myData[myData.length - 1].game2A

            document.getElementById('score5').value = myData[myData.length - 1].game3H
            document.getElementById('score6').value = myData[myData.length - 1].game3A

            document.getElementById('score7').value = myData[myData.length - 1].game4H
            document.getElementById('score8').value = myData[myData.length - 1].game4A

            document.getElementById('score9').value = myData[myData.length - 1].game5H
            document.getElementById('score10').value = myData[myData.length - 1].game5A

            document.getElementById('score11').value = myData[myData.length - 1].game6H
            document.getElementById('score12').value = myData[myData.length - 1].game6A
            
            document.getElementById('editButton').style.visibility = 'visible';

            //hide submit button
            document.getElementById('submit').style.visibility = 'hidden'

            //hide inputs
            for (let el of document.querySelectorAll('.score')) el.style.visibility = 'hidden';
            }
                    
        
        })
    }