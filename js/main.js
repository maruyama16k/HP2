$(function(){

  $('.toggle_btn').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
});



// $(function(){
//   $("#drawer_toggle").click(function(){
//     $(this).toggleClass("open");
//     $("global_nav").slideToggle(1000);
//   });
// });


// $(function(){
//   $("#drawer_toggle").click(function(){
//     $(this).toggleClass("open");
//     $("global_nav").fadeToggle(1000);
//   });
// });


$(function(){
  $("#drawer_toggle").click(function(){
    $(this).toggleClass("open");
    $("global_nav").fadeToggle("sp_open");
  });
});
