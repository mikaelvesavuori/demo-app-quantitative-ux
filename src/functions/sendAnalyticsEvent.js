export default function sendAnalyticsEvent(event = "", eventLabel = "", eventCategory = "", eventAction = "", eventValue = "") {
	window.gtag(event, eventLabel, {
		event_category: eventCategory,
		event_action: eventAction,
		event_label: eventLabel,
		value: eventValue
	});
}

// sendAnalyticsEvent("event", "Fuzzy Dice", "Product", "Product action")