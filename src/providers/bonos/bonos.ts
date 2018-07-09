import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BonosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonosProvider {
  url:string='http://localhost/api/bonos';
  constructor(public http: HttpClient) {
    console.log('Hello BonosProvider Provider');
  }
  getBonos(){
    return this.http.get(this.url);
  }
}
