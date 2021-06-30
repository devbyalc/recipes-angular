import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddIngredient()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.nameInputRef.nativeElement.value;
    
    const newIngr = new Ingredient(name.value,Number(amount.value));
    this.newIngredient.emit(newIngr);
  
  }

}
