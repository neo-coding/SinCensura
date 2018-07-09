import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { BonosProvider } from '../../providers/bonos/bonos';

/**
 * Generated class for the BonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bonos',
  templateUrl: 'bonos.html',
})
export class BonosPage {
  url: any = 'http://localhost';
  slides: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public bonos: BonosProvider,
    public alertCtrl: AlertController,
  ) {
    this.bonos.getBonos()
      .subscribe(data => {
        console.log(JSON.stringify(data));
        this.slides = data;
      },
        error => {
          const alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Hubo un error al cargar las imagenes!',
            buttons: ['OK']
          });
          console.log(JSON.stringify(error));
          alert.present();
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonosPage');
  }

}
