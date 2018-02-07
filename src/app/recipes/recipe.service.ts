import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';



export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor() {}

    private recipes: Recipe[] = [
        new Recipe (
        'Tasty Pasta',
        'Healthy!',
        'http://www.nationalpastaday.com/uploads/1/0/8/5/10858300/1588941_orig.jpg',
       [
        new Ingredient("Pasta", 1),
        new Ingredient("Tomatoes", 4)
       ]),
        new Recipe (
          'Hamburger',
          'Everything you need!',
          `https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238246_1280.jpg`,
         [
           new Ingredient("Meat", 1),
           new Ingredient("Buns", 2)
         ])
      ];

      getRecipes() {
        return this.recipes.slice();
      }

}