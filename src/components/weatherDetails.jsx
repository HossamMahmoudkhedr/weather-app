import { Grid, Stack } from '@mui/material';
import React from 'react';
import DetailsContent from '../utils/detailsContent';
import { ReactComponent as Temperature } from '../assets/icons/temperature-half-solid.svg';
import { ReactComponent as Rain } from '../assets/icons/noun-rainfall-217514.svg';
import { ReactComponent as Eye } from '../assets/icons/eye-solid.svg';
import { ReactComponent as Drops } from '../assets/icons/noun-water-6191907.svg';
const WeatherDetails = ({ feelsLike, visibility, humidity }) => {
	return (
		<Stack height="100%">
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={
							<Temperature
								width="1.5rem"
								height="1.5rem"
								fill="white"
							/>
						}
						header="Feels like"
						number={`${Math.floor(feelsLike)}°C`}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={
							<Rain
								width="2rem"
								height="2rem"
								fill="white"
							/>
						}
						header="Precipitation"
						number='5.4"'
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={
							<Eye
								width="1.5rem"
								height="1.5rem"
								fill="white"
							/>
						}
						header="Visibility"
						number={`${visibility / 1000} m`}
					/>
				</Grid>
				<Grid
					item
					xs={6}>
					<DetailsContent
						icon={
							<Drops
								width="1.5rem"
								height="1.5rem"
								fill="white"
							/>
						}
						header="Humidity"
						number={`${humidity}%`}
					/>
				</Grid>
			</Grid>
		</Stack>
	);
};

export default WeatherDetails;
