import { Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.css'

export function ContinentsSlide() {
  return (
    <>
      <Swiper 
        cssMode={true} 
        navigation={true} 
        pagination={true} 
        mousewheel={true} 
        keyboard={true}
        className={styles.myswaper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/europa.png" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="#DADADA">Europa</Text>
          <Text fontWeight="700" position="absolute" top="250" fontSize="1.5rem" color="#DADADA">O continente mais antigo.</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/americadosul.jpg" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">América do Sul</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/americadonorte.jpg" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">América do Norte</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/asia.jpg" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">Ásia</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/africa.jpg" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">África</Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="continentes/oceania.jpg" className={styles.swiperImage}/>
          <Text fontWeight="700" position="absolute" fontSize="3rem" color="white">Oceania</Text>
        </SwiperSlide>
      </Swiper>
    </>
  )
}