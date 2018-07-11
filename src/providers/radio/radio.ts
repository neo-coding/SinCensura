import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';

@Injectable()
export class RadioProvider {
  url: string = 'http://localhost:1993/api/nowplaying/1';
  file: MediaObject;
  constructor(
    public http: HttpClient,
    private media: Media) {
  }

  getInfo(){
    return this.http.get(this.url);
  }
  createMedia(url){
    this.file = this.media.create(url);
  }
}
