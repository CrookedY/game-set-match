var express = require("express");
var router = express.Router();
var myControllers = require('../controller/controller.js')


router = function(app){
  

    app.route('/api/getPlayers')
    .get((req,res)=>{myControllers.viewAll(app,req,res);})
    
    
    app.route('/api/predictions')
    .post((req,res)=>{myControllers.addPredictions(app,req,res);})
    
}



module.exports = router







