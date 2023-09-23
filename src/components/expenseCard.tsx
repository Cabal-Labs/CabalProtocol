import { Text } from "@chakra-ui/react";
import { IExpense } from "../pages/events";

export default function ExpenseCard({
	title,
	amount,
	requester,
	id,
	date,
}: IExpense) {
	return (
		<div id={`expense-card-${id}`}>
			<div className="flex flex-row justify-between">
				<div id="expense-content">
					<Text textStyle={"subTitle"}>
						{amount} {title}
					</Text>
					<Text textStyle={"label"}>
						{requester} | {date}
					</Text>
				</div>
			</div>
		</div>
	);
}
