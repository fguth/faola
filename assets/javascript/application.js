$("#borders li > a").live('click', function (event) {
	event.preventDefault();
	$('#borders .current').removeClass("current");
	var id = this.id;
	var newselect = 'border_' + id;
	$('#'+newselect).attr('checked', true);
	$(this).addClass("current");
	return false;
});

var app = {};

app.color = "889921";
app.radius = 4;

app.setColor = function(color) {
  app.color = color;
  app.generate();
}

app.setRadius = function(radius) {
  app.radius = radius;
  app.generate();
}

app.generate = function() {
  var parser = new (less.Parser)();
  var source =  "@color:#" + app.color + "; ";
  source += "@BorderRadius:" + app.radius + "px; ";
  source += "@import 'assets/faola/faola.less';"
  
  parser.parse(source, function(err, tree) { 
    var css = tree.toCSS();
    $("#faola-inline-raw").html(css);
  });
  
}

jQuery(function() {
  $("#basecolor").keyup(function(event) { 
    app.setColor($(this).val()) 
  });
  
  $("#borders li a").click(function(event) { 
    app.setRadius($(this).attr("data-val")) 
  });
  
})