// Import the food.json file
const foodJSON = require('./food.json')

// Function to list all the food items
function allFoodItems(foodData){
    return foodData.map(foodJSON => foodJSON.foodname)
}

// Function to list all the food items with the specified category
function itemCatVeg(foodData, cat){
    return foodData.filter(foodJSON => foodJSON.category == cat).map(foodJSON => foodJSON.foodname)
}

// Function to list all the food items with calorie above 100
function itemCalGreat(foodData, calCount){
    return foodData.filter(foodJSON => foodJSON.calorie > calCount).map(foodJSON => foodJSON.foodname)
}

// Function to list all the food items with calorie below 100
function itemCalLess(foodData, calCount){
    return foodData.filter(foodJSON => foodJSON.calorie < calCount).map(foodJSON => foodJSON.foodname)
}

// Function to list all the food items with highest protien content to lowest
function itemProtSort(foodData){
    return foodData.sort((a,b) => b.protiens - a.protiens).map(foodJSON => foodJSON.foodname)
}

// Function to list all the food items with the lowest carb content to highest
function itemCabSort(foodData){
    return foodData.sort((a,b) => a.cab - b.cab).map(foodJSON => foodJSON.foodname)
}

// Display results
console.log("List of all food items: \n", allFoodItems(foodJSON).join(' , '), "\n")
console.log("List of all food items with category Vegetable: \n", itemCatVeg(foodJSON, "Vegetable").join(' , '), "\n")
console.log("List of all the food items with the category Fruit: \n", itemCatVeg(foodJSON, "Fruit").join(' , '), "\n")
console.log("List of all the food items with the category Protein: \n", itemCatVeg(foodJSON, "Protein").join(' , '), "\n")
console.log("List of all the food items with the category Nuts: \n", itemCatVeg(foodJSON, "Nuts").join(' , '), "\n")
console.log("List of all the food items with the category Dairy: \n", itemCatVeg(foodJSON, "Dairy").join(' , '), "\n")
console.log("List of all the food items with the calorie above 100: \n", itemCalGreat(foodJSON, 100).join(' , '), "\n")
console.log("List of all the food items with the calorie below 100: \n", itemCalLess(foodJSON, 100).join(' , '), "\n")
console.log("All food items sorted in descending order according to the Protein content: \n", itemProtSort(foodJSON).join(' , '), "\n")
console.log("All food items sorted in ascending order according to the Cab content: \n", itemCabSort(foodJSON).join(' , '), "\n")