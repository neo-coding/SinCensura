import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ContactoProvider } from '../../providers/contacto/contacto';
import { InAppBrowser } from '@ionic-native/in-app-browser';
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
    private iap: InAppBrowser
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      numero: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
  logForm() {
    console.log(this.todo.value);
    this.contacto.sendMessage(this.todo.value)
      .subscribe(data => {
        console.log(data);
      },
        err => {
          console.log(err);
        })
  }
  openBrowser(_url) {
    this.iap.create(_url, "_blank", "location=yes");
  }
}
