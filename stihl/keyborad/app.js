$('#keyboard').jkeyboard({
  input: $('.card-name-input'),
  layout: 'english',
});
$('.keyboard-input').focus(function () {
  $('#keyboard').jkeyboard('setInput', this);
});
