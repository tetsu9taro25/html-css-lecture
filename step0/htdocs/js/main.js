$(function(){
  function testAlert() {
    alert("hogeeeee");
  }

  $('.cog').click(function(){
    alert("hogeoooooo");
  });

  $('.post-btn').click(function(){
    $('.post-modal').fadeIn(200);
    $('.overlay').fadeIn(200);
  });

  $('.command-box .edit').click(function(){
    alert("hogeoooooo");
  });

  $('.command-box .delete').click(function(){
    alert("hogeoooooo");
  });

  $('.post-box textarea').bind('keydown keyup keypress change', function(){
    if( $(this).val().length >= 1 ){
      $(this).next().removeClass('is-disabled');
    } else {
      $(this).next().addClass('is-disabled');
    }
  });

  $('.overlay').click(function(){
    $(this).fadeOut(200);
    $('.post-modal').fadeOut(200);
    $('.post-box textarea').val('');
    $('.post-box button').addClass('is-disabled');
  });

  $('.close').click(function(){
    $('.overlay').fadeOut(200);
    $('.post-modal').fadeOut(200);
    $('.post-box textarea').val('');
    $('.post-box button').addClass('is-disabled');
  });
});
