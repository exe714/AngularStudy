import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 
  search(searchString: string) {
      this.results = [];
      this.pickedRecipe=null;
     this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`).subscribe(response   =>
      {
       
        if(!response['meals']){ alert('No recipes available');}
        else{
        for(let i=0;i<response['meals'].length;i++)
        {
          this.results.push(new Result(response['meals'][i]));
          
        }
        
      }})
    
  }
  chooseRecipe(result:Result)
  {
    this.pickedRecipe=result;
  }
  
  public results:Result[]=[];
  public pickedRecipe:Result;
  constructor(public http:HttpClient) {
   
   }
  
}
class Result{
  _title: string;
  _tubeLink: string;
  _ingredients: string[]=[];
  _measures:string[]=[];
  _instructions:string;
  _thumbnail: string;




  constructor(result:any)
  {
    // console.log(result)
    this._title = result['strMeal'];
    this._tubeLink= result['strYoutube'];
    for(let i =1;i<21;i++)
    {
      this._ingredients.push(result[`strIngredient${i}`]);
      this._measures.push(result[`strMeasure${i}`]);
    };
    this._instructions=result.strInstructions; 
    this._thumbnail=result.strMealThumb;
    // console.log(this._thumbnail)
  }
  get title ():string{return this._title}
get tubeLink ():string{return this._tubeLink}
get ingredients ():string[]{return this._ingredients}
get measures():string[]{return this._measures}
get instructions():string{return this._instructions}
  get thumbnail ():string{return this._thumbnail}



 
}
