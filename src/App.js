import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import RootLayout from './pages/rootLayout';
import Home from './components/home';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<Home />}
			/>
		</Route>
	)
);
function App() {
	return (
		<>
			<div className="black"></div>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
