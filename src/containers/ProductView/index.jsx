import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import View from 'containers/View';
import Product from 'components/Product';
import Button from 'components/Button';
import H1 from 'components/H1';
import Paragraph from 'components/Paragraph';
import IncentiveBox from 'components/IncentiveBox';

import getIncentive from 'functions/getIncentive';
import getCurrentViewCount from 'functions/getCurrentViewCount';
import setUpdatedIncentive from 'functions/setUpdatedIncentive';
import setUpdatedViewCount from 'functions/setUpdatedViewCount';
import sendGtmProductImpression from 'functions/sendGtmProductImpression';
import sendGtmCheckoutBegin from 'functions/sendGtmCheckoutBegin';
import addToCart from 'functions/addToCart';
import setupSplitIo from 'functions/setupSplitIo';

import { IF_EXTRAS_ENABLED, MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE } from 'configuration/config';
import { PRODUCTS } from 'configuration/products';

class ProductView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			incentive: '',
			displayPurchaseIncentive: false,
			hasEvaluated: false,
			splitIoReady: false
		}
	}

	componentDidMount() {
		this.setupView();
	}

	async setupView() {
		// Send GTM product impression for the car
		sendGtmProductImpression(PRODUCTS[0]);

		const SPLIT_IO_READY = await setupSplitIo().then(splitIoReady => {
			this.setState(prevState => ({
				...prevState,
				splitIoReady
			}));

			this.evaluateIncentive();
		});
	}

	evaluateIncentive() {
		let treatment = window.splitio.getTreatment('display_purchase_incentive');
		console.log('Are extras enabled?', IF_EXTRAS_ENABLED);

		const INCENTIVE = getIncentive();
		const VIEW_COUNT = getCurrentViewCount();

		// Check whether to display incentives or not
		const DISPLAY_PURCHASE_INCENTIVE = (() => {
			if (treatment !== 'off' && VIEW_COUNT > MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE) {
				return true;
			}
			else {
				return false;
			}
		})();

		// GTM product impression in case we are also seeing the fuzzy dice feature
		if (IF_EXTRAS_ENABLED) {
			sendGtmProductImpression(PRODUCTS[1]);
		}

		this.setState(prevState => ({
			...prevState,
			incentive: INCENTIVE,
			displayPurchaseIncentive: DISPLAY_PURCHASE_INCENTIVE,
			hasEvaluated: true
		}));
	}

	checkout() {
		sendGtmCheckoutBegin();
		window.location = '/checkout';
	}

	render() {
		return (
			<View title="Demo application for quantitative UX strategies – Product">
				<Helmet>
					<meta property="og:site_name" content="Demo application for quantitative UX strategies" />
					<meta property="og:title" content="Demo application for quantitative UX strategies — Product" />
					<meta property="og:description" content="Demo application for quantitative UX strategies. Product description." />
				</Helmet>
			{this.state.splitIoReady ? (
				<div>
					<H1>Products</H1>
					<Paragraph>
						<Product product={PRODUCTS[0]} image={"/assets/img/lambo.jpg"} onClick={() => addToCart(PRODUCTS[0])} />
						{IF_EXTRAS_ENABLED ? (
							<div>
								<img src="/assets/img/fuzzydice.jpg" />
								<Button onClick={() => addToCart(PRODUCTS[1])}>Buy Fuzzy Dice</Button>
							</div>
						) : (
							''
						)}

						{this.state.displayPurchaseIncentive ? <IncentiveBox incentive={this.state.incentive} /> : ""}
					</Paragraph>
					<Button onClick={(e) => this.checkout(e)}>Go to Checkout</Button>
				</div>
				) : <div>Loading...</div>
			}
			</View>
		);
	}
}

export default withRouter(ProductView);