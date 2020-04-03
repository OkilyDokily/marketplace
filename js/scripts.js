$(document).ready(function(){

  $("#formOne").submit(function(e){
    e.preventDefault();

    var amount = parseInt($("#amount").val());
    var total = 55.99 * amount;
    $(".total").text(total);
    $(".firstname").text($("#firstname").val());

    $(".lastname").text($("#lastname").val());
    $(".address").text($("#address").val());
    $(".apt").text("Apt " + $("#apt").val());
    $(".city").text($("#city").val());
    $(".state").text($("#state").val());
    $(".zip").text($("#zip").val());
    $(".modal").show();

  });

})