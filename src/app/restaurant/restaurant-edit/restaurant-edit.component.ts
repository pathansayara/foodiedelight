import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent {
  editRestaurantForm: FormGroup;
  restaurantId!: number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) {
    this.editRestaurantForm = this.fb.group({
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

// Edit the form details

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID Param:', idParam);
    if (idParam !== null) {
      this.restaurantId = +idParam;
      console.log('Restaurant ID:', this.restaurantId);
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe(
        (data) => {
          console.log('Fetched data:', data); 
          this.editRestaurantForm.setValue({
            name: data.name,
            description: data.description,
            location: data.location,
            cuisineType: data.cuisineType,
            contactInformation: data.contactInformation,
            openingHours: data.openingHours,
            deliveryRadius: data.deliveryRadius,
            rating: data.rating,
            websiteUrl: data.websiteUrl,
            specialFeatures: data.specialFeatures
          });
        },
        (error) => {
          console.error('Error fetching restaurant details:', error);
        }
      );
    } else {
      console.error('Invalid restaurant ID');
      this.router.navigate(['/restaurant-list']);
    }
  }
  
  
// Update the form after editing details

  onSubmit() {
    if (this.editRestaurantForm.valid) {
      console.log('Form values on submit:', this.editRestaurantForm.value); 
      this.restaurantService.updateRestaurant(this.restaurantId, this.editRestaurantForm.value).subscribe(
        () => {
          console.log('Restaurant updated successfully');
          this.router.navigate(['/restaurant-list']);
        },
        (error) => {
          console.error('Error updating restaurant:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}  