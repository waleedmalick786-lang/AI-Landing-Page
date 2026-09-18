$(".review-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow:
    '<button type="button" class="next-btn"><img src="assets/images/Arrow 1.svg"></button>',
  prevArrow:
    '<button type="button" class="prev-btn"><img src="assets/images/Arrow 2.svg"></button>',
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});