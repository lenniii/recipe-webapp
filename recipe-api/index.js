let Recipe = require("./models/recipeModel");
let db = require("./db");

let express = require("express");
let recipesRoute = require("./routes/reciperHandler");
let bodyParser = require("body-parser");

var app = express();

app.use("/recipes", recipesRoute);
app.use(bodyParser.json());
app.listen(3001, err => {
	if (err) console.error(err);
	console.log("Connected and listening on port 3001.");
});
