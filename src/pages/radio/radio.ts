import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { AlertController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio';

/**
 * Generated class for the RadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  myIcon: string = "play";
  status: boolean = false;
  cancion: any = {};
  file: MediaObject;
  musicData: any = {
    artista: "-",
    title: "-"
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public radio: RadioProvider,
    private media: Media
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }
  turnRadio() {
    this.status = this.status != true;
    
      if(this.status){
        this.radio.getInfo()
        .subscribe(
          (res) => {
            this.setCancion(res);
            this.myIcon = "square";
          },
          (error) => {
            this.myIcon = "play";
            const alert = this.alertCtrl.create({
              title: 'Error!',
              subTitle: 'Hubo un error al intentar reproducir la música!',
              buttons: ['OK']
            });
            console.log(error);
            alert.present();
          }
        );
      }else{
        this.file.stop();
        this.myIcon = "play";
      }
  }
  setCancion(data: any) {
    this.musicData.artista = data.now_playing.song.artist;
    this.musicData.title = data.now_playing.song.title;
    this.file = this.media.create(data.station.listen_url);
    this.file.play();
    this.file.getCurrentAmplitude()
      .then(amp => console.log(amp))
  }
}
