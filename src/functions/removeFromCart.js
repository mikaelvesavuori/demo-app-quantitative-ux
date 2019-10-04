import sendGtmProductRemove from 'functions/sendGtmProductRemove';
import removeItemInCart from 'functions/removeItemInCart';

export default function removeFromCart(product) {
	removeItemInCart(product);
	sendGtmProductRemove(product);
}