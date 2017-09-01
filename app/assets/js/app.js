// import "babel-polyfill";
import jQuery from "jquery";
import Foundation from "foundation-sites";

(function($) {
    console.log(`jQuery version: ${$.fn.jquery}`);
    console.log(`Foundation version: ${Foundation.version}`);
    $.get("/assets/images/sprite/symbol/svg-sprite.svg", function(data) {
        var div = document.createElement("div");
        div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
        document.body.insertBefore(div, document.body.childNodes[0]);
    });
})(jQuery);
