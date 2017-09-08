"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var http_1 = require("angular2/http");
var newsrest_service_1 = require("./newsrest.service");
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, newsrest_service_1.NewsService]);
//# sourceMappingURL=boot.js.map