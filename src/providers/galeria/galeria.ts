import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GaleriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GaleriaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GaleriaProvider Provider');
  }
  getImages(){
    return this.http.get('http://192.168.0.3/api/galeria');
  }
}
