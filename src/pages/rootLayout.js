import React from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<div className="root-layout">
			<header></header>
			<Outlet />
		</div>
	);
};

export default RootLayout;
