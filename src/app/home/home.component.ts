
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText=''
  recipesAllData:any;
  constructor(private recipesData:RecipeService)
{
  recipesData.searchRecipes().subscribe((data:any)=>{this.recipesAllData=data;
    console.log(this.recipesAllData);
     });
}

onSearchSubmit(){


}
ngOnInit() {
}



  // search(){
  //   const apiKey = `5c317e2ce08c4cfe8005aa118aa1f801`;
  //   const searchUrl =`https://api.spoonacular.com/recipes/complexSearch?query=${this.searchText}&number=5&apiKe
  //   y=5c317e2ce08c4cfe8005aa118aa1f801`;

  //  this.http.get(searchUrl).subscribe((data:any)=>{
  //   this.searchResults=data.results;
  //   this.recipe=this.searchResults;
  //  });
}

