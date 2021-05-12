import { Flex, Image, Text } from "@chakra-ui/react";

export function BannerEuropa() {
  return (
    <Flex position="relative" mb="2rem">
      <Image 
        src="/europaThumb.png"
        w="100%"
        zIndex="1"
      />
      <Text
        position="absolute"
        fontWeight="600" 
        fontSize="3rem" 
        color="#F5F8FA"
        left="125"
        bottom="50"
        zIndex="10"
      >
        Europa
      </Text>
    </Flex>
  )
}