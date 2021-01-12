import { Injectable } from '@angular/core';
import { Meal } from './meal';
import { MEALS } from './mock-meal';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  getMeals(): Observable<Meal[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('MealService: fetched meals');
    return of(MEALS);
  }

  constructor(private messageService: MessageService) { }
}
