

export const editScores = function () {

    for (let el of document.querySelectorAll('.score')) el.style.visibility = 'visible';
    document.getElementById('saveChanges').style.visibility = 'visible';

    document.getElementById('showPredictionGame1_1').innerHTML = ""
    document.getElementById('showPredictionGame1_2').innerHTML = ""

    document.getElementById('showPredictionGame2_1').innerHTML = ""
    document.getElementById('showPredictionGame2_2').innerHTML = ""

    document.getElementById('showPredictionGame3_1').innerHTML = ""
    document.getElementById('showPredictionGame3_2').innerHTML = ""

    document.getElementById('showPredictionGame4_1').innerHTML = ""
    document.getElementById('showPredictionGame4_2').innerHTML = ""

    document.getElementById('showPredictionGame5_1').innerHTML = ""
    document.getElementById('showPredictionGame5_2').innerHTML = ""

    document.getElementById('showPredictionGame6_1').innerHTML = ""
    document.getElementById('showPredictionGame6_2').innerHTML = ""


}