
$(".btn-floating").on( 'click', function() {
	var text = $("#output").val();
	$("#output").val(text + $(this).text());
	
});

