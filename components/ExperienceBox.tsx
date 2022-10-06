import clsx from "clsx"
import { ExperienceUI } from "models/types"
import ExtLinkButton from "./common/ExtLinkButton"
import Img from "./common/Img"
import LinkButton from "./common/LinkButton"
import Paragraph from "./common/typography/Paragraph"
import Title3 from "./common/typography/Title3"
import SkillsBox from "./SkillsBox"

interface ExperienceBoxProps extends React.HtmlHTMLAttributes<HTMLElement> {
  experience: ExperienceUI
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({experience, className,...props}) => {
  return (
    <article className={clsx(
      'rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 space-y-8',
      className
    )} {...props}>
      <Title3 className="flex items-center">
        {experience.title}
      </Title3>
      <SkillsBox skills={experience.skills}/>
      <Paragraph>
        {experience.description}
      </Paragraph>
      <ExtLinkButton target={'_blank'} href={experience.companyUrl}>
        <Img alt={experience.company} className="rounded-full h-5 w-5 mr-2" src={experience.logo[0].url}/>{experience.company}
      </ExtLinkButton>
    </article>
  )
}

export default ExperienceBox