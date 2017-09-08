"use strict";
var newsContent = (function () {
    function newsContent(title, description, urlImage, url) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.url = url;
    }
    return newsContent;
}());
exports.newsContent = newsContent;
//# sourceMappingURL=news.js.map