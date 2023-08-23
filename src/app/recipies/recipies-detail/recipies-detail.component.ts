import { Component, Input } from '@angular/core';
import { Recipe } from '../recipies-list/recipe.model';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent {
  @Input() recepe :Recipe;
}
