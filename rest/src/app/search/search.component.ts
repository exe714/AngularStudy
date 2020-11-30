import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  menuState:string = 'image';
  constructor(public searchService:SearchService) { }
  searchString:string;
  
  changeMenuState(s:string)
  {
   
    this.menuState=s; console.log(this.searchService.pickedRecipe.thumbnail);
  }
  search():void{
    this.searchService.search(this.searchString);
  }
  ngOnInit(): void {
  }

}
