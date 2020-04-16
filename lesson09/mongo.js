const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const url = "mongodb://localhost/" + settings.db;

MongoClient.connect(url, connectOption, (err, client) => {
    if (err) return console.dir(err);
    console.log("Connected to db");
    const db = client.db(settings.db);
    db.collection("users", (err, collection) => {
        const docs = [
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ];
        collection.insertMany(docs, (err, result) => {
            console.dir(result);
        });
    });
});