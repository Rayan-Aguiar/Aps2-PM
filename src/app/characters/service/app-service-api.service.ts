import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceApiService {
  
  constructor(public http:HttpClient) { }

  public getAllPersonagens(){
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

}
