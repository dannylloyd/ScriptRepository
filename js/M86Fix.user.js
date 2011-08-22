// M86 Fix
// version 0.1 BETA!
// 2011-08-22
// Copyright (c) 2011, Daniel Lloyd
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
//
// ==UserScript==
// @name          M86 Fix
// @namespace     http://dannylloyd.tumblr.com
// @description   Custom User scripts to remove crappy web stuff
// @include       http://170.94.210.*
// ==/UserScript==
// a function that loads jQuery and calls a callback function when jQuery has finished loading


function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "http://code.jquery.com/jquery-latest.min.js");
    script.addEventListener('load', function () {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}

function main() {
    $('td.content').each(function (i) {
        if (i === 7) {
            var span = $(this).html().replace('http', 'https').replace('HTTP', 'HTTPS');
            span = '<a style="font-family: sans-serif; font-size: 90px;" href="' + span + '">' + span + '</a>'
            $('body').prepend(span);
            $('form').remove();
        }
    });
//    try {
//        $.getScript('http://dl.dropbox.com/u/255025/Webhost/js/CustomScripts.js');
//    } catch (err) {
//        alert(err);
//    }
}
// load jQuery and execute the main function
addJQuery(main);




















