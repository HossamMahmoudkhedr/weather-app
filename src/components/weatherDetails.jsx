import { Grid, Stack } from '@mui/material';
import React from 'react';
import DetailsContent from '../utils/detailsContent';
import { icons } from '../utils/icons';
const WeatherDetails = ({
	feelsLike,
	visibility,
	humidity,
	windDeg,
	windSpeed,
}) => {
	return (
		<Stack height="100%">
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={icons.temperature}
						header="Feels like"
						number={`${Math.floor(feelsLike)}°C`}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={icons.wind}
						header="Wind"
						number={`${windDeg}° | ${windSpeed} m/s`}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={icons.eye}
						header="Visibility"
						number={`${visibility / 1000} m`}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={icons.water}
						header="Humidity"
						number={`${humidity}%`}
					/>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default WeatherDetails;
