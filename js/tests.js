/*vim: fileencoding=utf-8 tw=100 expandtab ts=4 sw=4 */
/*jslint indent: 4, maxlen: 100, nomen: true */
/*globals window, document */

(function (win, doc) {
    'use strict';

    var // Variables
        preElement,
        inputElement,
        enteredKeys = [],

        // Functions
        preventHold;

    preventHold = function (event) {
        if (enteredKeys.indexOf(event.keyCode) === -1 && event.type === 'keydown') {
            enteredKeys.push(event.keyCode);
            preElement.innerHTML = enteredKeys;
        }

        if (event.type === 'keyup') {
            enteredKeys.splice(enteredKeys.indexOf(event.keyCode), 1);
            preElement.innerHTML = enteredKeys;
        }

        if (!preElement.innerHTML) {
            inputElement.value = '';
        }
    };

    win.addEventListener('keydown', preventHold);
    win.addEventListener('keyup', preventHold);

    (function () {
        preElement = doc.getElementById('preventHold');
        inputElement = doc.getElementById('preventHoldInput');
    }());
}(window, document));
