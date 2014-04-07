$(document).ready(function() {
  $('.wrapper').find("li").on('mouseenter', function() {
    $(this).addClass('highlight');
  });
  $('.wrapper').find("li").on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});
