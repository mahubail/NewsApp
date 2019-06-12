import { SearchPage } from './../search/search';
import { NewsProvider } from './../../providers/news/news';
import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


newsData:any; //stores data from API
country="us"; //binded to ion-select with initial value of United States country
category="general"; //binded to ion-select with initial value of General category
params; //used to combine the parameters that are passed to the provider


countryList = [
{"name":"Argentina","val":"ar"},
{"name":"Australia","val":"au"},
{"name":"Austria","val":"at"},
{"name":"Belgium","val":"be"},
{"name":"Brazil","val":"br"},
{"name":"Bulgaria","val":"bg"},
{"name":"Canada","val":"ca"},
{"name":"China","val":"cn"},
{"name":"Colombia","val":"co"},
{"name":"Cuba","val":"cu"},
{"name":"Czech Republic","val":"cz"},
{"name":"Egypt","val":"eg"},
{"name":"France","val":"fr"},
{"name":"Germany","val":"de"},
{"name":"Greece","val":"gr"},
{"name":"Hong Kong","val":"hk"},
{"name":"Hungary","val":"hu"},
{"name":"India","val":"in"},
{"name":"Indonesia","val":"id"},
{"name":"Ireland","val":"ie"},
{"name":"Italy","val":"it"},
{"name":"Japan","val":"jp"},
{"name":"Latvia","val":"lv"},
{"name":"Lithuania","val":"lt"},
{"name":"Malaysia","val":"my"},
{"name":"Mexico","val":"mx"},
{"name":"Morocco","val":"ma"},
{"name":"Netherlands","val":"nl"},
{"name":"New Zealand","val":"nz"},
{"name":"Nigeria","val":"ng"},
{"name":"Norway","val":"no"},
{"name":"Philippines","val":"ph"},
{"name":"Poland","val":"pl"},
{"name":"Portugal","val":"pt"},
{"name":"Romania","val":"ro"},
{"name":"Russia","val":"ru"},
{"name":"Saudi Arabia","val":"sa"},
{"name":"Serbia","val":"rs"},
{"name":"Singapore","val":"sg"},
{"name":"Slovakia","val":"sk"},
{"name":"Slovenia","val":"si"},
{"name":"South Africa","val":"za"},
{"name":"South Korea","val":"kr"},
{"name":"Sweden","val":"se"},
{"name":"Switzerland","val":"ch"},
{"name":"Taiwan","val":"tw"},
{"name":"Thailand","val":"th"},
{"name":"Turkey","val":"tr"},
{"name":"UAE","val":"ae"},
{"name":"Ukraine","val":"ua"},
{"name":"United Kingdom","val":"gb"},
{"name":"United States","val":"us"},
{"name":"Venuzuela","val":"ve"}
];

categoryList = [
  {"name":"General","val":"general"},
  {"name":"Business","val":"business"},
  {"name":"Entertainment", "val":"entertainment"},
  {"name":"Health", "val":"health"},
  {"name":"Science", "val":"science"},
  {"name":"Sports", "val":"sports"},
  {"name":"Technology", "val":"technology"},
 ];


  constructor(public navCtrl: NavController, private newsProvider:NewsProvider, private menuCtrl:MenuController, private toastCtrl:ToastController) {

    //calling the provider at loading time
    this.newsProvider.getNews("topHeadlines","country=us&category=general").subscribe(
      data=>{this.newsData=data;
             
  },
    (err)=>{
      let toast = this.toastCtrl.create(
        {
          message: "An error occurred while loading data. Please check your connection.",
          duration: 3000,
          position: "middle"
        }
      );
      toast.present();
      toast.onDidDismiss(()=>
      {}
      );
    }
  )
  }

  //if any option change (country or category), params are passed to the provider to refresh the newsData
  onChange()
  {
    this.params="country=" + this.country + "&category=" + this.category;
    this.newsProvider.getNews("topHeadlines", this.params).subscribe(
      data=>{this.newsData=data;
        
  })
  }

  // this function formats the date and time representation
  adjustDateTime(dateTime:string)
  {
    return dateTime.substring(0,10) + " " + dateTime.substring(11,16) + " GMT";
  }

  goToSearch()
  {
    this.navCtrl.push(SearchPage);
  }

  //this function used to open the side ion-menu
  openMenu() {
    this.menuCtrl.open();
  }
}
