let mongoose = require("mongoose");

let Schema = mongoose.Schema;
let IngredientSchema = require("./ingredientModel");

let RecipeSchema = new Schema({
	_id: { type: Schema.Types.ObjectId, auto: true },
	title: { type: String, required: true },
	description: { type: String, required: true, max: 100 },
	cretatedAt: { type: Date, default: Date.now },
	imageURL: { type: String, required: true },
	ingredient: { type: [IngredientSchema], required: true },
	prepDesc: { type: String, required: true },
	note: { type: String, required: false }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
