

document.addEventListener("DOMContentLoaded", function(e){
  pc_menu_slide();
  mobile_menu_toggle();
  youtube_background();
  header_scroll();
})

const header_scroll = () => {
  let lastScrollTop = 0;

  $(window).on('scroll', function() {
    let currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      $("header").addClass('scroll-down')
      $(".pc-slide-menu").addClass('scroll-down')
    } else if (currentScroll < lastScrollTop) {
      $("header").removeClass('scroll-down')
      $(".pc-slide-menu").removeClass('scroll-down')
    }

    lastScrollTop = currentScroll;
  });

}

const youtube_background = () => {
  $('[data-vbg]').youtube_background(); // 실행
}

const mobile_menu_toggle = () => {
  $('.mobile-menu-div .item').click(function(e){
    if($(this).hasClass('sub')){
      e.preventDefault();
      $('.mobile-menu-div .item.sub').not(this).removeClass('show').siblings('.sub-menu-list').slideUp();
      $(this).toggleClass("show");
      $(this).siblings('.sub-menu-list').slideToggle();
    }
  });
  //메뉴 오픈
  $('header .menu-btn').click(function(){
    $('.mobile-menu-div').addClass('show')
  })
  //메뉴 닫기
  $('.mobile-menu-div .close-btn').click(function(){
    $('.mobile-menu-div').removeClass('show')
  })
}

const pc_menu_slide = () => {
  $('header .menu-div .menu-list a').mouseenter(function(){
      $('.pc-slide-menu').slideDown(200);
      $('.pc-menu-close').addClass('show');
  })
  $('.pc-menu-close').mouseenter(function(){
    $('.pc-slide-menu').slideUp();
    $('.pc-menu-close').removeClass('show');
  })
}
