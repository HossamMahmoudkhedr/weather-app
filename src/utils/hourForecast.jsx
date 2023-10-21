import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import WeatherStatus from './weatherStatus';

const HourForecast = ({ time, fs }) => {
	return (
		<Stack spacing={1}>
			<Box textAlign="center">
				<Typography
					variant="caption"
					fontSize={fs}>
					{time}
				</Typography>
			</Box>
			<WeatherStatus />
		</Stack>
	);
};

export default HourForecast;
