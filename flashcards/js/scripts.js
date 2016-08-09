$(function(){
  $(".term").click(function(){
    $(this).addClass("hide");
    $(this).removeClass("show");
    $(this).siblings().removeClass("hide");
    $(this).siblings().addClass("show");
  })

  $(".definition").click(function(){
    $(this).addClass("hide");
    $(this).removeClass("show");
    $(this).siblings().removeClass("hide");
    $(this).siblings().addClass("show");
  })

});
