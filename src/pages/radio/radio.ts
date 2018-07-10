import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { AlertController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio';

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  myIcon: string = '';
  status: boolean = false;
  musicData: any = {
    artista: "-",
    title: "-"
  };
  response: any = {};
  file: MediaObject;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public radio: RadioProvider,
    private media: Media
  ) {
    let music = JSON.parse(localStorage.getItem('music'));
    console.log(music);
    this.myIcon = music.icon;
    this.status = music.status;
  }

  ionViewDidLoad() {
  }
  turnRadio() {
    if (!this.status) {
      this.radio.getInfo()
        .subscribe(
          (res) => {
            this.setCancion(res);
            this.updateLocal('square', !this.status);
          },
          (error) => {
            this.updateLocal('play', this.status);
            const alert = this.alertCtrl.create({
              title: 'Error!',
              subTitle: 'Hubo un error al intentar reproducir la música!',
              buttons: ['OK']
            });
            console.log(error);
            alert.present();
          }
        );
    } else {
      this.file.stop();
      this.updateLocal('play', !this.status);
    }
  }
  setCancion(data: any) {
    console.log(data);
    this.musicData.artista = data.now_playing.song.artist;
    this.musicData.title = data.now_playing.song.title;
    this.file = this.media.create(data.station.listen_url);
    this.file.play();
    this.file.getCurrentAmplitude()
      .then(amp => console.log(amp))
  }
  updateLocal(icon, status) {
    let local = {
      icon: icon,
      status: status
    }
    console.log(local);
    localStorage.setItem('music', JSON.stringify((local)));
    this.myIcon = icon;
    this.status = status;
  }
}
