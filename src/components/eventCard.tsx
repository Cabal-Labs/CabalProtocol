import { Box, Text } from "@chakra-ui/react";
import { IEvent } from "../pages/events";
import { Link } from "react-router-dom";

export default function EventCard({
	id,
	title,
	startDate,
	endDate,
	url,
}: IEvent) {
	return (
		<Link to={`/events/${id}`}>
			<Box
				key={id}
				bg={"green.800"}
				width={"lg"}
				h={300}
				className="flex flex-col w-min-xl">
				<a href={url} className="p-4 ml-auto ">
					<Text textStyle={"link"}>Hackathon Link</Text>
				</a>
				<Box className="mt-auto">
					<Text textStyle={"label"} className="p-3">
						{startDate} - {endDate}
					</Text>
				</Box>
				<Box bg="green.900" className="p-4">
					<Text textStyle={"subTitle"}>{title}</Text>
				</Box>
			</Box>
		</Link>
	);
}
