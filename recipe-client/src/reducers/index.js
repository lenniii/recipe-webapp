import { combineReducers } from "redux";
import recipes from "./recipesReducer";
export default combineReducers({
	recipes: recipes
});
