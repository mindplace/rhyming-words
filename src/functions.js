function clearInput(){
  $("ul").html("");
  $(".found-some").hide();
}

$(document).ready(function(){
  $(".found-some").hide();

  $(".rhyming-word-request input").on({
    focus: clearInput,
    keydown: clearInput
  });

});
