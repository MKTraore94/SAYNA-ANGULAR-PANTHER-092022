$(document).ready(function(){

// srolling avec effet de fadein et slide left_right sur tout les elements de la page

    $("*").scroll(function(){
        $("*").fadeIn(function(){
            $("*").fuwatto({
                  slide:'left-right'
                });

        });

    });
   
    
});

// scroll bar animation

window.onload = () => {
    let scrollbar = document.getElementsByClassName('scroll');
    scrollbar.addEventListener('scroll', () => {
        window.scroll();
    });
    $(".scroll").fadeTo("slow", 0);
    $(".scroll").fadeTo("slow", 0.1);
    $(".scroll").fadeTo("slow", 0.2);
    $(".scroll").fadeTo("slow", 0.3);
    $(".scroll").fadeTo("slow", 0.4);
    $(".scroll").fadeTo("slow", 0.5);
    $(".scroll").fadeTo("slow", 0.6);
    $(".scroll").fadeTo("slow", 0.7);
    $(".scroll").fadeTo("slow", 0.8);
    $(".scroll").fadeTo("slow", 0.9);
    $(".scroll").fadeTo("slow", 1);

};
