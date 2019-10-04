import sendGtmProductAdd from 'functions/sendGtmProductAdd';
import setItemInCart from 'functions/setItemInCart';

export default function addToCart(product) {
	setItemInCart(product);
	sendGtmProductAdd(product);
}