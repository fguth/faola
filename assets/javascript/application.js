$("#borders li > a").live('click', function (event) {
	event.preventDefault();
	$('#borders .current').removeClass("current");
	var id = this.id;
	var newselect = 'border_' + id;
	$('#'+newselect).attr('checked', true);
	$(this).addClass("current");
	return false;
});