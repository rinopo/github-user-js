// ==UserScript==
// @name         GitHub - Remove comment textarea max height
// @namespace    https://github.com/rinopo/github-user-js
// @version      0.0.0
// @description  Remove comment textarea max height.
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

  // Remove comment textarea max height
	$style.append('.previewable-comment-form textarea { max-height: none; }');

  var $textarea = $('#new_comment_field');
  var $button = $('\
    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Enlarge textarea" data-toolbar-hotkey="^" style="float: right; margin-right: 5px;">\
      <svg aria-hidden="true" class="octicon octicon-plus" height="16" version="1.1" viewBox="0 0 12 16" width="12"><polygon id="Shape" points="12 9 7 9 7 14 5 14 5 9 0 9 0 7 5 7 5 2 7 2 7 7 12 7"></polygon></svg>\
    </button>');

  $textarea.after($button);

  $button.on('click', function(){
    var incrementalHeight = 200;
    var originalHeight = $textarea.height();
    $textarea
      .height(originalHeight + incrementalHeight)
      .removeClass('js-size-to-fit');
      .focus();
  });

});

/*

The Octicon SVG licensed under SIL OFL 1.1.
http://scripts.sil.org/OFL

(c) 2012-2016 GitHub, Inc.

https://octicons.github.com/

*/
