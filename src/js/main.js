$(document).ready(function(){
    $('#open_modal').click(function(){
      $('#modal_to_open').css(
        {
            'display' : 'block'
        }
      );
   });
  

   $('#close_modal').click(function(){
    $('#modal_to_open').css(
      {
          'display' : 'none'
      }
    );
     });

$('#send_email').click(function(e){
		e.preventDefault();
		var data = {
			firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
			objet: $('#object').val(),
			message: $('#message').val()
		};
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
                    $('#firstname').val("");
                    $('#lastname').val("");
					$('#object').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
                    $('#firstname').val("");
                    $('#lastname').val("");
					$('#object').val("");
					$('#message').val("")
				}, 3000);
			}
		});
	});

});
