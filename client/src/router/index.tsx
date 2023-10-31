// Routes.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import Login from "../pages/login";
import Header from "../components/header";
import EventsPage from "../pages/events";
import EventPage from "../pages/event";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header title={"Home"} />
							<HomePage />
						</>
					}
				/>
				<Route
					path="/login"
					element={
						<>
							<Header title={"Login"} />
							<Login />
						</>
					}
				/>
				<Route
					path="/events"
					element={
						<>
							<Header title={"Events"} />
							<EventsPage />
						</>
					}
				/>
				<Route
					path="/events/:id"
					element={
						<>
							<Header title={"Event"} />
							<EventPage />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
