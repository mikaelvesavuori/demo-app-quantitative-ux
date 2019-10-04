import getCart from 'functions/getCart';
import storeCart from 'functions/storeCart';

export default function removeItemInCart(product) {
	const CART = getCart();
	const UPDATED_CART = [];

	// Products are already present in cart
	if (CART.length > 0) {
		// Look for match, if user is attempting to add a product that's already present in cart
		if (CART.find(cartItem => cartItem.name === product.name)) {

			// Update quantity if new quantity is non-zero
			for (let itemIndex = 0; itemIndex < CART.length; itemIndex++) {
				if (CART[itemIndex].name === product.name) {
					console.log(`Quantity of ${CART[itemIndex].name} is ${CART[itemIndex].quantity - 1}`);

					if (CART[itemIndex].quantity - 1 > 0) {
						CART[itemIndex].quantity -= 1;
						UPDATED_CART.push(CART[itemIndex]);
					}
					else if (CART[itemIndex].quantity - 1 <= 0) {
						console.log("Do not replace... we are at zero items");
					}
				} else UPDATED_CART.push(CART[itemIndex]);
			}
		}
	}

	storeCart(UPDATED_CART);
}
