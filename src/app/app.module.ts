import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingService } from './shopping-list/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
