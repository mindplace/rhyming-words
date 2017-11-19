$(document).ready(function(){

  $(".rhyming-word-request").on("submit", function(e){
    // Prevent default behaviour of submitting a form: in this case, prevent page refreshing
    e.preventDefault();

    // Get word from the input
    var requestedWord = $("#word").val();

    // build a variable 'data' with information on the kind of words back you want, with the word user wrote
    var data = {
      "rel_rhy": requestedWord
    }

    // our API call to Datamuse happens here
    // Datamuse API information: http://www.datamuse.com/api/
    $.ajax({
      url: "https://api.datamuse.com/words",
      method: "GET",
      data: data
    }).done(function(response){

      var ul = $("ul");

      for (var i=0; i < response.length; i++){
        var newWord = "<li>" + response[i].word + "</li>";
        $(ul).append(newWord)
      }

      $(".found-some").show();
    })
  });

});
