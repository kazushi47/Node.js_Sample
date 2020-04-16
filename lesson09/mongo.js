const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');

MongoClient.connect("mongodb://localhost/" + settings.db, (err, client) => {
    if (err) {return console.dir(err);}
    console.log("Connected to db");
    const db = client.db(settings.db);
    db.collection("users", (err, collection) => {
        const docs = [
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ];
        collection.insert(docs, (err, result) => {
            console.dir(result);
        });
    });
});