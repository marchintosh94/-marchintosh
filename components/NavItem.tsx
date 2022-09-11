import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router"

interface NavItemOptions {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemOptions> = ({href, children}) => {
  const active = useRouter().pathname == href

  return (
    <Link href={href}>
        <div className={clsx({
          "menu-item": true,
          "active": active
        })}>
          {children}
        </div>
    </Link>
  )
}

export default NavItem