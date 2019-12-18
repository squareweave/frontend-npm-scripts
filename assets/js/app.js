import jQuery from 'jquery';
import Foundation from 'foundation-sites';
import PreactApp from './PreactApp';

(function($) {
    console.log(`jQuery version: ${$.fn.jquery}`);
    console.log(`Foundation version: ${Foundation.version}`);

    $.get('/assets/images/sprite/symbol/svg-sprite.svg', data => {
        let div = document.createElement('div');
        div.innerHTML = new XMLSerializer().serializeToString(
            data.documentElement
        );
        document.body.insertBefore(div, document.body.childNodes[0]);
    });

    new PreactApp($('.js-app-example'));
})(jQuery);
