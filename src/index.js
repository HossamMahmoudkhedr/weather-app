import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// console.log(fetchFromAPI('cities?minPopulation=1000000&namePrefix=benlared'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
