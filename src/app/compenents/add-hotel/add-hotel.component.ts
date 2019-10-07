import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotels : Hotel[] = [];

  newHotel : Hotel = {
    name : '',
    description : '',
    image : 'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
    rating : 1,
    liked : false
  }

  constructor( private hotelServices: HotelService) { }

  ngOnInit() {
  }

  getAll(){
    this.hotelServices._findAll()
        .subscribe(hotels => {
          this.hotels = hotels;
        })
  }

  envoyer(){
    this.hotelServices._persist(this.newHotel)
        .subscribe((hotel) => {
          this.hotels = [hotel, ...this.hotels];
          this.getAll();
          this.reset();
        })
  }

  reset(){
    this.newHotel = {
      name : '',
      description : '',
      image : 'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
      rating : 1,
      liked : false
    }
  }

  

}
