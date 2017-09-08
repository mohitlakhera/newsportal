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
var news_component_1 = require('./news.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'news-app',
            template: "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Today's Headlines</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a href=\"#\">Home</a></li>\n      <li><a href=\"#\">Politics</a></li>\n      <li><a href=\"#\">Sports</a></li>\n      <li><a href=\"#\">International</a></li>\n    </ul>\n  </div>\n</nav>\n\t\t\t   <news class=\"row\"></news>\n\t\t<div class=\"jumbotron\">\n    \n    <script>\n    $(document).ready(function(){\n    $('[data-toggle=\"tooltip\"]').tooltip();   \n});\n    </script>\n  <p class=\"footer\">&copy; Mohit 2017.</p>\n</div>\n\t\t\t   ",
            directives: [news_component_1.NewsComponent],
            styleUrls: ['css/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map