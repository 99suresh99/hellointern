$('document').ready(function(){	
		//'keyup | keydown'
		$('input.req,textarea.req').on('keydown', function(){
			var thisVal = $(this).val();
			vali(thisVal, $(this));
		})
		.on('keydown',function(){
			var thisVal = $(this).val();
			vali(thisVal, $(this));
		})
		.on('blur', function(){
			var thisVal = $(this).val();
			vali(thisVal, $(this));
		});
		
		$('select.req').on('change', function(){
			if( parseInt($(this).val()) < 0 || $(this).val() == "" ){
				if($(this).hasClass('error')){
				} else {
					$(this).addClass('error');
					$(this).parent().append("<p class='errorMessage'>" + $(this).attr('error-msg') + "</p>");					
				}
			} else {
				$(this).removeClass('error');
//				$(this).next('.errorMessage').remove();
				$(this).parent().find('.errorMessage').remove();
			};
		})
		.on('focus', function(){
			if( parseInt($(this).val()) < 0 || $(this).val() == "" ){
				if($(this).hasClass('error')){
				} else {
					$(this).addClass('error');
					$(this).parent().append("<p class='errorMessage'>" + $(this).attr('error-msg') + "</p>");					
				}
			} else {
				$(this).removeClass('error');
//				$(this).next('.errorMessage').remove();
				$(this).parent().find('.errorMessage').remove();
			};
		})
		.on('blur', function(){
			if( parseInt($(this).val()) < 0 || $(this).val() == "" ){
				if($(this).hasClass('error')){
				} else {
					$(this).addClass('error');
					$(this).parent().append("<p class='errorMessage'>" + $(this).attr('error-msg') + "</p>");					
				}
			} else {
				$(this).removeClass('error');
//				$(this).next('.errorMessage').remove();
				$(this).parent().find('.errorMessage').remove();
			};
		});
		
		
		

		$('#dontaform').on('submit', function(){
			
			var thisReq = $('#dontaform .req');
			var thisVal = $('.req').val();			
			var reqErr = $('.req.error');
			
			if($('.req').hasClass('error')){
				$(reqErr).eq(0).focus();
				return false;			
			}
			
			for(i=0; i < thisReq.length; i++){				
				
				if( $('#dontaform .req').eq(i).val().length  < 1){
					$('#dontaform .req').eq(i).addClass('error');
					$('#dontaform .req').eq(i).parent().append("<p class='errorMessage'>" + $('.req').eq(i).attr('error-msg') + "</p>")
					
					if((thisReq.length - 1) == i) {
					//	$('#dontaform .req').eq(i).focus();
						return false;
					}
				}
			};
			
			
		

			//alert('done'); return false;
	return true; 
		});
		
		
		
		function vali(thisVal, ele){
			if(thisVal.length < 1){
				addError(thisVal, ele);
			} else {
				removeError(thisVal, ele);
			};
			if( ele.attr('req-type') == 'text'){
				var filter = /^[a-zA-Z\s]+/;
				if (filter.test(thisVal)) {
					removeError(thisVal, ele)					
				}
				else {
					addError(thisVal, ele);
				}				
			}
			else if( ele.attr('req-type') == 'select'){
				var filter = /^[a-zA-Z\s]+/;
				if (filter.test(thisVal)) {
					removeError(thisVal, ele)					
				}
				else {
					addError(thisVal, ele);
				}				
			}
			
			else if( ele.attr('req-type') == 'url'){
				var filter = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
				if (filter.test(thisVal)) {
					removeError(thisVal, ele)					
				} else {
					ele.addClass('error');
				}				
			} 
			else if(ele.attr('req-type') == 'password'){
				var filter = /^[a-zA-Z0-9\s]+/;
				if (filter.test(thisVal)) {
					removeError(thisVal, ele)					
				}
				else {
					addError(thisVal, ele);
				}
			}
			else if( ele.attr('req-type') == 'email'){
				
				var atpos = thisVal.indexOf("@");
				var dotpos = thisVal.lastIndexOf(".");
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>= ele.val().length) {
					addError(thisVal, ele);					
				} else {
					removeError(thisVal, ele);
				}
			} else if( ele.attr('req-type') == 'number'){
				if( $.isNumeric(thisVal) ){
					removeError(thisVal, ele);
				} else {
					addError(thisVal, ele);
				}
			} else if( ele.attr('req-type') == 'tel'){
				var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})?[-. ]?([0-9]{2})?[-. ]?([0-9]{2})?[-. ]?([0-9]{2})$/;
				if(thisVal.match(phoneno)){
					removeError(thisVal, ele);
				} else {
					addError(thisVal, ele);
				}  
			}		
		}
						
		function addError(thisVal, ele){
			ele.addClass('error');
			if(ele.hasClass('error')){
				var thisLength = ele.parent().find( $('.errorMessage') ).length;
				if(thisLength){
				} else if (thisLength == 0){
					ele.parent().append("<p class='errorMessage'>" + ele.attr('error-msg') + "</p>");
				}
			} else {
				ele.next('.errorMessage').remove();
			}			
		}
		function removeError(thisVal, ele){
				ele.removeClass('error');
				ele.parent().find('.errorMessage').remove();
		}
		

		
		$('#cpwd').blur(function(){
			var thisVal = $(this).val();
			var psw =$("#pwd").val();
			if(thisVal != psw){
				alert('Confirm Password Dosnot Metch!!');
				$(this).val('');
			}
		});
		 
		
});