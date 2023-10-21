import { Box, Stack } from '@mui/material';
import React from 'react';
import { ReactComponent as Wind } from '../assets/icons/wind-solid.svg';
const WindStatus = () => {
	return (
		<Stack spacing={1}>
			<Stack
				direction="row"
				spacing={1}>
				<span>
					<Wind />
				</span>
			</Stack>
		</Stack>
	);
};

export default WindStatus;
