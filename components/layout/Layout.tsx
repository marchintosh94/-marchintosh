import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => (
  <>
    <Header/>
    <main>
      <div className="px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20">
        <div className="mx-auto max-w-7xl ">
          <div className="relative">
            <div className="mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
)
export default Layout