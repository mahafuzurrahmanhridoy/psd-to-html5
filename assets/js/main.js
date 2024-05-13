$(document).ready(function () {
  // counter up
  $(".counter").counterUp();

  // Magnific popup Image
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Magnific popup Video
  $(".about-video-popup").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
  });

  // Testimonials slider
  $(".testimonials").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 1000,
  });

  // Clients slider
  $(".clients").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    loop: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
  });
});
