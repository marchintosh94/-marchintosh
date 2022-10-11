import clsx from "clsx";
import { Pages } from "lib/utils";
import Footer from "./Footer";
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({children, className}) => {
  const pages = [
    Pages.Home,
    Pages.Projects,
    Pages.AboutMe,
    Pages.Resume
  ]
  return (
    <>
      <Header pages={pages}/>
      <main className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
          <div className="mx-auto max-w-7xl ">
            <div className="relative">
              <div className={clsx("mx-auto", className)}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer pages={pages}/>
    </>
  )
}
export default Layout