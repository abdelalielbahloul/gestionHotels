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

  wishlistHotels : Hotel[] = [];

  toggleWishlist = false;

  emptyWishlist = false;

  newHotel : Hotel = {
    name : '',
    description : '',
    image : 'https://www.hotel-les-ecureuils.com/wp-content/uploads/2019/09/hotel-grand-bornand-22.jpg',
    rating : 1,
    liked : false
  }

  constructor( private hotelServices: HotelService) { }

  ngOnInit() {
    this.getAll();
    this.getWishlist();
  }

  getAll(){
    this.hotelServices._findAll()
        .subscribe(hotels => {
          this.hotels = hotels;
        })
  }

   getWishlist(){
    this.hotelServices._getWishlist()
        .subscribe(wishlistHotels => {
          this.wishlistHotels = wishlistHotels;
          if(this.wishlistHotels.length == 0){
            this.emptyWishlist = true;
          }
        })
  }

  envoyer(){
    this.hotelServices._persist(this.newHotel)
        .subscribe((hotel) => {
          this.hotels = [hotel, ...this.hotels];
          // this.getAll();
          this.reset();
          if(hotel.liked == true){
            this.hotelServices._addToWishlist(this.newHotel)
                .subscribe( (hotel) => {
                  this.wishlistHotels = [hotel, ...this.wishlistHotels];
                })
          }
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
