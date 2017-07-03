jQuery(function($){
    // 메인 슬라이더
    $('.mainSlider').bxSlider({
         pagerCustom: '#mainPager',
    });
    
    $('.main_prev, .main_next').on('click', function(e){
        e.preventDefault();
        var clickObj=$(this).hasClass('main_prev');
        
        if (clickObj){
            $('.slider_wrap .bx-prev').trigger('click');
        } else{
            $('.slider_wrap .bx-next').trigger('click');
        }
    });
    
    // 코멘트 슬라이드
    $('.commSlider').bxSlider({
        mode: 'vertical',
        auto: true,
        speed: 200,
        minSlides: 5,
        moveSlides: 1
    });
    
    $('.comm_prev, .comm_next').on('click', function(e){
        e.preventDefault();
        var clickObj=$(this).hasClass('comm_prev');
        
        if (clickObj){
            $('.comment_wrap .bx-prev').trigger('click');
        } else{
            $('.comment_wrap .bx-next').trigger('click');
        }
    });
})