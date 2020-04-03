$(document).ready(function(){

  $("#formOne").submit(function(e){
    e.preventDefault();


    $(".firstname").text($("#firstname").val());
    $(".lastname").text($("#lastname").val());
    $(".address").text($("#address").val());
    $(".apt").text($("#apt").val());
    $(".city").text($("#city").val());
    $(".state").text($("#state").val());
    $(".zip").text($("#zip").val());
    $(".modal").show();

  });

})