let express = require("express");
let router = express.Router();
let db = require("../db");
let Recipe = require("../models/recipeModel");

router.get("/", (req, res) => {
	Recipe.find({})
		.then(result =>
			res
				.json(result)
				.status(200)
				.send()
		)
		.catch(err => console.error(err));
});

router.post("/", (req, res) => {
	let query = req.query;
	console.log(req.body);

	let newRecipe = new Recipe({
		title: query.title,
		description: query.description,
		imageURL: query.imageURL,
		ingredient: query.ingredient,
		prepDesc: query.prepDesc,
		note: query.note
	});
	Recipe.find({ title: query.title })
		.then(result => {
			if (result != 0) {
				res.sendStatus(403);
				return;
			}
			Recipe.create(newRecipe)
				.then(() => {
					res.sendStatus(200);
					console.log("Inserted " + newRecipe);
				})
				.catch(err => {
					console.error(err);
					res.sendStatus(404);
				});
		})
		.catch(err => console.error(err));
});

router.delete("/:id", (req, res) => {
	let recipeID = req.params.id;
	Recipe.findByIdAndDelete({ _id: recipeID })
		.then(res.sendStatus(200))
		.catch(err => {
			console.error(err);
		});
});

router.put("/:id", (req, res) => {
	let recipeID = req.params.id;
	let query = req.query;

	let newRecipe = new Recipe({
		_id: recipeID,
		title: query.title,
		description: query.description,
		imageURL: query.imageURL,
		ingredient: query.ingredient,
		prepDesc: query.prepDesc,
		note: query.note
	});
	console.log(newRecipe);
	Recipe.findByIdAndUpdate({ _id: recipeID }, newRecipe)
		.then(res.sendStatus(200))
		.catch(err => console.error(err));
});

module.exports = router;
