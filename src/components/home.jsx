import React, { useEffect, useState } from 'react';
import CurrentTemp from './currentTemp';
import { Grid, Stack } from '@mui/material';
import WeatherDetails from './weatherDetails';
import HourlyForecastComponent from './hourlyForecastComponent';
import DailyForecastComponent from './dailyForecastComponent';
import { getWeather } from '../utils/fetchFromAPI';
import styled from 'styled-components';
const StyledBackground = styled.img`
	position: absolute;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: -2;
	width: 100%;
	height: 100%;
	transition: all 0.3s linear;
`;
const Home = () => {
	const [lat, setLat] = useState(30.0444);
	const [lon, setLon] = useState(31.2358);
	const [data, setData] = useState({});
	const [forecast, setforecast] = useState({});
	useEffect(() => {
		if ((lat !== '') & (lon !== '')) {
			getWeather(lat, lon, 'weather')
				.then((response) => setData(response))
				.catch((error) => console.log(error));
			getWeather(lat, lon, 'forecast')
				.then((response) => {
					setforecast(response);
					console.log(response);
				})
				.catch((error) => console.log(error));
		}
	}, [lat, lon]);

	console.log(data);

	return (
		<div
			className="home"
			style={{ padding: '2rem' }}>
			<StyledBackground
				src={
					data.weather &&
					data.weather[0] &&
					data.weather[0].icon &&
					require(`../assets/images/${data.weather[0].icon}.jpg`)
				}
			/>
			<Grid
				container
				spacing={2}>
				<Grid
					item
					xs={12}
					lg={7}>
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
					xs={12}
					lg={5}>
					<WeatherDetails
						feelsLike={data?.main?.feels_like}
						visibility={data?.visibility}
						humidity={data?.main?.humidity}
						windDeg={data?.wind?.deg}
						windSpeed={data?.wind?.speed}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					lg={7}>
					<HourlyForecastComponent forecast={forecast} />
				</Grid>
				<Grid
					item
					xs={12}
					lg={5}>
					<Stack
						height="100%"
						spacing={2}>
						<DailyForecastComponent forecast={forecast} />
					</Stack>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
