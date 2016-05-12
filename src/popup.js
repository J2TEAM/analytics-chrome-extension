// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const _AnalyticsCode = 'UA-XXXXX-Y'; // Your Analytics tracking ID

/**
 * JavaScript tracking snippet
 *
 * See https://developers.google.com/analytics/devguides/collection/analyticsjs/
 * for more information.
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', _AnalyticsCode, 'auto');
ga('set', 'checkProtocolTask', null); // Disable file protocol checking
ga('send', 'pageview', '/popup.html'); // Send a virtual pageview

/**
 * Track a click on a button using Event Tracking.
 *
 * See https://developers.google.com/analytics/devguides/collection/analyticsjs/events
 * for more information.
 */
function trackButtonClick(e) {
  ga('send', 'event', 'Button', 'clicked', e.target.id);
}

/**
 * Now set up your event handlers for the popup's `button` elements once the
 * popup's DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('button');
  for (var i = 0, t = buttons.length; i < t; i++) {
    buttons[i].addEventListener('click', trackButtonClick);
  }
});
