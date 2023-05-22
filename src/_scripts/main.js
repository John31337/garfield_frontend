// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Nav from '../_modules/nav/nav';

require('../_modules/header/header');
require('./slick.js');



$(() => {

  new Nav();
  // var container = document.getElementById('MyCarousel');
  // var carousel = new MultiCarousel({
  //   target: container,
  //   data: {
  //     items: Array.prototype.slice.call(container.children),
  //     // The rest of these are optional. Here are the defaults.
  //     delay: 1500, // Delay between slides.
  //     transition: 600, // Duration of slide transition.
  //     count: 5, // How many items to show at once.
  //     controls: [ // Which controls are visible.
  //       'previous',
  //       'next',
  //       'pause',
  //       'start'
  //     ]
  //   }
  // });

  // // Programmatic slide triggering.
  // carousel.previous();
  // carousel.next();

  // // Stop and start the carousel.
  // carousel.pause();
  // carousel.start();

});
