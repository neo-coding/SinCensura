import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactoProvider } from '../../providers/contacto/contacto';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  private todo: FormGroup;
  enlaces: {} = {
    facebook: 'https://www.facebook.com/SorenLlamas',
    twitter: 'https://twitter.com/wilmerllamas_',
    instagram: 'https://www.instagram.com/wilmerllamas_/',
    web: 'https://neocoding.com/'
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contacto: ContactoProvider,
    private formBuilder: FormBuilder,
    private iap: InAppBrowser,
    private toastCtrl: ToastController
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      numero: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
  }
  logForm() {
    this.contacto.sendMessage(this.todo.value)
      .subscribe(data => {
        let toast = this.toastCtrl.create({
          message: 'Mensaje enviado! Nos pondremos en contacto contigo muy pronto.',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();
        this.todo.controls['nombre'].setValue('');
        this.todo.controls['email'].setValue('');
        this.todo.controls['numero'].setValue('');
        this.todo.controls['mensaje'].setValue('');
      },
        err => {
          console.log(JSON.stringify(err));
        })
  }
  openBrowser(_url) {
    this.iap.create(_url, "_blank", "location=yes");
  }
}
