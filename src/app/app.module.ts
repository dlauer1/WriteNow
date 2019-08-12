import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxMasonryModule } from "ngx-masonry";

import { HomeComponent } from "./home/home.component";
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
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoDetailComponent,
    YoutubeSafeUrlPipe,
    CommentsComponent
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
