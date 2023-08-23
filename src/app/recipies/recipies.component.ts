import { Component, Input } from '@angular/core';
import { Recipe } from './recipies-list/recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent {
  @Input() selectedRecepe:Recipe;
}
