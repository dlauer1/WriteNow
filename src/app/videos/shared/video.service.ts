import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { AppState } from "../../shared/app-state.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"; 
import { Observable } from 'rxjs';
import { Response } from '@angular/http';


@Injectable()
export class VideoService {
  constructor(private http: HttpClient, private appState: AppState) {}

  fetchVideos(query: string) {
    return this.http
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}` +
          "&maxResults=5" +
          "&type=video" +
          "&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM"
      )
     
  }
}
