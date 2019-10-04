export default function getCart() {
	if (window.localStorage.getItem('cart')) {
		return JSON.parse(window.localStorage.getItem('cart'))
	}
	else {
		return [];
	}
}