var express = require("express");
var router = express.Router();
var myControllers = require('../controller/controller.js')


router = function(app){
  

    app.route('/api/getPlayers')
    .get((req,res)=>{myControllers.viewAll(app,req,res);})


    app.route('/api/getScores')
    .get((req,res)=>{myControllers.viewScores(app,req,res);})
    app.route('/Leaderboard')
    .get((req,res)=>{myControllers.getScores(app,req,res);})

    
    app.route('/api/getPredictions')
    .get((req,res)=>{myControllers.viewPredictions(app,req,res);})

    
    app.route('/api/predictions')
    .post((req,res)=>{myControllers.addPredictions(app,req,res);})

    app.route('/api/getPredictions')
    .get((req,res)=>{myControllers.viewpredictions(app,req,res);})

    app.route('/api/editPredictions')
    .put((req,res)=>{myControllers.editPredictions(app,req,res);})

    
    app.route("/api/editScores")
    .put(function(req, res){myControllers.editScores(app,req,res);})

}



module.exports = router







