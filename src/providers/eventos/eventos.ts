import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EventosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventosProvider {
  url: string = 'http://192.168.0.3/api/eventos';
  constructor(public http: HttpClient) {}
  getEventos(){
    return this.http.get(this.url);
  }
}
