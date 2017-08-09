$(document).ready(function(){
  $("#myform").submit(function(){
    $(".person1").text("");
    $(".person2").text("");
    $(".animal").text("");
    $(".exclamation").text("");
    $(".verb").text("");
    $(".noun").text("");

    $("#story").show();
  })
});
