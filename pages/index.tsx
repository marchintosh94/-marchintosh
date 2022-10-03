import Img from "components/common/Img"
import Layout from "components/layout/Layout"
import SocialLinks from "components/SocialLinks"
import Paragraph from "components/common/typography/Paragraph"
import Subtitle from "components/common/typography/Subtitle"
import Title from "components/common/typography/Title"
import { mapSkills, Pages } from "lib/utils"
import { ExperienceUI, NextPageWithLayout, Skill } from "models/types"
import { ReactElement, useState } from "react"
import LinkButton from "components/common/LinkButton"
import imageCartoon from "../assets/photos/marcobaratto.png"
import ResumeBox from "components/ResumeBox"
import Airtable from "airtable"
import ExperienceBox from "components/ExperienceBox"

export const getStaticProps = async () => {
  const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_WORKSPACE!)
  const experiences = await  airtable('Experiences').select({sort: [{field: 'order'}]}).all()
  const skills = await  airtable('Skills').select({sort: [{field: 'groupOrder', direction: 'asc'}, {field: 'fieldOrder', direction: 'asc'}]}).all()
  return {
    props: {
      experiences: experiences.map(e => ({
        id: e.id, 
        ...e.fields,
        startYear: `${new Date(e.fields.start as string).getMonth()}/${new Date(e.fields.start as string).getFullYear()}`,
        endYear: e.fields.end? `${new Date(e.fields.end as string).getMonth()}/${new Date(e.fields.end as string).getFullYear()}` : 'Present',
        skills: skills.filter(s => (e.fields.skills as string[]).includes(s.id)).map(mapSkills)
      })),
    },
    revalidate: 60 * 60 * 24, // In seconds
  }
}

const Home: NextPageWithLayout<{experiences: ExperienceUI[]}> = ({experiences}) => {
  const [activeWork, setActiveWork] = useState(experiences[0])

  return (
    <>
      <div className="flex flex-col space-y-6 md:flex-row  items-center">
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
          <LinkButton href={Pages.AboutMe}>See more About me</LinkButton>
        </div>
        <div className="flex justify-center h-full w-full md:block md:items-center md:basis-2/5 space-x-2">
          <SocialLinks className="sm:hidden flex-col justify-center space-y-2" iconClass="w-8 h-8"/>
          <Img className="mb-image-page"  alt="marco baratto" src={imageCartoon}/>
        </div>
      </div>
      
      <section className="grid grid-cols-4 xl:grid-cols-3 p-2 my-40 dark:bg-black rounded-2xl">
        <ResumeBox onChangeActive={(experience) => setActiveWork(experience)} active={activeWork.id} className="col-span-4 md:col-span-2 xl:col-span-1 border-none" experiences={experiences}/>
        <ExperienceBox className="col-span-4 md:col-span-2 xl:col-span-2 border-none" experience={activeWork}/>
      </section>
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