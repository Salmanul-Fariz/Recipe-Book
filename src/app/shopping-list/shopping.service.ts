import { EventEmitter } from '@angular/core';
import { Ingrediant } from '../shared/ingrediants.model';

export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingrediant[]>();

  private ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 10),
    new Ingrediant('Orange', 5),
    new Ingrediant('Tomato', 20),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingrediant: Ingrediant) {
    this.ingredients.push(ingrediant);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingrediant: Ingrediant[]) {
    // for (let el of ingrediant) {
    //   this.addIngredient(el);
    // }

    // Using ES6 Methord
    this.ingredients.push(...ingrediant);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
