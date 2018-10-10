var express = require('express');
var fs = require('fs');
var path = require ('path')
var app = express();
var routes = require('./routes/routes');
var users = require('./users');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// app.use(express.static("./super6_test"));
// app.use(express.static('views'));
app.use(express.static("./super6-react/build"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        users.lookup(username, password, function (err, user) {
            if (err) { return done(err); }
            done(null, user);
        });
    }
));

passport.deserializeUser(function(id, cb) {
    users.get(id, cb);
});

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'super6-app', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

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


app.post('/api/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
});

app.get('/api/logout', function(req, res){
    req.logout();
    res.clearCookie('connect.sid', {path: '/'});
    req.session.destroy(function () {
        res.redirect('/Login');
    });
  });

app.listen(3000)
