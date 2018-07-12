import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  url: any = 'http://localhost';
  slides: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public eventos: EventosProvider
  ) {
    this.eventos.getEventos()
      .subscribe(data => {
        this.slides = data;
        if(this.slides.length === 0){
          const alert = this.alertCtrl.create({
            title: 'Lo sentimos :(',
            subTitle: 'No hay eventos programados!',
            buttons: ['OK']
          });
          alert.present();
        }
      },
        error => {
          const alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Hubo un error al cargar los eventos!',
            buttons: ['OK']
          });
          alert.present();
        })
  }

  ionViewDidLoad() {
  }

}
