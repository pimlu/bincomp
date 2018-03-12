$(function() {
  $('#compile').click(function() {
    let result = compile('dcpu', [$('#input').val()]);
    result = JSON.stringify(result, null, 2);
    $('#output').text(result);
  });
});
