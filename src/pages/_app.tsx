import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

// Slider config
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
//

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
