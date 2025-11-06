

document.addEventListener("DOMContentLoaded", function(e){
  pc_menu_slide();
  mobile_menu_toggle();
  youtube_background();
  header_scroll();
  detail_img_view();
  detail_apply_popup();
  store_popup();
  qna_toggle();
  suportpopup_btn();
})

const suportpopup_btn = () => {
  $('.suport-btn').click(function(e){
    e.preventDefault();
    $('.apply-popup').addClass('show')
  })
  $('.apply-popup').click(function(){ $('.apply-popup').removeClass('show'); })
  $('.apply-popup .content-arti .white-content').click(function(e){ e.stopPropagation(); })
  $('.apply-popup .content-arti .btn-div .close-btn').click(function(){ $('.apply-popup').removeClass('show'); })
}

const qna_toggle = () => {
  // 질문(q-box) 클릭 시
  $('.qna_list .q-box').on('click', function() {
    const $answer = $(this).next('.a-box'); // 바로 다음 답변 박스
    // 다른 답변 닫기 (하나만 열리게 하려면 주석 해제)
    // $('.qna_list .a-box').not($answer).slideUp();
    $answer.slideToggle(250);
    $(this).find('button .icon').toggleClass('rotate');
  });
}

const store_popup = () => {
  $('.store-popup-section').click(function(){
    $('.store-popup-section').removeClass('show');
  })
  $('.store-popup-section .content-arti').click(function(e){
    e.stopPropagation();
  })
  $('.store-popup-section .btn-wrap .close-btn').click(function(){
    $('.store-popup-section').removeClass('show');
  })
}

const detail_apply_popup = () => {
  $('.sub2 .detail-section .content-div .apply-btn').click(function(){
    $('.apply-popup-section').addClass('show');
  })
  $('.apply-popup-section .close-btn').click(function(){
    $('.apply-popup-section').removeClass('show');
  })
  $('.apply-popup-section').click(function(){
    $('.apply-popup-section').removeClass('show');
  })
  $('.apply-popup-section .popup-content').click(function(e){
    e.stopPropagation();
  })
}

const detail_img_view = () => {
  const bigImg = document.querySelector('.sub2 .detail-section .img-div .big');
  const smallImgs = document.querySelectorAll('.sub2 .detail-section .img-div .small');

  smallImgs.forEach(small => {
    small.addEventListener('mouseenter', () => {
      const bgImg = small.style.backgroundImage;
      bigImg.style.backgroundImage = bgImg;
    });
  });
}

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
