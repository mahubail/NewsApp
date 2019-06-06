import { NewsProvider } from './../../providers/news/news';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
newsData:any;
  constructor(public navCtrl: NavController, private newsProvider:NewsProvider) {

    this.newsProvider.getNews("topHeadlines","country=us&category=general").subscribe(
      data=>{this.newsData=data;
        console.log(this.newsData);
       // console.log(this.newsData.articles);
    
  })
  }
}
