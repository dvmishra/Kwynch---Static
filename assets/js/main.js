

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer');

		
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		
			$('form').placeholder();

		
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			$header.each( function() {

				var t 		= jQuery(this),
					button 	= t.find('.button');

				button.click(function(e) {

					t.toggleClass('hide');

					if ( t.hasClass('preview') ) {
						return true;
					} else {
						e.preventDefault();
					}

				});

			});

		// Footer.
			$footer.each( function() {

				var t 		= jQuery(this),
					inner 	= t.find('.inner'),
					button 	= t.find('.info');

				button.click(function(e) {
					t.toggleClass('show');
					e.preventDefault();
				});

			});

	});

})(jQuery);