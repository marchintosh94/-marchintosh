import { faBriefcase } from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { ExperienceUI } from "models/types"
import Button from "./common/Button"
import Img from "./common/Img"
import Title2 from "./common/typography/Title2"
import ResumeItem from "./ResumeItem"

interface ResumeBoxProps extends React.HtmlHTMLAttributes<HTMLElement> {
  active: string;
  experiences: ExperienceUI[]
  onChangeActive: (experience: ExperienceUI) => void
}

const ResumeBox: React.FC<ResumeBoxProps> = ({experiences, active, onChangeActive, className, ...props}) => {

  return (
    <article className={`rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 ${className || ''}`} {...props}>
      <Title2 className="flex items-center px-4">
        <FontAwesomeIcon className="!h-8 w-8 flex-none" icon={faBriefcase}/>
        <span className="ml-3">Work</span>
      </Title2>
      <ol className="mt-6 space-y-2">
        {experiences.map((role, roleIndex) => (
          <li onClick={() => onChangeActive(role)} key={roleIndex} className={clsx({
            "flex p-3 gap-4 cursor-pointer hover:bg-[#38383a] rounded-2xl": true,
            "bg-[#38383a]": active === role.id
          })}>
            <ResumeItem role={role}/>
          </li>
        ))}
      </ol>
    </article>
  )
}

export default ResumeBox