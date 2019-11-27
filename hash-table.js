// You are given a list dishes, where each element consists of a list of strings beginning with the name of the dish, followed by all the ingredients used in preparing it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

// Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically, and the result array should be sorted lexicographically by the names of the ingredients.

// Example

// For
//   dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
//             ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
//             ["Quesadilla", "Chicken", "Cheese", "Sauce"],
//             ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
// the output should be
//   groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
//                             ["Salad", "Salad", "Sandwich"],
//                             ["Sauce", "Pizza", "Quesadilla", "Salad"],
//                             ["Tomato", "Pizza", "Salad", "Sandwich"]]


function groupingDishes(dishes) {
  const dishTable = {}
  const ingredientTable = {}

  const dishNames = dishes.reduce((a, e) => {
    return [...a, e[0]]
  }, [])

  const ingredients = dishes.filter(e => e.shift())
  dishNames.forEach(e => dishTable[`${e}`] = null)
  
  for (let key in dishTable) {
    dishTable[`${key}`] = ingredients[0] 
    ingredients.shift()
  }
  const flattenedIngredients = dishes.reduce((a, e) => a.concat(e))
  
  flattenedIngredients.forEach(e => ingredientTable[`${e}`] = [])
  for (let ingredientKey in ingredientTable) {
    for (let dishKey in dishTable) {
      if (dishTable[`${dishKey}`].includes(ingredientKey)) {
        ingredientTable[`${ingredientKey}`] = ingredientTable[`${ingredientKey}`].concat(dishKey)
      }
    }
  }
  for (let key in ingredientTable) {
    ingredientTable[`${key}`].unshift(key)
  }

  const filteredIngredients = Object.values(ingredientTable).filter(e => e.length > 2)

  return filteredIngredients
}
debugger
console.log(groupingDishes(
  [
    ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
  ]
));
