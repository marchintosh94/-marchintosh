import Img from "components/common/Img"
import Layout from "components/layout/Layout"
import Photos from "components/Photos"
import { NextPageWithLayout } from "models/types"
import { ReactElement } from "react"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center space-x-4">
                <div>
                  <img src={'/images/me.jpg'} className="inline-block h-16 w-16 rounded-full"/>
                </div>
                <div>
                  <p className="text-lg"></p>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-2xl">
                Frontend developer, analyst and technology passionate.
              </h1>
              <p className="mt-6 text-base">
                I'm Marco (aka <code className="text-mb_accent">@marchintosh94</code>), a&nbsp;<b>frontend developer</b>&nbsp; based in Florence, Italy.
                I'm focused on&nbsp;
                <b>React TS</b>&nbsp;,&nbsp;
                <b>Angular</b>&nbsp;and&nbsp;
                <b>Vue</b>&nbsp; 
                development and a mobile development enthusiast.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Photos/>
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