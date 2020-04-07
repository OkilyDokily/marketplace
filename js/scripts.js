$(document).ready(function(){

  //business logic
  var totalCost = amount => 59.99 * amount;

  $("#formOne").submit(function(e){
    e.preventDefault();

    var amountOfToiletPaper = parseInt($("#amount").val());
    
    $(".total").text(totalCost(amountOfToiletPaper));
    
    var formItem = ["firstname","lastname","address","apt","city","state","zip"];
    
    formItem.forEach(function(item){
      $("."+item).text($("#"+item).val())
    });
    
    
    $("#modal").show();
    $("#modal").animate({opacity:1},1000);
    

    $("#formOne :input").prop("disabled", true);
    $('#formOne').each(function(){
      this.reset();
    });

    $("body").click(function(e){
      
      if(e.target.id != "modal"){
        $("#formOne :input").prop("disabled", false);
        $("#modal").hide();
        $("body").off();
      }

    });

  });

  

 

})