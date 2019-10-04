import React from 'react';
import PropTypes from 'prop-types';

import IncentiveBoxStyled from './IncentiveBoxStyled';

const IncentiveBox = props =>
<IncentiveBoxStyled {...props}>
	{props.incentive === 'incentive_1' ? (
	<div className="IncentiveBox">
		<div className="IncentiveBox-Text">Best quality! No compromises... This will change everything!!!</div>
	</div>
	) : ""}
	{props.incentive === 'incentive_2' ? (
	<div className="IncentiveBox">
		<div className="IncentiveBox-Text">It's literally a golden Lambo... Mate's rates for you!</div>
	</div>
	) : ""}
</IncentiveBoxStyled>;

IncentiveBox.propTypes = {
	incentive: PropTypes.string
};

export default IncentiveBox;