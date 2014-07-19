/* 
    jQuery Dynamic Margin
    Version 1.1
    Author: github.com/pietrofxq
*/

(function($) {

	$.fn.dynamicMargin = function(options) {
       
       var that = $(this);

       function destroy() {
            that.css({
                "margin-left":"",
                "margin-right":""
            });
            $(window).off("resize",space);
        }


       switch(options) {
           case "destroy":
               return destroy();
	    }

		var settings = $.extend({
			container: window,
            minMargin: 10,
            onResizeWindow: false,
            onResizeAndLoad:true,
            bodyReset:true,
            outerWidthElement:false,
            outerWidthContainer: false
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
			var minMargin = margin,
			containerWidth = settings.outerWidthContainer? $(container).outerWidth() : $(container).width(),
			divWidth = settings.outerWidthElement ? that.outerWidth() : that.width(),
			qntSquare = Math.floor(containerWidth / (divWidth + minMargin)),
			rest = containerWidth - ((divWidth + minMargin) * qntSquare),
			marginWidth = (rest / qntSquare) + minMargin;

			console.log('container: ' + containerWidth);
			console.log('element: ' + divWidth);
			
            return that.each(function(){
                $(this).css({
                    "margin-left": marginWidth/2 + "px",
                    "margin-right": marginWidth/2 + "px"
                });
            });
		};
        
        if (settings.onResizeWindow || settings.onResizeAndLoad) {
        	if(settings.onResizeAndLoad) {
        		space();
        	}
        	$(window).resize(space)
        }
        
		return space();	
	};

    
})(jQuery);
