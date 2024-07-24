import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent {
  restaurant: any;
  menus: any[] = [];

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam !== null ? +idParam : 0; // Convert id to number and handle null case

    this.restaurantService.getRestaurantById(id).subscribe(
      (data) => {
        this.restaurant = data;
        this.restaurantService.getRestaurantMenus(id).subscribe(
          (menusData) => {
            this.menus = menusData;    // Fetch the restaurant menus from the data
          },
          (error) => {
            console.error('Error fetching menus:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching restaurant:', error);
        
      }
    );
  }
}
