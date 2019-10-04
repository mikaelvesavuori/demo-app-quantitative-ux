export default function sendGtmProductImpression(product) {
	console.log('GTM: Product impression', product);

	window.dataLayer.push({
		event: 'impression',
		ecommerce: {
			currencyCode: 'EUR',
			impressions: [
				{
					name: product.name,
					id: product.id,
					price: product.price,
					brand: product.brand,
					category: product.category,
					variant: product.variant,
					quantity: product.quantity,
					position: product.position,
					list: product.list
				}
			]
		}
	});
}