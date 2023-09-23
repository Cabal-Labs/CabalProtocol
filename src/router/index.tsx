// Routes.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import Login from "../pages/login";
import FeedPage from "../pages/feed";
import Header from "../components/header";

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
					path="/feed"
					element={
						<>
							<Header title={"Feed"} />
							<FeedPage />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
