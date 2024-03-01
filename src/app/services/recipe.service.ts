import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

// service name is RecipeService
export class RecipeService {
searchText= ''
apiKey = `5c317e2ce08c4cfe8005aa118aa1f801`;

searchApiUrl=`https://api.spoonacular.com/recipes/complexSearch?query=${this.searchText}&number=5&apiKe
// y=5c317e2ce08c4cfe8005aa118aa1f801`

// need parsonal key for api url

  constructor(private objHttp:HttpClient ) { }

  searchRecipes(){
    return this.objHttp.get(this.searchApiUrl)
  }

}


// getRecipeInformation=
// https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=5c317e2ce08c4cfe8005aa118aa1f801


//getInstructions:
//https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=5c317e2ce08c4cfe8005aa118aa1f801
