import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GaleriaProvider } from '../../providers/galeria/galeria';
/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  images: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public galeria: GaleriaProvider,
    public alertCtrl: AlertController,
  ) {
    this.loadImages();
  }

  ionViewDidLoad() {
  }

  loadImages(){
    this.galeria.getImages()
    .subscribe(data=>{
      this.images = data;
      console.log(this.images);
    },err=>{
      const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Hubo un problema al cargar la galería!',
        buttons: ['OK']
      });
      alert.present();
    })
    this.images.sort(function(a,b) {return (a.created_time > b.created_time) ? 1 : ((b.created_time > a.created_time) ? -1 : 0);} );
  }
}
