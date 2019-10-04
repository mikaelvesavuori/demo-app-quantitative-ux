export default function getCurrentViewCount() {
	return parseInt(window.localStorage.getItem('carViews'));
}