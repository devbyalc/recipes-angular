import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Grape', 5)
      ];

      getIngredients(){
          return this.ingredients.slice()
      }
      onIngredientAdded(newIngredient: Ingredient)
      {
        console.log("new Ingredient", newIngredient);
        this.ingredients.push(newIngredient);
        console.log("method called, list all ingredients",this.ingredients);
      }
}