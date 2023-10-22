import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BluredBackground from '../utils/bluredBackground';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const StyledInput = styled.input`
	border-radius: 1rem;
	border: 2px solid #ffffff94;
	outline: none;
	padding: 0.5rem 1rem;
	background-color: transparent;
	transition: all 0.2s linear;
	&&::placeholder {
		color: #ffffff94;
	}

	&&:focus {
		border: 2px solid #fff;
	}
`;

const StyledDiv = styled.div`
	padding: 0.5rem 1rem;
	cursor: pointer;
	color: white;
	font-family: san-seirf;
	border-radius: 1rem;
	&:hover {
		background-color: #252525;
	}
`;
const SearchBar = ({ setLat, setLon, setCityName }) => {
	const [data, setData] = useState([]);
	const [city, setCity] = useState('');
	const [showList, setShowList] = useState(false);

	const handleInput = (e) => {
		setCity(e.target.value);
		if (e.target.value === '') {
			setShowList(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchFromAPI(`cities?namePrefix=${city}`).then((response) =>
			setData(response.data)
		);

		setShowList(true);
		console.log(data);
	};

	useEffect(() => {
		setLat(30.0444);
		setLon(31.2358);

		// setCityName('Cairo, EG');
	}, []);

	const handleClick = (e) => {
		let city = e.target.textContent;
		setCityName(city);
		let cityName = city.split(',')[0];

		const targetData = data.filter((item) => item.city === cityName);
		setLat(targetData[0].latitude);
		setLon(targetData[0].longitude);
		setShowList(false);
		setCity('');
	};
	return (
		<form
			onSubmit={handleSubmit}
			style={{ padding: '1rem' }}>
			<Stack
				position="relative"
				width="100%">
				<StyledInput
					onInput={handleInput}
					value={city}
					type="text"
					placeholder="Search with city name"
				/>
				{showList && (
					<Stack
						position="absolute"
						width="100%"
						left="0"
						top="105%"
						borderRadius="0.5rem"
						backgroundColor="#81818196"
						height="fit-content">
						<BluredBackground />
						<Stack
							padding="1rem 2rem"
							gap="1rem">
							{data.length > 0 &&
								data.map((city, idx) => {
									return (
										<StyledDiv
											key={idx}
											onClick={handleClick}>
											{city.city}, {city.countryCode}
										</StyledDiv>
									);
								})}
							{data.length === 0 && (
								<Typography
									variant="body2"
									textAlign="center">
									Nothing found, please enter a vaild city
								</Typography>
							)}
						</Stack>
					</Stack>
				)}
			</Stack>
		</form>
	);
};

export default SearchBar;
