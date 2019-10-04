export default function getUpdatedViewCount() {
	const CURRENT_COUNT = parseInt(window.localStorage.getItem('carViews'));
	const CAR_VIEWS = (() => {
		if (!CURRENT_COUNT || CURRENT_COUNT === NaN || CURRENT_COUNT === null || CURRENT_COUNT === undefined || CURRENT_COUNT === 0 || CURRENT_COUNT === "") {
			return 0;
		}
		else {
			return CURRENT_COUNT;
		}
	})();

	const UPDATED_NUMBER = CAR_VIEWS + 1;
	console.log('View count:', UPDATED_NUMBER);

	return UPDATED_NUMBER;
};