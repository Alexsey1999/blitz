// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

// import 'jquery-ui/css';

import './libs/main'
import './libs/slick.min.js'
import './libs/jquery.nicescroll.min'
import './libs/popup-open'
import './libs/forms'
import './libs/baguetteBox'
import './libs/map'
import './libs/sliders'
import './libs/scroll'
import './libs/jquery.inputmask.bundle.min'
import './libs/jquery.popover.min'


$('.burger').on('click', function() {
  $('.header__menu').fadeToggle(300, function() {
    if ( $('.header__menu').css('display') === 'none' ) {
      $('.header__menu').removeAttr('style');
    }
  });
  $(this).toggleClass('burger-active');
})
