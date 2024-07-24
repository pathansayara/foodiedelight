import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router:Router) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data;  // fetch the restaurant data
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  // View the restaurant details

  viewRestaurant(restaurant: any) {
    if (restaurant && restaurant.id) {
      console.log('View Restaurant ID:', restaurant.id);
      this.router.navigate(['/restaurant-view', restaurant.id]);
    } else {
      console.log('Restaurant ID is undefined');
    }
  }

  // Edit restaurant details
  
  editRestaurant(restaurant: any) {
    if (restaurant && restaurant.id) {
      console.log('Edit Restaurant ID:', restaurant.id);
      this.router.navigate(['/restaurant-edit', restaurant.id]);
    } else {
      console.log('Restaurant ID is undefined');
    }
  }

  // Delete restaurant from list

  deleteRestaurant(restaurant: any) {
    if (restaurant && restaurant.id) {
      this.restaurantService.deleteRestaurant(restaurant.id).subscribe(
        () => {
          console.log('Restaurant deleted successfully');
          this.restaurants = this.restaurants.filter(r => r.id !== restaurant.id);
        },
        (error) => {
          console.error('Error deleting restaurant:', error);
        }
      );
    }}
}
