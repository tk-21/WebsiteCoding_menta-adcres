$(function () {
  $(".ac_parent").on("click", function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    $(".ac_parent").not(this).removeClass("open");

    // 一つ開くと他は閉じるように
    $(".ac_parent").not($(this)).next(".ac_child").slideUp();
  });
});
