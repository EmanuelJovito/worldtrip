import { Image, Text } from '@chakra-ui/react'
import styles from '../styles.module.css'

export function AsiaSlide() {
  return (
    <>
    <Image src="continentes/asia.jpg" className={styles.swiperImage}/>
    <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">Ásia</Text>
    </>
  )
}