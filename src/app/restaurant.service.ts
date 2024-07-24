import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: any[] = [];
  private nextId: number = 1;

  private apiUrl = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }


  //Add the new restaurant

  addRestaurant(restaurant: any): Observable<any> {
    return this.getRestaurants().pipe(
      map(restaurants => {
        const maxId = restaurants.length > 0 ? Math.max(...restaurants.map(r => r.id)) : 0;
        restaurant.id = maxId + 1;
        return restaurant;
      }),
      switchMap(newRestaurant => this.http.post(this.apiUrl, newRestaurant)),
      catchError(this.handleError)
    );
  }

  //get all restaurants list

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

 // get restaurants by ID

  getRestaurantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //Edit the restaurant details

  updateRestaurant(id: number, updatedRestaurant: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedRestaurant).pipe(
      catchError(this.handleError)
    );
  }

  //delete the restaurant from list

 deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

   //get the restaurant menus

   getRestaurantMenus(restaurantId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/menus?restaurantId=${restaurantId}`).pipe(
      catchError(this.handleError)
    );
  }
}
