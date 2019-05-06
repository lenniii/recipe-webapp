import { ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "../actions/types";

const recipesReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return [...state, action.payload];

		case DELETE_RECIPE:
			return state.filter(recipe => recipe._id !== action.payload.id);

		//case UPDATE_RECIPE: *do something*

		default:
			return state;
	}
};

export default recipesReducer;
