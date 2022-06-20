import { Component, Input, OnInit } from '@angular/core';
import { Animal, AnimalsService } from '../animals.service';
import { FoodData } from '../models/foodData.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {

  @Input() animal : Animal = undefined!
  foodData : FoodData = undefined!
  
  constructor(private animalService : AnimalsService) { }

  nutri()
  {
    this.animalService.nutri(this.animal).subscribe(
      data=> this.foodData = data
    )
  }
}