import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe:Recipe;
  @Output() recepeSelected = new EventEmitter<void>();
  constructor()
  {}
  ngOnInit(): void {
    
  }

  onSelected()
  {
    this.recepeSelected.emit();
  }
}
