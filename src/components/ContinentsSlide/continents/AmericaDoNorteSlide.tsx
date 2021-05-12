import { Image, Text } from "@chakra-ui/react";

import styles from '../styles.module.css'

export function AmericaDoNorteSlide() {
  return (
    <>
    <Image src="continentes/americadonorte.jpg" className={styles.swiperImage}/>
    <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">América do Norte</Text>
    </>
  )
}