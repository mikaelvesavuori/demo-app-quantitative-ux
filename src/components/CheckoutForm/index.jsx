import React from 'react';
import PropTypes from 'prop-types';

import CheckoutFormStyled from './CheckoutFormStyled';

const CheckoutForm = props => (
	<CheckoutFormStyled autocomplete={props.autocomplete}>
		{props.children}
	</CheckoutFormStyled>
);

CheckoutForm.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
	autocomplete: PropTypes.bool
};

CheckoutForm.defaultTypes = {
	autocomplete: false
};

export default CheckoutForm;
