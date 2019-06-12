import { NewsProvider } from './../../providers/news/news';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

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

searchValue:string; //holds the keywords entered by the user
newsData:any; //stores data from API


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

language="en"; //binded to ion-select with initial value of English language

sortByList=[
  {"name":"Relevant","val":"relevancy"},
  {"name":"Popularity","val":"popularity"},
  {"name":"Newest first","val":"publishedAt"},
];

sortBy="relevancy"; //binded to ion-select with initial value of Relevant sorting option

params; //used to combine the parameters that are passed to the provider

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsProvider:NewsProvider, private menuCtrl:MenuController, private toastCtrl:ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  /* this function will be called in case search value, language, or sorting option changed.
  it will load data from the news provider.
  */
  doSearch()
  {
    if(this.searchValue != null)
    {
      //this.searchValue = this.searchValue.trim();
    
      if(this.searchValue.trim() != "")
      {
       
        this.params="q=" + this.searchValue + "&language=" + this.language + "&sortBy=" + this.sortBy;
        this.newsProvider.getNews("search", this.params).subscribe(
          data=>{
            this.newsData=data;
                        
          },
            (err)=>{
              this.showToast("An error occurred while loading data. Please check your connection.");
                    }
          
          );
        }
        else // space
        {
          this.newsData = null;
         
        }
    }
  }

  languageChange()
  {
    console.log(this.language);
  }

// this function formats the date and time representation
  adjustDateTime(dateTime:string)
  {
    return dateTime.substring(0,10) + " " + dateTime.substring(11,16) + " GMT";
  }

  //this function used to open the side ion-menu
  openMenu() 
  {
    this.menuCtrl.open();
  }

showToast(msg:string)
{
  let toast = this.toastCtrl.create(
    {
      message: msg,
      duration: 3000,
      position: "middle"
    }
  );
  toast.present();
  toast.onDidDismiss(()=>
  {}
  );
}

}
