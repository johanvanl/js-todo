
$(document).ready(function() {

  $('#title').click(function() {
    $('#helpText').toggle();
  });
  
  $('#newItem').keypress(function(event) {
    if (event.keyCode == 13) {
      add();
    }
  });

  var add = function() {
    if ($('#newItem').val() == ''){
      return;
    }
    
    var items = [];    
    if (localStorage.getItem('storedItems')) {
      items = JSON.parse(localStorage.getItem('storedItems'));
      for (var i = 0; i < items.length; i++) {
        if (items[0] == $('#newItem').val()) {
          alert('The item is already in your TODO list!');
          return;
        }
      }
    }
    
    $('#items').prepend($("<li></li>").html($('#newItem').val()));
    
    items.unshift($('#newItem').val());
    $('#newItem').val('');
    
    localStorage.setItem('storedItems', JSON.stringify(items));
  };
  
  $('#items').on('click', 'li', function() {
    if ($(this).data('timer') == 'true') {
      $(this).remove();
      
      items = JSON.parse(localStorage.getItem('storedItems'));
      for (var i = 0; i < items.length; i++) {
        if ($(this).text() == items[i]) {
          items.splice(i, 1);
          localStorage.setItem('storedItems', JSON.stringify(items));
          return;
        }
      }
      return;
    }
    
    $(this).data('timer', 'true');
    $(this).css('color', 'red');
    
    var revertTimer = function(that) {
      $(that).data('timer', 'false');
      $(that).css('color', 'black');
    };
    
    setTimeout(revertTimer, 3000, this);
  });
  
  var init = function() {
    $('#helpText').hide();
    
    if (localStorage.getItem('storedItems')) {
      items = JSON.parse(localStorage.getItem('storedItems'));
      for (var i = 0; i < items.length; i++) {
        $('#items').append($("<li></li>").html(items[i]));
      }
    }
  };
  
  init();
  
});
