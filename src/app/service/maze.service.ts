import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  constructor(private http: HttpClient) { }
  
  getShows() {
    let apiUrl = 'http://api.tvmaze.com/shows';
    return this.http.get(apiUrl);
  }
}
