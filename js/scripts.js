$(document).ready(function() {

  $("form#aboutYou").submit(function(event) {

    event.preventDefault();

    $(".result").hide();

    var yrName = $("#yourName").val();
    var yrFrontBack = parseInt($("#myFrontBack").val());
    var yrEnvironment = parseInt($("#myEnvironment").val());
    var yrStrengths = parseInt($("#myStrengths").val());
    var yrSelfWorth = $("input:radio[name=mySelfWorth]:checked").val();
    var yrDescriber = $("input:radio[name=myDescriber]:checked").val();

    if (yrFrontBack === 0) {
      $("#designTrack").show();
    }

    else if (yrFrontBack == 1 && yrEnvironment == 2 && yrDescriber === "balance") {
      $("#javaTrack").show();
    }

    else if (yrFrontBack == 1 && yrEnvironment == 0 && yrStrengths == 0 && yrSelfWorth === "Blunts") {
      $("#noGo").show();
    }

  });

});

  //$("#elderGod2").show();

//else if (yrTentacles < 2 || yrElement === "Water" || yrVaca === "Rlyeh" || yrDomSub === 0) {
  //$("#elderGod3").show();
//}
//else {
  //$("#elderGod4").show();
//}
