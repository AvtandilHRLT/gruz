$(document).ready(function() {

    // BURGER

    $('.burger').click(function(event) {
        $('.burger, .my_menu').toggleClass('active');
        $('body').toggleClass('lock');

    })
    $('.my_menu>ul>li>a').click(function (event) {
        $('.burger, .my_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

})    
