window.onload = function() {
	var TABS = '[data-tabs]';
	var TABS_LIST = '[data-tabs-list]';
	var TAB = '[data-tabs-tab]';
	var TAB_TRIGGER = '[data-tabs-trigger]';
	var TAB_TRIGGER_ATTR = 'data-tabs-trigger';
	var TAB_CONTENT = '[data-tabs-content]';
	var TAB_CONTENT_ATTR = 'data-tabs-content';

	var tabElement = document.querySelector(TABS);

	var tabsList = tabElement.querySelector(TABS_LIST);
	var tabs = tabElement.querySelectorAll(TAB);
	var triggers = tabElement.querySelectorAll(TAB_TRIGGER);
	var content = tabElement.querySelectorAll(TAB_CONTENT);

	tabElement.classList.add('enhanced');
}