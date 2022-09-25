import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "components/common/Img"
import Layout from "components/layout/Layout"
import SocialLinks from "components/SocialLinks"
import Paragraph from "components/typography/Paragraph"
import Subtitle from "components/typography/Subtitle"
import Title from "components/typography/Title"
import { Pages } from "lib/utils"
import { NextPageWithLayout } from "models/types"
import Head from "next/head"
import Link from "next/link"
import { ReactElement } from "react"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  items-center">
        <div className="space-y-6 md:basis-3/5">
          <div>
            <small className="lowercase text-lg">
              (aka <code className="text-mb_accent">@marchintosh94</code>)
            </small>
            <Title>Marco <span>Baratto</span></Title>
            <Subtitle className="mt-3">
              Working with my hands to make magic happen on the internet.
            </Subtitle>
          </div>
          <Paragraph className="mt-6 ">
            I'm softwaare developer from Florence, Italy with rock-solid experience in building complex applications with modern technologies.
            I'm focused on&nbsp;
            <b>React TS</b>&nbsp;,&nbsp;
            <b>Angular</b>&nbsp;and&nbsp;
            <b>Vue</b>&nbsp;development and I'm a mobile development enthusiast.
          </Paragraph>
          <Link href={Pages.AboutMe}>
            <div className="mt-4 mb-link w-fit">
              See more About me&nbsp;<FontAwesomeIcon icon={['fal', 'arrow-right']}/>
            </div>
          </Link>
        </div>
        <div className="flex justify-center h-full w-full md:block md:items-center md:basis-2/5 space-x-2">
          <SocialLinks className="sm:hidden flex-col justify-center space-y-2" iconClass="w-8 h-8"/>
          <Img className="mb-image-page"  alt="marco baratto" src={'/images/photos/marcobaratto.png'}/>
        </div>
      </div>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home