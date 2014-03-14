'use strict';

// Hide all slider panels
$('.js-slider').hide();

// Watch for clicks
$('.toggle-button').on( 'click', function () {

	// Cache selectors
	var button = $(this);
	var nextPanel = button.next('.js-slider');

	// Conditional label if slider visible
	var label = nextPanel.is(':visible') ? 'Show Source' : 'Hide Source';

	// Toggle next slider panel
	nextPanel.slideToggle( 200 );

	// Apply conditional label
	button.html( label );

});