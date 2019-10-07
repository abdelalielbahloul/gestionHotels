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

  _persist(hotel){
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  _delete(id){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  liking(id, liked){
    return this.http.patch(`${this.apiUrl}/${id}`, { liked : !liked});
  }

  // _update(hotel){
  //   return this.http.put(`${this.apiUrl}/${hotel.id}`, hotel);
  // }
}
