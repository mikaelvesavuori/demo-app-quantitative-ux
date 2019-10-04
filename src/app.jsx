import React from 'react';
import { withRouter } from 'react-router-dom';

import Routes from 'routes';

console.log('process.env.BRANCH', process.env.BRANCH);

const App = props => <Routes />;

export default withRouter(App);
