window.onload = function() {
	var EXPANDABLE_TRIGGER = '[data-expandable-trigger]';
	var EXPANDABLE_TRIGGER_ATTR = 'data-expandable-trigger';
	var EXPANDABLE_CONTENT_ATTR = 'data-expandable-content';

	var trigger = document.querySelector(EXPANDABLE_TRIGGER);
	var triggerName = trigger.getAttribute(EXPANDABLE_TRIGGER_ATTR);
	var content = document.querySelector('[' + EXPANDABLE_CONTENT_ATTR + '=' + triggerName + ']');

	content.classList.add('hidden');

	trigger.addEventListener('click', function() {
		var isExpanded = false;

		if(isExpanded) {
			content.classList.remove('hidden');
		} else {
			content.classList.add('hidden');
		}
	});
}
	