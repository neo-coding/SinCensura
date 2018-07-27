import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';

@Injectable()
export class RadioProvider {
  url: string = 'http://192.168.0.3:1993/api/nowplaying/1';
  audio: string = "";
  file: MediaObject;
  constructor(
    public http: HttpClient,
    private media: Media) {
  }

  getInfo(){
    return this.http.get(this.url);
  }
  createMedia(){
    console.log(this.audio);
    this.file = this.media.create(this.audio);
  }
}
