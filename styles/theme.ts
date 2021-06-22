import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = extendTheme({
    ...theme,
    config:{
        ...theme.config,
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        body:'Spartan,system-ui,sans-serif',
        heading:'Spartan,system-ui,sans-serif',
        mono: 'Menlo,monospace'
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    radii: {
        ...theme.radii,
        sm: '5px',
        md: '8px',
    },
    fontSizes: {
        ...theme.fontSizes,
        '6xl': '54px'
    },
  })

export default customTheme;