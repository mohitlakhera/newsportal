import { Component,OnInit } from 'angular2/core';
import { newsDisplay } from './newsdisplay.component';
import { contentData } from './news.data';
import { newsContent } from './news';
import { NewsService } from './newsrest.service';
@Component({
    selector: 'news',
    template: `
               <news-data *ngFor="#newsDesc of contents" [content]="newsDesc"></news-data>
                `,
   directives: [newsDisplay]   
})
 
export class NewsComponent implements OnInit{

        contents:newsContent[];
        item:any;
    constructor(private _newsService: NewsService){

    }
    ngOnInit():any{
        //this.contents=this._newsService.getNews();
        this._newsService.newsRestAPI()
        .subscribe(
            data => {
                for(this.item in data.articles){
                    const contentt =new newsContent(data.articles[this.item].title,data.articles[this.item].description,data.articles[this.item].urlToImage,data.articles[this.item].url);
                    this._newsService.addNews(contentt);
                    this.contents=this._newsService.getNews();
                }
        });
        
    }

}