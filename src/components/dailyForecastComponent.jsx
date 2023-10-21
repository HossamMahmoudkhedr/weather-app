import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ForecastHeader from '../utils/forecastHeader';
import { icons } from '../utils/icons';
import BluredBackground from '../utils/bluredBackground';
import HourForecast from '../utils/hourForecast';

const DailyForecastComponent = () => {
	return (
		<Stack
			position="relative"
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
				justifyContent={'space-between'}
				padding="3.7rem 2rem">
				<Stack spacing={1}>
					<Typography
						variant="body1"
						fontSize="1rem">
						Today
					</Typography>
					<HourForecast
						time="12/5"
						fs={'1rem'}
					/>
				</Stack>
				<Stack spacing={1}>
					<Typography
						variant="body1"
						fontSize="1rem">
						Today
					</Typography>
					<HourForecast
						time="12/5"
						fs={'1rem'}
					/>
				</Stack>
				<Stack spacing={1}>
					<Typography
						variant="body1"
						fontSize="1rem">
						Today
					</Typography>
					<HourForecast
						time="12/5"
						fs={'1rem'}
					/>
				</Stack>
				<Stack spacing={1}>
					<Typography
						variant="body1"
						fontSize="1rem">
						Today
					</Typography>
					<HourForecast
						time="12/5"
						fs={'1rem'}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default DailyForecastComponent;
