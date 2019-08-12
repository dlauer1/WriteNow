import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxMasonryModule } from "ngx-masonry";

import { HomeComponent } from "./home/home.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

import { AppState } from "./shared/app-state.service";
import { VideoService } from "./videos/shared/video.service";
import { HttpClientModule } from "@angular/common/http";
import {
  VideosComponent,
  VideoListComponent,
  VideoListItemComponent,
  VideoDetailComponent
} from "./videos";
import { YoutubeSafeUrlPipe } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialComponent,
    VideosComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoDetailComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    HttpClientModule
  ],
  providers: [AppState, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
