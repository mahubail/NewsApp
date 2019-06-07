import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  topHeadlinesUrl="https://newsapi.org/v2/top-headlines?";
  searchUrl="https://newsapi.org/v2/everything?";
  apiKey="&apiKey=8611252c534648fb8ce7be2cc3472f78";
  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  getNews(newsType, params)
  {
    console.log("getNews param:" + newsType);
    console.log("getNews param:" + params);
    if(newsType=="topHeadlines")
    {
      console.log(this.topHeadlinesUrl+ params + this.apiKey);
      //return "";
      return this.http.get(this.topHeadlinesUrl+ params + this.apiKey);
    }
    else if(newsType=="search")
    {
      return this.http.get(this.searchUrl+ params + this.apiKey);
    }

  }

}
