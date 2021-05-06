import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "1D1D1D",
        color: "#47585B"
      }
    }
  }
})