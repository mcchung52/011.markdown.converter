'use strict';

$(document).ready(init);

function init() {
  $('#convert').click(function() {
    var mdtext = $('#markdown').val();
    $.post('/markdown', { input: mdtext })
    .done(function(data){
      $('#html').empty().append($.parseHTML(data));
    })
  });
}