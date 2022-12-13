import { Component, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipes;

  constructor(private recipeService: RecipeService) {}

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
