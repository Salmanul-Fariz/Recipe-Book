import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipes } from './recipes.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  selectRecipe: Recipes;
}
