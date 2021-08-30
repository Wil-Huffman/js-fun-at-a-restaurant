function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type){
  var menuItem = {
      name: name,
      price: price, 
      type: type,
  }
  return menuItem
};

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
    ingredients.push(item)
  }
};

function formatPrice(price) {
  return `$${price.toString()}`
};

function decreasePrice(price) {
  return price * .9
};

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


