import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  constructor(private http: HttpClient) { }

  private DB_URL = "https://hotel-agency.onrender.com/dishes";
  getDishList() {
    return this.http.get(this.DB_URL);
  }
}
