import { Image, Text } from "@chakra-ui/react";

import styles from '../styles.module.css'

export function EuropaSlide() {
  return (
    <>
      <Image src="continentes/europa.png" className={styles.swiperImage}/>
      <Text 
        as="a" 
        fontWeight="700" 
        position="absolute" 
        fontSize="3rem" 
        color="#DADADA" 
        href="/europa"
      >
        Europa
      </Text>
      <Text 
        as="a" 
        fontWeight="700" 
        position="absolute" 
        top="250" 
        fontSize="1.5rem" 
        color="#DADADA" 
        href="/europa"
      >
        O continente mais antigo.
      </Text>
    </>
  )
}