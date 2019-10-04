import getCart from 'functions/getCart';

export default function sendGtmCheckoutBegin() {
	const CART = getCart();
	console.log('GTM checkout event (begin, step 1)');

	window.dataLayer.push({
		event: 'checkout',
		ecommerce: {
			checkout: {
				actionField: { step: 1, option: 'Visa' },
				products: CART
			}
		}
	});
}