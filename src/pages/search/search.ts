import { NewsProvider } from './../../providers/news/news';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
searchValue:string;
newsData:any;
languageList=[
  {"name":"Arabic","val":"ar"},
  {"name":"German","val":"de"},
  {"name":"English","val":"en"},
  {"name":"Spanish","val":"es"},
  {"name":"French","val":"fr"},
  {"name":"Italina","val":"it"},
  {"name":"Dutch","val":"nl"},
  {"name":"Norwegian","val":"no"},
  {"name":"Portuguese","val":"pt"},
  {"name":"Russian","val":"ru"},
  {"name":"Chinese","val":"zh"},
];
language="en";

sortByList=[
  {"name":"Relevant","val":"relevancy"},
  {"name":"Popularity","val":"popularity"},
  {"name":"Newest first","val":"publishedAt"},
];

sortBy="relevancy";

params;
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider:NewsProvider, private menuCtrl:MenuController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  doSearch()
  {
    if(this.searchValue != null)
    {
      //this.searchValue = this.searchValue.trim();
    
      if(this.searchValue.trim() != "")
      {
        console.log(this.searchValue);
        this.params="q=" + this.searchValue + "&language=" + this.language + "&sortBy=" + this.sortBy;
        this.newsProvider.getNews("search", this.params).subscribe(
          data=>{this.newsData=data;
            console.log(this.newsData);
            console.log(this.newsData.articles)});
        }
    }
  }

  languageChange()
  {
    console.log(this.language);
  }

  adjustDateTime(dateTime:string)
  {
    return dateTime.substring(0,10) + " " + dateTime.substring(11,16) + " GMT";
  }
  openMenu() {
    this.menuCtrl.open();
  
}
}
