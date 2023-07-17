import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit{
 recipes : Recipe[] = [
        new Recipe('A test Recepe','This is simply a test','https://www.howtocook.recipes/homemade-ratatouille-recipe/')
 ];

  ngOnInit(): void {
    
  }

}
