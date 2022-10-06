import NavItem from "components/NavItem"
import SocialLinks from "components/SocialLinks"
import { Pages } from "models/types"
import Link from "next/link"

const Footer: React.FC<{pages: Pages[]}> = ({pages}) => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {pages.map(p => (
            <div key={p.title} className="px-5 py-2">
              <NavItem href={p.path}>
                {p.title}
              </NavItem>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center">
          <SocialLinks className="space-x-6" iconClass="h-6 w-6"/>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Marco Baratto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer