import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExtLinkButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & {children: React.ReactNode}> = ({children, ...props}) => (
  <a {...props}>
    <div className="mt-4 mb-link w-fit flex items-center">
      {children}&nbsp;<FontAwesomeIcon icon={faArrowRight}/>
    </div>
  </a>
)

export default ExtLinkButton