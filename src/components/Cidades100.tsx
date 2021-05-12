import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

export function Cidades100() {
  return (
    <>
    <Flex w="80%" align="flex-start" mt="3rem">
      <Text fontWeight="500" fontSize="2.25rem">
        Cidades +100
      </Text>
    </Flex>

    <Grid mt="2rem" gridTemplateColumns="repeat(4, 1fr)" rowGap="1rem" columnGap="1rem" mb="2rem">
      <Box border="1px solid #FFBA08" borderRadius="5px">
        <Image src="cidades/londres.png" w="100%"/>
        <Flex mt="1rem" mb="1rem" justify="space-between">
          <Flex flexDirection="column" ml="1rem">
            <Text fontWeight="600" fontSize="1.25rem">Londres</Text>
            <Text mt="0.5rem">Reino Unido</Text>
          </Flex>
          <Image src="bandeiras/reinounido.svg" mr="1rem"/>
        </Flex>
      </Box>
      <Box border="1px solid #FFBA08" borderRadius="5px">
        <Image src="cidades/paris.png" w="100%"/>
        <Flex mt="1rem" mb="1rem"  justify="space-between">
          <Flex flexDirection="column" ml="1rem">
            <Text fontWeight="600" fontSize="1.25rem">Paris</Text>
            <Text mt="0.5rem">França</Text>
          </Flex>
          <Image src="bandeiras/franca.svg" mr="1rem"/>
        </Flex>
      </Box>
      <Box border="1px solid #FFBA08" borderRadius="5px">
        <Image src="cidades/roma.png" w="100%"/>
        <Flex mt="1rem" mb="1rem" justify="space-between">
          <Flex flexDirection="column" ml="1rem">
            <Text fontWeight="600" fontSize="1.25rem">Roma</Text>
            <Text mt="0.5rem">Itália</Text>
          </Flex>
          <Image src="bandeiras/italia.svg" mr="1rem"/>
        </Flex>
      </Box>
      <Box border="1px solid #FFBA08" borderRadius="5px">
        <Image src="cidades/praga.png" w="100%"/>
        <Flex mt="1rem" mb="1rem" justify="space-between">
          <Flex flexDirection="column" mr="3rem" ml="1rem">
            <Text fontWeight="600" fontSize="1.25rem">Praga</Text>
            <Text mt="0.5rem">República Tcheca</Text>
          </Flex>
          <Image src="bandeiras/republicatcheca.svg" mr="1rem"/>
        </Flex>
      </Box>
      <Box border="1px solid #FFBA08" borderRadius="5px">
        <Image src="cidades/amsterda.png" w="100%"/>
        <Flex mt="1rem" mb="1rem" justify="space-between">
          <Flex flexDirection="column" mr="6rem" ml="1rem">
            <Text fontWeight="600" fontSize="1.25rem">Amsterdã</Text>
            <Text mt="0.5rem">Holanda</Text>
          </Flex>
          <Image src="bandeiras/holanda.svg" mr="1rem"/>
        </Flex>
      </Box>
    </Grid>
    </>
  )
}