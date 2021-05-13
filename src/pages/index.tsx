import { Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'

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
        <Head>
          <title>Home | WorldTrip</title>
        </Head>
        
        <Header />
        <Banner />
        <TravelTypes />

        <ContinentsSlide />
      </Flex>
    </>
  )
}
