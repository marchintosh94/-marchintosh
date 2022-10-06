import AboutMeThings from "components/AboutMeList";
import Layout from "components/layout/Layout";
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