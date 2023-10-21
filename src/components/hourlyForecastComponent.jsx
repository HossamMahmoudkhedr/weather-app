import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as Clock } from '../assets/icons/clock-regular.svg';
import HourForecast from '../utils/hourForecast';
import BluredBackground from '../utils/bluredBackground';
import ForecastHeader from '../utils/forecastHeader';
import { icons } from '../utils/icons';
const HourlyForecastComponent = () => {
	return (
		<Stack
			padding={'0rem 1rem'}
			borderRadius="1rem"
			backgroundColor="#ffffff14"
			position="relative">
			<BluredBackground />
			<ForecastHeader
				icon={icons.clock}
				text={'Hourly Forecast'}
			/>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				padding="4.5rem 3rem">
				<HourForecast
					time="Now"
					fs={'1.3rem'}
				/>
				<HourForecast
					time="10:00"
					fs={'1.3rem'}
				/>
				<HourForecast
					time="11:00"
					fs={'1.3rem'}
				/>
				<HourForecast
					time="12:00"
					fs={'1.3rem'}
				/>
				<HourForecast
					time="13:00"
					fs={'1.3rem'}
				/>
			</Stack>
		</Stack>
	);
};

export default HourlyForecastComponent;
