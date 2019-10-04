import getCart from 'functions/getCart';
import storeCart from 'functions/storeCart';

export default function setItemInCart(product) {
	const CART = getCart();
	const UPDATED_CART = [];

	// Products are already present in cart
	if (CART.length > 0) {
		// Look for match, if user is attempting to add a product that's already present in cart
		if (CART.find(cartItem => cartItem.name === product.name)) {
			// Update quantity rather than erasing/adding
			for (let itemIndex = 0; itemIndex < CART.length; itemIndex++) {
				console.log(`Quantity of ${CART[itemIndex].name} is ${CART[itemIndex].quantity + 1}`);
				CART[itemIndex].quantity += 1;
				UPDATED_CART.push(CART[itemIndex]);
			}
		}
		else {
			// Re-add all previous products
			for (let itemIndex = 0; itemIndex < CART.length; itemIndex++) {
				UPDATED_CART.push(CART[itemIndex]);
			}

			// And add new product
			UPDATED_CART.push(product);
		}
	} else {
		console.log('Setting first product');
		UPDATED_CART.push(product);
	}

	storeCart(UPDATED_CART);
}