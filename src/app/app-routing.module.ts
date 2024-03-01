import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SearchresultdetailsComponent } from './searchresultdetails/searchresultdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"searchresult",component:SearchresultComponent},
  {path:"searchresultdetails",component:SearchresultdetailsComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
