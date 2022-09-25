import AboutMeThings from "components/AboutMeList";
import Img from "components/common/Img";
import Layout from "components/layout/Layout";
import SocialLinks from "components/SocialLinks";
import Paragraph from "components/common/typography/Paragraph";
import Title from "components/common/typography/Title";
import { NextPageWithLayout } from "models/types";
import { ReactElement } from "react";
import AboutMeFirst from "components/AboutMeFirst";
import Photos from "components/Photos";


const AboutMe: NextPageWithLayout = () => {
  return (
    <>
      <div className="space-y-20 sm:space-y-40">
        <AboutMeFirst/>
        <section >
          <AboutMeThings/>
        </section>
        <section>
          <Photos/>
        </section>
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