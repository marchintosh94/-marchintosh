import { ExperienceUI } from "models/types";
import Img from "./common/Img";

const ResumeItem: React.FC<{role: ExperienceUI}> = ({role}) => (
  <>
    <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
    {
      role.logo.map(l => (
        <Img key={l.id} className="h-8 w-8 rounded-full" alt={role.company} src={l.url}/>
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
  </>
)

export default ResumeItem