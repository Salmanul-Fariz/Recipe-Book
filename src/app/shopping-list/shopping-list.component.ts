import { Component } from '@angular/core';
import { Ingrediant } from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingrediant[] = [
    new Ingrediant('Apple', 10),
    new Ingrediant('Orange', 5),
    new Ingrediant('Tomato', 20),
  ];

  onIngredientAdded(ingredient: Ingrediant) {
    this.ingredients.push(ingredient);
  }
}
