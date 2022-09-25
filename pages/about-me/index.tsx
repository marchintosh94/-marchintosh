import AboutMeThings from "components/AboutMeList";
import Img from "components/common/Img";
import Layout from "components/layout/Layout";
import SocialLinks from "components/SocialLinks";
import Paragraph from "components/typography/Paragraph";
import Title from "components/typography/Title";
import { NextPageWithLayout } from "models/types";
import { ReactElement } from "react";


const AboutMe: NextPageWithLayout = () => {
  const yearOfExperience = new Date().getFullYear() - 2017
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4">
        <div className="flex flex-col items-center h-full w-full md:block md:items-center md:basis-2/5 space-y-4">
          <Img className="w-80 h-80 mb-image-page md:h-[500px] md:w-auto aspect-square rotate-3 rounded-2xl object-cover saturate-200" alt="marco baratto"  src={'/images/photos/marcobaratto_about.png'}/>
          <SocialLinks className="sm:hidden space-x-4" iconClass="w-8 h-8"/>
        </div>
        <div className="space-y-6 md:basis-3/5">
          <Title>Hello,&nbsp;<span className="lowercase">nice to meet you</span>!</Title>
          <AboutMeThings className=" md:w-2/3"/>
          <Paragraph className="mt-10">
            My name is Marco and I was born in 1994 in Florence. 
            I'm software developer focused on <b>frontend development</b> with {yearOfExperience} years of experience in building scalable products. 
            As well as participating in many tech programs where I have been trained to have both technical and soft skills, 
            I have acquired high level programming knowledge by taking online courses on 
            &nbsp;<a target={'_blank'} className="mb-text-link" href="https://www.fabiobiondi.dev/">Fabio Biondi</a>'s platform and Udemy, about 
            &nbsp;<b>Angular</b>, <b>React</b>, <b>State Management</b>, <b>Vue</b>, <b>JavaScript</b> and <b>Typescript</b>.
          </Paragraph>
        </div>
      </div>
    </>
  )
}

AboutMe.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default AboutMe