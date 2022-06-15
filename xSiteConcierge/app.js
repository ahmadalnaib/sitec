$(function () {
  $('#name-list').fadeOut();

  let $write = $('#write');
  $write.focus();

  $('#keyboard li').click(function () {
    let $this = $(this),
      character = $this.html();
    // If it's a lowercase letter, nothing happens to this variable

    // Delete
    if ($this.hasClass('delete')) {
      var html = $write.html();

      $write.html(html.substr(0, html.length - 1));
      return false;
    }

    // Add the character
    $write.html($write.html() + character);
  });

  //call the api

  $('#keyboard').on('click', function () {
    
    let write = $('#write').val().toLowerCase();

    $('#name-list').fadeIn();

    $.ajax({
      url: 'http://127.0.0.1/person/search',
      type: 'POST',
      dataType: 'json',
      data: {
        write: write,
      },
    }).done(function (data) {
      let inputUser = write.length;
      $('#name-list').empty()
      $.each(data, function (index, val) {
        if (
          write === val['firstname'].toLowerCase().substr(0, inputUser) ||
          write === val['lastname'].toLowerCase().substr(0, inputUser)
        ) {
          $('#not__found').fadeOut();
          $('#name-list').append(`
         
                     <ul class="list">
                       <li class=""><i class="far fa-user fa-2x"> </i> <a  href="/x-sitec-concierge/idle/deliverPerson/1">${val.firstname} ${val.lastname}</a></li>
                     
                     </ul>
                     
          `);
          
        } else {
          $('#not__found').show();
        }
      });
    });

    $('.list').on('click', 'a', function (e) {
      e.preventDefault();
      websocketManager.handleLink($(this));
      /* $.ajax({
       url: $(this).attr('href'),
       type: "POST",
       dataType: 'json',
       data: {
       "write": write
       }
       });*/
      $('#write').val($(this).text());
    });

    $('.delete').on('click', function () {
      //    createList(personData);

      $('#name-list').fadeOut();
      $('#name-list').text('');
      $('#not__found').fadeOut();
    });
  });
});
