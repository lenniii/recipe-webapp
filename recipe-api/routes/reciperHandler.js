/* eslint-disable no-console */
let express = require("express");
let router = express.Router();
// eslint-disable-next-line no-unused-vars
let db = require("../db");
let Recipe = require("../models/recipeModel");

router.get("/", (req, res) => {
	//GET ALL RECIPES IN DB

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
	//ADD NEW RECIPE TO DB

	let recipeObj = req.body; //Recipe Obj to add (in POST body)

	// Fill newRecipe schema with data
	let newRecipe = new Recipe({
		title: recipeObj.title,
		description: recipeObj.description,
		imageURL: recipeObj.imageURL,
		ingredient: recipeObj.ingredient,
		prepDesc: recipeObj.prepDesc,
		note: recipeObj.note
	});

	//Save new recipe in db
	Recipe.create(newRecipe)
		.then(() => {
			res.sendStatus(200);
			console.log("Inserted " + newRecipe);
		})
		.catch(err => {
			console.error(err);
			res.sendStatus(404);
		});
});

router.delete("/:id", (req, res) => {
	//DELETE RECIPE IN DB
	let recipeID = req.params.id;
	Recipe.findByIdAndDelete({ _id: recipeID })
		.then(res.sendStatus(200))
		.catch(err => {
			console.error(err);
			res.sendStatus(404);
		});
});

router.put("/:id", (req, res) => {
	//UPDATE A RECIPE IN DB
	let recipeID = req.params.id;
	let recipeObj = req.body; //Updated recipeObj

	//Fill newRecipe
	let updatedRecipe = new Recipe({
		_id: recipeID,
		title: recipeObj.title,
		description: recipeObj.description,
		imageURL: recipeObj.imageURL,
		ingredient: recipeObj.ingredient,
		prepDesc: recipeObj.prepDesc,
		note: recipeObj.note
	});
	Recipe.findByIdAndUpdate({ _id: recipeID }, updatedRecipe)
		.then(res.sendStatus(200))
		.catch(err => console.error(err));
});

module.exports = router;
