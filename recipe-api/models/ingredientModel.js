let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let IngredientSchema = new Schema({
	_id: { required: false },
	name: { type: String, required: true },
	unit: { type: String, required: false },
	amount: { type: Number, required: true }
});

module.exports = IngredientSchema;
