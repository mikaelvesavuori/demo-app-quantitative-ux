import styled from 'styled-components';

const IncentiveBoxStyled = styled.div`
	font-size: 3em;
	margin: 1em 0 0 0;
	padding: 0.5em;
	border: 2px solid hotpink;
	border-radius: 0.5em;
	color: hotpink;
	display: inline-block;

	.IncentiveBox img {
		width: 25%;
		height: auto;
		float: left;
		display: block;
	}

	.IncentiveBox-Text {
		width: 75%;
		text-align: right;
		float: right;
		display: block;
	}
`;

export default IncentiveBoxStyled;
