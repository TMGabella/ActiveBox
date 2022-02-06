
// fixed header //////////////

$(function () {
	let header = $("#header");
	let intro = $("#intro");
	let introH;
	let scrollPos = $(window).scrollTop();


	$(window).on('scroll load resize', function () {

		introH = intro.innerHeight();
		let scrollPos = $(this).scrollTop();
		
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.romoveClass("fixed");
		}
	});



// smooth scrol  ///////////////

$("[data-scroll]").on("click", function (event) {
	event.preventDefault();

	let elementId = $(this).data("scroll");
	let elementOffset = $(elementId).offset().top;

	console.log(elementOffset);

	$("html, body").animate({
		scrollTop: elementOffset - 75
	}, 700);

});
	
	// Nav toggle /////////////

	let nav = $("#nav");
	let navToggle = $("#navToggle");
	
	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

	// slider /////////////
	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
	});





});



