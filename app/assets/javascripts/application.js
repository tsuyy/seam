// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on('turbolinks:load', function() {

  $('.toggle').click(function() {
     $(this).toggleClass('active').siblings().removeClass('active');
  });

  $('#doc').click(function() {
    $('#toggle-img').attr('src', 'http://sinfulsalt.com/wordpress/wp-content/uploads/2012/07/placeholder-470x352.jpg');
  });

  $('#dashboard').click(function() {
    $('#toggle-img').attr('src', 'http://fakeimg.pl/400x200');
  });

  $('#keep-records').click(function() {
    $('#toggle-img').attr('src', 'http://www.cyrixsystems.com/images/portfolio-images/portfolio-item-1.jpg');
  });

});
