$(function(){
	switch (menu) {
	case 'About Us':
		$('#about').addClass('active');
		break;
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
	default:
		$('#listProducts').addClass('active');
		break;
	}


});