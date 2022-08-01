$('.appMenu>li').click(function() {
    let a = $(this).index()
    $('.appMenu>li').removeClass('on')
    $(this).addClass('on')
    $('.appImg>li').removeClass('on')
    $('.appImg>li').eq(a).addClass('on')
})
let posY = $('.appMenu').offset().top
$('.white').offset({top:posY})

let w = $('.slide>li').width()
let intv = setInterval(function(){
    nextAni()
}, 3000);

$('.next').click(function(){
    clearInterval(intv)
    nextAni()
    intv = setInterval(function(){nextAni()},3000)
})
$('.prev').click(function(){
    if (nextonoff == false) {
        if (onoff == true) {
            console.log(onoff)
            clearInterval(intv)
            prevAni()
            intv = setInterval(function(){nextAni()},3000)
            nextonoff = false
        }
        return
    }
    return
})
$('.dot_con span').click(function(){
    let nth = $(this).index()
    clearInterval(intv)
    numAni(nth)
    intv = setInterval(function(){nextAni()},3000)
})

        let len = $('.slide>li').length
        // let wd = $(window).width() / 6 + 30
        // let wd2 = wd * len + 54

        let wd3
        let wd4

        if ($(window).width()<999) {
            wd3 = $(window).width() / 5 - 15
            wd4 = wd3 * 2 + 30
        } else {
            wd3 = $(window).width() / 6 - 30
            wd4 = wd3 * 2 + 30
        }
        
        // $('.slide').css({width : wd2})
        $('.slide>li').css({width : wd3, height: wd3})
        $('.slide>li').eq(1).css({width : wd4, height: wd4})
        // $('.prev').css({ left :wd+10})
        // $('.next').css({ left :wd*3-50})

        let lisize = $('.sec2').height()
        $('.sec2').css('height',lisize)

        $(window).on('resize', function () {
            
            if ($(window).width()<999) {
                wd3 = $(window).width() / 5 - 15
                wd4 = wd3 * 2 + 30
            } else {
                wd3 = $(window).width() / 6 - 30
                wd4 = wd3 * 2 + 30
            }

            // let lisize = $('.sec2 ul li').width()
            $('.sec2 ul li').css({width:wd3})
            $('.sec2 ul li').css({height:wd3})

            // let lisize2 = $('.sec2 ul li.on').width()
            $('.sec2 ul li').eq(1).css({width:wd4})
            $('.sec2 ul li').eq(1).css({height:wd4})
            
            posY = $('.appMenu').offset().top
            $('.white').offset({top:posY})
        })
function reset() {
    // $('.slide>li').eq(0).css('display',none)
}
let nextonoff = false
function nextAni(){
    nextonoff = true
    let lisize = $('.sec2').height()
    
    // $('.slide>li:gt(1)').css({ opacity : 1})
    $('.slide>li').eq(1).not(':animated').animate({width : wd3, height: wd3}, 1000, function() {
        $('.textbox').eq(0).appendTo('.textcon')
        $('.textbox').removeClass('on')
        $('.textbox').eq(1).addClass('on')
    })
    // $('.bgName').eq(1).animate({'font-size':16+'px'}, 2700)
    $('.slide>li').eq(2).not(':animated').animate({width : wd4, height: wd4}, 1000)
    if ($(window).width()<999) {
        $('.bgName').eq(1).animate({fontSize: 12 + 'px'}, 1000)
        $('.bgName').eq(2).animate({fontSize: 16 + 'px'}, 1000)
    } else {
        $('.bgName').eq(1).animate({fontSize: 16 + 'px'}, 1000)
        $('.bgName').eq(2).animate({fontSize: 20 + 'px'}, 1000)
    }
    // $('.bgName').eq(2).css('transform', 'scale(2)')
    // $('.bgName').eq(2).animate({'transform':'scale(2)'})
    
    
    $('.slide').not(':animated').animate({marginLeft : -wd3-38+'px'},1000,function(){
        $('.slide>li').eq(0).appendTo('.slide')
        $('.slide').css('margin-left','0px')
        onoff = true
        nextonoff = false
    })
    $('.sec2').css('height',lisize)
}
let onoff = true
function prevAni(){
    onoff = false
    console.log(onoff)
    let lisize = $('.sec2').height()
    
    $('.slide>li').eq(-1).prependTo('.slide')
    $('.slide>li').eq(2).not(':animated').animate({width : wd3, height: wd3}, 1000, function() {
        $('.textbox').eq(-1).prependTo('.textcon')
        $('.textbox').removeClass('on')
        $('.textbox').eq(1).addClass('on')
        onoff = true
    })
    $('.slide').not(':animated').css({marginLeft : -wd3-38+'px'})
    $('.slide').not(':animated').animate({marginLeft : 0},1000)
    
    $('.slide>li').eq(1).not(':animated').animate({width : wd4, height: wd4}, 1000)
    $('.bgName').eq(1).animate({fontSize: 16 + 'px'}, 1000)
    $('.bgName').eq(0).animate({fontSize: 20 + 'px'}, 1000)
    
    $('.sec2').css('height',lisize)
}
function numAni(Bnth){
    for(let x=0; x<Bnth; x++){
        $('.slide>li').eq(0).appendTo('.slide')
        $('.dot_con span').eq(0).appendTo('.dot_con')
    }
}

let isVisible = false;
window.addEventListener('scroll', function() {
    if ( checkVisible($('#ing5')) && !isVisible) {
        $('.sec5').addClass('on')
        isVisible=true;
    }
});
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();  
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}