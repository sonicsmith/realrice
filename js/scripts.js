/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {

    //init wow effects
    new WOW().init();

    //scroll menu
    $(window).scroll(function () {
        var secondFeature = $('#how').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('.sticky-navigation').css({"top": '0px'});
        } else {
            $('.sticky-navigation').css({"top": '-100px'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    });
    
    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

 // Global donation Count
var count = 0;
var epochTime = Math.floor((new Date).getTime() / 1000);
var lastUpdateTime = 1513194342;
var updateDelay = 4;
var lastUpdateCount = 300000;
var timeSinceLastUpdate = epochTime - lastUpdateTime;
var amountSinceLastUpdate = timeSinceLastUpdate * (1 / updateDelay);
var current = lastUpdateCount + amountSinceLastUpdate;

setInterval(function() {
    count++;
    $('.globalCount').html(numberWithCommas(count + current));
}, updateDelay * 1000);

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 
 
});
