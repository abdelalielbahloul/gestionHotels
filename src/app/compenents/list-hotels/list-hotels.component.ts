import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {

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

}
