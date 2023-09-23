import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EventCard from "../components/eventCard";
export interface IEvent {
	id: number;
	title: string;
	startDate: string;
	endDate: string;
	url: string;
}
export const data: IEvent[] = [
	{
		id: 1,
		title: "ETH  NYC 2023",
		startDate: "2023-11-11",
		endDate: "2023-11-11",
		url: "https://ethglobal.com/ETHNYC",
	},
	{
		id: 1,
		title: "ETH  NYC 2023",
		startDate: "2023-11-11",
		endDate: "2023-11-11",
		url: "https://ethglobal.com/ETHNYC",
	},
];
// const fetchPosts = async () => {
// 	return {
// 		isLoading: false,
// 		isError: false,
// 		data,
// 	};
// };
export default function EventsPage() {
	// const { data, isLoading, isError } = useQuery("posts", fetchPosts);

	// if (isLoading)
	// 	return (
	// 		<div className="page">
	// 			<Text textStyle={"subTitle"}>Loading...</Text>
	// 		</div>
	// 	);
	// if (isError)
	// 	return (
	// 		<div className="page">
	// 			<Text textStyle={"subTitle"}>Error fetching data</Text>
	// 		</div>
	// 	);
	return (
		<div className="page">
			<div
				id="event-container"
				className="flex flex-col justify-start w-full h-full p-12 align-start w-max-2xl">
				<Text textStyle={"title"} className="pb-8">
					Upcoming Events
				</Text>
				<ul className="flex flex-row flex-wrap w-full gap-6">
					{data.map((event) => (
						<li key={event.id}>
							<EventCard {...event} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
