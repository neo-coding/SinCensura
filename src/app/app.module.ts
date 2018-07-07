import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RadioPage } from '../pages/radio/radio';
import { BonosPage } from '../pages/bonos/bonos';
import { EventosPage } from '../pages/eventos/eventos';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ContactoPage } from '../pages/contacto/contacto';
import { RadioProvider } from '../providers/radio/radio';
import { BonosProvider } from '../providers/bonos/bonos';
import { EventosProvider } from '../providers/eventos/eventos';
import { GaleriaProvider } from '../providers/galeria/galeria';
import { ContactoProvider } from '../providers/contacto/contacto';

@NgModule({
  declarations: [
    MyApp,
    RadioPage,
    BonosPage,
    EventosPage,
    GaleriaPage,
    ContactoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RadioPage,
    BonosPage,
    EventosPage,
    GaleriaPage,
    ContactoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RadioProvider,
    BonosProvider,
    EventosProvider,
    GaleriaProvider,
    ContactoProvider
  ]
})
export class AppModule {}
