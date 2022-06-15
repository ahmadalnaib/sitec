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
});


$('#keyboard').on('click', function () {
  let write = $('#write').val().toLowerCase();
  $('#name-list').fadeIn();

  
function getPersons(){
  return $.ajax({
      url: 'http://127.0.0.1/person/search',
      type: 'POST',
      dataType: 'json',
      data: {
        write: write,
      }
      })
    }

      let personData; 
      $.when(getPersons()).done(function(data){
        personData = data;
        createList(personData);
      
      });
      


      function createList(personData){
        $.each(personData, function (index, val) {
      
            if (write === val['firstname'].toLowerCase().substr(0, 2)) {
              $('#name-list').append(`
               
                           <ul class="list">
                             <li><i class="far fa-user fa-2x"> </i> <a  href="/x-sitec-concierge/idle/deliverPerson/1">${val.firstname} ${val.lastname}</a></li>
                           
                           </ul>
                           
                `);
                
                
                
            } else {
               
              
            }
          });
          // return list;
      }
      
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
        createList(personData);
        $('#name-list').fadeOut();
        
      });


});







