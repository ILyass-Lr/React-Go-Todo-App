import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "#718195", _dark: "#1a202c" }, // Custom dark background
          },
  	},
	fg: {
	  DEFAULT: {
            value: { _light: "#ecf2f9" }, // Custom dark background
          },
	}, 
	button: {
	  DEFAULT: {
 	    value: { _light:"#ffffff", _dark:"#3d4756" },
	  },
	},
	buttonContent: {
	  DEFAULT: {
 	    value: {_light:"#20242a", _dark: "#c6ccd5" },
	  },
	},
	border: {
	  DEFAULT: {
	    value: { _light: "#000000", _dark: "#gray.600"},
	  },
	},
	navbar: {
	  DEFAULT: {
	    value: { _light: "#a0aebe", _dark: "#2d3646"},
	  },
	},
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
