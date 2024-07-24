import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent {

  addRestaurantForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private restaurantService: RestaurantService ) {
    this.addRestaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      location: ['', Validators.required],
      cuisineType: ['', Validators.required],
      contactInformation: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      openingHours: ['', Validators.required],
      deliveryRadius: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      websiteUrl: ['', Validators.pattern(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)],
      specialFeatures: ['']
    });
  }


  // Form submision
  
  onSubmit() {
    if (this.addRestaurantForm.valid) {
      console.log('Form Submitted!', this.addRestaurantForm.value);
      this.restaurantService.addRestaurant(this.addRestaurantForm.value).subscribe(
        (response) => {
          console.log('Restaurant added successfully', response);
          this.router.navigate(['/restaurant-success']); 
        },
        (error) => {
          console.error('Error adding restaurant:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
