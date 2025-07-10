import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Todo } from "./TodoList";

const TodoItem = ({ todo }: { todo: Todo }) => {
	const badge = todo.completed ? (
					<Badge  size='lg' colorPalette='green'>
						DONE
					</Badge>
				) : (
					<Badge  size='lg' colorPalette='yellow'>
						IN PROGRESS
					</Badge>
				);
	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
			  flex={1}
			  alignItems="center"
			  border="1px solid"
			  borderColor="border"
			  p={3}
			  borderRadius="lg"
			  justifyContent="space-between"
			>
				<Text
					color={todo.completed ? "green.300": "yellow.200"}
					textDecoration={todo.completed ? "line-through" : "none"}
					textStyle="lg"
					fontWeight="medium"
				>
					{todo.body}
				</Text>
				{badge}
				
			</Flex>
				<Box color={"green.500"} cursor={"pointer"}>
					<FaCheckCircle size={25} />
				</Box>
			<Flex gap={2} alignItems={"center"}>
				<Box color={"red.500"} cursor={"pointer"}>
					<MdDelete size={25} />
				</Box>
			</Flex>
		</Flex>
				
	);
};

export default TodoItem;
