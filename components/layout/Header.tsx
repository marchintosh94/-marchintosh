import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Disclosure } from "@headlessui/react"
import BarsIcon from "components/icons/BarsIcon"
import XmarkIcon from "components/icons/XmarkIcon"
import NavItem from "components/NavItem"

const Header = () => {
  const socialMobileIconClass = 'h-6 w-6'
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="logo-title block h-8 w-auto lg:hidden">
                      Marco <span>Baratto</span>
                  </div>
                  <div className="logo-title hidden h-8 w-auto lg:block">
                      Marco <span>Baratto</span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:flex space-x-10">
                <div className="flex items-center space-x-2">
                  <NavItem href="/">Home</NavItem>
                  <NavItem href="/projects">Projects</NavItem>
                  <NavItem href="/about-me">About</NavItem>
                </div>
                <div className="flex items-center space-x-2">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~marchintosh94" aria-label="npm marchintosh94" className={"toolbar-social-logo hover:text-[#c12127]"}>
                    <FontAwesomeIcon icon={['fab', 'npm']} />
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/marchintosh94/" aria-label="github marchintosh94" className={"toolbar-social-logo"}>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marchintosh94/" aria-label="linkedin marchintosh94" className={"toolbar-social-logo hover:text-[#0a66c2]"}>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/marchintosh94" aria-label="twitter marchintosh94" className={"toolbar-social-logo hover:text-[#1a8cd8]"}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/marco.baratto" aria-label="instagram marco.baratto" className={"toolbar-social-logo hover:text-[#d6249f]"}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XmarkIcon className="block h-6 w-6" aria-hidden="true"  />
                  ) : (
                    <BarsIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              
              <Disclosure.Button
                as="a"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                <NavItem href="/">Home</NavItem>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <NavItem href="/projects">Projects</NavItem>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <NavItem href="/about-me">About</NavItem>
              </Disclosure.Button>

            </div>
            <div className="border-t border-gray-700 pt-4 pb-3 px-5">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                 <img src={'/images/me.jpg'} className=" h-11 w-11 rounded-full" alt="Marco Baratto"/>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">Marco Baratto</div>
                  <div className="text-sm font-medium text-gray-400">aka @marchintosh94</div>
                </div>
              </div>
              <div className="mt-5 px-6 flex items-center justify-between ">
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~marchintosh94" aria-label="npm marchintosh94" className={"toolbar-social-logo hover:text-[#c12127]"}>
                  <FontAwesomeIcon icon={['fab', 'npm']} className={socialMobileIconClass}/>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/marchintosh94/" aria-label="github marchintosh94" className={"toolbar-social-logo"}>
                  <FontAwesomeIcon icon={['fab', 'github']} className={socialMobileIconClass} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marchintosh94/" aria-label="linkedin marchintosh94" className={"toolbar-social-logo hover:text-[#0a66c2]"}>
                  <FontAwesomeIcon icon={['fab', 'linkedin']} className={socialMobileIconClass} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/marchintosh94" aria-label="twitter marchintosh94" className={"toolbar-social-logo hover:text-[#1a8cd8]"}>
                  <FontAwesomeIcon icon={['fab', 'twitter']} className={socialMobileIconClass} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/marco.baratto" aria-label="instagram marco.baratto" className={"toolbar-social-logo hover:text-[#d6249f]"}>
                  <FontAwesomeIcon icon={['fab', 'instagram']} className={socialMobileIconClass} />
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Header