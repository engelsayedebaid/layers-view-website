'use strict';
(function ($) {
	jQuery(window).on('load',function(){
		jQuery(window).trigger('resize');
	});

	jQuery(window).on('elementor/frontend/init', function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/wb-before-after-image-slider-elementor.default', function ($scope, $) {
			var container_elem = $scope.find('.wb_ebais_twentytwenty_container');
			var before_text = container_elem.data('before_text');
			var after_text = container_elem.data('after_text');
			var move_on_hover = container_elem.data('move_on_hover');
			var click_to_move = container_elem.data('click_to_move');
			var orientation = container_elem.data('orientation');
			var default_offset = container_elem.data('offset');

			$scope.find('.wb_ebais_twentytwenty_container').twentytwenty({
				before_label : before_text,
				after_label :after_text,
				move_slider_on_hover : move_on_hover,
				click_to_move : click_to_move,
				orientation : orientation,
				default_offset_pct : default_offset,
			});

			jQuery(window).trigger('resize');
		});
	});

	jQuery(window).on('scroll', function() {
		jQuery('.wb_ebais_twentytwenty_container').each(function(){
			if (jQuery(this).wbebaic_isInViewport()) {
				jQuery(window).trigger('resize');
			}
		});
	});
})(jQuery);

jQuery.fn.wbebaic_isInViewport = function() {
  var elementTop = jQuery(this).offset().top;
  var elementBottom = elementTop + jQuery(this).outerHeight();

  var viewportTop = jQuery(window).scrollTop();
  var viewportBottom = viewportTop + jQuery(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};