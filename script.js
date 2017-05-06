var main = function() {
	$('a.more-btn').on('click', function() {
    $(this).next().toggle();
    alert('toggled sibling');
  });
  $('li.share').on('click', function() {
    $('li.share-menu').toggle();
    alert('toggled share menu');
  });
  $('.notification').on('click', function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);