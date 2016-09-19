$(document).ready(function(){

	$("#english").hide();
	$("#ES").css({"color":"white"});
	$("#EN").css({"color":"black"});

	var source = $("#photos-modal").html();
	var photos_modal = Handlebars.compile(source);

	source   = $("#photos-template").html();
	var photos_template = Handlebars.compile(source);

	var source = $("#fotos-modal").html();
	var fotos_modal = Handlebars.compile(source);

	source   = $("#fotos-template").html();
	var fotos_template = Handlebars.compile(source);

	$(document).on('click', function (e) {
    $('[data-toggle="popover"],[data-original-title]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
            (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
        }

    });
	});


	$("#EN").click(function(){
		if ($("#english").is(":visible")) {
			return false;
		}
	    	else{
	    		$("#spanish").hide();
	    		$("#english").show();
	    		$("#ES").css({"color":"black"});
	    		var button = document.getElementsByClassName("active");
				if (button !== null){
					for (i = 0; i < 6; i++){
					$("#button-"+[i]).removeClass("active");
					}
				}
				document.getElementById("button-1").className += ' active';
        		$("#toggle-1").show();
	    	}
	    if ($("#english").is(":visible")) {
			$("#EN").css({"color":"white"});
		}
	});

	$("#ES").click(function(){
		if ($("#spanish").is(":visible")) {
			return false;
		}
	    	else{
	    		$("#english").hide();
	    		$("#spanish").show();
	    		$("#EN").css({"color":"black"});
	    		var button = document.getElementsByClassName("active");
				if (button !== null){
					for (i = 0; i < 6; i++){
					$("#boton-"+[i]).removeClass("active");
					}
				}
				document.getElementById("boton-1").className += ' active';
        		$("#palanca-1").show();
			}
	    if ($("#spanish").is(":visible")) {
			$("#ES").css({"color":"white"});
		}
	});



	$("#button-1").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#button-"+[i]).removeClass("active");
			}
		}

		if ($("#toggle-1").is(":visible")) {
       			$("#toggle-1").fadeOut(500);
    		}
    		else{
    			document.getElementById("button-1").className += ' active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#toggle-1").fadeIn(1000);}, 500);
    		}
	});

	$("#button-2").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#button-"+[i]).removeClass("active");
			}
		}

		if ($("#toggle-2").is(":visible")) {
       			$("#toggle-2").fadeOut(500);
    		}
    		else{
    			document.getElementById("button-2").className += 'active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#toggle-2").fadeIn(1000);}, 500);
    		}
	});

	$("#button-3").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#button-"+[i]).removeClass("active");
			}
		}

		function showTemplate(template, data){
		var html = template(data);
		$('#toggle-3').html(html);
		}

		// displays the photos template
		showTemplate(photos_template, gallery);

		if ($("#toggle-3").is(":visible")) {
       			$("#toggle-3").fadeOut(500);
    		}
    		else{

    		document.getElementById("button-3").className += 'active';

    		$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#toggle-3").fadeIn(1000);}, 500);
    		

	    	$(".crop-img").click(function (){


				var index = $(this).data("id");

				var current_photo = gallery.photos[index];

				function showTemplate(template, data){
				var html = template(data);
				$('.photo-modal-template-container').html(html);
				}

				showTemplate(photos_modal, current_photo);
			});

			$('.video-modal-template-container').on('hidden.bs.modal', function () {
    			var src = $(this).find('iframe').attr('src');
			    $(this).find('iframe').attr('src', '');
			    $(this).find('iframe').attr('src', src);
			});
			}
	});


	$("#button-4").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#button-"+[i]).removeClass("active");
			}
		}

		if ($("#toggle-4").is(":visible")) {
       			$("#toggle-4").fadeOut(500);
    		}
    		else{
    			document.getElementById("button-4").className += 'active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#toggle-4").fadeIn(1000);}, 500);
    		}
	});

	$("#button-5").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#button-"+[i]).removeClass("active");
			}
		}

		if ($("#toggle-5").is(":visible")) {
       			$("#toggle-5").fadeOut(500);
    		}
    		else{
    			document.getElementById("button-5").className += ' active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#toggle-5").fadeIn(1000);}, 500);
    		}
	});

	$('.employment').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.professional-content').html();},
		template:'<div hidden class="employment-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.personal').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.personal-content').html();},
		template:'<div hidden class="personal-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.home').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.home-content').html();},
		template:'<div hidden class="home-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.envelope').popover({
		animation: true,
		trigger: 'click',
    	placement: 'top',
    	html: true,
    	content: function(event) {
    	return $('.envelope-popover-container').html();},
		template:'<div hidden class="envelope-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
	});

	$('.linkedin').click(function(event){
		$('.linkedin').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.linkedin-popover-container').html();},
			template:'<div hidden class="linkedin-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.linkedin').popover("show");
		$('.es-linkedin-popover').popover("destroy");
	});

	$('.git').click(function(event){
		$('.git').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.git-popover-container').html();},
			template:'<div hidden class="git-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.git').popover("show");
		$('.es-git-popover').popover("destroy");
	});


	$('.twitter').click(function(event){
		$('.twitter').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.twitter-popover-container').html();},
	    	template:'<div hidden class="twitter-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.twitter').popover("show");
			$('.es-twitter-popover').popover("destroy");
		});

    	
		



	/// Spanish variations

	$("#boton-1").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#boton-"+[i]).removeClass("active");
			}
		}

		if ($("#palanca-1").is(":visible")) {
       			$("#palanca-1").fadeOut(500);
    		}
    		else{
    			document.getElementById("boton-1").className += ' active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#palanca-1").fadeIn(1000);}, 500);
    		}
	});

	$("#boton-2").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#boton-"+[i]).removeClass("active");
			}
		}

		if ($("#palanca-2").is(":visible")) {
       			$("#palanca-2").fadeOut(500);
    		}
    		else{
    			document.getElementById("boton-2").className += 'active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#palanca-2").fadeIn(1000);}, 500);
    		}
	});

	$("#boton-3").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#boton-"+[i]).removeClass("active");
			}
		}

		function showTemplate(template, data){
		var html = template(data);
		$('#palanca-3').html(html);
		}

		// displays the photos template
		showTemplate(fotos_template, gallery);

		if ($("#palanca-3").is(":visible")) {
       			$("#palanca-3").fadeOut(500);
    		}
    		else{

    		document.getElementById("boton-3").className += 'active';

    		$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#palanca-3").fadeIn(1000);}, 500);
    		

	    	$(".crop-img").click(function (){

	    	if ($("#english").not(":visible")) {

				var index = $(this).data("id");

				var current_photo = gallery.photos[index];

				function showTemplate(template, data){
				var html = template(data);
				$('.foto-modal-template-container').html(html);
				}

				showTemplate(fotos_modal, current_photo);
			}});

			$('.vid-modal-template-container').on('hidden.bs.modal', function () {
    			var src = $(this).find('iframe').attr('src');
			    $(this).find('iframe').attr('src', '');
			    $(this).find('iframe').attr('src', src);
			});
			}

	});


	$("#boton-4").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#boton-"+[i]).removeClass("active");
			}
		}

		if ($("#palanca-4").is(":visible")) {
       			$("#palanca-4").fadeOut(500);
    		}
    		else{
    			document.getElementById("boton-4").className += 'active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#palanca-4").fadeIn(1000);}, 500);
    		}
	});

	$("#boton-5").click(function(event){
		event.preventDefault();
		var button = document.getElementsByClassName("active");
		if (button !== null){
			for (i = 0; i < 6; i++){
			$("#boton-"+[i]).removeClass("active");
			}
		}

		if ($("#palanca-5").is(":visible")) {
       			$("#palanca-5").fadeOut(500);
    		}
    		else{
    			document.getElementById("boton-5").className += ' active';
    			$(".toggle").fadeOut(500);
    			setTimeout(function() {
        			$("#palanca-5").fadeIn(1000);}, 500);
    		}
	});

	$('.es-employment').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.es-professional-content').html();},
		template:'<div hidden class="employment-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.es-personal').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.es-personal-content').html();},
		template:'<div hidden class="personal-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.es-home').popover({
		animation: true,
		trigger: 'hover',
    	placement: 'top',
    	title: "&zwnj;",
    	html: true,
    	content: function(event) {
    	return $('.es-home-content').html();},
		template:'<div hidden class="home-popover popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});

	$('.es-linkedin').click(function(event){
		$('.es-linkedin').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.es-linkedin-popover-container').html();},
			template:'<div hidden class="es-linkedin-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.es-linkedin').popover("show");
		$('.linkedin-popover').popover("destroy");
	});


	$('.es-git').click(function(event){
		$('.es-git').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.es-git-popover-container').html();},
			template:'<div hidden class="es-git-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.es-git').popover("show");
		$('.git-popover').popover("destroy");
		});

	$('.es-twitter').click(function(event){
		$('.es-twitter').popover({
			animation: true,
			trigger: 'click',
	    	placement: 'top',
	    	html: true,
	    	content: function(event) {
	    	return $('.es-twitter-popover-container').html();},
			template:'<div hidden class="es-twitter-popover popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
		});
		$('.es-twitter').popover("show");
		$('.twitter-popover').popover("destroy");
		});

	function init() {
	var imgDefer = document.getElementsByTagName('img');
	for (var i=0; i<imgDefer.length; i++) {
	if(imgDefer[i].getAttribute('datasrc')) {
	imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('datasrc'));
	} } }
	window.onload = init;

});