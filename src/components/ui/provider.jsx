"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider({ children, ...rest }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...rest}>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
