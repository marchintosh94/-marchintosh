import { faBriefcase } from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { ExperienceUI } from "models/types"
import Button from "./common/Button"
import Img from "./common/Img"
import Title2 from "./common/typography/Title2"

interface ResumeBoxProps extends React.HtmlHTMLAttributes<HTMLElement> {
  active: string;
  experiences: ExperienceUI[]
  onChangeActive: (experience: ExperienceUI) => void
}

const ResumeBox: React.FC<ResumeBoxProps> = ({experiences, active, onChangeActive, className, ...props}) => {

  return (
    <article className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${className || ''}`} {...props}>
      <Title2 className="flex items-center px-4">
        <FontAwesomeIcon className="h-8 w-8 flex-none" icon={faBriefcase}/>
        <span className="ml-3">Work</span>
      </Title2>
      <ol className="mt-6 space-y-2">
        {experiences.map((role, roleIndex) => (
          <li onClick={() => onChangeActive(role)} key={roleIndex} className={clsx({
            "flex p-3 gap-4 cursor-pointer hover:bg-[#38383a] rounded-2xl": true,
            "bg-[#38383a]": active === role.id
          })}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {
                role.logo.map(l => (
                  <Img key={l.id} className="h-8 w-8 rounded-full" src={l.url}/>
                ))
              }
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2 gap-y-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className=" text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.startYear} until ${role.endYear}`}
              >
                <time dateTime={role.startYear}>
                  {role.startYear}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.endYear}>
                  {role.endYear}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default ResumeBox