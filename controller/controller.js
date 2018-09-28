module.exports = {
    viewAll: function(app,req,res){
        app.get('myDb').collection('gameData').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    viewPredictions: function(app,req,res){
        app.get('myDb').collection('predictions').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    addPredictions: function(app,req,res){
        let newPrediction = req.body
        
        app.get('myDb').collection('predictions').insertOne(newPrediction, function (err, docs) {
            if (err) {
                console.error(err)
            }
            
            res.json({'msg':'succesful'})
        })
    },

    editPredictions: function(app,req,res){
        var changePrediction = req.body
        app.get('myDb').collection('predictions').updateOne(
            {"user":"user1"},
            {$set: {
                "game1H": changePrediction.game1H,
                "game1A": changePrediction.game1A,
                "game2H": changePrediction.game2H,
                "game2A": changePrediction.game2A,
                "game3H": changePrediction.game3H,
                "game3A": changePrediction.game3A,
                "game4H": changePrediction.game4H,
                "game4A": changePrediction.game4A,
                "game5H": changePrediction.game5H,
                "game5A": changePrediction.game5A,
                "game6H": changePrediction.game6H,
                "game6A": changePrediction.game6A
            }
            },
            function (err,dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.modifiedCount === 1) {
                    res.json({ msg: "Successfully Amended"})
                } else {
                    res.json({msg: "Not Found"})
                }
            })
    }
        
    

}