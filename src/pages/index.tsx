import { Flex, Text } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { ContinentsSlide } from '../components/ContinentsSlide/ContinentsSlide'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <>
      <Flex
        w="100vw" 
        h="100%" 
        flexDirection="column"
        align="center"
      >
        <Header />
        <Banner />
        <TravelTypes />

        <Text textAlign="center" fontWeight="500" fontSize="2rem" marginTop="2rem" mb="2rem">
        Vamos nessa?<br/>
        Então escolha seu continente
        </Text>

        <ContinentsSlide />
      </Flex>
    </>
  )
}
