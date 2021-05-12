import { Box, Flex, Text, Grid } from "@chakra-ui/react";

export function EuropaInfo() {
  return (
    <Flex w="80%" flexDirection="row" align="center" justify="space-between" mt="2rem" >
      <Text fontWeight="400" fontSize="1.3rem" w="32.5rem" align="justify">
        A Europa é, por convenção, um dos seis 
        continentes do mundo. Compreendendo a 
        península ocidental da Eurásia, a Europa 
        geralmente divide-se da Ásia a leste pela 
        divisória de águas dos montes Urais, o rio Ural, 
        o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" >
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08" fontSize="3rem">50</Text>
          <Text fontWeight="600" fontSize="1.5rem">países</Text>
        </Box>
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08" fontSize="3rem">60</Text>
          <Text fontWeight="600" fontSize="1.5rem">línguas</Text>
        </Box>
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08" fontSize="3rem">27</Text>
          <Text fontWeight="600" fontSize="1.5rem">cidades 100+</Text>
        </Box>
      </Grid>
    </Flex>
  )
}