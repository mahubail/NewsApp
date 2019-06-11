import { AboutPage } from './../pages/about/about';
import { SearchPage } from './../pages/search/search';
//import { MyApp } from './app.component';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onClick(item, page)
  {
    item.close();
    if(page=="HomePage")
      this.nav.push(HomePage);
    else if(page=="SearchPage")
      this.nav.push(SearchPage);
      else if(page=="AboutPage")
      this.nav.push(AboutPage);

  }
  onClick1(item, page)
  {
    console.log("got to " + page + " page");
    
    item.close();
    console.log("Length of nav stack: " + this.nav.length());
    for ( let i=0; i < this.nav.length(); i++ )
      {
          let v = this.nav.getViews()[i];
          
          console.log(v.component.name);
          if(v.component.name==page)
          {
            this.nav.setRoot(v);
            return;
          }
      }
    //not found
    console.log("not found");
    if(page=="HomePage")
      this.nav.push(HomePage);
    else if(page=="SearchPage")
      this.nav.push(SearchPage);
      else if(page=="AboutPage")
      this.nav.push(AboutPage);

  }
}

