$(document).ready(function(){
	var mainFormActive = false, modalActive = false, overlay = $('<div class="overlay"></div>');
	
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
		
		if(modalActive===true){
			$('.Modal').fadeOut();
			modalActive = false;
		}
		
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
	
	
	$('.js-appear').appear();
	
	$('.js-appear').each(function(){
		var attributes = $(this).attr('appear-delay');
		$(this).css({
			'transition' : 'all 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			'transition-delay' : attributes + 's',
		});
		
	});
	
	$(document.body).on('appear', '.js-appear',function(){
		$(this).removeClass('is-out-viewport');
	});
	
	$('.js-anchor-nav').click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		target = $(target).offset();
		
		$('html, body').animate({
			 'scrollTop' : target.top,
		}, 500, 'swing');

		return false;
	});
	
	$('.js-close').click(function(){
		var target = $($(this).attr('href')),
		animation = $(this).attr('js-animation');
		
		switch(animation){
			
			case 'fadeOut':
			
				target.fadeOut('fast');
			
			break;
			
			case 'slideUp':
				
				target.slideUp('fast');
			
			break;
		}
		
		return false;
	});
	
	$('.js-modal').click(function(){
		
		modalActive = true;
		
		var target = $($(this).attr('href'));
		target.fadeIn('fast');
		
		return false;
		
	});
	
});