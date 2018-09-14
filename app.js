var express = require ('express');
var fs = require('fs');
var path = require ('path')
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/example", function(req, res){
    res.render('example', {
        heading: 'LeaderBoard',
        msg:'The Current Winners are',
        myArray:['red', 'yellow', 'green', 'blue'],
        Leaderboard: [{
            "name": "fred",
            "score": 345
        }, {
            "name": "Laura",
            "score": 365
        },
        {
            "name": "Bob",
            "score": 32
        },
        {
            "name": "Janet",
            "score": 345
        }
    ]
    })
})

app.listen(3000)