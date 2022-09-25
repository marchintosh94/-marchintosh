import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNpm, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


const SocialLinks: React.FC<React.HtmlHTMLAttributes<HTMLDivElement> & {iconClass?: string}> = ({className, iconClass, ...props}) => (
  <div className={`flex items-center space-x-2 ${className}`} {...props}>
    <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~marchintosh94" aria-label="npm marchintosh94" className={`toolbar-social-logo hover:text-[#c12127] ${iconClass}`}>
      <FontAwesomeIcon icon={faNpm} className={iconClass}/>
    </a>
    <a rel="noopener noreferrer" target="_blank" href="https://github.com/marchintosh94/" aria-label="github marchintosh94" className={`toolbar-social-logo ${iconClass}`}>
      <FontAwesomeIcon icon={faGithub} className={iconClass}/>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marchintosh94/" aria-label="linkedin marchintosh94" className={`toolbar-social-logo hover:text-[#0a66c2] ${iconClass}`}>
      <FontAwesomeIcon icon={faLinkedin} className={iconClass}/>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/marchintosh94" aria-label="twitter marchintosh94" className={`toolbar-social-logo hover:text-[#1a8cd8] ${iconClass}`}>
      <FontAwesomeIcon icon={faTwitter} className={iconClass}/>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/marco.baratto" aria-label="instagram marco.baratto" className={`toolbar-social-logo hover:text-[#d6249f] ${iconClass}`}>
      <FontAwesomeIcon icon={faInstagram} className={iconClass}/>
    </a>
  </div>
)

export default SocialLinks