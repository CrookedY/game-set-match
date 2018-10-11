var express = require("express");
var router = express.Router();
var myControllers = require('../controller/controller.js')

function requireAuthentication(req, res, next) {

    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).send({
        message: 'You must be logged in'
    });
}


router = function(app){
  

    app.route('/api/getPlayers')
    .get((req,res)=>{myControllers.viewAll(app,req,res);})


    app.route('/api/getScores')
    .get((req,res)=>{myControllers.viewScores(app,req,res);})
    app.route('/Leaderboard')
    .get((req,res)=>{myControllers.getScores(app,req,res);})


    app.route('/api/predictions')
    .post(/*requireAuthentication,*/function(req,res)/*=>*/{myControllers.addPredictions(app,req,res);})
    .post(requireAuthentication,(req,res)=>{myControllers.addPredictions(app,req,res);})

    app.route('/api/getPredictions')
    // .get(/*requireAuthentication,*/ function(req,res)/*=>*/{myControllers.viewpredictions(app,req,res);})
    .get(requireAuthentication, (req,res)=>{myControllers.viewPredictions(app,req,res);})

    app.route('/api/editPredictions')
    .put(requireAuthentication, (req,res)=>{myControllers.editPredictions(app,req,res);})


    app.route("/api/editScores")
    .put(function(req, res){myControllers.editScores(app,req,res);})

}



module.exports = router







