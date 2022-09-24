// passage de la souris zoom sur les titres


$(document).ready(function(){


    $('p').hide();
    window.addEventListener('scroll', function(e) {
        $('p').fadeIn(3000);
    });


    $("h1").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });
    $("h2").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: 42,
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: 32,
            });
        },
    });


    $("img").on({
        mouseenter: function() {
            $(this).animate({ width: '+=10%', });
        },
        mouseleave: function() {
            $(this).animate({ width: '-=10%', });
        },
    });


    
    $('h1').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
    $('h2').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
    $('.tchalla_div1').mouseleave(function(){
        $(this).css('transform', 'scale(10px)');
    });
   
    
});

window.onload = function() {

    $('p').hide();
    window.addEventListener('scroll', function(e) {
        $('p').fadeIn(3000);
    });


    $("h1").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: '+=10px',
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: '-=10px',
            });
        },
    });
    $("h2").on({
        mouseenter: function() {
            $(this).animate({
                fontSize: 42,
            });
        },
        mouseleave: function() {
            $(this).animate({
                fontSize: 32,
            });
        },
    });


    $("img").on({
        mouseenter: function() {
            $(this).animate({ width: '+=10%', });
        },
        mouseleave: function() {
            $(this).animate({ width: '-=10%', });
        },
    });
}


