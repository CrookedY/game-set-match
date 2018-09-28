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
            res.render('example', { 'heading': "Top 20 Leaderboard", 'msg': '', "results": docs });
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

    addPredictions: function (app, req, res) {
        let newPrediction = req.body

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



}