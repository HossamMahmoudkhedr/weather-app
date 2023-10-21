import { Stack, Typography } from '@mui/material';
import React from 'react';
const ForecastHeader = ({ icon, text }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			spacing={2}
			borderBottom="1px solid gray"
			padding="1rem  0 1rem 0 ">
			<span>{icon}</span>
			<Typography variant="body1">{text}</Typography>
		</Stack>
	);
};

export default ForecastHeader;
