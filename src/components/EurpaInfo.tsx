import { Box, Flex, Text, Grid } from "@chakra-ui/react";

export function EuropaInfo() {
  return (
    <Flex w="80%" flexDirection="row" align="center" justify="center" mt="2rem" >
      <Text fontWeight="400" fontSize="1.1rem">
        A Europa é, por convenção, um dos seis <br/>
        continentes do mundo. Compreendendo a <br/>
        península ocidental da Eurásia, a Europa <br/>
        geralmente divide-se da Ásia a leste pela <br/>
        divisória de águas dos montes Urais, o rio Ural, <br/>
        o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Grid gridTemplateColumns="repeat(3, 1fr)" fontSize="1.5rem">
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08">50</Text>
          <Text fontWeight="600" >países</Text>
        </Box>
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08">60</Text>
          <Text fontWeight="600">línguas</Text>
        </Box>
        <Box align="center">
          <Text fontWeight="600" color="#FFBA08">27</Text>
          <Text fontWeight="600">cidades 100+</Text>
        </Box>
      </Grid>
    </Flex>
  )
}