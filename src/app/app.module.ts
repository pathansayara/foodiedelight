import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddrestaurantComponent } from './restaurant/addrestaurant/addrestaurant.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestaurantSuccessComponent } from './restaurant/add-restaurant-success/add-restaurant-success.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantViewComponent } from './restaurant/restaurant-view/restaurant-view.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrestaurantComponent,
    HomeComponent,
    AddRestaurantSuccessComponent,
    RestaurantListComponent,
    RestaurantViewComponent,
    RestaurantEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
