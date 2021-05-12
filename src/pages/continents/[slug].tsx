import { Box, Flex, Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { BannerEuropa } from "../../components/BannerEuropa";
import { Cidades100 } from "../../components/Cidades100";
import { EuropaInfo } from "../../components/EurpaInfo";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type Continent = {
  id: string,
  continent: string,
  description: string,
  countries: string,
  language: string,
  citys: string,
  countrie: string,
  city: string,
  thumb: string,
  flag: string,
}

type ContinentProps = {
  continent: Continent
}

export default function Continents({continent}: ContinentProps) {
  return (
    <>
      <Flex
        w="100%" 
        h="100%"
        flexDirection="column" 
        align="center"
      >
        {}
        <Header />
        <Box as="a" href="/" position="absolute" left="100" top="5">
          <Image src="/voltar.svg"/>
        </Box>
        <BannerEuropa />
        <EuropaInfo />
        <Cidades100 />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const { data } = await api.get(`/continents/${slug}`)

  const continents = {
    id: data.id,
    continent: data.continent,
    description: data.description,
    countries: data.countries,
    language: data.language,
    citys: data.citys,
    countrie: data.countrie,
    city: data.city,
    thumb: data.thumb,
    flag: data.flag
  }

  return {
    props: {
      continents
    }
  }
}