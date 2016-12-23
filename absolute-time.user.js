// ==UserScript==
// @name         GitHub - Show absolute time
// @namespace    https://github.com/rinopo/github-user-js
// @version      0.0.0
// @description  Show absolute time next to the relative one.
// @author       rinopo
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @icon         https://github.com/fluidicon.png
// ==/UserScript==
$.noConflict();
jQuery( document ).ready(function( $ ) {
  'use strict';

  // Prepare a style element.
  $('head:not(:has(#ghuj-style))').append('<style id="ghuj-style" />');
  var $style = $('#ghuj-style');

  // Show absolute time next to the relative one.
  $style.append('\
  	relative-time:after {\
      content: attr(title);\
      color: #bbb;\
      padding-left: 0.5em;\
      font-size: smaller;\
    }');

});
