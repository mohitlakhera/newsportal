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
var newsDisplay = (function () {
    function newsDisplay() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', news_1.newsContent)
    ], newsDisplay.prototype, "content", void 0);
    newsDisplay = __decorate([
        core_1.Component({
            selector: 'news-data',
            template: "\n\n<div class=\"col-sm-4 container\" id=\"newsContent\">\n    <div class=\"col-sm-12 image\" data-toggle=\"tooltip\" title=\"{{content.title}}\">\n      <img src={{content.urlImage}} class=\"img-responsive\">  \n      <div class=\"title\"><strong>{{content.title}}</strong></div>\n    </div>\n    <div class=\"col-sm-12\">\n      <p class=\"desc\">{{content.description}}\n      <a href=\"{{content.url}}\" target=\"_blank\">click for more</a></p><br>\n    </div>\n </div> \n\n\n              ",
            styleUrls: ['css/news.css']
        }), 
        __metadata('design:paramtypes', [])
    ], newsDisplay);
    return newsDisplay;
}());
exports.newsDisplay = newsDisplay;
//# sourceMappingURL=newsdisplay.component.js.map