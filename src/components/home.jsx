import React, { useEffect, useState } from 'react';
import CurrentTemp from './currentTemp';
import { Grid, Stack } from '@mui/material';
import WeatherDetails from './weatherDetails';
import HourlyForecastComponent from './hourlyForecastComponent';
import DailyForecastComponent from './dailyForecastComponent';
import { getWeather } from '../utils/fetchFromAPI';

const Home = () => {
	const [lat, setLat] = useState(30.0444);
	const [lon, setLon] = useState(31.2358);
	const [data, setData] = useState({});
	useEffect(() => {
		if ((lat !== '') & (lon !== '')) {
			getWeather(lat, lon).then((response) => setData(response));
		}
	}, [lat, lon]);
	console.log(data);

	return (
		<div
			className="home"
			style={{ padding: '2rem' }}>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={7}>
					<CurrentTemp
						setLat={setLat}
						setLon={setLon}
						temperature={data?.main?.temp}
						status={
							data.weather && data.weather[0] && data.weather[0].description
						}
						iconName={data.weather && data.weather[0] && data.weather[0].icon}
					/>
				</Grid>
				<Grid
					item
					xs={5}>
					<WeatherDetails
						feelsLike={data?.main?.feels_like}
						visibility={data?.visibility}
						humidity={data?.main?.humidity}
					/>
				</Grid>
				<Grid
					item
					xs={7}>
					<HourlyForecastComponent />
				</Grid>
				<Grid
					item
					xs={5}>
					<Stack spacing={2}>
						{/* <DetailsContent
							header={'wind'}
							icon={icons.wind}
						/> */}
						<DailyForecastComponent />
					</Stack>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
