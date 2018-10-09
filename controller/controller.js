module.exports = {
    viewAll: function (app, req, res) {
        app.get('myDb').collection('gameData').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },


    getScores: function (app, req, res) {
        rank = 0;
        app.get('myDb').collection('scores').find({})
        .sort({ score: -1 })
        .limit(20)
        .toArray(function (err, docs) {
            //https://stackoverflow.com/questions/44587829/sorting-and-ranking-documents-based-on-key-values
            if (err) {
                console.error(err)
            }
            docs.forEach(doc => {
                rank++;
                doc.rank = rank;
    });
    res.json(docs)
        //     res.render('example', { 'heading': "Top 20 Leaderboard", 'msg': '', "results": docs });
        })
    },

    viewScores: function (app, req, res) {
        app.get('myDb').collection('scores').find({}).toArray(function (err, docs) {
                     if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    viewPredictions: function(app,req,res){
        let user = req.user.id
        app.get('myDb').collection('predictions').find({"user":user}).toArray(function (err, docs) {

            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },


    //edit scores for leaderboard based on predictions
    editScores: function(app,req,res){
        var amendScores = req.body;
        console.dir(amendScores);
        //res.send("update things")
        //forEach because couldn't get updateMany to work
        amendScores.forEach(element => {
            app.get('myDb').collection('scores').updateOne(
                {"user":element.user},
                {$set: {
                    "score":element.points,
                },
            },
            {upsert:true},
            function (err, dbresp) {
                if (err) {
                    console.error(err)
                }
                //Can't have this because trying to return too many responses
                // if (dbresp.modifiedCount ===1){
                //     res.json({msg:"suceessfully changed"})
                // } else{
                //     res.json({msg:"not found"})
                // }
                }) 
        });

        //add response error message here
    },



    addPredictions: function(app,req,res){

        let newPrediction = req.body
        let user = req.user.id
        newPrediction["user"] = user
        console.log(newPrediction)

        app.get('myDb').collection('predictions').insertOne(newPrediction, function (err, docs) {
            if (err) {
                console.error(err)
            }

            res.json({ 'msg': 'succesful' })
        })
    },

    viewResults: function (app, req, res) {
        app.get('myDb').collection('predictions').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },


    editPredictions: function(app,req,res){
        var changePrediction = req.body
        let user = req.user.id
        changePrediction["user"] = user
        app.get('myDb').collection('predictions').updateOne(
            {"user":user},
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