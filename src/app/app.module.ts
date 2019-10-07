import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './compenents/navbar/navbar.component';
import { ListHotelsComponent } from './compenents/list-hotels/list-hotels.component';
import { AddHotelComponent } from './compenents/add-hotel/add-hotel.component';
import { FooterComponent } from './compenents/footer/footer.component';
import { SidebarComponent } from './compenents/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListHotelsComponent,
    AddHotelComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
