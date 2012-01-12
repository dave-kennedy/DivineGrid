// This jQuery function will convert any arbitrary rectangle into a golden rectangle
$(function() {

	// Select all elements in the document with a class of "divine"
	// Loop through each element
	$(".divine").each(function(index) {
		
		// Set its height value to its width divided by the golden ratio
		$(this).height(
			$(this).width() / 1.6180339887498948482045868343656
		);
		
		// Set its overflow value to hidden to keep its contents from spilling out
		$(this).css("overflow", "hidden");
	});
});