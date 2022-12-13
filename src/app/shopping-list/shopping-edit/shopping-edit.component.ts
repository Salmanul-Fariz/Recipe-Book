import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediants.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  onAddItems() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingrediant(ingName, ingAmount);

    this.shoppingService.addIngredients(newIngredient);
  }
}
