import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import View from 'containers/View';
import H1 from 'components/H1';
import Paragraph from 'components/Paragraph';
import Checkout from 'components/Checkout';
import CheckoutForm from 'components/CheckoutForm';
import CheckoutProduct from 'components/CheckoutProduct';
import Button from 'components/Button';
import Input from 'components/Input';

import addToCart from 'functions/addToCart';
import removeFromCart from 'functions/removeFromCart';
import getCart from 'functions/getCart';
import sendGtmProductPurchase from 'functions/sendGtmProductPurchase';

class CheckoutView extends React.Component {
	constructor(props) {
		super(props);

		const cart = getCart();

		this.state = {
			cart
		}
	}

	componentDidMount() {
		const cart = JSON.parse(window.localStorage.getItem('cart'));

		this.setState({
			cart
		});
	}

	submit() {
		sendGtmProductPurchase();
		window.location = '/thankyou';
	}

	abandon() {
		window.location = '/product';
	}

	render() {
		const checkoutProducts = this.state.cart.map((product, index) => <CheckoutProduct product={product} addToCart={(e) => addToCart(e)} removeFromCart={(e) => removeFromCart(e)} key={`CheckoutProduct_${index}`} />);

		return (
			<View title="Demo application for quantitative UX strategies – Checkout">
				<Helmet>
					<meta property="og:site_name" content="Demo application for quantitative UX strategies" />
					<meta property="og:title" content="Demo application for quantitative UX strategies — Checkout" />
					<meta property="og:description" content="Demo application for quantitative UX strategies. Checkout process." />
				</Helmet>
				<div>
					<Checkout>
					<H1>Checkout</H1>
						{checkoutProducts}
						<CheckoutForm autocomplete>
							<Input label="Name" type="name" />
							<Input label="Address Line 1" type="address" />
							<Input label="Phone" type="tel" />
							<Input label="Email" type="email" />
						</CheckoutForm>
						<Button onClick={() => this.submit()}>Submit</Button>
						<Button onClick={() => this.abandon()}>Abandon checkout</Button>
					</Checkout>
				</div>
			</View>
		);
	}
}

export default withRouter(CheckoutView);