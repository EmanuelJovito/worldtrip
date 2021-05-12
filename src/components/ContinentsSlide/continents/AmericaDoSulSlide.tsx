import { Image, Text } from "@chakra-ui/react";

import styles from '../styles.module.css'

export function AmericaDoSulSlide() {
  return (
    <>
    <Image src="continentes/americadosul.jpg" className={styles.swiperImage}/>
    <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">América do Sul</Text>
    </>
  )
}