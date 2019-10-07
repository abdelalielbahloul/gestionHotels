import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = "http://localhost:3002/hotels";

  constructor(private http : HttpClient) { }

  _findAll(){
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
