import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import WeatherStatus from './weatherStatus';

const Forecast = ({ time, max, min, iconName }) => {
	return (
		<Stack spacing={1}>
			<Box textAlign="center">
				<Typography
					variant="caption"
					fontSize="1.3rem">
					{time}
				</Typography>
			</Box>
			<WeatherStatus
				max={max}
				min={min}
				iconName={iconName}
			/>
		</Stack>
	);
};

export default Forecast;
