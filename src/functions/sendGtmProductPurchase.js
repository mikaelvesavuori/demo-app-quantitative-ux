import getCart from 'functions/getCart';

export default function sendGtmProductPurchase() {
	const CART = getCart();

	window.dataLayer.push({
		event: 'purchase',
		ecommerce: {
			currencyCode: 'EUR',
			purchase: {
				actionField: {
					id: "1230981407",
					affiliation: 'Online Store',
					revenue: '35.43',
					tax:'4.90',
					shipping: '5.99',
					coupon: 'SUMMER_SALE'
				},
				products: CART
			}
		}
	})
}