import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestaurantComponent } from './restaurant/addrestaurant/addrestaurant.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantSuccessComponent } from './restaurant/add-restaurant-success/add-restaurant-success.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantViewComponent } from './restaurant/restaurant-view/restaurant-view.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';

const routes: Routes = [
  { path: 'add-restaurant', component: AddrestaurantComponent},
  { path: 'restaurant-edit/:id', component: RestaurantEditComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'restaurant-view/:id', component: RestaurantViewComponent },
  { path: 'home', component: HomeComponent},
  { path: 'restaurant-success', component:AddRestaurantSuccessComponent},
  {path: 'restaurant-list', component: RestaurantListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
