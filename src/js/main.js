$(document).ready(function () {
    // mở search
    $(".nav__btn__search").click(function(){
        $(".nav__box").hide();
        $(".search__box").show();
    });
    // x bỏ search
    $(".search__close").click(function(){
        $(".search__box").hide();
        $(".nav__box").show();
        $(".nav__txt__search").val(null);
    });
});