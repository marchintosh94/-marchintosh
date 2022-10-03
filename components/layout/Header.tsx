import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Disclosure } from "@headlessui/react"
import BarsIcon from "components/icons/BarsIcon"
import XmarkIcon from "components/icons/XmarkIcon"
import NavItem from "components/NavItem"
import SocialLinks from "components/SocialLinks"
import { Pages } from "lib/utils"
import { 
  faLightbulb, 
  faLightbulbOn
} from '@fortawesome/pro-light-svg-icons'
import { useRouter } from "next/router"
import imgProfile from "../../assets/photos/marcobaratto.png"
import Img from "components/common/Img"

const Header = () => {
  const { push } = useRouter()
 
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 xl:px-0">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 ">
                    <div className="cursor-pointer" onClick={() => push(Pages.Home)}>
                      <img src={'/images/logo/mb_light.svg'} alt="Marco Baratto Logo" className="w-auto block h-16 rounded-ful dark:hidden"/>
                      <img src={'/images/logo/mb_dark.svg'} alt="Marco Baratto Logo" className="w-auto dark:inline-block h-16 rounded-ful hidden"/>
                    </div>
                </div>
              </div>

              <div onClick={toggleMode} className="flex items-center cursor-pointer rotate-180">
                <FontAwesomeIcon className="h-10 w-10 hidden dark:block " icon={faLightbulb}/>
                <FontAwesomeIcon className="h-10 w-10 dark:hidden block text-mb_accent" icon={faLightbulbOn}/>
              </div>

              <div className="hidden sm:ml-6 sm:flex space-x-10">
                <div className="flex items-center space-x-2">
                  <NavItem href={Pages.Home}>Home</NavItem>
                  <NavItem href={Pages.Projects}>Projects</NavItem>
                  <NavItem href={Pages.AboutMe}>About</NavItem>
                </div>
               <SocialLinks/>
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
              <Disclosure.Button
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <NavItem href="/">Home</NavItem>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <NavItem href="/projects">Projects</NavItem>
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <NavItem href="/about-me">About</NavItem>
              </Disclosure.Button>

            </div>
            <div className="border-t border-gray-700 pt-4 pb-3 px-5">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                 <Img src={imgProfile} className=" h-11 w-11 rounded-full" alt="Marco Baratto"/>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium dark:text-white">Marco Baratto</div>
                  <div className="text-sm font-medium dark:text-gray-400">aka @marchintosh94</div>
                </div>
              </div>
              <SocialLinks className="mt-5 px-6 justify-between" iconClass="w-7 h-7"/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Header