$(document).ready(function(){

  var search;
  var array = [];
  $("#search").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#submit").click();
    }
  });

  $("#submit").on("click", function() {
    if ($("#search").val() == "") {
      alert("Enter a valid query");
    }
    $("#result").html("");
    search = $("#search").val();
    $.get(
      "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
        search,
      function(json) {
        array = json;
        myFunction(array);
      }
    );
  });

  function myFunction(array) {
    $("#result").append("Showing results for: " + array[0] + "<br><hr>");
    if (array[1] == "" || search === "") {
      $("#result").append(
        "Sorry, could not find anything for: " +
          array[0] +
          "<br>Try a different query<br>"
      );
    }
    for (var i = 0; i < array[1].length; i++) {
      $("#result").append(
        "<a target = '_blank' href=" +
          array[3][i] +
          "><div class = 'well' id = 'items'><strong>" +
          array[1][i] +
          "</strong><blockquote><br>" +
          array[2][i] +
          " <br></div></a>"
      );
    }
  }

  $("#random").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

});
