import axios from 'axios';

const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9bc60aca4dmsh266b3af491c2b5dp1040c9jsn037bf8803753',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios(`${BASE_URL}/${url}`, options);
	return data;
};

const API_KEY = '78330c9a1745579aadab079cbd0b99b1';
export const getWeather = async (lat, lon) => {
	const { data } = await axios(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	);
	return data;
};
