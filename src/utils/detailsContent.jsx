import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import BluredBackground from './bluredBackground';

const DetailsContent = ({ icon, header, number }) => {
	return (
		<Stack
			borderRadius="1rem"
			position="relative"
			height="100%"
			backgroundColor="#ffffff14">
			<BluredBackground />
			<Stack
				direction="row"
				alignItems="center"
				padding="1rem"
				spacing={1}>
				{icon}
				<Typography
					variant="caption"
					fontSize="1.3rem">
					{header}
				</Typography>
			</Stack>
			<Stack
				justifyContent="center"
				alignItems="center"
				paddingBottom="2rem">
				<Typography
					variant="h4"
					fontSize="50px">
					{number}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default DetailsContent;
