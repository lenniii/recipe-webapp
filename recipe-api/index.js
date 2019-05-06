/* eslint-disable no-console */
let express = require("express");
let recipesRoute = require("./routes/reciperHandler");
let bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use("/recipes", recipesRoute);

app.listen(3001, err => {
	if (err) console.error(err);
	console.log("Connected and listening on port 3001.");
});
