import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipes } from './recipes.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectRecipe: Recipes;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipes) => {
      this.selectRecipe = recipe;
    });
  }
}
