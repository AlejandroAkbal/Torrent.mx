(function($, undefined) {
    "use strict";
    var body = $("body"), win = $(window);
    $.fn.ui_navbar = function() {
        var navbar = this;
        win.scroll(function() {
            var scroll_top = $(this).scrollTop();
                if (scroll_top >= 12) {
                    navbar.removeClass("transparent");
                } else {
                    navbar.addClass("transparent");
                }
        });
    };
    //$(".main").css("height", $(".main").css("height"));
    //$("canvas").css("height", $("canvas").css("height"));
    $(".navbar").ui_navbar();
    $(".input_icon").click(function (){
        var bar = this;
        if($(this).hasClass("magnet_icon")){
            if($(".magnet").hasClass("active_bar")){
                console.log("Submit thingie now");
            } else {
                $(".magnet").addClass("active_bar");
                $(".torrent").removeClass("active_bar");
            }
        } else if($(this).hasClass("torrent_icon")){
            if($(".torrent").hasClass("active_bar")){
                console.log("Submit thingie now");
            } else {
                $(".torrent").addClass("active_bar");
                $(".magnet").removeClass("active_bar");
            }
        }
    });
})(jQuery);