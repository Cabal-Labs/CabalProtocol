import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface HeaderProps {
	title: string;
}
export default function Header({ title }: HeaderProps) {
	return (
		<div className="w-full overflow-hidden">
			<Box
				bgColor={"green.900"}
				className={
					"flex flex-row justify-between align-bottom px-8 py-2 w-full"
				}>
				<Text textStyle={"title"} color={"green.200"}>
					{title}
				</Text>
				<nav className={"flex flex-row gap-2 align-bottom"}>
					<Link to="/" className="flex flex-col justify-end">
						<Text textStyle={"link"} fontSize={"xl"}>
							Home
						</Text>
					</Link>
					<Link to="/login" className="flex flex-col justify-end">
						<Text textStyle={"link"} fontSize={"xl"}>
							Login
						</Text>
					</Link>
					<Link to="/feed" className="flex flex-col justify-end">
						<Text textStyle={"link"} fontSize={"xl"}>
							Feed
						</Text>
					</Link>
				</nav>
			</Box>
		</div>
	);
}
