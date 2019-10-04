export default function storeCart(updatedCart) {
	window.localStorage.setItem('cart', JSON.stringify(updatedCart));
}