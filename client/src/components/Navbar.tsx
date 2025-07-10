"use client";

import { Box, Flex, Button, Text, Container } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Container maxW="900px">
			<Box
				bg="navbar" // You can replace this with `bg='background'` if you have a custom token
				px={4}
				my={4}
				borderRadius="md"
			>
				<Flex h={16} alignItems="center" justifyContent="space-between">
					{/* LEFT SIDE */}
					<Flex
						justifyContent="center"
						alignItems="center"
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<img src="/react.png" alt="React" width={50} height={50} />
						<Text fontSize={40}>+</Text>
						<img src="/go.png" alt="Go" width={40} height={40} />
						<Text fontSize={40}>=</Text>
						<img src="/explode.png" alt="Boom" width={50} height={50} />
					</Flex>

					{/* RIGHT SIDE */}
					<Flex alignItems="center" gap={3}>
						<Text fontSize="lg" fontWeight={500}>
							Daily Tasks
						</Text>
						<Button
							backgroundColor="button"
							color="buttonContent"
							onClick={() =>
								setTheme(resolvedTheme === "dark" ? "light" : "dark")
							}
						>
							{resolvedTheme === "dark" ? <LuSun /> : <IoMoon />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}

