import { Image, Text } from '@chakra-ui/react'

import styles from '../styles.module.css'

export function AfricaSlide() {
  return (
    <>
    <Image src="continentes/africa.jpg" className={styles.swiperImage}/>
    <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">África</Text>
    </>
  )
}