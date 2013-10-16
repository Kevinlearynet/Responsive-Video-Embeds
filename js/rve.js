/**
 * Responsive Video Embeds
 */
(function($) {
	var $rve = $('.rve');
	if ( $rve.length > 0 ) {
		$("object, embed, iframe", $rve).each(function() {
			var orig = $(this);
			var width = ( $('[width]', this).length > 0 ) ? orig.attr("width") : orig.width();
			var height = ( $('[height]', this).length > 0 ) ? orig.attr("height") : orig.height();
			var ratio = ( height / width );
			var roundPercentage = Math.round(ratio * 10000) / 100 + '%';
			
			// Remove width and height
			$(this)
				.removeAttr('width')
				.removeAttr('height');
			
			$(this).parent('.rve').css('padding-bottom', roundPercentage);
		});
	}
})(jQuery);