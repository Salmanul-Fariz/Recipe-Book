import { Component, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();

  recipes: Recipes[] = [
    new Recipes(
      'Easy Recipie',
      'Description of a recipe food',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];

  onSelectedRecipe(recipe: Recipes) {
    console.log('heki');

    this.recipeWasSelected.emit(recipe);
  }
}
