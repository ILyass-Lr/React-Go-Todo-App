import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";
import { BASE_URL } from "@/App";
const TodoForm = () => {
	const [newTodo, setNewTodo] = useState("");
	const [isPending, setIsPending]= useState(false);
	const queryClient = useQueryClient();	
		const {mutate: createTodo, isPending: isCreating} = useMutation({
			// mutationKey: ['createTodo'],
			mutationFn : async (e: React.FormEvent) => {
				e.preventDefault();
				if (!newTodo.trim()){
					alert("Todo body cannot be empty");
					return;
				}
				
				const res = await fetch (`${BASE_URL}/api/todos/`, {
					method : "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({body: newTodo }),
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Failed to create todo");
				}

				setNewTodo("");
				return data;

			},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
		onError: (error: any) => {
			alert(error.message);
		}


		});

	return (
		<form onSubmit={createTodo}>
			<Flex gap={2}>
				<Input
					type='text'
					p={6}
					border="1px solid"
					borderColor="border"
					placeholder="Add a new task"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					ref={(input) => input && input.focus()}
				/>
				<Button
					mx={2}
					p={6}
					backgroundColor="button"
					color="buttonContent"
					type='submit'
					_active={{
						transform: "scale(.97)",
					}}
				>
					{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
				</Button>
			</Flex>
		</form>
	);
};

export default TodoForm;
