import { Component, OnInit } from '@angular/core';
import { Meal } from "../meal";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meal: Meal = {
    id: 1,
    name: 'English Breakfast',
    content: "Lorem ipsum",
    image: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
    link: "https://www.youtube.com/watch?v=FXjYU2Ensck&feature=emb_logo",
    category: 'Beef',
    area: 'England',
  };

  ngOnInit(): void {

  }

  constructor() { }

}
