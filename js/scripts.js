$(document).ready(function() {

  $("button").click(function(event) {

    var gender = $("select#inputGender").val();
    var extroversion = $("#inputExtroversion").val();
    var feeling = $("#inputFeeling").val();

    event.preventDefault();

    $("li").hide();

    if (gender === "m") {
      if (feeling === "emotional") {
        if (extroversion === "lowKey") {
          $("#Cap").show();
        } else if (extroversion === "partyAnimal") {
          $("#Thor").show();
        }
      } else if (feeling === "logical") {
        if (extroversion === "lowKey") {
          $("#Hulk").show();
        } else if (extroversion === "partyAnimal") {
          $("#Iron").show();
        }
      }
    } else if (gender === "f" && extroversion === "lowKey" && feeling === "emotional") {
      $("#Wasp").show();
    } else if (gender === "f" && extroversion === "partyAnimal" && feeling === "logical") {
      $("#BW").show();
    } else if (gender === "f" && extroversion === "partyAnimal" && feeling === "emotional") {
      $("#SW").show();
    } else if (gender === "f" && extroversion === "lowKey" && feeling === "logical") {
      $("#Gam").show();

    };
  });
});
