//set variables
var action = 'click';
var speed = '500';
//
$(document).ready(function(){
   $('li.q').on(action, function(){
      $(this).next().slideToggle().siblings('li.a').slideUp();
      var img = $(this).children();
      $('img').not(img).removeClass('rotate');
      img.toggleClass('rotate'); 
   }); 
});