import { Stack } from '@mui/material';
import React from 'react';
import BluredBackground from '../utils/bluredBackground';
import ForecastHeader from '../utils/forecastHeader';
import { icons } from '../utils/icons';
import Forecast from '../utils/Forecast';

const HourlyForecastComponent = ({ forecast }) => {
	let hourlyForecast = [];
	if (forecast && forecast.list) {
		hourlyForecast = forecast.list.slice(0, 4);
	}
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
				{hourlyForecast.map((item) => (
					<Forecast
						time={item?.dt_txt.split(' ')[1].substr(0, 5)}
						max={item?.main?.temp_max}
						iconName={item?.weather[0]?.icon}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default HourlyForecastComponent;
