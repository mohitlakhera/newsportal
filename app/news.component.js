"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var newsdisplay_component_1 = require('./newsdisplay.component');
var news_1 = require('./news');
var newsrest_service_1 = require('./newsrest.service');
var NewsComponent = (function () {
    function NewsComponent(_newsService) {
        this._newsService = _newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.contents=this._newsService.getNews();
        this._newsService.newsRestAPI()
            .subscribe(function (data) {
            for (_this.item in data.articles) {
                var contentt = new news_1.newsContent(data.articles[_this.item].title, data.articles[_this.item].description, data.articles[_this.item].urlToImage, data.articles[_this.item].url);
                _this._newsService.addNews(contentt);
                _this.contents = _this._newsService.getNews();
            }
        });
    };
    NewsComponent = __decorate([
        core_1.Component({
            selector: 'news',
            template: "\n               <news-data *ngFor=\"#newsDesc of contents\" [content]=\"newsDesc\"></news-data>\n                ",
            directives: [newsdisplay_component_1.newsDisplay]
        }), 
        __metadata('design:paramtypes', [newsrest_service_1.NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map