// ==UserScript==
// @name         GitHub - Clearer issue title change
// @namespace    https://github.com/rinopo/github-user-js
// @version      0.0.0
// @description  When an issue title is changed, show previous and current titles in separate lines.
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

  // show previous and current issue titles in separate lines.
  $style.append('.renamed-was::before, .renamed-is::before { content: ""; display: block; }');

});
