import { EventEmitter } from '@angular/core';
import { Recipes } from './recipes.modal';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes(
      'Easy Recipie',
      'Description of a recipe food',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipes(
      'medium Recipie',
      'Description of a recipe food',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];

  getRecipes() {
    return this.recipes;
  }
}
