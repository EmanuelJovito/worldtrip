import { Image, Text } from '@chakra-ui/react'
import styles from '../styles.module.css'

export function OceaniaSlide() {
  return (
    <>
    <Image src="continentes/oceania.jpg" className={styles.swiperImage}/>
    <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">Oceania</Text>
    </>
  )
}