import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RadioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RadioProvider {
  url: string = 'http://localhost:1993/api/nowplaying/1';
  constructor(public http: HttpClient) {
    console.log('Hello RadioProvider Provider');
  }

  getInfo(){
    return this.http.get(this.url);
  }
}
