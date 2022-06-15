
  var focusedElement = 0;
  $(document).ready(function () {
      $('#pincode').pincodeInput({
          hidedigits: true,
          inputs: 6,
          placeholders:"X X X X X X",
          complete: function (value, e, errorElement) {
              $('form#login-pin').submit();
          }
      });
  });


 
  $(document).ready(function () {
      $('input.pincode-input-text').focus(function() {
          focusedElement = $(this);
      });
      $('.pin-input-keyboard button').on('click', function() {
          $this = $(this);
          $this.addClass( "active" );
          var char = $this.html();
          if (char === 'C') {
              focusedElement.val('');
              focusedElement.keyup();
              focusedElement.prev().focus();
          } else {
              focusedElement.val(char);
              focusedElement.keyup();
          }
          setTimeout(function() { 
          $this.removeClass( "active" );
          },100);
      });
      $('input.pincode-input-text:first').focus();
  });
  