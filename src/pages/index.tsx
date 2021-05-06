import { Flex, Image, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex
        w="100vw" 
        h="100vh" 
        flexDirection="column"
      >
        <Flex
          w="100vw"
          h="3.5rem"
          align="center"
          justify="center"
        >
          <Image src="logo.svg" boxSize="9rem"/>
        </Flex>
        <Flex
          w="100vw"
          h="18rem"
        >
          <Image 
            src="background.png" 
            w="100vw" 
            h="15rem"/>
          <Image 
            src="airplane.svg" 
            boxSize="18rem" 
            position="absolute"
            right="20"
            top="75"
          />
          <Text 
            position="absolute" 
            color="#F5F8FA" 
            fontWeight="500"
            fontSize="1.5rem"
            left="20"
            top="115"
          >
            5 Continentes,<br/>
            infinitas possibilidades.
          </Text>
          <Text
            position="absolute"
            fontWeight="400"
            color="#DADADA"
            left="20"
            top="200"
          >
            Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou. 
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
