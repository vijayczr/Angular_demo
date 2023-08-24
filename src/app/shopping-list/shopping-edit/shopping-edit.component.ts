import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("nameImput") nameInputRef :ElementRef;
  @ViewChild("amountInput") amountInputRef :ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  onAddItem()
  {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newngredienet = new Ingredient(ingName,ingAmount);

    this.IngredientAdded.emit(newngredienet)
  }
}
