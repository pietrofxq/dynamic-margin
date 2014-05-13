/* 
    jQuery Dynamic Margin
    Version 1.0
    Author: github.com/pietrofxq
*/

(function($) {

	$.fn.dynamicMargin = function(options) {

		if (options == "disabled") {
			return;
		}
		
		var that = $(this);

		var settings = $.extend({
			container: window,
		            	minMargin: 10,
		            	onResizeWindow: false,
		            	onResizeAndLoad:false,
		            	bodyReset:true
		}, options);

		if (settings.bodyReset) {
			$("body").css({
				margin : 0,
				padding: 0
			});
		}
        
        var container = settings.container,
			margin = settings.minMargin;
        
		var space =  function() {
			var minMargin 	= margin,
			containerWidth 	= $(container).width(),
			divWidth = that.width(),
			qntSquare = Math.floor(containerWidth / (divWidth + minMargin)),
			rest 	= containerWidth - ((divWidth + minMargin) * qntSquare),
			marginWidth 	= (rest / qntSquare) + minMargin;
			
            return that.each(function(){
                $(this).css({
                    "margin-left" : marginWidth/2 + "px",
                    "margin-right": marginWidth/2 + "px"
                });
            });
		};
        
        if (settings.onResizeWindow || settings.onResizeAndLoad) {
            var resizeIt = function() {
                if (settings.onResizeAndLoad) {
                    space();
                }
                $(window).resize(function(){
                    space();
                });
            };
            return resizeIt();
        }
	   return space();	
	};

})(jQuery);

