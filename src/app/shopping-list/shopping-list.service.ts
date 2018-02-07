import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient ("jabuka", 5),
        new Ingredient ("jabuka", 5)
      ];

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push( ingredient );
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}