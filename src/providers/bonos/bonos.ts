import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BonosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BonosProvider {
  url:string='http://192.168.0.3/api/bonos';
  constructor(public http: HttpClient) {
  }
  getBonos(){
    return this.http.get(this.url);
  }
}
