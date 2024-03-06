
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

  //スライダー
  $('.mv__slider').slick({
    arrows: false,//矢印を非表示にする
    autoplay: true, // 自動再生オン
    speed: 1500, // 画像切り替え速度
    fade: true, // フェードで画像が切り替わる
});



});
