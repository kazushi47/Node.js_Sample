const MongoClient = require('mongodb').MongoClient;
const settings = require('./settings');
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const url = 'mongodb://localhost/' + settings.db;

MongoClient.connect(url, connectOption, (err, client) => {
    if (err) return console.dir(err);
    console.log("Connected to db");

    client.db(settings.db).collection('users', (err, collection) => {
        collection.find().toArray((err, items) => {
            console.log(items);
        });
    });
});