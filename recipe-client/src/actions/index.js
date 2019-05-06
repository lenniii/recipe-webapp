import { GET_RECIPE, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "./types";
import axios from "axios";
const API_URL = "http://localhost:3001/recipes/";

export const getRecipes = () => {
	return dispatch => {
		return axios
			.get(API_URL)
			.then(res => dispatch(getRecipesSuccess(res.data)))
			.catch(err => console.error(err));
	};
};

export const getRecipesSuccess = (recipes = null) => {
	return {
		type: GET_RECIPE,
		recipes
	};
};

export const addRecipe = recipeObj => {
	return dispatch => {
		return axios
			.post(API_URL, recipeObj, {
				headers: { "Content-Type": "application/json" }
			})
			.then(res => dispatch(addRecipeSuccess(res.data)))
			.catch(err => console.error(err));
	};
};

export const addRecipeSuccess = recipeObj => {
	return {
		type: ADD_RECIPE,
		payload: {
			recipeObj
		}
	};
};

export const updateRecipe = (recipeObj, id) => {
	return dispatch => {
		return axios
			.put(API_URL + id, recipeObj, {
				headers: { "Content-Type": "application/json" }
			})
			.then(res => dispatch(updateRecipeSuccess(res.data, id)));
	};
};

export const updateRecipeSuccess = (recipeObj, id) => {
	return {
		type: UPDATE_RECIPE,
		payload: {
			recipeObj,
			id
		}
	};
};

export const deleteRecipe = id => {
	return dispatch => {
		return axios
			.delete(API_URL + id)
			.then(res => dispatch(deleteRecipeSuccess(id)));
	};
};

export const deleteRecipeSuccess = id => {
	return {
		type: DELETE_RECIPE,
		payload: { id }
	};
};
