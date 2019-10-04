import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import ProductStyled from './ProductStyled';

const Product = props =>
<ProductStyled {...props}>
	<div className="Product">
		<img src={props.image}></img>
		<Button onClick={() => props.onClick}>Buy Golden Lambo</Button>
	</div>
</ProductStyled>;

Product.propTypes = {
	product: PropTypes.object,
	image: PropTypes.string,
	onClick: PropTypes.func
};

export default Product;