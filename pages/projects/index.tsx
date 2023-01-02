import Airtable, { Attachment } from "airtable";
import clsx from "clsx";
import Badge from "components/common/Badge";
import Img from "components/common/Img";
import Paragraph from "components/common/typography/Paragraph";
import Title2 from "components/common/typography/Title2";
import Title3 from "components/common/typography/Title3";
import Layout from "components/layout/Layout";
import { mapSkills } from "lib/utils";
import { NextPageWithLayout, ProjectUI } from "models/types";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faGraduationCap } from '@fortawesome/pro-light-svg-icons'
import SkillsBox from "components/SkillsBox";

export const getStaticProps = async () => {
  const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_WORKSPACE!)
  const projects = await  airtable('Projects').select({sort: [{field: 'order'}]}).all()
  const skills = await  airtable('Skills').select({sort: [{field: 'groupOrder', direction: 'asc'}, {field: 'fieldOrder', direction: 'asc'}]}).all()
  return {
    props: {
      projects: projects.map(p => ({
        id: p.id, 
        ...p.fields,
        preview: (p.fields.preview as Attachment[]).map(elem => ({url: `/images/preview/${elem.filename}`})),
        skills: skills.filter(s => (p.fields.skills as string[]).includes(s.id)).map(mapSkills)
      })),
    },
    revalidate: 60 * 60 * 24, // In seconds
  }
}

const Projects: NextPageWithLayout<{projects: ProjectUI[]}> = ({projects}) => {
  const linksClass = 'toolbar-social-logo h-10 w-10 p-2'
  const linksIconClass = '!h-9 w-9'

  const navigateTo = (url: string) => window.open(url, '_blank')

  return (
    <section>
      <Title2 className="mb-16">Projects&nbsp;<span className="text-mb_accent text-sm">@marchintosh94</span></Title2>
      <div className="space-y-40">
        {
          projects.map((project, i) => (
            <article key={project.id} className={'grid grid-cols-1 sm:grid-cols-5 sm:gap-x-14'}>
              <figure className={clsx({
                "mb-project__box-image justify-center sm:col-span-3": true,
                'sm:order-2 sm:justify-end': i % 2 == 0,
                'sm:justify-start': i % 2 == 1
                })}>
                <Img alt={project.title} onClick={() => navigateTo(project.website)} src={project.preview[0].url} className={clsx({
                  "mb-project__img ": true,
                  'sm:order-2 mb-project__img-odd': i % 2 == 1,
                  'mb-project__img-even': i % 2 == 0
                })}/>
              </figure>
              <section className="space-y-8 sm:col-span-2">
                <Title3 className="sm:text-2xl">{project.title}</Title3>
                <Paragraph>{project.description}</Paragraph>
                {
                  project.collaboration && <Paragraph className="space-y-2">
                    <span>Experience:</span>
                    <br/>
                    <Badge className="border dark:border-mb_light/20 border-mb_dark/20">{project.collaboration}</Badge>
                  </Paragraph>
                }
                <SkillsBox skills={project.skills}/>
                <Paragraph className="space-y-2">
                  <span>Links</span>
                  <div className={`flex items-center space-x-2`}>
                    {
                      project.gitHub && <a target="_blank" rel="noopener noreferrer" href={project.gitHub} aria-label={project.title} className={linksClass}>
                        <FontAwesomeIcon icon={faGithub} className={linksIconClass}/>
                      </a>
                    }
                    {
                      project.doc && <a target="_blank" rel="noopener noreferrer" href={project.doc} aria-label={project.title} className={linksClass}>
                        <FontAwesomeIcon icon={faGraduationCap} className={linksIconClass}/>
                      </a>
                    }
                    {
                      project.npm && <a target="_blank" rel="noopener noreferrer" href={project.npm} aria-label={project.title} className={linksClass}>
                        <FontAwesomeIcon icon={faNpm} className={linksIconClass}/>
                      </a>
                    }
                    {
                      project.website && <a target="_blank" rel="noopener noreferrer" href={project.website} aria-label={project.title} className={linksClass}>
                        <FontAwesomeIcon icon={faGlobe} className={linksIconClass}/>
                      </a>
                    }
                  </div>
                </Paragraph>
              </section>
            </article>
          ))
        }
      </div>
    </section>
  )
}

Projects.getLayout = (page: ReactElement) => (<Layout>{page}</Layout>)
export default Projects