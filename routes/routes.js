var express = require("express");
var router = express.Router();

router = function(app){
    app.route("/").get(function(req, res){
        res.send('Index');
    })
    app.route("/faq").get( function(req, res){
        res.send('FAQ')
    })
    app.route("/Blah").get( function(req, res){
        res.send('Blah')
    })

}

module.exports = router