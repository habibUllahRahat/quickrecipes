import fs from "fs"
import path from "path"

export function getCategories() {
	const filePath = path.join(
		process.cwd(),
		"data",
		"categories.json"
	)
	const jsonData = fs.readFileSync(filePath, "utf-8")
	return JSON.parse(jsonData)
}
export function getRecipes() {
	const filePath = path.join(
		process.cwd(),
		"data",
		"recipes.json"
	)
	const jsonData = fs.readFileSync(filePath, "utf-8")
	return JSON.parse(jsonData)
}

export function getCategorisedRecipes(category) {
	const desieredCategory = getCategories().find(
		(c) => c.name === category
	)
	const recipes = getRecipes()
	return recipes.filter(
		(r) => r.category_id === desieredCategory.id
	)
}
export function getRandomRecipe() {
	const recipes = getRecipes()
	const recipe =
		recipes[Math.floor(Math.random() * recipes.length)]

	return recipe
}
export const getCategoryName = (id) => {
	const category = getCategories().find(
		(c) => c.id === id
	)
	return category.name
}
