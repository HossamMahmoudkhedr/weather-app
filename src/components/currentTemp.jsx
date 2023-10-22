import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { icons } from '../utils/icons';
import BluredBackground from '../utils/bluredBackground';
import SearchBar from './searchBar';

const CurrentTemp = ({ setLat, setLon, temperature, status, iconName }) => {
	const [cityName, setCityName] = useState('');

	return (
		<Stack
			direction="column"
			position="relative"
			borderRadius="1rem"
			height={'100%'}>
			<BluredBackground />
			<Box>
				<SearchBar
					setCityName={setCityName}
					setLat={setLat}
					setLon={setLon}
				/>
			</Box>
			<Stack
				alignItems="center"
				padding="1.2rem">
				<Stack
					direction="row"
					spacing={3}
					alignItems="center">
					<Box width={'140px'}>{icons[iconName]}</Box>
					<Box>
						<Typography
							variant="body1"
							fontSize="100px"
							fontWeight="700"
							lineHeight="1">
							{Math.floor(parseInt(temperature))}°C
						</Typography>
					</Box>
				</Stack>
				<Box
					alignSelf="center"
					textAlign="center">
					<Typography
						variant="body2"
						fontSize="28px">
						{cityName}
					</Typography>
					<Typography
						variant="caption"
						fontSize="16px">
						{status}
					</Typography>
				</Box>
			</Stack>
		</Stack>
	);
};

export default CurrentTemp;
