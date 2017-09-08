import { Component,OnInit,Input,AfterViewInit } from "angular2/core";
import { newsContent } from "./news";
import { NewsService } from "./newsrest.service";

@Component({
    selector: 'news-data',
    template: `

<div class="col-sm-4 container" id="newsContent">
    <div class="col-sm-12 image" data-toggle="tooltip" title="{{content.title}}">
      <img src={{content.urlImage}} class="img-responsive">  
      <div class="title"><strong>{{content.title}}</strong></div>
    </div>
    <div class="col-sm-12">
      <p class="desc">{{content.description}}
      <a href="{{content.url}}" target="_blank">click for more</a></p><br>
    </div>
 </div> 


              `,

    
    styleUrls:['css/news.css']
   // inputs:['content']
})

export class newsDisplay
{
    
    @ Input() content: newsContent;//array of news
   
    
}