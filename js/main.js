/**
 * Created by shams on 09/08/15.
 */

(function (win, doc) {
    'use strict';

    var // HTML Elements
        currentLocation = win.location.href,
        homeLink = doc.getElementById('nav-home'),
        articlesLink = doc.getElementById('nav-articles'),
        javascriptLink = doc.getElementById('nav-javascript'),

        // Regular expressions
        htmlFilesInUrl = /(\w*)-?\w*.html/g;

    (function () {
        if (!currentLocation.match(htmlFilesInUrl) || currentLocation.match(htmlFilesInUrl)[0] === 'index.html') {
            homeLink.className = 'active';
        } else if (currentLocation.match(htmlFilesInUrl)[0] === 'articles.html') {
            articlesLink.className = 'active';
        } else if (currentLocation.match(htmlFilesInUrl)[0] === 'javascript.html') {
            javascriptLink.className = 'active';
        }
     }());
}(window, document));
