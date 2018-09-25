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
    }
    

}