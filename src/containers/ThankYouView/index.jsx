import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import View from 'containers/View';
import H1 from 'components/H1';
import Button from 'components/Button';

import sendGtmCheckoutFinal from 'functions/sendGtmCheckoutFinal';
import clearCart from 'functions/clearCart';

class ThankYouView extends React.Component {
	constructor(props) {
		super(props);
	}

	complete() {
		sendGtmCheckoutFinal();
		clearCart();
		window.location = "/";
	}

	render() {
		return (
			<View title="Demo application for quantitative UX strategies – Thank you!">
				<Helmet>
					<meta property="og:site_name" content="Demo application for quantitative UX strategies" />
					<meta property="og:title" content="Demo application for quantitative UX strategies — Thank you!" />
					<meta property="og:description" content="Demo application for quantitative UX strategies. Thank you for your purchase!" />
				</Helmet>
				<div>
					<H1>Thank You!</H1>
					<Button onClick={() => this.complete()}>Complete</Button>
				</div>
			</View>
		);
	}
}

export default withRouter(ThankYouView);