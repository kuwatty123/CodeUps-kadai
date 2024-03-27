
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //ドロワーメニュー
  $(".js-hamburger").on('click', function () {
    if ($('.js-hamburger').hasClass('is-active')) {
      $('.js-hamburger').removeClass("is-active");
      // $("html").toggleClass("is-fixed");
      $('.js-sp-nav').fadeOut(300);
      console.log('フェードアウト');
    } else {
      $('.js-hamburger').addClass("is-active");
      // $("html").toggleClass("is-fixed");
      $('.js-sp-nav').fadeIn(300);
      console.log('フェードイン');
    }
  });

  //スライダー メインビュー
  $('.mv__slider').slick({
    arrows: false,//矢印を非表示にする
    autoplay: true, // 自動再生オン
    speed: 1500, // 画像切り替え速度
    fade: true, // フェードで画像が切り替わる
});

//スライダー キャンペーン
$(".campaign__slider + pc-slider").slick({
  autoplay: true,
  autoplaySpeed:2000,
  speed:2000,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$(".campaign__slider + sp-slider").slick({
  autoplay: true,
  autoplaySpeed:2000,
  speed:2000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1
});



});

const swiper = new Swiper('.swiper', {
  speed: 1000,
  autoplay: {
    delay: 3000, // 途切れなくループ
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4, //スライダーのコンテナ上に2枚同時に表示

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    type: 'bullets',
		clickable: true,
    
  },

  spaceBetween: 10 ,//スライド感の余白


});

swiper.on('slideChange', function () {
  console.log('slide changed');
});
