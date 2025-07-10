"use client"

import { system } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "@/components/ui/color-mode";

export function Provider({ children, ...props }: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}


