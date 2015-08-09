/**
 * Created by shams on 09/08/15.
 */

(function (win, doc) {
    'use strict';

    var // HTML Elements
        homeLink = doc.getElementById('nav-home'),
        articlesLink = doc.getElementById('nav-articles'),
        javascriptLink = doc.getElementById('nav-javascript');


    (function () {
        if (win.location.pathname === '/' || win.location.pathname === '/index.html') {
            homeLink.className = 'active';
        } else if (win.location.pathname === '/articles.html') {
            articlesLink.className = 'active';
        } else if (win.location.pathname === '/javascript.html') {
            javascriptLink.className = 'active';
        }
     }());

}(window, document));
