import { Box, Text } from "@chakra-ui/react";
export default function HomePage() {
	return (
		<div className="page">
			<Box bg="green.900" w={"100%"} maxW={800} className="p-6 rounded-lg">
				<Text textStyle={"title"}>Hello</Text>
			</Box>
		</div>
	);
}
