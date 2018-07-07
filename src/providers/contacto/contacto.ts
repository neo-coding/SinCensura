import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactoProvider
{
url:any = 'http://localhost/api/contacto';

  constructor(public http: HttpClient) {
    console.log('Hello ContactoProvider Provider');
  }
  sendMessage(msg:any){
    return this.http.post(this.url, msg);
  }
}
