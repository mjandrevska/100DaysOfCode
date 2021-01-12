import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';
import { MessageService } from '../message.service';
import { MEALS } from '../mock-meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {

  selectedMeal: Meal;

  meals: Meal[];

  constructor(private mealService: MealService, private messageService: MessageService) { }

  ngOnInit() {
    this.getMeals();
  }

  onSelect(meal: Meal): void {
    this.selectedMeal = meal;
    this.messageService.add(`MealsComponent: Selected meal id=${meal.id}`);
  }

  getHeroes(): void {
    this.mealService.getMeals().subscribe(meals => this.meals = this.meals);
  }
}
