import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => (
  <>
    <Header/>
    <main>
      <div className="sm:px-8 mt-20">
        {children}
      </div>
    </main>
  </>
)
export default Layout