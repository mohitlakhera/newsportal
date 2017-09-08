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
var news_1 = require("./news");
var newsrest_service_1 = require("./newsrest.service");
var newsDisplay = (function () {
    function newsDisplay(_newsService) {
        this._newsService = _newsService;
    }
    newsDisplay.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.newsRestAPI()
            .subscribe(function (data) {
            var content = new news_1.newsContent(data.articles.title, data.articles.description);
            _this._newsService.addNews(content);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', news_1.newsContent)
    ], newsDisplay.prototype, "content", void 0);
    newsDisplay = __decorate([
        core_1.Component({
            selector: 'news-data',
            template: "<div class=\"col-1\">\n                <p class=\"info\">{{content.title}}</p>\n               </div>\n              <div class=\"col-2\">\n              <p class=\"desc\">{{content.description}}</p>\n              </div>\n              ",
            styleUrls: ['css/news.css']
        }), 
        __metadata('design:paramtypes', [newsrest_service_1.NewsService])
    ], newsDisplay);
    return newsDisplay;
}());
exports.newsDisplay = newsDisplay;
//# sourceMappingURL=news.service.js.map