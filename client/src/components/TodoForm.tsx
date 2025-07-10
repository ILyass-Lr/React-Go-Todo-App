import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoMdAdd } from "react-icons/io";
import { BASE_URL } from "@/App";
const TodoForm = () => {
	const queryClient = useQueryClient();	
	const [newTodo, setNewTodo] = useState("")
	const inputRef = useRef<HTMLInputElement>(null);
	// Focus the input on component mount
	useEffect(() => {
		if (inputRef.current) {
		    inputRef.current.focus();
		}
	}, []); // Empty dependency array means this runs once after the initial render
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
					ref={inputRef}
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
					{isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={"md"} />}
				</Button>
			</Flex>
		</form>
	);
};

export default TodoForm;
