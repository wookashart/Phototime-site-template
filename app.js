$('#hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('nav').toggleClass('down');
})

// $('#go-home').on('click', function(){
//     $("html, body").animate({ scrollTop: 0}, 1000);
//     $('nav').removeClass('down');
//     $('#hamburger').removeClass('open');
// });

// $('#go-photoapp').on('click', function(){
//     $("html, body").animate({ scrollTop: $('.rappresent').offset().top - 200}, 1000);
//     $('nav').removeClass('down');
//     $('#hamburger').removeClass('open');
// });

// $('#go-design').on('click', function(){
//     $("html, body").animate({ scrollTop: $('.design').offset().top}, 1000);
//     $('nav').removeClass('down');
//     $('#hamburger').removeClass('open');
// });

// $('#go-download').on('click', function(){
//     $("html, body").animate({ scrollTop: $('.download').offset().top}, 1000);
//     $('nav').removeClass('down');
//     $('#hamburger').removeClass('open');
// });

$('.nav-button').on('click', function(){
    var target = $(this).data('target');
    $("html, body").animate({ scrollTop: $(target).offset().top}, 1000);
    $('nav').removeClass('down');
    $('#hamburger').removeClass('open');
})


var sliderWidth = $('.design-conteiner').width();

$(window).on('resize', function(){
    sliderWidth = $('.design-conteiner').width();
    $('.design ul').width(elements * sliderWidth);
    $('.design ul').css('margin-left', -(currenSlide*sliderWidth))
})

var elements = $('.design li').length;
$('.design ul').width(elements * sliderWidth);

var currenSlide = 0;


$('button.left').on('click', function(){
    if (currenSlide > 0){
        currenSlide--;
        $('.design ul').css('margin-left', -(currenSlide*sliderWidth))
    }
})


$('button.right').on('click', function(){
    if (currenSlide < elements-1){
        currenSlide++;
        $('.design ul').css('margin-left', -(currenSlide*sliderWidth))
    }
})

$(window).on('scroll', function() {
    if ($('body').scrollTop() >= 150) {
        $('header nav').addClass('scrolled');
    } else {
        $('header nav').removeClass('scrolled');
    }
})

