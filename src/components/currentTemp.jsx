import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as PartlyCloudy } from '../assets/icons/partly-cloudy.svg';
import BluredBackground from '../utils/bluredBackground';

const CurrentTemp = () => {
	return (
		<Stack
			direction="row"
			position="relative"
			borderRadius="1rem"
			justifyContent="center"
			alignItems="center"
			height={'100%'}>
			<BluredBackground />
			<Box padding="1.2rem">
				<Stack
					direction="row"
					spacing={3}
					alignItems="center">
					<Box>
						<PartlyCloudy
							width="140px"
							height="140px"
						/>
					</Box>
					<Box>
						<Typography
							variant="body1"
							fontSize="100px"
							fontWeight="700"
							lineHeight="1">
							20°C
						</Typography>
					</Box>
				</Stack>
				<Box
					alignSelf="center"
					textAlign="center">
					<Typography
						variant="body2"
						fontSize="28px">
						New York, USA
					</Typography>
					<Typography
						variant="caption"
						fontSize="16px">
						Partly cloudy
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};

export default CurrentTemp;
