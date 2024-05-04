$(document).ready(function () {
  // counter up
  $(".counter").counterUp();
  // Magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
