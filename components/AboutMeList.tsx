import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faYinYang, 
  faFaceZany, 
  faQuoteLeft,
  faQuoteRight
} from '@fortawesome/pro-light-svg-icons'
import Paragraph from "./common/typography/Paragraph"
import Subtitle from "./common/typography/Subtitle"

const AboutMeThings: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  const iconClass = "!h-52 w-52 rounded-full opacity-25"
  return (
    <ul role={'list'} className={`space-y-10 ${props.className}`}>
      <li className="py-4">
        <div className="flex flex-col space-y-10 sm:flex-row sm:items-center sm:space-x-10">
          <FontAwesomeIcon className={iconClass} icon={faYinYang} />
          <div className="sm:flex-1 space-y-1">
            <Subtitle className="text-sm font-semibold">Mantra:</Subtitle>
            
            <Paragraph className="text-sm">
              <sup>
                <FontAwesomeIcon className="!h-2 w-2" icon={faQuoteLeft} />
              </sup>
              &nbsp;Never Give Up&nbsp;
              <sup>
                <FontAwesomeIcon className="!h-2 w-2" icon={faQuoteRight} />
              </sup>
            </Paragraph>
            <Paragraph className="text-sm">
              <sup>
                <FontAwesomeIcon className="h-2 w-2" icon={faQuoteLeft} />
              </sup>&nbsp;
              I'm the type of person that if you ask me a question and I don't know the answer, I'm gonna tell you that I don't know, but you can bet I will find a solution.&nbsp;
              <sup>
                <FontAwesomeIcon className="h-2 w-2" icon={faQuoteRight} />
              </sup>
            </Paragraph>
          </div>
        </div>
      </li>

      <li className="py-4">
        <div className="flex flex-col space-y-10 sm:items-center sm:flex-row-reverse sm:space-x-reverse sm:space-x-20">
          <FontAwesomeIcon className={iconClass} icon={faFaceZany} />
          <div className="flex-1 flex flex-col sm:items-end space-y-1">
            <Subtitle className="text-sm font-semibold">Fun Fact:</Subtitle>

            <Paragraph className="text-sm">
              I'm used to have a walk and talk with myself when I have to resolve a problem
            </Paragraph>
          </div>
        </div>
      </li>
    </ul>
  )
}



export default AboutMeThings