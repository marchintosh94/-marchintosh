import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faYinYang, 
  faFaceZany, 
  faQuoteLeft,
  faQuoteRight
} from '@fortawesome/pro-light-svg-icons'

const AboutMeThings: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = (props) => (
  <ul role={'list'} className={`mb-divide ${props.className}`}>
    <li className="py-4">
      <div className="flex space-x-3">
        <FontAwesomeIcon className="h-6 w-6 rounded-full" icon={faYinYang} />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Mantra:</h3>
          </div>
          <p className="text-sm">
            <sup>
              <FontAwesomeIcon className="h-2 w-2" icon={faQuoteLeft} />
            </sup>
            &nbsp;Never Give Up&nbsp;
            <sup>
              <FontAwesomeIcon className="h-2 w-2" icon={faQuoteRight} />
            </sup>
          </p>
          <p className="text-sm">
            <sup>
              <FontAwesomeIcon className="h-2 w-2" icon={faQuoteLeft} />
            </sup>&nbsp;
            I'm the type of person that if you ask me a question and I don't know the answer, I'm gonna tell you that I don't know, but you can bet I will find a solution.&nbsp;
            <sup>
              <FontAwesomeIcon className="h-2 w-2" icon={faQuoteRight} />
            </sup>
          </p>
        </div>
      </div>
    </li>
    <li className="py-4">
      <div className="flex space-x-3">
        <FontAwesomeIcon className="h-6 w-6 rounded-full" icon={faFaceZany} />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Fun Fact:</h3>
          </div>
          <p className="text-sm">
            I'm used to have a walk and talk with myself when I have to resolve a problem
          </p>
        </div>
      </div>
    </li>
  </ul>
)

export default AboutMeThings