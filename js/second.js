$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 7,
    // adaptiveHeight: true,
    variableWidth: true,
    draggable: false,
    easing: "ease",
    autoplay: false,
    autoplaySpeed: 5000,
    asNavFor: ".sliderbig",
  });
  $(".sliderbig").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    easing: "ease",
    autoplay: false,
    autoplaySpeed: 5000,
    asNavFor: ".slider",
  });
});
