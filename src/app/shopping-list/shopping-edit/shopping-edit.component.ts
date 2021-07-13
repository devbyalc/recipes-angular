import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAddIngredient()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amount = Number(this.amountInputRef.nativeElement.value);
    
    const newIngr = new Ingredient(name,amount);
    this.shoppingListService.onIngredientAdded(newIngr);
    this.newIngredient.emit()
  }

}
