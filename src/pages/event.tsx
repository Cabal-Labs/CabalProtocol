import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "./events";

export default function EventPage() {
	const { id } = useParams();
	let eventData;
	if (id) {
		// @ts-ignore
		eventData = data[id];
	} else {
		eventData = null;
	}
	if (!eventData) {
		return (
			<div className="page">
				<Text textStyle={"subTitle"}>Error fetching data</Text>
			</div>
		);
	} else {
		return (
			<div className="page">
				<div
					className="flex flex-col justify-start w-full h-full align-start"
					id={`event-${id}`}>
					<div id="header" className="w-full px-12 pt-20 bg-gray-800">
						<Text textStyle={"title"}>{eventData.title}</Text>
					</div>
				</div>
			</div>
		);
	}
}
