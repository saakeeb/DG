
// Accordion
$(document).ready(function () {
    var allPanels = $(".accordion > .inner").hide();
    $(".accordion > h2 > a").click(function () {
        $(this).slideDown(500);
        $(this).toggleClass("selected");
        $(this)
            .parent()
            .next()
            .slideToggle(function () {});
        return false;
    });
});


$('#testi-carousel').slick({
    dots: false,
    infinite: true,
    speed: 400,
    // slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    autoplay: false,
    loop: true,   
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/svg/slider-left-arrow.svg' alt=''></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/svg/slider-right-arrow.svg' alt=''></button>" 
  });