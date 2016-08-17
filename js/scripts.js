$(document).ready(function() {

  $("form").submit(function(event) {

      var yrName = $("#yourName").val();
      var yrFrontBack = parseInt($("#myFrontBack").val());
      var yrEnvironment = parseInt($("#myEnvironment").val());
      var yrStrengths = parseInt($("#myStrengths").val());
      var yrSelfWorth = $("input:radio[name=mySelfWorth]:checked").val();
      var yrDescriber = $("input:radio[name=myDescriber]:checked").val();

      if (yrFrontBack === 0) {
        $("#designTrack").show();
      }

      else if (yrFrontBack === 1 && yrEnvironment == 1) {
        $("#cSharpTrack").show();
      }

      else if (yrFrontBack === 1 && yrEnvironment == 2) {
        $("#javaTrack").show();
      }

      else if (yrFrontBack === 1 && yrStrengths == 0 || yrSelfWorth === "Blunts") {
        $("#noGo").show();
      }
      event.preventDefault();
  });
});
