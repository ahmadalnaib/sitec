$('#keyboard').jkeyboard({
  input: $('.card-name-input'),
  layout: 'english',
});
$('.keyboard-input').focus(function () {
  $('#keyboard').jkeyboard('setInput', this);
});



let inputElem = document.querySelector(".card-name-input");
window.addEventListener('load', function(e) {
    inputElem.focus();
})