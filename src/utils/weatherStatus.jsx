import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as RainyCloud } from '../assets/icons/rainy-cloud.svg';
const WeatherStatus = () => {
	return (
		<Stack
			spacing={2}
			alignItems="center">
			<Box>
				<Typography
					variant="body2"
					fontSize="1.2rem">
					28°C
				</Typography>
			</Box>
			<Box>
				<RainyCloud
					width="30px"
					height="30px"
				/>
			</Box>
		</Stack>
	);
};

export default WeatherStatus;
