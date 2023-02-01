import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor( private http:HttpClient) { }
  dataTransfer(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getCustList(){
    var arr = [1,2,3,4]
    return arr;
  }
  getCountryList(){
    return this.http.get('https://customapi.shoplocal-lagunabeach.com/country')
  }
}
