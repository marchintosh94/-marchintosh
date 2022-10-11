import { faArrowDownToLine, faArrowLeft, faDownload } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Airtable from "airtable";
import Badge from "components/common/Badge";
import Button from "components/common/Button";
import ExtLinkButton from "components/common/ExtLinkButton";
import Paragraph from "components/common/typography/Paragraph";
import Title from "components/common/typography/Title";
import Title3 from "components/common/typography/Title3";
import ResumeItem from "components/ResumeItem";
import { mapSkills } from "lib/utils";
import { ContactsUI, ExperienceUI, NextPageWithLayout, ProfileUI, SkillUI } from "models/types";
import Image from "next/image"
import { useRouter } from "next/router";

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


const Resume: NextPageWithLayout<{experiences: ExperienceUI[]; skills: SkillUI[]; profile: ProfileUI; contacts: ContactsUI[]}> = ({experiences, profile, skills, contacts}) => {

  const { back } = useRouter()
  const download = async () => {
    // start the fetch and obtain a reader
    const response = await fetch('/api/resume-en');
    const reader = response.body!.getReader();
    const contentLength = +response.headers.get('Content-Length')!;
    
    // Step 3: legge i dati
    let receivedLength = 0; // ancora nessun byte è stato ricevuto
    let chunks = []; // array dei chunks binari ricevuti (compreso il body)
    while(true) {
      const {done, value} = await reader.read();
    
      if (done) {
        break;
      }
    
      chunks.push(value);
      receivedLength += value.length;
    
      console.log(`Ricevuti ${receivedLength} di ${contentLength}`)
    }
    
    const link = document.createElement('a')
    //link.target = '_blank'
    link.download = 'marcobaratto-resume.pdf'
    link.href = URL.createObjectURL(new Blob(chunks))
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link);
  }
  return (
    <>
      <header className="mx-auto max-w-[120rem] py-8 px-4 sm:py-10 sm:px-6 space-y-10">
        <div className="mx-12 flex justify-between space-x-6">
          <Button title="goback" onClick={() => back()} className="h-fit mb-link w-fit flex  justify-center"><FontAwesomeIcon icon={faArrowLeft} className="text-4xl"/></Button>
          <Button title="download" onClick={() =>download()} className=" h-fit mb-link w-fit flex justify-center"><FontAwesomeIcon icon={faArrowDownToLine} className="text-4xl"/></Button>
        </div>
        <div className="flex space-x-10 mx-auto max-w-[80rem]">
          <div className="sm:col-span-1 flex item justify-center">
            <figure className="dark:hidden">
              <Image height={200} width={250} src={'/images/logo/mb_light.svg'}/>
            </figure>
            <figure className="hidden dark:block">
              <Image height={200} width={250} src={'/images/logo/mb_dark.svg'}/>
            </figure>
          </div>
          <div className="sm:col-span-2 flex items-center">
            <section className="space-y-4">
              <Title>{profile.title}</Title>
              <Paragraph className="text-sm text-justify">{profile.intro}</Paragraph>
            </section>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[120rem] mt-10 p-5 space-y-8">
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
                    <ResumeItem role={e}/>
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
                    <Image alt={s.title} src={s.logo[0].url} width={20} height={20}/>&nbsp;<span className="text-xs">{s.title}</span>
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
                  <Paragraph className="sm:text-base font-medium ">English &#8594; B2</Paragraph>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}


Resume.getLayout = (page) => (
  <>{page}</>
)

export default Resume