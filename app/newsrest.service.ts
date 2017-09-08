import { Injectable } from "angular2/core";
import { contentData } from "./news.data";
import { Http } from "angular2/http";
import { Observable } from "rxjs/Observable";
import { newsContent } from "./news";
import 'rxjs/Rx';

@Injectable()
export class NewsService{
    constructor (private _http: Http){}
    
    getNews() {
        return contentData;
    }

    addNews(content :newsContent){
            contentData.push(content);
    }

    newsRestAPI(): Observable<any>{
        return this._http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c3f0ab2d11c04347a3785023345e38c6')
        .map(response => response.json())
        .catch(error =>{
            console.error(error);
            return Observable.throw(error.json())
        })
    }
}