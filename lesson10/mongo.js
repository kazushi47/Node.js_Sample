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

    const stream = collection.find().stream();
    stream.on("data", (item) => {
        console.log(item);
    });
    stream.on("end", () => {
        console.log("finished.");
    });
});