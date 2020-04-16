const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');

MongoClient.connect("mongodb://localhost/" + settings.db, (err, db) => {
    if (err) throw err;
    console.log("Connected to db");
    db.collection("users", (err, collection) => {
        if (err) throw err;
        var docs = [
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ];
        collection.insert(docs, (err, result) => {
            if (err) throw err;
            console.dir(result);
        });
    });
});