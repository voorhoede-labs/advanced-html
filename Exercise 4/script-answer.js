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
	tabsList.setAttribute('role', 'tablist');

	[].forEach.call(tabs, function(tab) {
		tab.setAttribute('role', 'presentation');
	});

	[].forEach.call(content, function(contentElement, counter) {
		var firstContentChild = contentElement.childNodes[1];

		if(counter > 0) {
			contentElement.classList.add('hidden');
			contentElement.setAttribute('aria-hidden', 'true');
		}

		contentElement.setAttribute('role', 'tabpanel');
		firstContentChild.setAttribute('tabindex', '0');
	});

	[].forEach.call(triggers, function(trigger, counter) {
		trigger.setAttribute('role', 'tab');
		trigger.setAttribute('tabindex', '-1');

		if(counter === 0) {
			trigger.classList.add('tab--selected');
			trigger.setAttribute('aria-selected', 'true');
			trigger.setAttribute('tabindex', '0');
		}

		focusContent(content, triggers, trigger);
		addKeyBinding(triggers, trigger);
	});

	function focusContent(content, triggers, trigger) {
		trigger.addEventListener('focus', function(e) {
			var triggerName = trigger.getAttribute(TAB_TRIGGER_ATTR);
			var currentContent = document.querySelector('[' + TAB_CONTENT_ATTR + '="' + triggerName + '"]');

			e.preventDefault();

			[].forEach.call(triggers, function(trigger) {
				trigger.classList.remove('tab--selected');
				trigger.removeAttribute('aria-selected');
				trigger.setAttribute('tabindex', '-1');
			});

			[].forEach.call(content, function(contentElement) {
				contentElement.classList.add('hidden');
				contentElement.setAttribute('aria-hidden', 'true');
			});

			currentContent.classList.remove('hidden');
			currentContent.removeAttribute('aria-hidden');

			this.classList.add('tab--selected');
			this.setAttribute('aria-selected', 'true');
			this.setAttribute('tabindex', '0');
		});
	}

	function addKeyBinding(triggers, trigger) {
		trigger.addEventListener('keydown', function(e) {
			var firstTriggerName = 1;
			var lastTriggerName = triggers.length;
			var currentTriggerName = parseInt(this.getAttribute(TAB_TRIGGER_ATTR));

			// Left or up key
			if (e.keyCode === 37 || e.keyCode === 38) {
				var previousTriggerName;

				if(currentTriggerName === firstTriggerName) {
					previousTriggerName = lastTriggerName;
				} else {
					previousTriggerName = currentTriggerName - 1;
				}

				var previousTrigger = document.querySelector('[' + TAB_TRIGGER_ATTR + '="' + previousTriggerName + '"]');

				previousTrigger.focus();
			}
			// Right or down key
			else if(e.keyCode === 39 || e.keyCode === 40) {
				var nextTriggerName;

				if(currentTriggerName === lastTriggerName) {
					nextTriggerName = 1;
				} else {
					nextTriggerName = currentTriggerName + 1;
				}

				var nextTrigger = document.querySelector('[' + TAB_TRIGGER_ATTR + '="' + nextTriggerName + '"]');

				nextTrigger.focus();
			}
		});
	}
}