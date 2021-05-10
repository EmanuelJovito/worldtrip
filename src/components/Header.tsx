import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      h="3.5rem"
      align="center"
      justify="center"
    >
      <Image src="logo.svg" boxSize="9rem"/>
    </Flex>
  )
}