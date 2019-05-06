/* eslint-disable no-console */
let mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/test";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false });
let db = mongoose.connection;
db.once("open", () => console.log("Connected to mongodb."));
module.exports = db;
