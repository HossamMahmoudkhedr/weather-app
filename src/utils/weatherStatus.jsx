import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { icons } from './icons';

const WeatherStatus = ({ max, iconName }) => {
	return (
		<Stack
			spacing={2}
			alignItems="center">
			<Box>
				<Typography
					variant="body2"
					fontSize="1.2rem">
					{Math.floor(max)}°C
				</Typography>
			</Box>
			<Box
				width={'45px'}
				height={'45px'}>
				{icons[iconName]}
			</Box>
		</Stack>
	);
};

export default WeatherStatus;
