import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit{

 @Output() recepeWasSelected  = new EventEmitter<Recipe>();
 recipes : Recipe[] = [
        new Recipe('A test Recepe','This is simply a test',
                    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'),
        new Recipe('A test Recepe','This is simply a test',
                    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')            
 ];

  ngOnInit(): void {
    
  }
  onRecepeSelected(recepe : Recipe)
  {
    this.recepeWasSelected.emit(recepe);
  }

}
