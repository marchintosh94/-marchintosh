import clsx from "clsx";
import { SkillUI } from "models/types";
import Image from "next/image";
import Badge from "./common/Badge";

interface SkillsBoxProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  skills: SkillUI[];
  badgeClass?: string;
}

const SkillsBox: React.FC<SkillsBoxProps> = ({skills, className, badgeClass, ...props}) => (
  <ul role={'list'} className={clsx(
    "grid grid-flow-col auto-cols-max gap-x-2",
    className
  )}>
    {
      skills.map(s => (
        <Badge title={s.title} aria-label={s.title} className={`items-center justify-center bg-mb_dark/5 dark:bg-mb_light/30 duration-500 cursor-pointer hover:scale-110 ${badgeClass}`} onClick={() => window.open(s.url)} key={s.id}>
          <Image alt={s.title} src={s.logo[0].url} width={24} height={24}/>
        </Badge>
      ))
    }
  </ul>
)

export default SkillsBox