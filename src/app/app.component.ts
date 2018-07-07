import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Paginas
import { RadioPage } from '../pages/radio/radio';
import { GaleriaPage } from '../pages/galeria/galeria';
import { EventosPage } from '../pages/eventos/eventos';
import { BonosPage } from '../pages/bonos/bonos';
import { ContactoPage } from '../pages/contacto/contacto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RadioPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Radio', component: RadioPage, icon: 'headset' },
      { title: 'Galeria', component: GaleriaPage, icon: 'images' },
      { title: 'Eventos', component: EventosPage, icon: 'calendar' },
      { title: 'Bonos', component: BonosPage, icon: 'pricetags' },
      { title: 'Contacto', component: ContactoPage, icon: 'mail' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
