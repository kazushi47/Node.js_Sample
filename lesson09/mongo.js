const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');

MongoClient.connect("mongodb://localhost/" + settings.db, (err, db) => {
    if (err) return console.dir(err);
    console.log("Connected to db");
});