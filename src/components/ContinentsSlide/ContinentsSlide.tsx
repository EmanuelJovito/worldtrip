import { Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AfricaSlide } from './continents/AfricaSlide';
import { AmericaDoNorteSlide } from './continents/AmericaDoNorteSlide';
import { AmericaDoSulSlide } from './continents/AmericaDoSulSlide';
import { AsiaSlide } from './continents/AsiaSlide';
import { EuropaSlide } from './continents/EuropaSlide';
import { OceaniaSlide } from './continents/OceaniaSlide';

import styles from './styles.module.css'

export function ContinentsSlide() {
  return (
    <>
    <Text textAlign="center" fontWeight="500" fontSize="2rem" marginTop="2rem" mb="2rem">
      Vamos nessa?<br/>
      Então escolha seu continente
    </Text> 

    <Swiper 
      cssMode={true} 
      navigation={true} 
      pagination={true} 
      mousewheel={true} 
      keyboard={true}
      className={styles.myswaper}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <EuropaSlide />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <AmericaDoSulSlide />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <AmericaDoNorteSlide />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <AsiaSlide />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <AfricaSlide />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <OceaniaSlide />
      </SwiperSlide>
    </Swiper>
  </>
  )
}