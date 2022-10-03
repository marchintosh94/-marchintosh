import clsx from "clsx";

const Badge: React.FC<React.HtmlHTMLAttributes<HTMLSpanElement>> = ({children, className, ...props}) => (
  <span className={clsx(
    'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
    className
  )} {...props}>{children}</span>
)

export default Badge