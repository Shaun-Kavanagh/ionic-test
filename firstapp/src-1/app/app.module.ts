import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';


//initialize firebase
export const config = {
 
    apiKey: "AIzaSyDpLFX2ybiGPWLgLZiR9RTW8gH3BHFRNCo",
    authDomain: "ionic-test-cc733.firebaseapp.com",
    databaseURL: "https://ionic-test-cc733.firebaseio.com",
    projectId: "ionic-test-cc733",
    storageBucket: "ionic-test-cc733.appspot.com",
    messagingSenderId: "709127477872"
    

};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
