$(document).ready(function(){

  //business logic
  var totalCost = amount => 59.99 * amount;

  $("#formOne").submit(function(e){
    e.preventDefault();

    var amountOfToiletPaper = parseInt($("#amount").val());
    
    $(".total").text(totalCost(amountOfToiletPaper));
    $(".firstname").text($("#firstname").val());

    $(".lastname").text($("#lastname").val());
    $(".address").text($("#address").val());
    $(".apt").text("Apt " + $("#apt").val());
    $(".city").text($("#city").val());
    $(".state").text($("#state").val());
    $(".zip").text($("#zip").val());
    $(".modal").show();
    
    $(".modal").animate({opacity:1},1000);
    
      
     
   
    $("button").prop("disabled", true);
    $('#formOne').each(function(){
      this.reset();
    });
  });

 

})