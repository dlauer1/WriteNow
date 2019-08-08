import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxMasonryModule } from 'ngx-masonry';

import { HomeComponent } from "./home/home.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, TestimonialComponent],
  imports: [BrowserModule, AppRoutingModule, NgxMasonryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
