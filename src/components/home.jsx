import React from 'react';
import CurrentTemp from './currentTemp';
import { Grid } from '@mui/material';
import WeatherDetails from './weatherDetails';

const Home = () => {
	return (
		<div
			className="home"
			style={{ padding: '2rem' }}>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={6}>
					<CurrentTemp />
				</Grid>
				<Grid
					item
					xs={6}>
					<WeatherDetails />
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
