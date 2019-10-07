import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

  like : false;

  showForm = false;

  myHotel : Hotel = {
    name : '',
    description : '',
    image : 'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
    rating : 1,
    liked: false
  }

  hotels : Hotel[] = [];

  constructor( private hotelServices : HotelService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.hotelServices._findAll()
        .subscribe(hotels => {
          this.hotels = hotels;
        })
  }

  deleteHotel(id){
    this.hotelServices._delete(id)
        .subscribe(() => {
          this.hotels = this.hotels.filter(hotel => hotel.id != id);
        })
  }

  addLike(hotel){
    this.hotelServices.liking(hotel.id, hotel.liked)
        .subscribe(() => {
          hotel.liked = !hotel.liked;
        })
  }

  // edit(hotel){
  //   this.editForm = true;
  //   this.myHotel = hotel;
  // }

  // updateHotel(){
  //   this.hotelServices._update(this.myHotel)
  //       .subscribe(hotel => {
  //         this.editForm = false;
  //         this.reset();
  //       })
  // }

  reset(){
    this.myHotel = {
      name : '',
      description : '',
      image : 'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
      rating : 1,
      liked : false
    }
  }


}
