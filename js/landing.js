/* --- Here starts the onscrolldown change of color of the navbar --- */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        var $links = $(".nav-link");
        var $brand = $(".navbar-brand");
        var $toggler = $(".navbar-toggler-icon");
        var $signup = $(".signup");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav.toggleClass('navbar-dark', $(this).scrollTop() < $nav.height());
        $nav.toggleClass('navbar-light', $(this).scrollTop() > $nav.height());
        $links.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $brand.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $toggler.toggleClass('text-dark', $(this).scrollTop() > $nav.height());
        $signup.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

/* --- Here starts the function change of color of the navbar --- */
function toggleNav() {
    var $nav = $(".navbar");
    var $links = $(".nav-link");
    var $brand = $(".navbar-brand");
    var $toggler = $(".navbar-toggler-icon");
    var $signup = $(".signup");

    if ($(this).scrollTop() < $nav.height()) {
        $nav.toggleClass('scrolled');
        $nav.toggleClass('navbar-dark');
        $nav.toggleClass('navbar-light');
        $links.toggleClass('text-dark');
        $brand.toggleClass('text-dark');
        $toggler.toggleClass('text-dark');
        $signup.toggleClass('scrolled');
    }
}

/* --- Here starts the function that toggles classes between some divs --- */
$(".input_icon").click(function () {
    var bar = this;
    if ($(this).hasClass("magnet_icon")) {
        if ($(".magnet").hasClass("active_bar")) {
            console.log("Submit thingie now");
        } else {
            $(".magnet").addClass("active_bar");
            $(".torrent").removeClass("active_bar");
        }
    } else if ($(this).hasClass("torrent_icon")) {
        if ($(".torrent").hasClass("active_bar")) {
            console.log("Submit thingie now");
        } else {
            $(".torrent").addClass("active_bar");
            $(".magnet").removeClass("active_bar");
        }
    }
});
