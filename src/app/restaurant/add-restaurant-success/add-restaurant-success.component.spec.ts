import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantSuccessComponent } from './add-restaurant-success.component';

describe('AddRestaurantSuccessComponent', () => {
  let component: AddRestaurantSuccessComponent;
  let fixture: ComponentFixture<AddRestaurantSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRestaurantSuccessComponent]
    });
    fixture = TestBed.createComponent(AddRestaurantSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
