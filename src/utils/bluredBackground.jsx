import React from 'react';
import styled from 'styled-components';

const StyledBack = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	backdrop-filter: blur(2px);
	border-radius: inherit;
	box-shadow: 0 0 18px -2px rgb(0 0 0 / 25%);
	z-index: -1;
`;

const BluredBackground = () => {
	return <StyledBack />;
};

export default BluredBackground;
