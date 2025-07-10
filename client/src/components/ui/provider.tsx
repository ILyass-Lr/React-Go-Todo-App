// src/components/ui/provider.tsx
// src/components/ui/provider.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { system } from "@/theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}


