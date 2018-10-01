var express = require('express');
var fs = require('fs');
var path = require ('path')
var app = express();
var routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// app.use(express.static("./super6_test"));
// app.use(express.static('views'));
app.use(express.static("./super6-react/build"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

routes(app)

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {

app.set('myDb', client.db('gameDataDb'));

})


/*app.get("/leaderBoard", function(req,res){
    res.render('example', {
        heading: 'LeaderBoard',
        msg:'The Current Winners are',
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
})*/

app.listen(3000)