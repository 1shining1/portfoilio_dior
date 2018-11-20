$(document).ready(function() {
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $("").slideToggle();
    return false;
  });

  $(".toggle-mnu").click(function() {
    $("#menu").toggleClass("active");
  });
});
