import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Grape', 5)
      ];

      getIngredients(){
          return this.ingredients.slice()
      }
}