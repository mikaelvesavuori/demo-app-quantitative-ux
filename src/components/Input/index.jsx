import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = props => (
	<InputStyled>
		<label>{props.label}</label>
		<input type={props.type} />
	</InputStyled>
);

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

Input.defaultTypes = {};

export default Input;
