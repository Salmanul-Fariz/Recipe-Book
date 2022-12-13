import { Ingrediant } from '../shared/ingrediants.model';

export class ShoppingService {
  private ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 10),
    new Ingrediant('Orange', 5),
    new Ingrediant('Tomato', 20),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingrediant: Ingrediant) {
    this.ingredients.push(ingrediant);
  }
}
