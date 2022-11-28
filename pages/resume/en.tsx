import Airtable from "airtable";
import Badge from "components/common/Badge";
import ExtLinkButton from "components/common/ExtLinkButton";
import Paragraph from "components/common/typography/Paragraph";
import Title from "components/common/typography/Title";
import Title3 from "components/common/typography/Title3";
import { mapSkills } from "lib/utils";
import { ContactsUI, ExperienceUI, NextPageWithLayout, ProfileUI, SkillUI } from "models/types";
import Image from "next/image"

export const getStaticProps = async () => {
  const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_WORKSPACE!)
  const profile = await  airtable('Profile').select({filterByFormula: '{Lang} = "EN"'}).all()
  const experiences = await  airtable('Experiences').select({sort: [{field: 'order'}]}).all()
  const contacts = await  airtable('Contacts').select().all()
  const skills = await  airtable('Skills').select({
    sort: [{field: 'groupOrder', direction: 'asc'}, {field: 'fieldOrder', direction: 'asc'}],
    filterByFormula: 'AND(NOT({type} = "database"), NOT({type} = "tools"), NOT({title} = "Yii"), NOT({title} = "Html"), NOT({title} = "Css"))'
  }).all()
  return {
    props: {
      contacts: contacts.map(c => ({id: c.id, ...c.fields})),
      profile: profile.map(p => ({id: p.id, ...p.fields})).at(0),
      skills: skills.map(mapSkills),
      experiences: experiences.map(e => ({
        id: e.id, 
        ...e.fields,
        startYear: `${new Date(e.fields.start as string).getMonth()}/${new Date(e.fields.start as string).getFullYear()}`,
        endYear: e.fields.end? `${new Date(e.fields.end as string).getMonth()}/${new Date(e.fields.end as string).getFullYear()}` : 'Present',
        skills: skills.filter(s => (e.fields.skills as string[]).includes(s.id)).map(mapSkills)
      })),
    },
    revalidate: 60 * 60 * 24 * 7, // In seconds
  }
}


const ResumeEn: NextPageWithLayout<{experiences: ExperienceUI[]; skills: SkillUI[]; profile: ProfileUI; contacts: ContactsUI[]}> = ({experiences, profile, skills, contacts}) => {

  return (
    <div className="bg-mb_dark/[.01] h-screen">
      <header className="mx-auto max-w-[80rem] py-8 px-4 sm:py-10 sm:px-6 flex sm:gap-x-10">
        <div className="sm:col-span-1 flex justify-center">
          <figure className="dark:hidden">
            <Image alt="marcobaratto logo" height={200} width={250} src={'/images/logo/mb_light.svg'}/>
          </figure>
          <figure className="hidden dark:block">
            <Image alt="marcobaratto logo" height={200} width={250} src={'/images/logo/mb_dark.svg'}/>
          </figure>
        </div>
        <div className="sm:col-span-2 flex space-x-12 items-start">
          <section className="space-y-4">
            <Title>{profile.title}</Title>
            <Paragraph className="text-sm text-justify">{profile.intro}</Paragraph>
          </section>
        </div>
      </header>
      <main className="mx-auto max-w-[120rem] px-5 space-y-4">
        <section className="space-y-2 p-4">
          <Title3 className="sm:text-xl">Contacts and Info:</Title3>
          <div className="flex space-x-4">
            <dl className="sm:divide-y sm:divide-gray-200 sm:min-w-[40rem]">
                {
                  contacts.filter(c => c.type == 'social').map(c => (
                    <div key={c.id} className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-1">
                      <dt className="text-sm flex items-center font-medium text-gray-500">{c.name}</dt>
                      {c.url && <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0"><ExtLinkButton className="m-0" href={c.url}>{c.urlLabel}</ExtLinkButton></dd>}
                      {c.value && <dd className="mt-1 text-sm sm:col-span-2 py-2 sm:mt-0">{c.value}</dd>}
                    </div>
                  ))
                }
            </dl>
            <dl className="sm:divide-y sm:divide-gray-200 sm:min-w-[40rem]">
                {
                  contacts.filter(c => ['contact','info'].includes(c.type)).map(c => (
                    <div key={c.id} className=" sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 py-1">
                      <dt className="text-sm flex items-center font-medium text-gray-500">{c.name}</dt>
                      {c.url && <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0"><ExtLinkButton className="m-0" href={c.url}>{c.urlLabel}</ExtLinkButton></dd>}
                      {c.value && <dd className="mt-1 text-sm sm:col-span-2 py-2 sm:mt-0">{c.value}</dd>}
                    </div>
                  ))
                }
            </dl>
          </div>
        </section>
        <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6 my-auto">
          <Title3 className="sm:text-xl">Relevant Experiences:</Title3>
            {
              experiences.map(e => (
                <article key={e.id} className="p-3 space-y-2">
                  <div className="flex gap-3">
                  <>
                    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    {
                      e.logo.map(l => (
                        <img key={l.id} className="h-9 w-9 rounded-full object-cover" alt={e.company} src={l.url}/>
                      ))
                    }
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {e.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                      {e.title}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className=" text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label={`${e.startYear} until ${e.endYear}`}
                    >
                      <time dateTime={e.startYear}>
                        {e.startYear}
                      </time>{' '}
                      <span aria-hidden="true">—</span>{' '}
                      <time dateTime={e.endYear}>
                        {e.endYear}
                      </time>
                    </dd>
                  </dl>
                  </>
                  </div>
                  <Paragraph className="text-sm">{e.description}</Paragraph>
                </article>
              ))
            }
        </section>
        <div className="grid grid-flow-col auto-cols-auto gap-x-4">
          <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Education:</Title3>
            <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-2">
              <dt className="sr-only">School</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                High school leaving qualification in Electrical studies
              </dd>
              <dt className="sr-only">Place</dt>
              <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                ITI Antonio Pacinotti, Piombino, Italy | 2007 - 2013
              </dd>
              </dl>
          </section>
          <section className="p-4 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Skills:</Title3>
            <div>
              {
                skills.map(s => (
                  <Badge title={s.title} aria-label={s.title} className={`flex flex-row my-2 mr-3 items-center bg-mb_dark/5 dark:bg-mb_light/30 duration-500 cursor-pointer hover:scale-110 `} onClick={() => window.open(s.url)} key={s.id}>
                    <img alt={s.title} src={s.logo[0].url} className="h-5 w-5"/>&nbsp;<span className="text-xs">{s.title}</span>
                  </Badge>
                ))
              }
            </div>
          </section>
          <section className="p-4 px-8 dark:bg-black/20 rounded-2xl space-y-6">
            <Title3 className="sm:text-lg">Languages:</Title3>
            <ul role="list" className="divide-y divide-gray-200">
              <li className="flex py-4">
                <div className="ml-3">
                  <Paragraph className="sm:text-base font-medium ">Italian &#8594; Native</Paragraph> 
                </div>
              </li>
              <li className="flex py-4">
                <div className="ml-3">
                  <Paragraph className="sm:text-base font-medium ">English &#8594; B1</Paragraph>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}


ResumeEn.getLayout = (page) => (
  <>{page}</>
)

export default ResumeEn