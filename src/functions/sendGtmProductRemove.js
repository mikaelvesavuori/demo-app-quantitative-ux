export default function sendGtmProductRemove(product) {
	console.log('GTM: Product remove from cart', product);

	window.dataLayer.push({
		event: 'removeFromCart',
		ecommerce: {
			currencyCode: 'EUR',
			remove: {
				products: [{
					name: product.name,
					id: product.id,
					price: product.price,
					brand: product.brand,
					category: product.category,
					variant: product.variant,
					quantity: product.quantity
				}]
			}
		}
	})
};