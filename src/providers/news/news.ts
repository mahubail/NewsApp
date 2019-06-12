import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

/*
This API is from newsapi.org and two features are used:
1. The Top Headlines from many news resources and with two options which user can speicfy: Country and Category

2. Search for any word and articles are viewed from many news resources and with two options which user can specify: Language and Sort

There are two URLs one is used for the Top Headlines articles and the other is used for searching.
*/
  topHeadlinesUrl="https://newsapi.org/v2/top-headlines?";
  searchUrl="https://newsapi.org/v2/everything?";
  apiKey="&apiKey=8611252c534648fb8ce7be2cc3472f78";


  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  /*getNews function is accepting two paramaters: news type and news parameters
  newsType could be either "topHeadlines" or "search" and params are based on the newsType as mentioned above.
  */
  getNews(newsType, params)
  {
    
    if(newsType=="topHeadlines")
    {
      
      return this.http.get(this.topHeadlinesUrl+ params + this.apiKey);
    }
    else if(newsType=="search")
    {
      return this.http.get(this.searchUrl+ params + this.apiKey);
    }

  }

}
