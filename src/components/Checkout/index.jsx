import React from 'react';
import PropTypes from 'prop-types';

import CheckoutStyled from './CheckoutStyled';

const Checkout = props => (
	<CheckoutStyled>
		{props.children}
	</CheckoutStyled>
);

Checkout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
};

Checkout.defaultTypes = {};

export default Checkout;
