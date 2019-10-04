import React from 'react';
import PropTypes from 'prop-types';

import CheckoutProductStyled from './CheckoutProductStyled';

const CheckoutProduct = props => {
	console.log(props.product.name);
	return (
		<CheckoutProductStyled>
			{props.product.name} – {props.product.quantity}
			<div className="CheckoutProduct-Buttons">
				<button onClick={() => props.addToCart(props.product)}>Add</button>
				<button onClick={() => props.removeFromCart(props.product)}>Remove</button>
			</div>
		</CheckoutProductStyled>
	)
};

CheckoutProduct.propTypes = {
	product: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired
};

CheckoutProduct.defaultTypes = {};

export default CheckoutProduct;
