import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaySummaryService {

  // returns the string with the amount of each drink
  getDrinkList(chosenDrinks) {
    let drinkList = '';
    chosenDrinks.forEach((chosenDrink, index) => {
      drinkList += (`${chosenDrink.quantity} x ${chosenDrink.name}, `);
    });
    return drinkList;
  }

  // calculate the volume/mass/quantity of the ingredients required to prepare n drinks
  calculateIngredients(chosenDrinks) {
    console.log(chosenDrinks);
    let ingredients = [];
    chosenDrinks.forEach(chosenDrink => {
      chosenDrink.ingredients.forEach((ingredient) => {
        let isNew = true;
        ingredients.forEach(ingredient2 => {
          if (ingredient2.name === ingredient.name) {
            if (ingredient2.volume) { ingredient2.volume += ingredient.volume; }
            if (ingredient2.quantity) { ingredient2.quantity += ingredient.quantity; }
            if (ingredient2.mass) { ingredient2.mass += ingredient.mass; }
            isNew = false;
          }
        });
        if (isNew) {
          const newIngredient = Object.assign({}, ingredient);
          if (ingredient.volume) { newIngredient.volume *= chosenDrink.quantity; }
          if (ingredient.quantity) { newIngredient.quantity *= chosenDrink.quantity; }
          if (ingredient.mass) { newIngredient.mass *= chosenDrink.quantity; }
          ingredients.push(newIngredient);
        }
      });
    });
    return ingredients;
  }

  // calculate the cost of the ingredients required for the selected drinks
  calculateCost(ingredients) {
    let cost = 0;
    ingredients.forEach(ingredient => {
      if (ingredient.volume) { cost +=  ingredient.volume * ingredient.pricePerUnit; }
      if (ingredient.quantity) { cost += ingredient.quantity * ingredient.pricePerUnit; }
      if (ingredient.mass) { cost += ingredient.mass * ingredient.pricePerUnit; }
    });
    return cost.toFixed(2);
  }

  // calculate the mass of ethanol in selected drinks in total
  calculateEthanolMass(ingredients) {
    let ethanolMass = 0;
    ingredients.forEach(ingredient => {
      if (ingredient.ethanolPercentage) {
        ethanolMass += ingredient.ethanolPercentage / 100 * ingredient.volume * 0.789;
      }
    });
    return ethanolMass.toFixed(0);
  }

  constructor() {

  }

}
