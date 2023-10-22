import { Stack } from '@mui/material';
import React from 'react';
import ForecastHeader from '../utils/forecastHeader';
import { icons } from '../utils/icons';
import BluredBackground from '../utils/bluredBackground';
import Forecast from '../utils/Forecast';

const DailyForecastComponent = ({ forecast }) => {
	const WEEK_DAYS = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	let dailyForecast = [];
	if (forecast && forecast.list) {
		let today = new Date().getDate();
		dailyForecast = forecast.list.filter((item) => {
			let dayNumber = parseInt(item.dt_txt.split(' ')[0].split('-')[2]);
			if (dayNumber > today) {
				today = dayNumber;
				return item;
			}
		});
	}

	return (
		<Stack
			position="relative"
			height="100%"
			padding="0rem 1rem"
			borderRadius="1rem"
			backgroundColor="#ffffff14">
			<BluredBackground />
			<ForecastHeader
				text={'Daily ForeCast'}
				icon={icons.calendar}
			/>
			<Stack
				direction="row"
				sx={{ overflowX: { xs: 'scroll', md: 'unset' } }}
				justifyContent={'space-between'}
				gap={{ xs: '2rem', lg: 'unset' }}
				padding="3.7rem 2rem">
				{dailyForecast.map((item) => (
					<Forecast
						time={WEEK_DAYS[new Date(item.dt_txt.split(' ')[0]).getDay()]}
						max={item?.main?.temp_max}
						iconName={item?.weather[0]?.icon}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default DailyForecastComponent;
