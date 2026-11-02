/* eslint-disable import/no-anonymous-default-export */
import type { StaticImageData } from 'next/image'
import ImgIndustries01 from '../assets/industries-assets/industries01.jpg'
import ImgIndustries02 from '../assets/industries-assets/industries02.jpg'
import ImgIndustries03 from '../assets/industries-assets/industries03.jpg'

export interface IIndustries {
  industriesTitle: string
  industriesDescription: string
  IndustrieImg: string | StaticImageData
  imgHeight: number
  imgWidth: number
}

const healthCare = {
  industriesTitle: "Health Care",
  industriesDescription: `Data security & privacy standards,
  data workflows and cloud ifrastructure for IoT.
  
  We’ve been there.`,
  IndustrieImg: ImgIndustries01,
  imgHeight: 500,
  imgWidth: 332,
}

const contentNmedia = {
  industriesTitle: "Content and Media",
  industriesDescription: `Our expertise on AWS has been 
  getting applications up and running for 
  hundreds of thousands of users.
  
  Comcast, Audible and Medio Tiempo have 
  been part of our challenges and great 
  experiences.`,
  IndustrieImg: ImgIndustries02,
  imgHeight: 500,
  imgWidth: 423,
}

const retail = {
  industriesTitle: "Retail",
  industriesDescription: `From budget to converting sales.
  Headless e-commerce solutions and inventory management for digital and brick
  and mortar stores.
  We've help getting insights for enhancing operations and customer acquisition using data commerce.`,
  IndustrieImg: ImgIndustries03,
  imgHeight: 420,
  imgWidth: 420,
}

export const industriesTitle = 'Industries'

export default [ healthCare, contentNmedia, retail ];
