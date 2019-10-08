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

  searchText = '';
  count = 0;

  showForm = false;

  myHotel : Hotel = {
    name : '',
    description : '',
    image : 'https://www.hotelgranadaarabeluj.com/wp-content/uploads/2017/05/hotel-con-encanto-en-granada-1.jpg',
    rating : 1,
    liked: false
  }

  hotels : Hotel[] = [];
  wishlistHotels : Hotel[] = [];
  resultHotels : Hotel[] = [];

  constructor( private hotelServices : HotelService) { }

  ngOnInit() {
    this.getAll();
    //this.getWishlist();
  }

  search(){
    this.resultHotels = this.hotels.filter((hotel) =>
      hotel.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    )
  }

  getAll(){
    this.hotelServices._findAll()
        .subscribe(hotels => {
          this.resultHotels = this.hotels = hotels;
        })
  }

  orderByName(){
    this.hotelServices._ordringByName()
    .subscribe(hotels => {
      this.resultHotels = this.hotels = hotels;
    })
  }

  orderByLike(){
    this.hotelServices._ordringByLike()
    .subscribe(hotels => {
      this.resultHotels = this.hotels = hotels;
    })
  }

  orderByRating(){
    this.hotelServices._ordringByRating()
    .subscribe(hotels => {
      this.resultHotels = this.hotels = hotels;
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
          if(hotel.liked == true){
            this.hotelServices._addToWishlist(hotel)
                .subscribe(() => {
                  this.wishlistHotels = [hotel, ...this.wishlistHotels];
                 // this.getWishlist();
                })
          }else{
            this.hotelServices._deleteFromWishlist(hotel.id)
                .subscribe(() => {
                  this.wishlistHotels = this.wishlistHotels.filter(hotel => hotel.id != hotel.id);
                  //this.getWishlist();
                })
          }
        })
        
  }

  // getWishlist(){
  //   this.HotelService._getWishlist()
  //       .subscribe(wishlistHotels => {
  //         this.wishlistHotels = wishlistHotels;
          
  //       })
  // }

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
