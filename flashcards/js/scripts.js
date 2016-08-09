$(function(){
  $(".term").click(function(){
    $(this).addClass("hide");
    $(".definition").removeClass("hide");
    $(".definition").addCLass("show");
  })

  $(".definition").click(function(){
    $(this).addClass("hide");
    $(".term").removeClass("hide");
    $(".term").addCLass("show");
  })

});
