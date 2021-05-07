import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="100">
        <Box align="center">
          <Image src="cocktail.svg" w="4rem" pb="1rem"/>
          <Text fontWeight="600">vida noturna</Text>
        </Box>
        <Box align="center">
          <Image src="surf.svg" w="4rem" pb="1rem"/>
          <Text fontWeight="600">praia</Text>
        </Box>
        <Box align="center">
          <Image src="building.svg" w="4rem" pb="1rem"/>
          <Text fontWeight="600">moderno</Text>
        </Box>
        <Box align="center">
          <Image src="museum.svg" w="4rem" pb="1rem"/>
          <Text fontWeight="600">clássico</Text>
        </Box>
        <Box align="center">
          <Image src="earth.svg" w="4rem" pb="1rem"/>
          <Text fontWeight="600">e mais...</Text>
        </Box>
      </Grid>

      <Flex w="5rem" borderBottom="1px solid" marginTop="4rem"/>
    </>
  )
}