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

  // Magnific popup project
  $(".project-popup").magnificPopup({
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

  // Projects Filter

  // init Isotope
  var $grid = $(".project-items").isotope({
    // options
  });
  // filter items on button click
  $(".projects-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Active menu
  $(".projects-menu").on("click", "li", function () {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });
});
