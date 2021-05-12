import { Box, Flex, Image } from "@chakra-ui/react";
import { BannerEuropa } from "../components/BannerEuropa";
import { Cidades100 } from "../components/Cidades100";
import { EuropaInfo } from "../components/EurpaInfo";
import { Header } from "../components/Header";

export default function Europa() {
  return (
    <>
      <Flex
        w="100%" 
        h="100%"
        flexDirection="column" 
        align="center"
      >
        <Header />
        <Box as="a" href="/" position="absolute" left="100" top="5">
          <Image src="/voltar.svg"/>
        </Box>
        <BannerEuropa />
        <EuropaInfo />
        <Cidades100 />
      </Flex>
    </>
  )
}