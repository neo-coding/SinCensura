import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio';

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  id;
  ngOnInit() {
    this.setCancion();
    this.id = setInterval(() => {
      this.setCancion(); 
    }, 10000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  myIcon: string = '';
  status: boolean = false;
  musicData: any = {
    artista: "SinCensura",
    title: "Radio Off"
  };
  response: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public radio: RadioProvider,
  ) {
    let music = JSON.parse(localStorage.getItem('music'));
    this.myIcon = music.icon;
    this.status = music.status;
  }
  ionViewDidLoad() {
  }
  setCancion() {
    let info;
    this.radio.getInfo()
    .subscribe(data=>{
      info = data;
      this.musicData = {
        title: info.now_playing.song.title,
        artista: info.now_playing.song.artist
      }
    }, err=>{
      this.updateLocal('play', this.status);
      const alert = this.alertCtrl.create({title: 'Error!',subTitle: 'Hubo un error al intentar reproducir la música!',buttons: ['OK']});
      alert.present();
    })
  }
  turnRadio() {
    if (!this.status) {
      setInterval(this.setCancion(), 10000);
      this.updateLocal('square', !this.status);
      this.radio.file.play();
    } else {
      this.radio.file.stop();
      this.updateLocal('play', !this.status);
    }
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
