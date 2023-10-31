import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
	const navigator = useNavigate();
	function handleConnect() {
		navigator("/events");
	}
	return (
		<div className="page">
			<Box bg="green.900" w={"100%"} maxW={800} className="p-6 rounded-lg">
				<Text textStyle={"title"}>Welcome to Cabal Labs</Text>
				<Text textStyle={"subTitle"}>Welcome to Cabal Labs</Text>
				<Button onClick={() => handleConnect()}>Connect a Wallet</Button>
			</Box>
		</div>
	);
}
