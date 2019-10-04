import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const ProductView = Loadable({
	loader: () => import('containers/ProductView'),
	loading: () => <div>Loading...</div>
});

const CheckoutView = Loadable({
	loader: () => import('containers/CheckoutView'),
	loading: () => <div>Loading...</div>
});

const ThankYouView = Loadable({
	loader: () => import('containers/ThankYouView'),
	loading: () => <div>Loading...</div>
});

const Routes = props => (
	<Switch>
		<Route exact path="/product" render={() => <ProductView title="Product" />} />
		<Route exact path="/checkout" render={() => <CheckoutView title="Checkout" />} />
		<Route exact path="/thankyou" render={() => <ThankYouView title="Thank You!" />} />
		<Route render={() => <Redirect to="/product" />} />
	</Switch>
);

export default withRouter(Routes);
