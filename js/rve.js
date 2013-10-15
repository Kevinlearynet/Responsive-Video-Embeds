/**
 * Responsive Video Embeds
 */
(function($) {
	var $rve = $('.rve');
	if ( $rve.length > 0 ) {
		$("object, embed, iframe", $rve).each(function() {
			var orig = $(this);
			var ratio = orig.attr("height") / orig.attr("width");
			var roundPercentage = Math.round(ratio * 10000) / 100 + '%';
			
			// Remove width and height
			$(this)
				.removeAttr('width')
				.removeAttr('height');
			
			$(this).parent('.rve').css('padding-bottom', roundPercentage);
		});
	}
})(jQuery);