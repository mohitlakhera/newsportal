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
var core_1 = require("angular2/core");
var news_data_1 = require("./news.data");
var http_1 = require("angular2/http");
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
var NewsService = (function () {
    function NewsService(_http) {
        this._http = _http;
    }
    NewsService.prototype.getNews = function () {
        return news_data_1.contentData;
    };
    NewsService.prototype.addNews = function (content) {
        news_data_1.contentData.push(content);
    };
    NewsService.prototype.newsRestAPI = function () {
        return this._http.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=c3f0ab2d11c04347a3785023345e38c6')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    NewsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=newsrest.service.js.map