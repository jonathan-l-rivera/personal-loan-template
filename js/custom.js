$(document).ready(function(){
	var mainFormActive = false, overlay = $('<div class="overlay"></div>');
	
	function activateOverlay(){
		$('body').append(overlay);
		$('.overlay').fadeIn('fast');
		
	}
	
	function removeOverlay(){
		$('.overlay').fadeOut('fast', function(){
			$(this).remove();
		});
	}
	
	$('body').click(function(){
		$('.js-highlight-form').removeClass('is-active');
		mainFormActive = false;
		removeOverlay();
	});
	
	$('.js-highlight-form').click(function(){
		event.stopPropagation();
		if(mainFormActive === false) {
			activateOverlay();
			$(this).addClass('is-active');
			mainFormActive = true;
		}
	});
	
	$('.Field__element').focus(function(){
		$(this).parent('.Field').addClass('is-active');
	});
	
	$('.Field__element').blur(function(){
		$(this).parent('.Field').removeClass('is-active');
	});

	
});