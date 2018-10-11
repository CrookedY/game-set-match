(function(){


var myForm = document.getElementById('allGames')

myForm.addEventListener('submit', function(ev){
    
    ev.preventDefault()

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

let formData  = {
    "game1H":parseInt(game1ScH),
    "game1A":parseInt(game1ScA),
    "game2H":parseInt(game2ScH),
    "game2A":parseInt(game2ScA),
    "game3H":parseInt(game3ScH),
    "game3A":parseInt(game3ScA),
    "game4H":parseInt(game4ScH),
    "game4A":parseInt(game4ScA),
    "game5H":parseInt(game5ScH),
    "game5A":parseInt(game5ScA),
    "game6H":parseInt(game6ScH),
    "game6A":parseInt(game6ScA)
}

let endPoint = "/api/predictions";

fetch(endPoint, {
    method: 'post',
    body: JSON.stringify(formData),
    headers: {
        'Content-Type':'application/json'
    }
})
.then(function(response){
    return response.json()
})


})

})()