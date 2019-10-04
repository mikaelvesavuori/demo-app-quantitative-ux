export default function sendGtmProductAdd(product) {
	console.log('GTM: Product add to cart', product);

	window.dataLayer.push({
		event: 'addToCart',
		ecommerce: {
			currencyCode: 'EUR',
			add: {
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