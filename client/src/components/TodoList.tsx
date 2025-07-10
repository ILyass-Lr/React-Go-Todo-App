import { Flex, Spinner, Stack, Text, Button } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from "@/App";

export type Todo = {
	_id      : string;
	body     : string;
	completed: boolean;
};

const TodoList = () => {
	const {
	  data: todos, 
	  isLoading,
	  isError,
	  refetch,
	} = useQuery<Todo[]>({
		queryKey: ["todos"],
		queryFn: async () => {
				const res = await fetch(`${BASE_URL}/api/todos`)
				if (!res.ok){
					throw new Error("Failed to fetch todos");
				}
				return res.json();
	},
	retry: false, // Disable automatic retires for better UX control
	});
	if (isLoading) {
	    return (
	      <Flex justifyContent="center" my={10}>
		<Spinner size="xl" />
		<Text ml={3}>Loading tasks...</Text>
	      </Flex>
	    );
  	}
	if (isError) {
	    return (
	      <Stack alignItems="center" gap={3} my={5}>
		<Text color="red.500" fontWeight="bold">
		  Failed to load tasks. Check your internet connection or try again.
		</Text>
		<Button colorScheme="blue" onClick={() => refetch()}>
		  Retry
		</Button>
	      </Stack>
	    );
	}
	return (
		<>
			<Text
			  fontSize="4xl"
			  textTransform="uppercase"
			  fontWeight="bold"
			  textAlign="center"
			  my={2}
			  bgGradient="to-l" 
			  gradientFrom="#0b85f8"
		          gradientTo="#00ffff"
			  bgClip="text"
			>
			  Today's Tasks
			</Text>

      {todos?.length === 0 ? (
        <Stack alignItems="center" gap={3} my={5}>
          <Text fontSize="xl" textAlign="center" color="gray.500">
            All tasks completed! 🤞
          </Text>
          <img src="/go.png" alt="Go logo" width={70} height={70} />
        </Stack>
      ) : (
        <Stack gap={3}>
          {todos?.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </Stack>
      )}
    </>
  );
};
export default TodoList;
