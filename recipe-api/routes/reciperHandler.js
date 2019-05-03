let express = require("express");
let router = express.Router();
let db = require("../db");
let Recipe = require("../models/recipeModel");

router.get("/", (req, res) => {
	Recipe.find({})
		.then(result => {
			if (!result) res.send("Nessuna ricetta disponibile nel database");
			res.json(result)
				.status(200)
				.send();
		})
		.catch(err => console.error(err));
});

router.post("/:id", (req, res) => {
	// ADD ID
});

router.delete("/:id", (req, res) => {
	//DELETE ID
});

router.put("/:id", (req, res) => {
	// UPDATE ID
});

module.exports = router;
