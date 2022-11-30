var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("SportNutritions");
database.dropDatabase()
database = client.db("SportNutritions");
const nutrition = database.collection("nutrition");
const result = await nutrition.insertMany(data);
console.log(`${result.insertedCount} documents were inserted`);
} finally {
await client.close();
}
}
run()
