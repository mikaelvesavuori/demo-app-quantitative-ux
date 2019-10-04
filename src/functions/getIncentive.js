import getCurrentViewCount from './getCurrentViewCount';

import { MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE } from 'configuration/config';

export default function getIncentive() {
	const CAR_VIEWS = getCurrentViewCount();
	let treatment = window.splitio.getTreatment('display_purchase_incentive');

	// Check for stored incentive, so we don't get a non-cached 'other' incentive popping up
	const INCENTIVE = (() => {
		if (CAR_VIEWS > MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE && window.localStorage.getItem('incentive')) {
			console.log('Returning previous incentive...', window.localStorage.getItem('incentive'));
			return window.localStorage.getItem('incentive');
		}
		else if (CAR_VIEWS === MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE + 1 && !window.localStorage.getItem('incentive')) {
			// Also, default to something, since some unknown issue seems to be breaking Split.io sometimes, thus sending the 'control' treatment
			const RANDOM_INCENTIVE = (() => {
				return Math.random() < 0.5 ? 'incentive_1' : 'incentive_2';
			})();

			const INCENTIVE = (() => {
				if (treatment !== "control" && treatment !== 'off') {
					console.log('Passed treatment check, setting incentive to:', treatment);
					return treatment;
				}
				else {
					return RANDOM_INCENTIVE
				}
			})();

			window.localStorage.setItem('incentive', INCENTIVE);
			console.log('Returning new incentive...', window.localStorage.getItem('incentive'));
			return window.localStorage.getItem('incentive');
		}
	})();

	return INCENTIVE;
};