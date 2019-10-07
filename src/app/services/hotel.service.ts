import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = "http://localhost:3002/hotels";

  apiUrl2 = "http://localhost:3002/wishlist";

  apiURLOrderByName= 'http://localhost:3002/hotels?_sort=name&_order=asc'; //getAll hotels order by name asc
  apiURLOrderByLike= 'http://localhost:3002/hotels?_sort=liked&_order=desc'; //getAll hotels order by name desc
  apiURLOrderByRating= 'http://localhost:3002/hotels?_sort=rating&_order=desc'; //getAll hotels order by name desc


  constructor(private http : HttpClient) { }

  _findAll(){
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  _ordringByName(){
    return this.http.get<Hotel[]>(this.apiURLOrderByName);
  }
  _ordringByLike(){
    return this.http.get<Hotel[]>(this.apiURLOrderByLike);
  }
  _ordringByRating(){
    return this.http.get<Hotel[]>(this.apiURLOrderByRating);
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
  
  _addToWishlist(hotel){
    return this.http.post<Hotel>(this.apiUrl2, hotel);
  }
  _deleteFromWishlist(id){
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }

  _getWishlist(){
    return this.http.get<Hotel[]>(this.apiUrl2);
  }
}
