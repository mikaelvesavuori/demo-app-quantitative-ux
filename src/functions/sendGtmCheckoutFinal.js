import getCart from 'functions/getCart';

export default function sendGtmCheckoutFinal() {
	const CART = getCart();
	console.log('GTM checkout event (final, step 2)');

	window.dataLayer.push({
		event: 'checkout',
		ecommerce: {
			checkout: {
				actionField: { step: 2, option: 'Visa' },
				products: CART
			}
		}
	});
}