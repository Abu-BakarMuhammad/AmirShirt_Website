$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        items : 4,
        lazyLoad : true,
        autoPlay : true,
        pagination : false,
    });
});

$(document).ready(function(){
    $('a[href^="#welcome"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-130+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('a[href^="#about"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('a[href^="#csr"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('a[href^="#product"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('a[href^="#client"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('a[href^="#contact"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-10+'px'
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});