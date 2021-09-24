
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    })

    $(window).on('scroll load', function(){
        $(this).removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active')
        }else{
            $('header .header-2').removeClass('header-active')
        }
    })
})
