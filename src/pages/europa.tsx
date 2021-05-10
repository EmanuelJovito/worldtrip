import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { BannerEuropa } from "../components/BannerEuropa";
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
        <BannerEuropa />
        <EuropaInfo />

        <Text fontWeight="500" fontSize="2.25rem" mt="2rem">
          Cidades +100
        </Text>

        <Grid mt="2rem" gridTemplateColumns="repeat(4, 1fr)" rowGap="1rem" columnGap="1rem" mb="2rem">
          <Box border="1px solid #FFBA08" borderRadius="5px">
            <Image src="cidades/londres.png"/>
            <Flex mt="1rem" mb="1rem">
              <Flex flexDirection="column" mr="6rem" ml="1rem">
                <Text fontWeight="600" fontSize="1.25rem">Londres</Text>
                <Text mt="0.5rem">Reino Unido</Text>
              </Flex>
              <Image src="bandeiras/reinounido.svg"/>
            </Flex>
          </Box>
          <Box border="1px solid #FFBA08" borderRadius="5px">
            <Image src="cidades/paris.png"/>
            <Flex mt="1rem" mb="1rem">
              <Flex flexDirection="column" mr="8rem" ml="1rem">
                <Text fontWeight="600" fontSize="1.25rem">Paris</Text>
                <Text mt="0.5rem">França</Text>
              </Flex>
              <Image src="bandeiras/franca.svg"/>
            </Flex>
          </Box>
          <Box border="1px solid #FFBA08" borderRadius="5px">
            <Image src="cidades/roma.png"/>
            <Flex mt="1rem" mb="1rem">
              <Flex flexDirection="column" mr="7rem" ml="1rem">
                <Text fontWeight="600" fontSize="1.25rem">Roma</Text>
                <Text mt="0.5rem">Itália</Text>
              </Flex>
              <Image src="bandeiras/italia.svg"/>
            </Flex>
          </Box>
          <Box border="1px solid #FFBA08" borderRadius="5px">
            <Image src="cidades/praga.png"/>
            <Flex mt="1rem" mb="1rem">
              <Flex flexDirection="column" mr="3rem" ml="1rem">
                <Text fontWeight="600" fontSize="1.25rem">Praga</Text>
                <Text mt="0.5rem">República Tcheca</Text>
              </Flex>
              <Image src="bandeiras/republicatcheca.svg"/>
            </Flex>
          </Box>
          <Box border="1px solid #FFBA08" borderRadius="5px">
            <Image src="cidades/amsterda.png"/>
            <Flex mt="1rem" mb="1rem">
              <Flex flexDirection="column" mr="6rem" ml="1rem">
                <Text fontWeight="600" fontSize="1.25rem">Amsterdã</Text>
                <Text mt="0.5rem">Holanda</Text>
              </Flex>
              <Image src="bandeiras/holanda.svg"/>
            </Flex>
          </Box>
          
        </Grid>
      </Flex>
    </>
  )
}