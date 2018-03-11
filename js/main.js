$(function() {
  $('#compile').click(function() {
    var result = compile('dcpu', [$('#input').val()]);
    result = JSON.stringify(result, null, 2);
    $('#output').text(result);
  });
});
